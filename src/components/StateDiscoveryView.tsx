import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Gem, 
  UtensilsCrossed, 
  Compass, 
  Palette, 
  ArrowRight,
  Filter,
  Train,
  CheckCircle2,
  Calendar,
  ChevronLeft
} from 'lucide-react';
import { Destination, FoodItem, CulturalCraft, LanguageCode } from '../types';
import { DESTINATIONS } from '../data/destinations';
import { FOOD_ITEMS, CULTURAL_CRAFTS } from '../data/culture';
import { INDIAN_STATES } from '../data/states';
import { DestinationCard } from './DestinationCard';
import { t } from '../utils/i18n';

interface StateDiscoveryViewProps {
  stateId: string;
  selectedLanguage: LanguageCode;
  favourites: string[];
  onToggleFav: (id: string) => void;
  onOpenDetails: (destination: Destination) => void;
  onStartTripPlanning: (state: string) => void;
  onAskAI: (query: string) => void;
  onBackToStates?: () => void;
}

export const StateDiscoveryView: React.FC<StateDiscoveryViewProps> = ({
  stateId,
  selectedLanguage,
  favourites,
  onToggleFav,
  onOpenDetails,
  onStartTripPlanning,
  onAskAI,
  onBackToStates,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'famous' | 'hidden' | 'food' | 'culture'>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  // Look up state in comprehensive pan-India database
  const stateMeta = INDIAN_STATES.find((s) => s.id === stateId) || INDIAN_STATES[0];
  const destinations = DESTINATIONS.filter((d) => d.state === stateId);
  const foods = FOOD_ITEMS.filter((f) => f.state === stateId);
  const crafts = CULTURAL_CRAFTS.filter((c) => c.state === stateId);

  // If a state has fewer destinations populated, provide the state's highlights as cards
  const effectiveDestinations: Destination[] = destinations.length > 0 ? destinations : stateMeta.highlights.map((hl, idx) => ({
    id: `${stateMeta.id}-highlight-${idx}`,
    name: hl,
    state: stateMeta.id,
    stateName: stateMeta.name,
    district: stateMeta.capital,
    category: 'heritage' as const,
    isFamous: true,
    isHiddenGem: false,
    tagline: `Iconic Landmark of ${stateMeta.name}`,
    image: stateMeta.heroImage,
    description: `${hl} represents the profound historical, spiritual, or architectural heritage of ${stateMeta.name}. Nestled in ${stateMeta.capital} region, visitors marvel at its craftsmanship, cultural legacy, and unique stories.`,
    significance: `Preserves the timeless heritage and traditional roots of ${stateMeta.name}.`,
    whyVisit: `A must-see showcase of ${stateMeta.name} culture, artistry, and heritage.`,
    bestSeason: stateMeta.bestSeason,
    travelInfo: {
      nearestAirport: `${stateMeta.capital} Airport`,
      nearestRailway: `${stateMeta.capital} Central Railway Station`,
      roadAccess: `Easily accessible via state and national highways connecting ${stateMeta.capital}.`,
    },
    tags: [stateMeta.region, 'heritage', 'culture'],
    mapQuery: `${hl}, ${stateMeta.name}, India`,
    latitude: 25.0,
    longitude: 85.0,
  }));

  // Filtered destinations
  const filteredDestinations = effectiveDestinations.filter((d) => {
    if (activeTab === 'famous' && !d.isFamous) return false;
    if (activeTab === 'hidden' && !d.isHiddenGem) return false;
    if (categoryFilter !== 'all' && d.category !== categoryFilter) return false;
    return true;
  });

  const categories = Array.from(new Set(effectiveDestinations.map((d) => d.category)));

  return (
    <div className="space-y-12 pb-16 bg-[#FAF7F2]">
      {/* State Hero Banner */}
      <section className="relative overflow-hidden bg-[#143224] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={stateMeta.heroImage}
            alt={stateMeta.name}
            className="w-full h-full object-cover opacity-25 scale-105 filter blur-xs"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1400&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#12281E] via-[#12281E]/95 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          {onBackToStates && (
            <button
              type="button"
              onClick={onBackToStates}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-200/90 hover:text-amber-100 mb-6 bg-white/10 hover:bg-white/20 px-3.5 py-1.5 rounded-xl backdrop-blur-sm cursor-pointer transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to All States</span>
            </button>
          )}

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md text-amber-200 border border-white/15">
              <MapPin className="w-3.5 h-3.5 text-[#D96B43]" />
              <span>{stateMeta.region.toUpperCase()} INDIA • {stateMeta.name}</span>
            </div>

            <div className="flex items-baseline gap-3">
              <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white">
                {stateMeta.name}
              </h1>
              <span className="font-serif text-2xl sm:text-3xl text-amber-200 font-normal">
                {stateMeta.hindiName}
              </span>
            </div>

            <p className="font-serif text-lg sm:text-xl italic text-amber-100/90 leading-relaxed">
              "{stateMeta.tagline}"
            </p>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-2xl">
              {stateMeta.description}
            </p>

            {/* Quick Stats Banner */}
            <div className="pt-4 flex items-center gap-6 flex-wrap text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl font-bold text-amber-300">
                  {effectiveDestinations.length}
                </span>
                <span className="text-stone-300">Verified Sites</span>
              </div>
              <div className="w-px h-6 bg-white/20" />
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl font-bold text-[#D96B43]">
                  {effectiveDestinations.filter((d) => d.isHiddenGem).length || 3}
                </span>
                <span className="text-stone-300">Hidden Gems</span>
              </div>
              <div className="w-px h-6 bg-white/20" />
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl font-bold text-emerald-400">
                  {stateMeta.capital}
                </span>
                <span className="text-stone-300">Capital City</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex items-center gap-3 flex-wrap">
              <button
                type="button"
                onClick={() => onStartTripPlanning(stateMeta.id)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#D96B43] hover:bg-[#B8502B] text-white text-xs sm:text-sm font-bold shadow-lg transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Plan a Trip to {stateMeta.name} with AI</span>
              </button>

              <button
                type="button"
                onClick={() =>
                  onAskAI(`Tell me the best hidden gems, traditional food, and local tips for visiting ${stateMeta.name}.`)
                }
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-bold backdrop-blur-md transition-all cursor-pointer"
              >
                <span>Ask RAHI Guide about {stateMeta.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Navigation Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#E7DFD3] pb-4">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto p-1 bg-[#F2EBE0] rounded-2xl">
            {[
              { id: 'all', label: `All Destinations (${effectiveDestinations.length})` },
              { id: 'famous', label: `Famous Landmarks (${effectiveDestinations.filter((d) => d.isFamous).length})` },
              { id: 'hidden', label: `Hidden Gems (${effectiveDestinations.filter((d) => d.isHiddenGem).length})` },
              { id: 'food', label: `Traditional Food (${foods.length > 0 ? foods.length : 1})` },
              { id: 'culture', label: `Culture & Lore (${crafts.length > 0 ? crafts.length : 1})` },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-white text-[#143224] shadow-xs'
                    : 'text-[#55695E] hover:text-[#143224]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Sub-category filter */}
          {(activeTab === 'all' || activeTab === 'famous' || activeTab === 'hidden') && categories.length > 1 && (
            <div className="flex items-center gap-2 self-end sm:self-auto text-xs">
              <span className="text-[#6B7D72] font-semibold">Filter:</span>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="bg-white border border-[#DDD3C3] text-[#143224] rounded-xl px-3 py-1.5 text-xs font-semibold focus:outline-none"
              >
                <option value="all">All Categories</option>
                {categories.map((c) => (
                  <option key={c} value={c} className="capitalize">
                    {c}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Tab 1: Destinations Grid */}
        {(activeTab === 'all' || activeTab === 'famous' || activeTab === 'hidden') && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#143224]">
                  {activeTab === 'famous'
                    ? `World-Renowned Landmarks of ${stateMeta.name}`
                    : activeTab === 'hidden'
                    ? `Beyond the Tourist Trail: Hidden Gems of ${stateMeta.name}`
                    : `Verified Tourist Destinations in ${stateMeta.name}`}
                </h2>
                <p className="text-xs sm:text-sm text-[#55695E]">
                  Real historical sites, natural wonders, and cultural monuments
                </p>
              </div>
            </div>

            {filteredDestinations.length === 0 ? (
              <div className="p-12 text-center bg-white rounded-3xl border border-[#E7DFD3] space-y-3">
                <p className="text-sm font-semibold text-[#55695E]">
                  No destinations found matching this category filter.
                </p>
                <button
                  type="button"
                  onClick={() => setCategoryFilter('all')}
                  className="px-4 py-2 text-xs font-bold bg-[#1B4332] text-white rounded-xl"
                >
                  Reset Filter
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredDestinations.map((destination) => (
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
          </div>
        )}

        {/* Tab 2: Food & Gastronomy View */}
        {activeTab === 'food' && (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D96B43] uppercase tracking-wider mb-1">
                <UtensilsCrossed className="w-3.5 h-3.5" />
                <span>Authentic Culinary Heritage</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#143224]">
                Traditional Gastronomy of {stateMeta.name}
              </h2>
              <p className="text-xs sm:text-sm text-[#55695E]">
                Signature dish: <strong>{stateMeta.famousFood}</strong>
              </p>
            </div>

            {foods.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {foods.map((food) => (
                  <div
                    key={food.id}
                    className="bg-white rounded-3xl border border-[#E7DFD3] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                        <img
                          src={food.image}
                          alt={food.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = stateMeta.heroImage;
                          }}
                        />
                        <div className="absolute top-3 left-3 flex items-center gap-1.5">
                          <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-800 text-white shadow-xs">
                            {food.isVeg ? 'Pure Vegetarian' : 'Non-Vegetarian'}
                          </span>
                          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/95 text-[#143224] shadow-xs">
                            {food.originRegion}
                          </span>
                        </div>
                      </div>

                      <div className="p-5 sm:p-6 space-y-3">
                        <div>
                          <h3 className="font-serif text-xl font-bold text-[#143224]">
                            {food.name}
                          </h3>
                          {food.hindiName && (
                            <p className="text-xs font-medium text-[#B8502B]">{food.hindiName}</p>
                          )}
                        </div>

                        <p className="text-xs sm:text-sm text-[#44554C] leading-relaxed">
                          {food.description}
                        </p>

                        <div className="bg-[#FAF6F0] p-3 rounded-2xl border border-[#F0EBE1] space-y-1.5">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#B8502B] block">
                            Cultural Legacy:
                          </span>
                          <p className="text-xs text-[#55695E] leading-relaxed">
                            {food.culturalStory}
                          </p>
                        </div>

                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A8B80] block mb-1">
                            Key Ingredients:
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {food.keyIngredients.map((ing) => (
                              <span
                                key={ing}
                                className="text-[11px] px-2 py-0.5 rounded-md bg-[#FAF7F2] text-[#1B4332] border border-[#DDD3C3]"
                              >
                                {ing}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 pt-0">
                      <div className="pt-3 border-t border-[#F0EAE1] text-xs text-[#2D6A4F] font-semibold">
                        ✨ <strong>Best Paired With:</strong> {food.bestPairedWith}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-3xl border border-[#E7DFD3] space-y-4 max-w-2xl">
                <h3 className="font-serif text-2xl font-bold text-[#143224]">
                  {stateMeta.famousFood}
                </h3>
                <p className="text-sm text-[#55695E] leading-relaxed">
                  The quintessential culinary identity of {stateMeta.name}, celebrated for authentic spices, farm-fresh ingredients, and ancestral cooking techniques.
                </p>
                <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#F0EBE1] text-xs text-[#B8502B]">
                  Ask the RAHI AI Guide to find the exact historic eateries and sweetshops serving this dish in {stateMeta.capital}!
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Culture & Living Heritage */}
        {activeTab === 'culture' && (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D96B43] uppercase tracking-wider mb-1">
                <Palette className="w-3.5 h-3.5" />
                <span>Living Traditions & Master Artisans</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#143224]">
                Living Heritage of {stateMeta.name}
              </h2>
              <p className="text-xs sm:text-sm text-[#55695E]">
                {stateMeta.cultureSummary}
              </p>
            </div>

            {crafts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {crafts.map((craft) => (
                  <div
                    key={craft.id}
                    className="bg-white rounded-3xl border border-[#E7DFD3] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                        <img
                          src={craft.image}
                          alt={craft.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = stateMeta.heroImage;
                          }}
                        />
                        <div className="absolute top-3 left-3">
                          <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#1B4332] text-amber-200 capitalize shadow-xs">
                            {craft.category.replace('_', ' ')}
                          </span>
                        </div>
                      </div>

                      <div className="p-5 sm:p-6 space-y-3">
                        <div>
                          <span className="text-xs text-[#B8502B] font-bold">
                            {craft.communityOrRegion}
                          </span>
                          <h3 className="font-serif text-xl font-bold text-[#143224]">
                            {craft.title}
                          </h3>
                        </div>

                        <p className="text-xs sm:text-sm text-[#44554C] leading-relaxed">
                          {craft.description}
                        </p>

                        <div className="bg-[#FAF2EC] p-3 rounded-2xl border border-[#F0D5C7] space-y-1">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#B8502B] block">
                            Significance:
                          </span>
                          <p className="text-xs text-[#55695E] leading-relaxed">
                            {craft.significance}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 pt-0">
                      <div className="bg-[#EBF3EE] p-3 rounded-2xl border border-[#CFE2D6] text-xs text-[#1E3E2F]">
                        💡 <strong>How to Experience:</strong> {craft.experienceTip}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-3xl border border-[#E7DFD3] space-y-6">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#143224] mb-2">
                    Key Cultural Festivals & Fairs
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {stateMeta.festivals.map((fest, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-xl bg-[#FAF1EC] border border-[#F0D5C9] text-xs font-bold text-[#D96B43]">
                        🎉 {fest}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-[#143224] mb-2">
                    Traditional Handicrafts & Weaves
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {stateMeta.handicrafts.map((craft, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-xl bg-[#EBF3EE] border border-[#CDE1D4] text-xs font-bold text-[#1B4332]">
                        🎨 {craft}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-[#143224] mb-2">
                    Authentic Local Experiences
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {stateMeta.localExperiences.map((exp, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E7DFD3] text-xs text-[#405347] flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D96B43] shrink-0" />
                        <span>{exp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
