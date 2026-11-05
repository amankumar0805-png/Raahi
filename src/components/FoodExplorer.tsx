import React, { useState } from 'react';
import { 
  UtensilsCrossed, 
  Sparkles, 
  MapPin, 
  Leaf, 
  Flame, 
  Search, 
  Info, 
  ChevronRight,
  Heart,
  Share2
} from 'lucide-react';
import { FoodItem, LanguageCode } from '../types';
import { FOOD_ITEMS } from '../data/culture';
import { t } from '../utils/i18n';

interface FoodExplorerProps {
  selectedLanguage: LanguageCode;
  onAskAIAboutFood: (dishName: string, state: string) => void;
  onExploreState: (stateId: string) => void;
}

export const FoodExplorer: React.FC<FoodExplorerProps> = ({
  selectedLanguage,
  onAskAIAboutFood,
  onExploreState,
}) => {
  const [dietFilter, setDietFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [selectedState, setSelectedState] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);

  // Unique states present in food database
  const availableStates = Array.from(new Set(FOOD_ITEMS.map((f) => f.state)));

  const filteredFoods = FOOD_ITEMS.filter((f) => {
    if (dietFilter === 'veg' && !f.isVeg) return false;
    if (dietFilter === 'non-veg' && f.isVeg) return false;
    if (selectedState !== 'all' && f.state !== selectedState) return false;
    
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchesName = f.name.toLowerCase().includes(q) || (f.hindiName && f.hindiName.includes(q));
      const matchesIng = f.keyIngredients.some(ing => ing.toLowerCase().includes(q));
      const matchesRegion = f.originRegion.toLowerCase().includes(q) || f.state.toLowerCase().includes(q);
      return matchesName || matchesIng || matchesRegion;
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF1EC] border border-[#F0D5C9] text-[#D96B43] text-xs font-bold tracking-wide">
          <UtensilsCrossed className="w-3.5 h-3.5 text-[#D96B43]" />
          <span>India on a Plate • स्वाद भारत का</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#143224] tracking-tight">
          {t(selectedLanguage, 'foodTitle', 'India on a Plate – स्वाद भारत का')}
        </h1>
        <p className="text-[#55695E] text-sm sm:text-base leading-relaxed">
          {t(selectedLanguage, 'foodSubtitle', 'Authentic culinary secrets and traditional recipes across states. Cooked in pure desi ghee, mustard oil, and earthen pots for centuries.')}
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-3xl border border-[#DDD3C3] shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Diet Filter */}
          <div className="flex items-center gap-1.5 bg-[#FAF7F2] p-1 rounded-2xl border border-[#E7DFD3] w-full md:w-auto">
            <button
              type="button"
              onClick={() => setDietFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                dietFilter === 'all'
                  ? 'bg-[#1B4332] text-amber-100 shadow-xs'
                  : 'text-[#55695E] hover:text-[#143224]'
              }`}
            >
              {t(selectedLanguage, 'filterAllFoods', 'All Dishes')} ({FOOD_ITEMS.length})
            </button>
            <button
              type="button"
              onClick={() => setDietFilter('veg')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                dietFilter === 'veg'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-[#55695E] hover:text-emerald-800'
              }`}
            >
              <Leaf className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t(selectedLanguage, 'filterVeg', 'Pure Vegetarian')}</span>
            </button>
            <button
              type="button"
              onClick={() => setDietFilter('non-veg')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                dietFilter === 'non-veg'
                  ? 'bg-[#9B2C2C] text-white shadow-xs'
                  : 'text-[#55695E] hover:text-[#9B2C2C]'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-red-300" />
              <span>{t(selectedLanguage, 'filterNonVeg', 'Non-Vegetarian')}</span>
            </button>
          </div>

          {/* State Filter Dropdown & Search */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="bg-[#FAF7F2] border border-[#DDD3C3] text-[#143224] rounded-2xl px-3.5 py-2.5 text-xs font-bold focus:outline-none cursor-pointer"
            >
              <option value="all">All Culinary Regions</option>
              {availableStates.map((st) => (
                <option key={st} value={st} className="capitalize">
                  {st.charAt(0).toUpperCase() + st.slice(1)}
                </option>
              ))}
            </select>

            <div className="relative flex-1 md:w-64">
              <Search className="w-4 h-4 text-[#7A8B80] absolute left-3 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dish or ingredients..."
                className="w-full pl-9 pr-3 py-2 rounded-2xl bg-[#FAF7F2] border border-[#DDD3C3] text-xs text-[#143224] focus:outline-none placeholder:text-[#9AA8A0]"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Food Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredFoods.map((food) => (
          <div
            key={food.id}
            className="group bg-white rounded-3xl border border-[#E7DFD3] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Dish Photo */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span
                    className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase shadow-xs flex items-center gap-1 ${
                      food.isVeg
                        ? 'bg-emerald-800 text-white'
                        : 'bg-rose-900 text-rose-100'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    <span>{food.isVeg ? 'Pure Veg' : 'Non-Veg'}</span>
                  </span>

                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/95 text-[#143224] capitalize shadow-xs">
                    {food.state}
                  </span>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="text-[11px] text-amber-200 uppercase font-semibold tracking-wider">
                    {food.originRegion}
                  </div>
                  <div className="flex items-baseline gap-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight">
                      {food.name}
                    </h3>
                    {food.hindiName && (
                      <span className="font-serif text-base text-amber-200">
                        {food.hindiName}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 space-y-3">
                <p className="text-xs sm:text-sm text-[#44554C] leading-relaxed line-clamp-3">
                  {food.description}
                </p>

                {/* Cultural Legacy snippet */}
                <div className="bg-[#FAF6F0] p-3 rounded-2xl border border-[#F0EBE1] space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8502B] block">
                    Heritage Lore:
                  </span>
                  <p className="text-xs text-[#55695E] leading-relaxed line-clamp-2">
                    {food.culturalStory}
                  </p>
                </div>

                {/* Key Ingredients */}
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A8B80] block mb-1">
                    Authentic Ingredients:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {food.keyIngredients.slice(0, 4).map((ing) => (
                      <span
                        key={ing}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-[#FAF7F2] text-[#1B4332] border border-[#DDD3C3]"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-5 sm:p-6 pt-0 space-y-2">
              <div className="text-[11px] text-[#2D6A4F] bg-[#EBF3EE] px-3 py-2 rounded-xl border border-[#CDE1D4] font-medium flex items-center justify-between">
                <span>Pairing: {food.bestPairedWith}</span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setSelectedFood(food)}
                  className="flex-1 py-2 px-3 rounded-xl bg-[#1B4332] hover:bg-[#143224] text-amber-100 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <span>Culinary Story</span>
                  <ChevronRight className="w-3.5 h-3.5 text-amber-300" />
                </button>

                <button
                  type="button"
                  onClick={() => onAskAIAboutFood(food.name, food.state)}
                  className="py-2 px-3 rounded-xl bg-[#FAF1EC] hover:bg-[#F2E0D5] text-[#B8502B] border border-[#F0D5C9] text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                  title="Ask RAHI Guide about authentic spots serving this"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ask AI</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Food Story Modal */}
      {selectedFood && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-[#E7DFD3] shadow-2xl p-6 sm:p-8 space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-stone-100">
              <img
                src={selectedFood.image}
                alt={selectedFood.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=80';
                }}
              />
              <div className="absolute top-3 right-3">
                <button
                  type="button"
                  onClick={() => setSelectedFood(null)}
                  className="w-8 h-8 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center text-sm font-bold cursor-pointer"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-[#B8502B] uppercase">
                <span>{selectedFood.state}</span>
                <span>•</span>
                <span>{selectedFood.originRegion}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#143224]">
                {selectedFood.name}
              </h3>
              {selectedFood.hindiName && (
                <p className="font-serif text-lg text-[#D96B43]">{selectedFood.hindiName}</p>
              )}
            </div>

            <p className="text-sm text-[#44554C] leading-relaxed">
              {selectedFood.description}
            </p>

            <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#F0EBE1] space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B8502B] block">
                Ancestral Story & Cultural Ritual:
              </span>
              <p className="text-xs sm:text-sm text-[#55695E] leading-relaxed">
                {selectedFood.culturalStory}
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#7A8B80] block mb-2">
                All Authentic Ingredients:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedFood.keyIngredients.map((ing) => (
                  <span
                    key={ing}
                    className="text-xs px-3 py-1 rounded-lg bg-[#FAF7F2] text-[#1B4332] border border-[#DDD3C3] font-medium"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#EBF3EE] border border-[#CFE2D6] text-xs sm:text-sm text-[#1E3E2F]">
              <strong>✨ Traditional Pairing:</strong> {selectedFood.bestPairedWith}
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  onAskAIAboutFood(selectedFood.name, selectedFood.state);
                  setSelectedFood(null);
                }}
                className="flex-1 py-3 px-4 rounded-xl bg-[#1B4332] hover:bg-[#143224] text-amber-100 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Find Iconic Eateries in {selectedFood.state}</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
