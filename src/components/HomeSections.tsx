import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  Gem, 
  UtensilsCrossed, 
  Compass, 
  ShieldCheck, 
  Heart, 
  ArrowRight, 
  Brain, 
  Building2, 
  BadgePercent,
  CheckCircle2,
  Bot
} from 'lucide-react';
import { Destination, LanguageCode } from '../types';
import { DESTINATIONS } from '../data/destinations';
import { FOOD_ITEMS, CULTURAL_CRAFTS } from '../data/culture';
import { DestinationCard } from './DestinationCard';
import { t } from '../utils/i18n';

interface HomeSectionsProps {
  selectedLanguage: LanguageCode;
  favourites: string[];
  onToggleFav: (id: string) => void;
  onOpenDetails: (destination: Destination) => void;
  onNavigate: (view: string, stateFilter?: string) => void;
}

export const HomeSections: React.FC<HomeSectionsProps> = ({
  selectedLanguage,
  favourites,
  onToggleFav,
  onOpenDetails,
  onNavigate,
}) => {
  // Highlighted popular destinations
  const popular = DESTINATIONS.filter((d) => d.isFamous).slice(0, 6);
  // Highlighted hidden gems
  const hiddenGems = DESTINATIONS.filter((d) => d.isHiddenGem).slice(0, 3);
  // Highlighted foods
  const sampleFoods = [
    FOOD_ITEMS.find((f) => f.id === 'litti-chokha')!,
    FOOD_ITEMS.find((f) => f.id === 'amritsari-kulcha')!,
    FOOD_ITEMS.find((f) => f.id === 'bajra-roti-makhan')!,
    FOOD_ITEMS.find((f) => f.id === 'chole-bhature')!,
  ].filter(Boolean);

  return (
    <div className="space-y-20 py-8">
      {/* 1. Popular Destinations of India */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D96B43] uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>World-Renowned Heritage</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#143224]">
              {t(selectedLanguage, 'popularDestinations', 'Popular Destinations of India')}
            </h2>
            <p className="text-xs sm:text-sm text-[#55695E] mt-1">
              {t(selectedLanguage, 'popularSubtitle', 'World-renowned architectural marvels and sacred historical sites')}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('destinations')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1B4332] hover:text-[#D96B43] transition-colors cursor-pointer"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {popular.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              isFav={favourites.includes(destination.id)}
              onToggleFav={onToggleFav}
              onOpenDetails={onOpenDetails}
            />
          ))}
        </div>
      </section>

      {/* 2. Hidden Gems Showcase ("Beyond the Tourist Trail") */}
      <section className="bg-[#FAF2EC] py-16 border-y border-[#F0D5C7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B8502B] uppercase tracking-wider mb-1">
                <Gem className="w-4 h-4" />
                <span>Untouched & Uncommercialized</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#143224]">
                {t(selectedLanguage, 'hiddenGemsTitle', 'Hidden India – भारत के अनदेखे ख़ज़ाने')}
              </h2>
              <p className="text-xs sm:text-sm text-[#55695E] mt-1">
                {t(selectedLanguage, 'hiddenGemsSubtitle', 'Lesser-known waterfalls, quiet hill retreats, and 5,000-year-old archaeological ruins')}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('hidden-gems')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#B8502B] text-xs font-bold border border-[#F0D5C9] hover:bg-[#D96B43] hover:text-white transition-all shadow-2xs cursor-pointer"
            >
              <span>Explore All Hidden Gems</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {hiddenGems.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                isFav={favourites.includes(destination.id)}
                onToggleFav={onToggleFav}
                onOpenDetails={onOpenDetails}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. AI Trip Planner Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] rounded-3xl p-8 sm:p-14 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-amber-300 text-xs font-bold tracking-wide border border-white/15">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>RAHI Intelligent Itinerary Engine</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Plan Your Dream Journey in Seconds.
            </h2>

            <p className="text-sm sm:text-base text-stone-200 leading-relaxed font-normal">
              No more endless browser tabs and confusing distances. Enter your starting point, available days, and budget to receive an optimal timeline with authentic local food spots, verified routes, and cultural etiquette.
            </p>

            <div className="pt-2 flex items-center gap-3 flex-wrap">
              <button
                type="button"
                onClick={() => onNavigate('trip-planner')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#D96B43] hover:bg-[#B8502B] text-white text-xs sm:text-sm font-bold shadow-lg transition-all cursor-pointer"
              >
                <span>{t(selectedLanguage, 'btnPlanAI', 'Launch AI Trip Planner')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('ai-guide')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 text-amber-100 text-xs sm:text-sm font-bold backdrop-blur-md transition-all cursor-pointer"
              >
                <Bot className="w-4 h-4 text-amber-300" />
                <span>{t(selectedLanguage, 'btnAskGuide', 'Talk to RAHI Guide')}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Local Food and Culture Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D96B43] uppercase tracking-wider mb-1">
              <UtensilsCrossed className="w-4 h-4" />
              <span>Taste the Real India</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#143224]">
              {t(selectedLanguage, 'foodTitle', 'India on a Plate – स्वाद भारत का')}
            </h2>
            <p className="text-xs sm:text-sm text-[#55695E] mt-1">
              {t(selectedLanguage, 'foodSubtitle', 'Authentic culinary secrets and traditional recipes across states')}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('food')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1B4332] hover:text-[#D96B43] transition-colors cursor-pointer"
          >
            <span>Explore All Regional Foods</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sampleFoods.map((food) => (
            <div
              key={food.id}
              className="bg-white rounded-2xl border border-[#E7DFD3] overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <span className="absolute top-2.5 left-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#1B4332] text-amber-200 uppercase">
                    {food.state}
                  </span>
                </div>
                <div className="p-4 space-y-1.5">
                  <div className="flex items-baseline justify-between gap-1">
                    <h3 className="font-serif font-bold text-base text-[#143224]">
                      {food.name}
                    </h3>
                  </div>
                  {food.hindiName && (
                    <p className="text-xs text-[#B8502B] font-medium">{food.hindiName}</p>
                  )}
                  <p className="text-xs text-[#55695E] line-clamp-2">
                    {food.description}
                  </p>
                </div>
              </div>
              <div className="p-4 pt-0 text-[11px] font-semibold text-[#B8502B]">
                Origin: {food.originRegion}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Why RAHI – राही Section */}
      <section className="bg-white py-16 border-t border-[#E7DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#D96B43] uppercase tracking-wider">
              Our Founding Mission
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#143224]">
              {t(selectedLanguage, 'whyTitle', 'Why Journey with RAHI – राही?')}
            </h2>
            <p className="text-xs sm:text-sm text-[#55695E] leading-relaxed">
              {t(selectedLanguage, 'whySubtitle', 'Solving the modern traveler’s dilemmas with geographic precision and authentic cultural storytelling.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-[#FAF7F2] p-6 rounded-3xl border border-[#E7DFD3] space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-[#FAF2EC] text-[#D96B43] flex items-center justify-center font-bold">
                <Gem className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#143224]">
                Zero Generic AI Hallucinations
              </h3>
              <p className="text-xs sm:text-sm text-[#55695E] leading-relaxed">
                Every destination in RAHI is verified with real coordinates, nearest train/flight access, and authentic historical context. No fabricated monuments.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 rounded-3xl border border-[#E7DFD3] space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-[#EBF3EE] text-[#1B4332] flex items-center justify-center font-bold">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#143224]">
                Geographically Sensible Routing
              </h3>
              <p className="text-xs sm:text-sm text-[#55695E] leading-relaxed">
                Our AI trip engine clusters destinations into cohesive geographic circuits so you never spend entire vacations stuck in ill-planned transfers.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 rounded-3xl border border-[#E7DFD3] space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-[#F4EBE5] text-[#B8502B] flex items-center justify-center font-bold">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#143224]">
                Rooted in Local Artisans & Food
              </h3>
              <p className="text-xs sm:text-sm text-[#55695E] leading-relaxed">
                We celebrate living heritage—from GI-tagged Silao Khaja and Mithila art to Haryanvi brassware and Amritsari handlooms—supporting local communities directly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
