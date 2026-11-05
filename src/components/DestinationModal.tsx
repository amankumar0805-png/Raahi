import React from 'react';
import { 
  X, 
  MapPin, 
  Heart, 
  ExternalLink, 
  Calendar, 
  Train, 
  Plane, 
  Car, 
  Sparkles, 
  Bot, 
  Compass,
  Share2,
  Check,
  Gem
} from 'lucide-react';
import { Destination } from '../types';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  isFav: boolean;
  onToggleFav: (id: string) => void;
  onPlanTripToDestination: (destination: Destination) => void;
  onAskAIAboutDestination: (destination: Destination) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  onClose,
  isFav,
  onToggleFav,
  onPlanTripToDestination,
  onAskAIAboutDestination,
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!destination) return null;

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination.mapQuery)}`;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${destination.name} - ExploreLocal AI`,
        text: destination.tagline,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${destination.name} in ${destination.district}, ${destination.state}: ${destination.tagline}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#E7DFD3] overflow-hidden my-6 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Close */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          <button
            onClick={handleShare}
            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-[#1B4332] hover:bg-white shadow-md flex items-center justify-center transition-all cursor-pointer"
            title="Share destination"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
          </button>
          <button
            onClick={() => onToggleFav(destination.id)}
            className={`w-10 h-10 rounded-full shadow-md flex items-center justify-center transition-all cursor-pointer ${
              isFav ? 'bg-rose-500 text-white' : 'bg-white/90 backdrop-blur-md text-[#3E5246] hover:bg-white hover:text-rose-500'
            }`}
            title={isFav ? 'Remove favourite' : 'Save favourite'}
          >
            <Heart className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
          </button>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/75 shadow-md flex items-center justify-center transition-all cursor-pointer"
            title="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto flex-1">
          {/* Hero Banner */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-stone-900">
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-black/40 to-black/20" />

            <div className="absolute bottom-4 left-6 right-6">
              <div className="flex items-center gap-2 flex-wrap mb-2">
                {destination.isHiddenGem ? (
                  <span className="flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-[#D96B43] text-white shadow-sm">
                    <Gem className="w-3.5 h-3.5" />
                    Verified Hidden Gem
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-[#1B4332] text-amber-200 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    World Famous Landmark
                  </span>
                )}
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/90 text-[#143224] capitalize">
                  {destination.category}
                </span>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-100/90 text-amber-900 uppercase tracking-wide">
                  {destination.state}
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#143224] drop-shadow-xs">
                {destination.name}
              </h2>
              {destination.hindiName && (
                <p className="text-sm sm:text-base text-[#55695E] font-medium">
                  {destination.hindiName} • {destination.district} District
                </p>
              )}
            </div>
          </div>

          {/* Details Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Tagline */}
            <div className="border-l-4 border-[#D96B43] pl-4 py-1">
              <p className="text-sm sm:text-base font-serif italic text-[#8F3B1A]">
                "{destination.tagline}"
              </p>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-[#143224]">Overview & Architecture</h3>
              <p className="text-sm sm:text-base text-[#3E5246] leading-relaxed">
                {destination.description}
              </p>
            </div>

            {/* Cultural & Historical Significance */}
            <div className="bg-[#FAF2EC] border border-[#F0D5C7] rounded-2xl p-5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B8502B]">
                <Sparkles className="w-4 h-4" />
                <span>Historical & Cultural Significance</span>
              </div>
              <p className="text-sm sm:text-base text-[#402C23] leading-relaxed">
                {destination.significance}
              </p>
            </div>

            {/* Why Visit */}
            <div className="bg-[#EBF3EE] border border-[#CFE2D6] rounded-2xl p-5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1B4332]">
                <Sparkles className="w-4 h-4" />
                <span>Why Experience This Place</span>
              </div>
              <p className="text-sm sm:text-base text-[#1E3E2F] leading-relaxed">
                {destination.whyVisit}
              </p>
            </div>

            {/* Travel Logistics Grid */}
            <div className="bg-white border border-[#E7DFD3] rounded-2xl p-5 space-y-4">
              <h3 className="font-serif text-base font-bold text-[#143224] flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#D96B43]" />
                <span>Travel & Accessibility Logistics</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
                <div className="bg-[#FAF7F2] p-3 rounded-xl space-y-1 border border-[#F0EBE1]">
                  <div className="flex items-center gap-1.5 font-bold text-[#1B4332]">
                    <Plane className="w-4 h-4 text-[#2D6A4F]" />
                    <span>Nearest Airport</span>
                  </div>
                  <p className="text-[#55695E]">{destination.travelInfo.nearestAirport}</p>
                </div>

                <div className="bg-[#FAF7F2] p-3 rounded-xl space-y-1 border border-[#F0EBE1]">
                  <div className="flex items-center gap-1.5 font-bold text-[#1B4332]">
                    <Train className="w-4 h-4 text-[#2D6A4F]" />
                    <span>Nearest Railway</span>
                  </div>
                  <p className="text-[#55695E]">{destination.travelInfo.nearestRailway}</p>
                </div>

                <div className="bg-[#FAF7F2] p-3 rounded-xl space-y-1 border border-[#F0EBE1]">
                  <div className="flex items-center gap-1.5 font-bold text-[#1B4332]">
                    <Car className="w-4 h-4 text-[#2D6A4F]" />
                    <span>Road Access</span>
                  </div>
                  <p className="text-[#55695E]">{destination.travelInfo.roadAccess}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-[#F0EBE1] text-xs sm:text-sm text-[#44554C]">
                <Calendar className="w-4 h-4 text-[#D96B43] shrink-0" />
                <span><strong>Recommended Season:</strong> {destination.bestSeason}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex items-center gap-2 flex-wrap pt-2">
              {destination.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-[#F2EBE0] text-[#44554C] font-medium border border-[#E7DFD3]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Bar Footer */}
        <div className="p-4 sm:p-5 bg-white border-t border-[#E7DFD3] flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#F2ECE1] border border-[#DDD3C3] text-[#143224] text-xs sm:text-sm font-bold transition-all cursor-pointer"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="w-4 h-4 text-[#D96B43]" />
          </a>

          <div className="w-full sm:w-auto flex items-center gap-2">
            <button
              onClick={() => {
                onAskAIAboutDestination(destination);
                onClose();
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#EBF3EE] hover:bg-[#DCEEE3] text-[#1B4332] text-xs sm:text-sm font-bold transition-all cursor-pointer"
            >
              <Bot className="w-4 h-4 text-[#2D6A4F]" />
              <span>Ask AI Guide</span>
            </button>

            <button
              onClick={() => {
                onPlanTripToDestination(destination);
                onClose();
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#1B4332] hover:bg-[#143224] text-amber-100 text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Generate Trip Plan</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
