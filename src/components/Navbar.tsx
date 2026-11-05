import React, { useState } from 'react';
import { 
  Compass, 
  MapPin, 
  Sparkles, 
  Heart, 
  Bookmark, 
  Menu, 
  X, 
  ChevronDown,
  Bot,
  UtensilsCrossed,
  Gem,
  Languages,
  Check
} from 'lucide-react';
import { LanguageCode } from '../types';
import { SUPPORTED_LANGUAGES, t } from '../utils/i18n';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, stateFilter?: string) => void;
  selectedLanguage: LanguageCode;
  onSelectLanguage: (lang: LanguageCode) => void;
  savedFavCount: number;
  savedItinCount: number;
  onOpenSaved: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  selectedLanguage,
  onSelectLanguage,
  savedFavCount,
  savedItinCount,
  onOpenSaved,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const currentLangObj = SUPPORTED_LANGUAGES.find((l) => l.code === selectedLanguage) || SUPPORTED_LANGUAGES[0];

  const navItems = [
    { id: 'home', labelKey: 'navHome', icon: Compass },
    { id: 'states', labelKey: 'navStates', icon: MapPin },
    { id: 'hidden-gems', labelKey: 'navHiddenGems', icon: Gem },
    { id: 'trip-planner', labelKey: 'navPlanner', icon: Sparkles, badge: 'AI' },
    { id: 'food', labelKey: 'navFood', icon: UtensilsCrossed },
    { id: 'local-culture', labelKey: 'navCulture', icon: Sparkles },
    { id: 'ai-guide', labelKey: 'navGuide', icon: Bot, badge: 'Live' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const handleLangChange = (code: LanguageCode) => {
    onSelectLanguage(code);
    setLangDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E7DFD3] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Tagline */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
          >
            {/* Travel Compass Logo */}
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1B4332] via-[#245640] to-[#12281E] flex items-center justify-center text-amber-300 shadow-md group-hover:scale-105 transition-transform border border-amber-300/30">
              <div className="relative flex items-center justify-center">
                <Compass className="w-7 h-7 stroke-[2.2] animate-spin-slow" />
                <span className="absolute w-2 h-2 rounded-full bg-[#D96B43] shadow-xs" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tight text-[#143224]">
                  RAHI
                </span>
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#D96B43]">
                  राही
                </span>
                <span className="text-[10px] tracking-wider uppercase font-bold px-2 py-0.5 rounded-full bg-[#FAF1EC] text-[#D96B43] border border-[#F0D5C9]">
                  India
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#55695E] font-medium hidden sm:block">
                {t('brandTagline', selectedLanguage)}
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer relative ${
                    isActive
                      ? 'text-[#1B4332] bg-[#EBE3D5] font-bold shadow-2xs'
                      : 'text-[#3E5246] hover:text-[#143224] hover:bg-[#F2ECE1]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#1B4332]' : 'text-[#6B7D72]'}`} />
                  <span>{t(item.labelKey, selectedLanguage)}</span>
                  {item.badge && (
                    <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-[#D96B43] text-white">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Controls Cluster */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Multilingual Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-[#F2EBE0] text-[#1B4332] border border-[#DDD3C3] hover:border-[#BCAE96] transition-all cursor-pointer shadow-2xs"
                title="Change Language"
              >
                <Languages className="w-4 h-4 text-[#D96B43]" />
                <span className="text-sm">{currentLangObj.flag}</span>
                <span className="font-medium hidden sm:inline">{currentLangObj.nativeName}</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#6B7D72]" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white shadow-2xl border border-[#E7DFD3] py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#7A8B80] border-b border-[#F0EBE1] flex items-center justify-between">
                    <span>Select Language</span>
                    <span className="text-[10px] text-[#B8502B]">10 Languages</span>
                  </div>

                  <div className="max-h-80 overflow-y-auto py-1">
                    {SUPPORTED_LANGUAGES.map((lang) => {
                      const isSelected = selectedLanguage === lang.code;
                      return (
                        <button
                          key={lang.code}
                          onClick={() => handleLangChange(lang.code)}
                          className={`w-full text-left px-3.5 py-2 flex items-center justify-between text-xs transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-[#FAF2EC] text-[#D96B43] font-bold'
                              : 'text-[#143224] hover:bg-[#FAF6F0]'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="text-base">{lang.flag}</span>
                            <div>
                              <div className="font-semibold">{lang.nativeName}</div>
                              <div className="text-[10px] text-[#7A8B80]">{lang.label}</div>
                            </div>
                          </div>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#D96B43]" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Saved Drawer Trigger Button */}
            <button
              onClick={onOpenSaved}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-white border border-[#DDD3C3] text-[#1B4332] hover:bg-[#F8F5EE] hover:border-[#BCAE96] transition-all cursor-pointer relative shadow-2xs"
              title="Saved Favourites & Itineraries"
            >
              <Heart className="w-4 h-4 text-[#D96B43]" />
              <span className="hidden sm:inline">{t('navSaved', selectedLanguage)}</span>
              {(savedFavCount > 0 || savedItinCount > 0) && (
                <span className="w-5 h-5 rounded-full bg-[#D96B43] text-white text-[10px] font-bold flex items-center justify-center">
                  {savedFavCount + savedItinCount}
                </span>
              )}
            </button>

            {/* AI Guide Quick Launch Button */}
            <button
              onClick={() => handleNavClick('ai-guide')}
              className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#1B4332] hover:bg-[#143224] text-amber-200 shadow-sm transition-all cursor-pointer hover:shadow"
            >
              <Bot className="w-4 h-4 text-amber-300" />
              <span>{t('btnAskGuide', selectedLanguage)}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-[#1B4332] hover:bg-[#EBE3D5] focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FAF7F2] border-b border-[#E7DFD3] px-4 pt-2 pb-6 space-y-1 animate-in slide-in-from-top-2 duration-200">
          <div className="py-2 mb-2 border-b border-[#E7DFD3] flex items-center justify-between">
            <span className="text-xs font-bold text-[#55695E] uppercase tracking-wider">
              {t('brandName', selectedLanguage)} • {t('brandTagline', selectedLanguage)}
            </span>
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#1B4332] bg-[#EBE3D5] font-bold'
                    : 'text-[#3E5246] hover:bg-[#F2ECE1]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4 text-[#1B4332]" />
                  <span>{t(item.labelKey, selectedLanguage)}</span>
                </div>
                {item.badge && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#D96B43] text-white">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}

          <div className="pt-3 border-t border-[#E7DFD3] flex items-center justify-between gap-2">
            <button
              onClick={() => handleNavClick('states')}
              className="flex-1 py-2.5 rounded-xl bg-white border border-[#DDD3C3] text-xs font-bold text-[#143224] text-center"
            >
              {t('btnExploreNow', selectedLanguage)}
            </button>
            <button
              onClick={() => handleNavClick('trip-planner')}
              className="flex-1 py-2.5 rounded-xl bg-[#D96B43] text-white text-xs font-bold text-center"
            >
              {t('btnPlanAI', selectedLanguage)}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
