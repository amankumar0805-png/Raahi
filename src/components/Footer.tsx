import React from 'react';
import { Compass, Sparkles, MapPin, Heart, Shield, Bot } from 'lucide-react';
import { LanguageCode } from '../types';
import { t } from '../utils/i18n';

interface FooterProps {
  selectedLanguage: LanguageCode;
  onNavigate: (view: string, stateFilter?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ selectedLanguage, onNavigate }) => {
  return (
    <footer className="bg-[#12281E] text-stone-300 border-t border-[#1B4332] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2D6A4F] to-[#1B4332] flex items-center justify-center text-amber-200 shadow-md">
                <Compass className="w-6 h-6 animate-spin-slow" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                <span>RAHI</span>
                <span className="text-[#D96B43] font-serif text-xl">– राही</span>
              </span>
            </div>

            <p className="font-serif italic text-amber-200 text-sm">
              "{t(selectedLanguage, 'brandTagline', 'Every Journey Has a Story.')}"
            </p>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              {t(selectedLanguage, 'footerDescription', 'RAHI – राही is an intelligent Indian tourism platform dedicated to helping travelers explore beyond the famous and experience authentic Indian destinations, food, and culture.')}
            </p>

            <div className="pt-2 flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-white/10 text-amber-300 border border-white/15">
                Priority: Bihar & Haryana
              </span>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#D96B43]/20 text-[#D96B43] border border-[#D96B43]/30">
                Pan-India Architecture
              </span>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-emerald-900/40 text-emerald-300 border border-emerald-500/30">
                10 Indian Languages
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-white tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-amber-200 transition-colors cursor-pointer text-left"
                >
                  {t(selectedLanguage, 'navHome', 'Home Overview')}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('states')}
                  className="hover:text-amber-200 transition-colors cursor-pointer text-left"
                >
                  {t(selectedLanguage, 'navStates', 'Explore States')}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('state-detail', 'bihar')}
                  className="hover:text-amber-200 transition-colors cursor-pointer text-left"
                >
                  Bihar In-Depth (Nalanda & Bodh Gaya)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('state-detail', 'haryana')}
                  className="hover:text-amber-200 transition-colors cursor-pointer text-left"
                >
                  Haryana In-Depth (Kurukshetra & Morni)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('hidden-gems')}
                  className="hover:text-amber-200 transition-colors cursor-pointer text-left"
                >
                  {t(selectedLanguage, 'navHiddenGems', 'Hidden India – भारत के अनदेखे ख़ज़ाने')}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('food')}
                  className="hover:text-amber-200 transition-colors cursor-pointer text-left"
                >
                  {t(selectedLanguage, 'navFood', 'India on a Plate – स्वाद भारत का')}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('trip-planner')}
                  className="hover:text-amber-200 transition-colors cursor-pointer text-left"
                >
                  {t(selectedLanguage, 'navPlanner', 'AI Smart Trip Planner')}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('ai-guide')}
                  className="hover:text-amber-200 transition-colors cursor-pointer text-left"
                >
                  {t(selectedLanguage, 'navGuide', 'RAHI AI Guide')}
                </button>
              </li>
            </ul>
          </div>

          {/* Architecture & AI Transparency */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-base font-bold text-white tracking-wide">
              Intelligence & Reliability
            </h4>
            <div className="bg-[#18392B] p-4 rounded-2xl border border-[#23503D] space-y-2 text-xs text-stone-300">
              <div className="flex items-center gap-1.5 text-amber-300 font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Powered by Server-Side Gemini AI</span>
              </div>
              <p className="leading-relaxed">
                Requests are handled securely server-side without exposing API keys to the browser. Validated against authentic geographic circuits and regional culinary traditions.
              </p>
            </div>

            <div className="text-[11px] text-stone-400 space-y-1">
              <p>✓ 100% verified real destinations, coordinates & connectivity</p>
              <p>✓ Realistic road distances preventing criss-cross itineraries</p>
              <p>✓ Native multilingual support with persistent language preference</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1B4332] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            {t(selectedLanguage, 'footerCopyright', '© RAHI – राही. Every Journey Has a Story.')}
          </div>
          <div className="flex items-center gap-4">
            <span className="text-stone-300">Explore Beyond the Famous. Discover the Real India.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
