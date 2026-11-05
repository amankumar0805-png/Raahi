import React, { useState, useEffect } from 'react';
import { 
  Search, 
  MapPin, 
  Sparkles, 
  ArrowRight, 
  Compass, 
  CalendarDays,
  Bot
} from 'lucide-react';
import { LanguageCode } from '../types';
import { t } from '../utils/i18n';
import { INDIAN_STATES } from '../data/states';

interface HeroProps {
  selectedLanguage: LanguageCode;
  onSearch: (query: string, state: string) => void;
  onExploreState: (state: string) => void;
  onLaunchPlanner: (state?: string) => void;
  onLaunchGuide: () => void;
  onExploreAll: () => void;
}

const WELCOME_MESSAGES = [
  { text: 'स्वागतम् 🇮🇳', lang: 'hi', font: 'font-serif' },
  { text: 'WELCOME TO RAHI', lang: 'en', font: 'font-sans tracking-widest' },
  { text: 'भारत में आपका स्वागत है', lang: 'hi', font: 'font-serif' },
  { text: 'YOUR JOURNEY STARTS HERE', lang: 'en', font: 'font-sans tracking-widest' },
];

export const Hero: React.FC<HeroProps> = ({
  selectedLanguage,
  onSearch,
  onExploreState,
  onLaunchPlanner,
  onLaunchGuide,
  onExploreAll,
}) => {
  const [welcomeIndex, setWelcomeIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('all');

  // Automatic 2.5s cycle for the welcome messages with smooth fade & slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setWelcomeIndex((prev) => (prev + 1) % WELCOME_MESSAGES.length);
        setIsFading(false);
      }, 400); // 400ms transition time
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery, selectedState);
  };

  const currentWelcome = WELCOME_MESSAGES[welcomeIndex];

  return (
    <div className="relative overflow-hidden bg-[#FAF7F2] border-b border-[#E7DFD3]">
      {/* Subtle organic ambient gradients */}
      <div className="absolute top-0 right-0 -mr-28 -mt-28 w-[450px] h-[450px] rounded-full bg-[#D96B43]/8 filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-28 -mb-28 w-[450px] h-[450px] rounded-full bg-[#1B4332]/8 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-16 sm:pb-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* SPECIAL ANIMATED WELCOME BANNER */}
          <div className="inline-flex items-center justify-center min-h-[44px]">
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#FAF1EC] border border-[#F0D5C9] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#D96B43] animate-pulse shrink-0" />
              <div 
                className={`transition-all duration-400 transform ${
                  isFading 
                    ? 'opacity-0 -translate-y-1.5 filter blur-[1px]' 
                    : 'opacity-100 translate-y-0 filter-none'
                }`}
              >
                <span className={`text-xs sm:text-sm font-semibold text-[#D96B43] ${currentWelcome.font}`}>
                  {currentWelcome.text}
                </span>
              </div>
              <Compass className="w-3.5 h-3.5 text-[#D96B43] ml-1 shrink-0" />
            </div>
          </div>

          {/* MAIN HERO HEADINGS */}
          <div className="space-y-3">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#143224] leading-[1.12]">
              {selectedLanguage === 'hi' 
                ? 'आइए, भारत को नए अंदाज़ में जानें।' 
                : t(selectedLanguage, 'heroMainTitle', 'India Is Waiting to Be Explored.')}
            </h1>
            
            {/* Tagline pill */}
            <p className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-[#D96B43]">
              {t(selectedLanguage, 'brandTagline', 'Every Journey Has a Story.')}
            </p>
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg text-[#55695E] max-w-2xl mx-auto leading-relaxed font-normal">
            {t(selectedLanguage, 'heroSubtitle', 'Discover hidden destinations, taste local flavours, explore rich heritage and experience the real beauty of India.')}
          </p>

          {/* TWO PROMINENT ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={onExploreAll}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-[#1B4332] hover:bg-[#143224] text-[#FAF7F2] text-sm sm:text-base font-bold transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>{t(selectedLanguage, 'btnExploreNow', 'Explore India')}</span>
              <ArrowRight className="w-4 h-4 text-amber-300 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              onClick={() => onLaunchPlanner()}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-[#D96B43] hover:bg-[#C25832] text-white text-sm sm:text-base font-bold transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer group"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>{t(selectedLanguage, 'btnPlanAI', 'Plan My Journey with AI')}</span>
            </button>
          </div>

          {/* UNIFIED SEARCH & STATE DROPDOWN BAR */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-2 sm:p-2.5 rounded-3xl border border-[#DDD3C3] shadow-lg max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-2 mt-4"
          >
            {/* State Dropdown */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-[#FAF7F2] border border-[#E7DFD3] w-full sm:w-auto shrink-0">
              <MapPin className="w-4 h-4 text-[#D96B43] shrink-0" />
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="bg-transparent text-xs sm:text-sm font-semibold text-[#143224] focus:outline-none cursor-pointer pr-2 max-w-[180px] sm:max-w-[200px]"
              >
                <option value="all">All India States</option>
                <optgroup label="Priority States">
                  <option value="bihar">Bihar (13 Destinations)</option>
                  <option value="haryana">Haryana (9 Destinations)</option>
                </optgroup>
                <optgroup label="All Other States">
                  {INDIAN_STATES.filter(s => s.id !== 'bihar' && s.id !== 'haryana').map((st) => (
                    <option key={st.id} value={st.id}>
                      {st.name} ({st.destinationsCount} spots)
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>

            {/* Keyword Input */}
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-[#7A8B80] absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t(selectedLanguage, 'searchPlaceholder', 'Search destinations, states, monuments, or traditional foods...')}
                className="w-full pl-10 pr-3 py-2.5 rounded-2xl text-xs sm:text-sm text-[#143224] placeholder:text-[#9AA8A0] focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-[#1B4332] hover:bg-[#143224] text-amber-100 text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>{t(selectedLanguage, 'btnExploreNow', 'Search')}</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </button>
          </form>

          {/* Quick State Focus Pills */}
          <div className="flex items-center justify-center gap-2.5 pt-2 flex-wrap">
            <span className="text-xs font-semibold text-[#7A8B80] mr-1">
              Popular Focus:
            </span>
            <button
              type="button"
              onClick={() => onExploreState('bihar')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white hover:bg-[#FAF2EC] border border-[#DDD3C3] text-xs font-bold text-[#143224] hover:text-[#D96B43] hover:border-[#D96B43] shadow-2xs transition-all cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-[#D96B43]" />
              <span>Bihar</span>
              <span className="text-[10px] text-[#7A8B80] font-normal">Nalanda & Bodh Gaya</span>
            </button>

            <button
              type="button"
              onClick={() => onExploreState('haryana')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white hover:bg-[#EBF3EE] border border-[#DDD3C3] text-xs font-bold text-[#143224] hover:text-[#1B4332] hover:border-[#1B4332] shadow-2xs transition-all cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-[#1B4332]" />
              <span>Haryana</span>
              <span className="text-[10px] text-[#7A8B80] font-normal">Kurukshetra & Morni</span>
            </button>

            <button
              type="button"
              onClick={() => onExploreState('punjab')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white hover:bg-amber-50 border border-[#DDD3C3] text-xs font-bold text-[#143224] hover:text-amber-800 hover:border-amber-400 shadow-2xs transition-all cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-amber-600" />
              <span>Punjab</span>
              <span className="text-[10px] text-[#7A8B80] font-normal">Golden Temple</span>
            </button>

            <button
              type="button"
              onClick={() => onExploreState('delhi')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white hover:bg-rose-50 border border-[#DDD3C3] text-xs font-bold text-[#143224] hover:text-rose-800 hover:border-rose-400 shadow-2xs transition-all cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-rose-600" />
              <span>Delhi</span>
              <span className="text-[10px] text-[#7A8B80] font-normal">Qutub & Red Fort</span>
            </button>

            <button
              type="button"
              onClick={() => onExploreState('kashmir')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white hover:bg-sky-50 border border-[#DDD3C3] text-xs font-bold text-[#143224] hover:text-sky-800 hover:border-sky-400 shadow-2xs transition-all cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-sky-600" />
              <span>Kashmir</span>
              <span className="text-[10px] text-[#7A8B80] font-normal">Dal Lake</span>
            </button>
          </div>

          {/* RAHI TRUST METRICS */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-[#E7DFD3] text-left">
            <div className="p-2">
              <div className="font-serif text-2xl font-bold text-[#143224]">28+ States</div>
              <div className="text-xs text-[#6B7D72]">Verified Pan-India Coverage</div>
            </div>
            <div className="p-2">
              <div className="font-serif text-2xl font-bold text-[#D96B43]">10 Languages</div>
              <div className="text-xs text-[#6B7D72]">Multilingual Travel Support</div>
            </div>
            <div className="p-2">
              <div className="font-serif text-2xl font-bold text-[#2D6A4F]">100% Real</div>
              <div className="text-xs text-[#6B7D72]">Verified Heritage & Local Food</div>
            </div>
            <div className="p-2">
              <div className="font-serif text-2xl font-bold text-[#B8502B]">Gemini AI</div>
              <div className="text-xs text-[#6B7D72]">Personalized Smart Companion</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
