import React, { useState } from 'react';
import { 
  Gem, 
  MapPin, 
  Sparkles, 
  Compass, 
  Waves, 
  TreePine, 
  Building2, 
  Landmark,
  ArrowRight,
  Filter
} from 'lucide-react';
import { Destination, LanguageCode } from '../types';
import { DESTINATIONS } from '../data/destinations';
import { DestinationCard } from './DestinationCard';
import { t } from '../utils/i18n';

interface HiddenGemsSectionProps {
  selectedLanguage: LanguageCode;
  favourites: string[];
  onToggleFav: (id: string) => void;
  onOpenDetails: (destination: Destination) => void;
  onStartTripPlanning: (state: string) => void;
}

export const HiddenGemsSection: React.FC<HiddenGemsSectionProps> = ({
  selectedLanguage,
  favourites,
  onToggleFav,
  onOpenDetails,
  onStartTripPlanning,
}) => {
  const [selectedState, setSelectedState] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const hiddenGems = DESTINATIONS.filter((d) => d.isHiddenGem);
  const gemStates = Array.from(new Set(hiddenGems.map((g) => g.state)));

  const filteredGems = hiddenGems.filter((d) => {
    if (selectedState !== 'all' && d.state !== selectedState) return false;
    if (selectedCategory !== 'all' && d.category !== selectedCategory) return false;
    return true;
  });

  const categories = [
    { id: 'all', label: 'All Hidden Treasures', icon: Gem },
    { id: 'waterfall', label: 'Secret Waterfalls', icon: Waves },
    { id: 'nature', label: 'Lakes & Valleys', icon: TreePine },
    { id: 'archaeology', label: 'Ancient Excavations', icon: Landmark },
    { id: 'heritage', label: 'Hidden Monuments', icon: Building2 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF1EC] border border-[#F0D5C9] text-[#D96B43] text-xs font-bold tracking-wide">
          <Gem className="w-3.5 h-3.5 text-[#D96B43]" />
          <span>{t(selectedLanguage, 'hiddenGemsTitle', 'Hidden India – भारत के अनदेखे ख़ज़ाने')}</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#143224] tracking-tight">
          {t(selectedLanguage, 'hiddenGemsTitle', 'Hidden India – भारत के अनदेखे ख़ज़ाने')}
        </h1>
        <p className="text-[#55695E] text-sm sm:text-base leading-relaxed">
          {t(selectedLanguage, 'hiddenGemsSubtitle', 'Lesser-known waterfalls, ancient cities, and quiet hill retreats across India. Explore untouched natural wonders without tourist crowds.')}
        </p>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white rounded-3xl p-5 border border-[#E7DFD3] shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* State Switcher Tabs */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <span className="text-xs font-bold text-[#7A8B80] uppercase tracking-wider hidden sm:inline">
              State:
            </span>
            <div className="flex rounded-2xl bg-[#FAF7F2] p-1 border border-[#DDD3C3] w-full md:w-auto overflow-x-auto">
              <button
                type="button"
                onClick={() => setSelectedState('all')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedState === 'all'
                    ? 'bg-[#1B4332] text-white shadow-xs'
                    : 'text-[#55695E] hover:text-[#143224]'
                }`}
              >
                All Gems ({hiddenGems.length})
              </button>
              
              <button
                type="button"
                onClick={() => setSelectedState('bihar')}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedState === 'bihar'
                    ? 'bg-[#D96B43] text-white shadow-xs'
                    : 'text-[#55695E] hover:text-[#143224]'
                }`}
              >
                Bihar ({hiddenGems.filter((g) => g.state === 'bihar').length})
              </button>

              <button
                type="button"
                onClick={() => setSelectedState('haryana')}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedState === 'haryana'
                    ? 'bg-[#1B4332] text-amber-200 shadow-xs'
                    : 'text-[#55695E] hover:text-[#143224]'
                }`}
              >
                Haryana ({hiddenGems.filter((g) => g.state === 'haryana').length})
              </button>

              {gemStates.filter(st => st !== 'bihar' && st !== 'haryana').map(st => (
                <button
                  key={st}
                  type="button"
                  onClick={() => setSelectedState(st)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer capitalize whitespace-nowrap ${
                    selectedState === st
                      ? 'bg-[#1B4332] text-amber-100 shadow-xs'
                      : 'text-[#55695E] hover:text-[#143224]'
                  }`}
                >
                  {st} ({hiddenGems.filter(g => g.state === st).length})
                </button>
              ))}
            </div>
          </div>

          {/* Quick Counter */}
          <div className="text-xs text-[#55695E] font-medium self-end md:self-auto">
            Showing <strong>{filteredGems.length}</strong> hidden sanctuaries
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const active = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border cursor-pointer ${
                  active
                    ? 'bg-[#FAF2EC] text-[#D96B43] border-[#D96B43] shadow-2xs font-bold'
                    : 'bg-[#FAF7F2] text-[#44554C] border-[#E7DFD3] hover:bg-[#F2ECE1]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${active ? 'text-[#D96B43]' : 'text-[#7A8B80]'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Hidden Destinations Grid */}
      {filteredGems.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-3xl border border-[#E7DFD3] space-y-3">
          <p className="text-sm font-semibold text-[#55695E]">
            No hidden destinations match the chosen filter combinations.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedState('all');
              setSelectedCategory('all');
            }}
            className="px-4 py-2 text-xs font-bold bg-[#1B4332] text-white rounded-xl cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredGems.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              isFav={favourites.includes(destination.id)}
              onToggleFav={onToggleFav}
              onOpenDetails={onOpenDetails}
            />
          ))}
        </div>
      )}

      {/* Editorial Quote Banner */}
      <div className="bg-gradient-to-r from-[#1B4332] to-[#2D6A4F] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
            The Philosophy of RAHI – राही
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-snug">
            "The soul of a civilization is rarely found in crowded ticket queues. It lives in the canyon breezes, old banyan shades, and warm kitchens of small towns."
          </h3>
          <p className="text-xs sm:text-sm text-stone-200">
            By choosing hidden destinations, you support rural local economies and experience untouched natural beauty without commercial noise.
          </p>
          <button
            type="button"
            onClick={() => onStartTripPlanning(selectedState !== 'all' ? selectedState : 'bihar')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D96B43] hover:bg-[#B8502B] text-white text-xs font-bold transition-all shadow-md cursor-pointer mt-2"
          >
            <Sparkles className="w-4 h-4 text-amber-200" />
            <span>Plan an Offbeat Itinerary with AI</span>
          </button>
        </div>
      </div>
    </div>
  );
};
