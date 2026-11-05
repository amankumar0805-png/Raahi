import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Send, 
  Sparkles, 
  RotateCcw, 
  MapPin, 
  ArrowRight, 
  Info, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Compass,
  X
} from 'lucide-react';
import { ChatMessage, Destination, LanguageCode } from '../types';
import { INDIAN_STATES } from '../data/states';
import { t } from '../utils/i18n';

interface AIGuideChatProps {
  selectedLanguage: LanguageCode;
  initialState?: string;
  initialQuery?: string;
  onOpenDestinationByName: (name: string) => void;
  isFloating?: boolean;
  onCloseFloating?: () => void;
}

export const AIGuideChat: React.FC<AIGuideChatProps> = ({
  selectedLanguage,
  initialState = 'bihar',
  initialQuery,
  onOpenDestinationByName,
  isFloating = false,
  onCloseFloating,
}) => {
  const [activeState, setActiveState] = useState(initialState);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const welcomeContent = selectedLanguage === 'hi'
    ? `नमस्ते! मैं **राही AI** हूँ – आपका व्यक्तिगत भारतीय यात्रा साथी। मेरे पास भारत के हर राज्य, प्रसिद्ध स्मारकों, छिपे हुए झरनों, पारंपरिक स्वादों और सटीक यात्रा मार्गों की प्रामाणिक जानकारी है।\n\nआज आपकी यात्रा की क्या योजना है?`
    : `Namaste! I am **RAHI AI**, your personal Indian travel companion. I specialize in authentic heritage, hidden gems, signature regional food, and accurate itineraries across India.\n\nWhere would you like to travel today?`;

  const initialPrompts = selectedLanguage === 'hi'
    ? [
        'बिहार के प्रमुख छिपे हुए झरने कौन से हैं?',
        'नालंदा विश्वविद्यालय का वास्तविक इतिहास क्या है?',
        'हरियाणा में पारंपरिक बाजरा रोटी और चूरमा कहाँ मिलता है?',
        'अमृतसर स्वर्ण मंदिर जाने का सही समय और नियम?',
        'कश्मीर की शांत ऑफबीट वादियां कौन सी हैं?',
        'बोधगया में 2 दिन का बजट यात्रा कार्यक्रम बताएं',
      ]
    : [
        'What are the best hidden gems in Bihar?',
        'Tell me the authentic history of Nalanda University',
        'Where can I try traditional Bajra Roti in Haryana?',
        'What is the best 2-day route for Amritsar?',
        'Suggest peaceful offbeat valleys in Kashmir',
        'How to plan a budget trip to Bodh Gaya?',
      ];

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      role: 'assistant',
      content: welcomeContent,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestedPrompts: initialPrompts,
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    if (initialQuery && initialQuery.trim().length > 0) {
      sendMessage(initialQuery);
    }
  }, [initialQuery]);

  const sendMessage = async (textToSend: string) => {
    const text = textToSend.trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: messages.slice(-5),
          contextState: activeState,
          language: selectedLanguage, // Passes active language to server-side Gemini prompt
        }),
      });

      if (!response.ok) {
        throw new Error(`Chat error status ${response.status}`);
      }

      const data = await response.json();

      const assistantMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        role: 'assistant',
        content: data.reply || (selectedLanguage === 'hi' ? 'मैं भारत के पर्यटन स्थलों की प्रामाणिक जानकारी साझा करने के लिए तैयार हूँ।' : 'I am ready to share authentic details about Indian destinations.'),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        recommendedPlaces: data.recommendedPlaces || [],
        suggestedPrompts: data.suggestedPrompts || [],
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error('Chat failed:', err);
      const fallbackMsg: ChatMessage = {
        id: `ai-err-${Date.now()}`,
        role: 'assistant',
        content: selectedLanguage === 'hi' 
          ? `सर्वर से संपर्क में क्षणिक विलंब हुआ। आप ऐप में राज्य, मंदिर और छिपे हुए खजाने सीधे देख सकते हैं!`
          : `I experienced a temporary connection hiccup with the live model. You can explore verified destinations directly from the **Explore States** and **Hidden Gems** sections anytime!`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: 'assistant',
        content: welcomeContent,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedPrompts: initialPrompts,
      },
    ]);
  };

  const renderFormattedContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, idx) => {
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const renderedLine = parts.map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={pIdx} className="font-bold text-[#143224]">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith('*') && part.endsWith('*')) {
          return (
            <em key={pIdx} className="italic text-[#8F3B1A]">
              {part.slice(1, -1)}
            </em>
          );
        }
        return part;
      });

      if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
        return (
          <div key={idx} className="flex items-start gap-2 my-1 pl-1">
            <span className="text-[#D96B43] font-bold text-xs mt-1">•</span>
            <span className="flex-1">{renderedLine}</span>
          </div>
        );
      }

      if (line.trim() === '') {
        return <div key={idx} className="h-2" />;
      }

      return (
        <p key={idx} className="my-1 leading-relaxed">
          {renderedLine}
        </p>
      );
    });
  };

  return (
    <div className={isFloating ? "w-full h-full flex flex-col" : "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"}>
      <div className={`bg-white rounded-3xl border border-[#E7DFD3] shadow-xl overflow-hidden flex flex-col ${
        isFloating ? "h-full border-none shadow-none rounded-none sm:rounded-3xl" : "h-[78vh] max-h-[820px]"
      }`}>
        
        {/* Chat Header */}
        <div className="p-4 sm:p-5 bg-[#FAF7F2] border-b border-[#E7DFD3] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-[#1B4332] to-[#2D6A4F] flex items-center justify-center text-amber-200 shadow-sm shrink-0">
              <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-serif text-base sm:text-lg font-bold text-[#143224]">
                  {t(selectedLanguage, 'chatTitle', 'RAHI – Your AI Travel Companion')}
                </h2>
                <span className="hidden sm:flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  Gemini Active
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#55695E]">
                {t(selectedLanguage, 'chatSubtitle', 'Live verified Indian tourism intelligence')}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Context State Picker */}
            <select
              value={activeState}
              onChange={(e) => setActiveState(e.target.value)}
              className="bg-white border border-[#DDD3C3] text-xs font-bold text-[#143224] rounded-xl px-2.5 py-1.5 focus:outline-none cursor-pointer max-w-[130px] sm:max-w-[160px]"
            >
              <option value="bihar">Bihar</option>
              <option value="haryana">Haryana</option>
              <option value="punjab">Punjab</option>
              <option value="delhi">Delhi</option>
              <option value="kashmir">Kashmir</option>
              <option value="rajasthan">Rajasthan</option>
              <option value="bengal">West Bengal</option>
              <option value="kerala">Kerala</option>
              <option value="all">All India</option>
            </select>

            <button
              type="button"
              onClick={handleResetChat}
              className="p-2 rounded-xl text-[#55695E] hover:bg-[#EBE3D5] transition-colors cursor-pointer"
              title="Reset Chat"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {isFloating && onCloseFloating && (
              <button
                type="button"
                onClick={onCloseFloating}
                className="p-2 rounded-xl text-[#55695E] hover:bg-stone-200 transition-colors cursor-pointer"
                title="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Message Stream */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 bg-[#FAF7F2]/50">
          {messages.map((msg) => {
            const isUser = msg.role === 'user';
            return (
              <div
                key={msg.id}
                className={`flex gap-3 max-w-[90%] sm:max-w-[85%] ${isUser ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}
              >
                {/* Avatar */}
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold shadow-2xs ${
                    isUser
                      ? 'bg-[#D96B43] text-white'
                      : 'bg-[#1B4332] text-amber-200'
                  }`}
                >
                  {isUser ? 'You' : <Bot className="w-4 h-4" />}
                </div>

                {/* Bubble */}
                <div className="space-y-2">
                  <div
                    className={`rounded-2xl p-4 text-xs sm:text-sm leading-relaxed shadow-2xs ${
                      isUser
                        ? 'bg-[#1B4332] text-amber-50 rounded-tr-none'
                        : 'bg-white text-[#3E5246] border border-[#E7DFD3] rounded-tl-none'
                    }`}
                  >
                    {renderFormattedContent(msg.content)}

                    <div
                      className={`text-[10px] mt-2 font-mono text-right ${
                        isUser ? 'text-emerald-200' : 'text-[#9AA8A0]'
                      }`}
                    >
                      {msg.timestamp}
                    </div>
                  </div>

                  {/* Clickable Destination Chips */}
                  {msg.recommendedPlaces && msg.recommendedPlaces.length > 0 && (
                    <div className="flex items-center gap-1.5 flex-wrap pt-1 pl-1">
                      <span className="text-[10px] uppercase font-bold text-[#7A8B80]">
                        {t(selectedLanguage, 'matchedDestinations', 'Matched Destinations')}:
                      </span>
                      {msg.recommendedPlaces.map((placeName) => (
                        <button
                          key={placeName}
                          type="button"
                          onClick={() => onOpenDestinationByName(placeName)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-[#DDD3C3] text-[11px] font-bold text-[#1B4332] hover:border-[#D96B43] hover:text-[#D96B43] shadow-2xs transition-all cursor-pointer"
                        >
                          <MapPin className="w-3 h-3 text-[#D96B43]" />
                          <span>{placeName}</span>
                          <ArrowRight className="w-2.5 h-2.5 opacity-60" />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Suggested Follow-up Prompts */}
                  {msg.suggestedPrompts && msg.suggestedPrompts.length > 0 && (
                    <div className="space-y-1.5 pt-2 pl-1">
                      <span className="text-[10px] uppercase font-bold text-[#7A8B80]">
                        {t(selectedLanguage, 'suggestedQuestions', 'Suggested Questions')}:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {msg.suggestedPrompts.map((promptText, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => sendMessage(promptText)}
                            className="text-left text-xs px-3 py-1.5 rounded-xl bg-[#FAF2EC] hover:bg-[#F5E5DC] text-[#8F3B1A] border border-[#F0D5C9] font-medium transition-all cursor-pointer shadow-2xs"
                          >
                            {promptText}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {isLoading && (
            <div className="flex gap-3 max-w-[85%] mr-auto items-center">
              <div className="w-8 h-8 rounded-xl bg-[#1B4332] text-amber-200 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 animate-spin" />
              </div>
              <div className="bg-white rounded-2xl p-3.5 border border-[#E7DFD3] text-xs text-[#55695E] flex items-center gap-2 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#D96B43] animate-ping" />
                <span>RAHI Guide is consulting verified Indian heritage & travel intelligence...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-white border-t border-[#E7DFD3]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(inputMessage);
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder={t(selectedLanguage, 'chatPlaceholder', 'Ask about any monument, hidden gem, or authentic food...')}
              className="flex-1 px-4 py-3 rounded-2xl bg-[#FAF7F2] border border-[#DDD3C3] text-xs sm:text-sm text-[#143224] placeholder:text-[#9AA8A0] focus:outline-none focus:ring-2 focus:ring-[#D96B43]/30"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !inputMessage.trim()}
              className={`p-3 rounded-2xl font-bold transition-all flex items-center justify-center cursor-pointer shadow-xs ${
                isLoading || !inputMessage.trim()
                  ? 'bg-[#E5DFD4] text-[#A69E92] cursor-not-allowed'
                  : 'bg-[#1B4332] text-amber-100 hover:bg-[#143224] hover:shadow-md'
              }`}
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-2 text-[10px] sm:text-[11px] text-[#7A8B80] flex items-center justify-between px-1">
            <span>Powered by Gemini AI • Grounded in Indian local culture</span>
            <span className="capitalize">{activeState} Focus</span>
          </div>
        </div>
      </div>
    </div>
  );
};
