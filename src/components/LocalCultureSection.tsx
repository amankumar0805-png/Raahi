import React, { useState } from 'react';
import { 
  Palette, 
  UtensilsCrossed, 
  Sparkles, 
  Users, 
  Calendar, 
  MapPin, 
  Info, 
  Star, 
  Check, 
  ChevronRight,
  ShoppingBag
} from 'lucide-react';
import { CulturalCraft, FoodItem } from '../types';
import { CULTURAL_CRAFTS, FOOD_ITEMS, DEMO_LOCAL_COMMUNITY_LISTINGS } from '../data/culture';

interface LocalCultureSectionProps {
  onAskAIAboutCulture: (query: string) => void;
}

export const LocalCultureSection: React.FC<LocalCultureSectionProps> = ({
  onAskAIAboutCulture,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'crafts' | 'gastronomy' | 'community'>('all');
  const [stateFilter, setStateFilter] = useState<'all' | 'bihar' | 'haryana'>('all');

  const filteredCrafts = CULTURAL_CRAFTS.filter((c) => {
    if (stateFilter !== 'all' && c.state !== stateFilter) return false;
    return true;
  });

  const filteredFoods = FOOD_ITEMS.filter((f) => {
    if (stateFilter !== 'all' && f.state !== stateFilter) return false;
    return true;
  });

  const filteredListings = DEMO_LOCAL_COMMUNITY_LISTINGS.filter((l) => {
    if (stateFilter !== 'all' && l.state !== stateFilter) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF1EC] border border-[#F0D5C9] text-[#D96B43] text-xs font-bold tracking-wide">
          <Palette className="w-3.5 h-3.5 text-[#D96B43]" />
          <span>Roots, Artisans & Culinary Soul</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#143224] tracking-tight">
          Local Culture & Community
        </h1>
        <p className="text-[#55695E] text-sm sm:text-base leading-relaxed">
          India's truest memories are made around communal chulhas, handloom weaving sheds, and folk song chaupals. Explore living traditions, regional crafts, and verified cultural initiatives across Bihar and Haryana.
        </p>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#E7DFD3] pb-4">
        {/* Category Tabs */}
        <div className="flex items-center gap-1 bg-[#F2EBE0] p-1 rounded-2xl w-full sm:w-auto overflow-x-auto">
          {[
            { id: 'all', label: 'All Highlights' },
            { id: 'crafts', label: 'Living Crafts & Festivals' },
            { id: 'gastronomy', label: 'Traditional Foods' },
            { id: 'community', label: 'Community Listings (Demo)' },
          ].map((tab) => (
            <button
              key={tab.id}
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

        {/* State Toggle */}
        <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-[#DDD3C3] text-xs font-semibold">
          <button
            onClick={() => setStateFilter('all')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              stateFilter === 'all' ? 'bg-[#1B4332] text-white' : 'text-[#55695E]'
            }`}
          >
            All States
          </button>
          <button
            onClick={() => setStateFilter('bihar')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              stateFilter === 'bihar' ? 'bg-[#D96B43] text-white' : 'text-[#55695E]'
            }`}
          >
            Bihar
          </button>
          <button
            onClick={() => setStateFilter('haryana')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              stateFilter === 'haryana' ? 'bg-[#1B4332] text-amber-200' : 'text-[#55695E]'
            }`}
          >
            Haryana
          </button>
        </div>
      </div>

      {/* Section 1: Crafts & Living Heritage */}
      {(activeTab === 'all' || activeTab === 'crafts') && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#143224]">
                Living Crafts, Handlooms & Sacred Celebrations
              </h2>
              <p className="text-xs sm:text-sm text-[#55695E]">
                From Mithila wall art and Tussar handlooms to Haryanvi Saang folk theatre and Phulkari shawls
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
            {filteredCrafts.map((craft) => (
              <div
                key={craft.id}
                className="bg-white rounded-3xl border border-[#E7DFD3] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/9] overflow-hidden bg-stone-100">
                    <img
                      src={craft.image}
                      alt={craft.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#1B4332] text-amber-200 uppercase tracking-wide shadow-xs">
                        {craft.state}
                      </span>
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/95 text-[#143224] capitalize shadow-xs">
                        {craft.category.replace('_', ' ')}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div>
                      <div className="text-xs font-bold text-[#B8502B] uppercase tracking-wider mb-1">
                        {craft.communityOrRegion}
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-[#143224]">
                        {craft.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[#44554C] leading-relaxed">
                      {craft.description}
                    </p>

                    <div className="bg-[#FAF6F0] p-3.5 rounded-2xl border border-[#F0EBE1] space-y-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#B8502B] block">
                        Cultural Significance:
                      </span>
                      <p className="text-xs text-[#55695E] leading-relaxed">
                        {craft.significance}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="bg-[#EBF3EE] p-3.5 rounded-2xl border border-[#CFE2D6] text-xs text-[#1E3E2F] flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                    <div>
                      <strong>How to Experience:</strong> {craft.experienceTip}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Section 2: Regional Traditional Food Showcase */}
      {(activeTab === 'all' || activeTab === 'gastronomy') && (
        <section className="space-y-6 pt-6">
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#143224]">
              Authentic Traditional Gastronomy
            </h2>
            <p className="text-xs sm:text-sm text-[#55695E]">
              Time-tested culinary heritage cooked in pure desi ghee, mustard oil, and earthen chulhas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFoods.map((food) => (
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
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#D96B43] text-white uppercase shadow-xs">
                        {food.state}
                      </span>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-white/95 text-[#143224] shadow-xs">
                        {food.originRegion}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#143224]">
                        {food.name}
                      </h3>
                      {food.hindiName && (
                        <p className="text-xs text-[#B8502B] font-medium">{food.hindiName}</p>
                      )}
                    </div>

                    <p className="text-xs text-[#44554C] leading-relaxed line-clamp-3">
                      {food.description}
                    </p>

                    <div className="pt-2 border-t border-[#F0EAE1]">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A8B80] block mb-1">
                        Ingredients:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {food.keyIngredients.slice(0, 4).map((ing) => (
                          <span
                            key={ing}
                            className="text-[10px] px-2 py-0.5 rounded bg-[#FAF7F2] text-[#1B4332] border border-[#DDD3C3]"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="text-[11px] text-[#2D6A4F] bg-[#FAF6F0] p-2.5 rounded-xl border border-[#F0EBE1] font-medium">
                    Pairing: {food.bestPairedWith}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Section 3: Community Artisans & Experiences (Clearly marked as Demo Listings) */}
      {(activeTab === 'all' || activeTab === 'community') && (
        <section className="space-y-6 pt-6">
          <div className="bg-[#FAF2EC] border border-[#F0D5C7] rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D96B43] uppercase tracking-wider mb-1">
                  <Users className="w-4 h-4" />
                  <span>Grassroots Tourism Network</span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-[#143224]">
                  Local Artisans & Rural Homestay Clusters
                </h2>
                <p className="text-xs sm:text-sm text-[#55695E]">
                  Sample community cooperatives empowering local craftspeople and preservationists
                </p>
              </div>

              <div className="text-xs px-3 py-1.5 rounded-full bg-white border border-[#E7DFD3] text-[#7A8B80] font-bold self-start sm:self-auto">
                Clearly Marked Demo Listings
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredListings.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-5 border border-[#E7DFD3] shadow-xs space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200 uppercase">
                          {item.tag}
                        </span>
                        <span className="text-[10px] font-bold uppercase text-[#B8502B]">
                          {item.state} • {item.district}
                        </span>
                      </div>
                      <h3 className="font-serif font-bold text-base text-[#143224]">
                        {item.name}
                      </h3>
                      <p className="text-xs text-[#2D6A4F] font-semibold">{item.type}</p>
                    </div>

                    <div className="flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 px-2 py-1 rounded-lg shrink-0">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      <span>{item.rating}</span>
                      <span className="text-[10px] text-[#7A8B80]">({item.reviewsCount})</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#55695E] leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2 border-t border-[#F0EAE1] flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#7A8B80] italic">
                      {item.contactDemo}
                    </span>
                    <button
                      onClick={() =>
                        onAskAIAboutCulture(
                          `Tell me about visiting the ${item.name} in ${item.district}, ${item.state}`
                        )
                      }
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#1B4332] hover:text-[#D96B43] cursor-pointer"
                    >
                      <span>Ask AI Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-[11px] text-[#7A8B80] bg-white/70 p-3 rounded-xl border border-[#E7DFD3] flex items-start gap-2">
              <Info className="w-4 h-4 text-[#D96B43] shrink-0 mt-0.5" />
              <span>
                <strong>Notice:</strong> RAHI – राही does not process fake bookings or claim transactions. All featured listings demonstrate how local artisan clusters and heritage havelis are showcased to support community empowerment.
              </span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
