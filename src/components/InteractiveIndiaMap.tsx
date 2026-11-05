import React, { useState } from 'react';
import { 
  MapPin, 
  Sparkles, 
  ArrowRight, 
  Compass, 
  UtensilsCrossed, 
  Eye, 
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { IndianState, LanguageCode, StateRegion } from '../types';
import { INDIAN_STATES } from '../data/states';
import { t } from '../utils/i18n';

interface InteractiveIndiaMapProps {
  selectedLanguage: LanguageCode;
  onSelectState: (stateId: string) => void;
  onPlanTrip: (stateId: string) => void;
}

interface RegionMeta {
  key: StateRegion;
  label: string;
  hindiLabel: string;
  color: string;
  accent: string;
}

const REGIONS: RegionMeta[] = [
  { key: 'north', label: 'North India', hindiLabel: 'उत्तर भारत', color: '#1B4332', accent: '#D8F3DC' },
  { key: 'south', label: 'South India', hindiLabel: 'दक्षिण भारत', color: '#2D6A4F', accent: '#D8F3DC' },
  { key: 'east', label: 'East India', hindiLabel: 'पूर्व भारत', color: '#B8502B', accent: '#FCEBE6' },
  { key: 'west', label: 'West India', hindiLabel: 'पश्चिम भारत', color: '#D96B43', accent: '#FAF1EC' },
  { key: 'central', label: 'Central India', hindiLabel: 'मध्य भारत', color: '#744210', accent: '#FEFCBF' },
  { key: 'northeast', label: 'Northeast India', hindiLabel: 'पूर्वोत्तर भारत', color: '#276749', accent: '#C6F6D5' },
];

export const InteractiveIndiaMap: React.FC<InteractiveIndiaMapProps> = ({
  selectedLanguage,
  onSelectState,
  onPlanTrip,
}) => {
  const [activeRegion, setActiveRegion] = useState<StateRegion | 'all'>('all');
  const [selectedStateId, setSelectedStateId] = useState<string>('bihar');

  const filteredStates = activeRegion === 'all' 
    ? INDIAN_STATES 
    : INDIAN_STATES.filter(s => s.region === activeRegion);

  const currentState = INDIAN_STATES.find(s => s.id === selectedStateId) || INDIAN_STATES[0];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#E7DFD3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF1EC] border border-[#F0D5C9] text-[#D96B43] text-xs font-bold tracking-wide mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Pan-India Discovery</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#143224] tracking-tight">
            Explore India by Region & State
          </h2>
          <p className="text-[#55695E] mt-3 text-sm sm:text-base max-w-2xl mx-auto">
            Click on any zone to discover regional heritage, authentic signature food, and hidden gems across India’s vibrant landscape.
          </p>
        </div>

        {/* Region Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          <button
            type="button"
            onClick={() => setActiveRegion('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeRegion === 'all'
                ? 'bg-[#1B4332] text-amber-100 shadow-sm'
                : 'bg-[#FAF7F2] text-[#405347] hover:bg-[#EAE4D9] border border-[#DDD3C3]'
            }`}
          >
            {t(selectedLanguage, 'filterAll', 'All Regions')} ({INDIAN_STATES.length})
          </button>

          {REGIONS.map(reg => (
            <button
              key={reg.key}
              type="button"
              onClick={() => setActiveRegion(reg.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeRegion === reg.key
                  ? 'bg-[#1B4332] text-amber-100 shadow-sm'
                  : 'bg-[#FAF7F2] text-[#405347] hover:bg-[#EAE4D9] border border-[#DDD3C3]'
              }`}
            >
              <span>{reg.label}</span>
              <span className="text-[10px] opacity-75 font-serif">
                ({INDIAN_STATES.filter(s => s.region === reg.key).length})
              </span>
            </button>
          ))}
        </div>

        {/* Interactive Dual Panel: State Selector Matrix + Live Spotlight Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: State Badges / Region Grid (7 cols) */}
          <div className="lg:col-span-7 bg-[#FAF7F2] p-5 sm:p-7 rounded-3xl border border-[#DDD3C3] shadow-xs">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E7DFD3]">
              <span className="text-xs uppercase tracking-wider font-bold text-[#7A8B80]">
                Select a State to Preview
              </span>
              <span className="text-xs font-semibold text-[#1B4332]">
                Showing {filteredStates.length} States
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[460px] overflow-y-auto pr-1">
              {filteredStates.map((st) => {
                const isSelected = st.id === selectedStateId;
                const isPriority = st.id === 'bihar' || st.id === 'haryana';

                return (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => setSelectedStateId(st.id)}
                    className={`text-left p-3 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#1B4332] text-white border-[#1B4332] shadow-md ring-2 ring-[#D96B43]/50'
                        : 'bg-white hover:bg-[#F2ECE1] text-[#143224] border-[#E0D7C9]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1">
                        <span className={`text-xs font-bold truncate ${isSelected ? 'text-amber-100' : 'text-[#143224]'}`}>
                          {st.name}
                        </span>
                        {isPriority && (
                          <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase shrink-0 ${
                            isSelected ? 'bg-[#D96B43] text-white' : 'bg-[#FAF1EC] text-[#D96B43] border border-[#F0D5C9]'
                          }`}>
                            Priority
                          </span>
                        )}
                      </div>
                      <span className={`text-[11px] block mt-0.5 font-serif ${isSelected ? 'text-emerald-200' : 'text-[#7A8B80]'}`}>
                        {st.hindiName}
                      </span>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-black/5 flex items-center justify-between text-[10px]">
                      <span className={isSelected ? 'text-amber-200/90' : 'text-[#6B7D72]'}>
                        {st.destinationsCount} spots
                      </span>
                      <span className={`font-semibold uppercase tracking-wider text-[9px] ${isSelected ? 'text-amber-200' : 'text-[#D96B43]'}`}>
                        {st.region}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Rich State Spotlight Preview (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-[#DDD3C3] shadow-md overflow-hidden flex flex-col">
            
            {/* State Photo Header */}
            <div className="relative h-56 sm:h-64 overflow-hidden group">
              <img
                src={currentState.heroImage}
                alt={currentState.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              
              {/* Region Pill */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-[#1B4332]/90 backdrop-blur-md text-amber-100 text-xs font-bold uppercase tracking-wider border border-white/20">
                  {currentState.region} India
                </span>
              </div>

              {/* State Title on Image */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-baseline gap-2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                    {currentState.name}
                  </h3>
                  <span className="font-serif text-lg text-amber-200">
                    {currentState.hindiName}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-200 line-clamp-1 italic mt-0.5">
                  "{currentState.tagline}"
                </p>
              </div>
            </div>

            {/* Spotlight Details Body */}
            <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
              
              <div className="space-y-3">
                {/* Capital & Stats */}
                <div className="grid grid-cols-2 gap-2 text-xs bg-[#FAF7F2] p-3 rounded-2xl border border-[#E7DFD3]">
                  <div>
                    <span className="text-[#7A8B80] block text-[10px] uppercase font-bold">Capital</span>
                    <span className="font-bold text-[#143224]">{currentState.capital}</span>
                  </div>
                  <div>
                    <span className="text-[#7A8B80] block text-[10px] uppercase font-bold">Best Season</span>
                    <span className="font-semibold text-[#143224] line-clamp-1">{currentState.bestSeason.split('(')[0]}</span>
                  </div>
                </div>

                {/* Key Landmark */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#FAF1EC] border border-[#F0D5C9] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#D96B43]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A8B80] block">
                      Famous Attraction
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#143224]">
                      {currentState.famousAttraction}
                    </span>
                  </div>
                </div>

                {/* Signature Food */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#EBF3EE] border border-[#CDE1D4] flex items-center justify-center shrink-0 mt-0.5">
                    <UtensilsCrossed className="w-3.5 h-3.5 text-[#1B4332]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A8B80] block">
                      Signature Cuisine
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#143224]">
                      {currentState.famousFood}
                    </span>
                  </div>
                </div>

                {/* Highlights tags */}
                <div className="pt-1">
                  <span className="text-[10px] uppercase font-bold text-[#7A8B80] block mb-1.5">
                    Notable Stops
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentState.highlights.slice(0, 4).map((h, i) => (
                      <span key={i} className="text-[11px] px-2.5 py-0.5 rounded-md bg-[#FAF7F2] border border-[#DDD3C3] text-[#405347] font-medium">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-[#E7DFD3]">
                <button
                  type="button"
                  onClick={() => onSelectState(currentState.id)}
                  className="px-4 py-2.5 rounded-xl bg-[#1B4332] hover:bg-[#143224] text-amber-100 text-xs sm:text-sm font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>{t(selectedLanguage, 'exploreStateBtn', 'Explore State')}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
                </button>

                <button
                  type="button"
                  onClick={() => onPlanTrip(currentState.id)}
                  className="px-4 py-2.5 rounded-xl bg-[#FAF1EC] hover:bg-[#F2E0D5] border border-[#F0D5C9] text-[#B8502B] text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#D96B43]" />
                  <span>{t(selectedLanguage, 'planTripBtn', 'Plan Trip')}</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
