import React, { useState } from 'react';
import { 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  Compass, 
  Search,
  UtensilsCrossed,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';
import { IndianState, LanguageCode, StateRegion } from '../types';
import { INDIAN_STATES } from '../data/states';
import { t } from '../utils/i18n';

interface StateExplorerProps {
  selectedLanguage: LanguageCode;
  onSelectState: (stateId: string) => void;
  selectedState?: string;
  onPlanTrip?: (stateId: string) => void;
}

export const StateExplorer: React.FC<StateExplorerProps> = ({
  selectedLanguage,
  onSelectState,
  selectedState,
  onPlanTrip,
}) => {
  const [selectedRegion, setSelectedRegion] = useState<StateRegion | 'all'>('all');
  const [searchFilter, setSearchFilter] = useState('');

  const filteredStates = INDIAN_STATES.filter((st) => {
    const matchesRegion = selectedRegion === 'all' || st.region === selectedRegion;
    const q = searchFilter.toLowerCase().trim();
    const matchesSearch = !q || 
      st.name.toLowerCase().includes(q) ||
      st.hindiName.includes(q) ||
      st.capital.toLowerCase().includes(q) ||
      st.famousFood.toLowerCase().includes(q) ||
      st.famousAttraction.toLowerCase().includes(q);
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E7DFD3]">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D96B43] uppercase tracking-wider">
            <Compass className="w-4 h-4" />
            <span>{t(selectedLanguage, 'exploreStatesTitle', 'Pan-India State Explorer')}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#143224]">
            {t(selectedLanguage, 'exploreStatesTitle', 'Explore Incredible India')}
          </h2>
          <p className="text-xs sm:text-sm text-[#55695E] max-w-2xl">
            {t(selectedLanguage, 'exploreStatesSubtitle', 'One country. Countless cultures. Endless journeys. Discover heritage, signature flavours, and secret places across every state.')}
          </p>
        </div>

        {/* Live Search inside states */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-[#7A8B80] absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Filter states by name, food, or capital..."
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-[#DDD3C3] text-xs sm:text-sm text-[#143224] placeholder:text-[#9AA8A0] focus:outline-none focus:ring-2 focus:ring-[#1B4332]/20"
          />
        </div>
      </div>

      {/* Region Filter Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          type="button"
          onClick={() => setSelectedRegion('all')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
            selectedRegion === 'all'
              ? 'bg-[#1B4332] text-amber-100 shadow-sm'
              : 'bg-white text-[#55695E] hover:bg-[#FAF7F2] border border-[#DDD3C3]'
          }`}
        >
          {t(selectedLanguage, 'filterAll', 'All Regions')} ({INDIAN_STATES.length})
        </button>

        <button
          type="button"
          onClick={() => setSelectedRegion('north')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
            selectedRegion === 'north'
              ? 'bg-[#1B4332] text-amber-100 shadow-sm'
              : 'bg-white text-[#55695E] hover:bg-[#FAF7F2] border border-[#DDD3C3]'
          }`}
        >
          {t(selectedLanguage, 'filterNorth', 'North India')}
        </button>

        <button
          type="button"
          onClick={() => setSelectedRegion('south')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
            selectedRegion === 'south'
              ? 'bg-[#1B4332] text-amber-100 shadow-sm'
              : 'bg-white text-[#55695E] hover:bg-[#FAF7F2] border border-[#DDD3C3]'
          }`}
        >
          {t(selectedLanguage, 'filterSouth', 'South India')}
        </button>

        <button
          type="button"
          onClick={() => setSelectedRegion('east')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
            selectedRegion === 'east'
              ? 'bg-[#1B4332] text-amber-100 shadow-sm'
              : 'bg-white text-[#55695E] hover:bg-[#FAF7F2] border border-[#DDD3C3]'
          }`}
        >
          {t(selectedLanguage, 'filterEast', 'East India')}
        </button>

        <button
          type="button"
          onClick={() => setSelectedRegion('west')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
            selectedRegion === 'west'
              ? 'bg-[#1B4332] text-amber-100 shadow-sm'
              : 'bg-white text-[#55695E] hover:bg-[#FAF7F2] border border-[#DDD3C3]'
          }`}
        >
          {t(selectedLanguage, 'filterWest', 'West India')}
        </button>

        <button
          type="button"
          onClick={() => setSelectedRegion('central')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
            selectedRegion === 'central'
              ? 'bg-[#1B4332] text-amber-100 shadow-sm'
              : 'bg-white text-[#55695E] hover:bg-[#FAF7F2] border border-[#DDD3C3]'
          }`}
        >
          {t(selectedLanguage, 'filterCentral', 'Central India')}
        </button>

        <button
          type="button"
          onClick={() => setSelectedRegion('northeast')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
            selectedRegion === 'northeast'
              ? 'bg-[#1B4332] text-amber-100 shadow-sm'
              : 'bg-white text-[#55695E] hover:bg-[#FAF7F2] border border-[#DDD3C3]'
          }`}
        >
          {t(selectedLanguage, 'filterNortheast', 'Northeast India')}
        </button>
      </div>

      {/* State Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredStates.map((st) => {
          const isPriority = st.id === 'bihar' || st.id === 'haryana';
          const isCurrentActive = selectedState === st.id;

          return (
            <div
              key={st.id}
              className={`group bg-white rounded-3xl border overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                isCurrentActive
                  ? 'border-[#D96B43] ring-2 ring-[#D96B43]/30'
                  : 'border-[#E7DFD3] hover:-translate-y-1'
              }`}
            >
              <div>
                {/* State Hero Photo */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={st.heroImage}
                    alt={st.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span
                      className={`text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full shadow-xs ${
                        isPriority
                          ? 'bg-[#1B4332] text-amber-200 border border-white/20'
                          : 'bg-black/60 text-white backdrop-blur-xs'
                      }`}
                    >
                      {isPriority ? 'Verified In-Depth' : `${st.region.toUpperCase()} INDIA`}
                    </span>

                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/95 text-[#143224] shadow-xs">
                      {st.destinationsCount} Spots
                    </span>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <div className="flex items-baseline gap-2">
                      <h3 className="font-serif text-2xl font-bold leading-tight">
                        {st.name}
                      </h3>
                      <span className="font-serif text-base text-amber-200">
                        {st.hindiName}
                      </span>
                    </div>
                    <div className="text-[11px] text-stone-200 mt-0.5">
                      {t(selectedLanguage, 'capital', 'Capital')}: <span className="font-semibold text-white">{st.capital}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-3">
                  <p className="text-xs font-serif italic text-[#8F3B1A]">
                    "{st.tagline}"
                  </p>

                  <p className="text-xs sm:text-sm text-[#44554C] leading-relaxed line-clamp-2">
                    {st.description}
                  </p>

                  {/* Landmark & Food Quick Peek */}
                  <div className="space-y-1.5 pt-1 text-xs">
                    <div className="flex items-center gap-1.5 text-[#143224]">
                      <MapPin className="w-3.5 h-3.5 text-[#D96B43] shrink-0" />
                      <span className="truncate font-semibold">{st.famousAttraction}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#55695E]">
                      <UtensilsCrossed className="w-3.5 h-3.5 text-[#1B4332] shrink-0" />
                      <span className="truncate">{st.famousFood}</span>
                    </div>
                  </div>

                  {/* Highlights tags */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1">
                      {st.highlights.slice(0, 3).map((hl) => (
                        <span
                          key={hl}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-[#FAF7F2] text-[#1B4332] border border-[#DDD3C3]"
                        >
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 sm:p-6 pt-0 flex gap-2">
                <button
                  type="button"
                  onClick={() => onSelectState(st.id)}
                  className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer bg-[#1B4332] hover:bg-[#143224] text-amber-100 shadow-xs"
                >
                  <span>{t(selectedLanguage, 'exploreStateBtn', 'Explore State')}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
                </button>

                {onPlanTrip && (
                  <button
                    type="button"
                    onClick={() => onPlanTrip(st.id)}
                    className="py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer bg-[#FAF1EC] hover:bg-[#F2E0D5] text-[#B8502B] border border-[#F0D5C9]"
                    title="Plan Trip"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
