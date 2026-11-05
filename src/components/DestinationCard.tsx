import React from 'react';
import { 
  MapPin, 
  Heart, 
  ExternalLink, 
  Calendar, 
  Train, 
  Plane, 
  Car, 
  Sparkles,
  Info,
  ChevronRight,
  Gem
} from 'lucide-react';
import { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
  isFav: boolean;
  onToggleFav: (id: string) => void;
  onOpenDetails: (destination: Destination) => void;
  onAskAI?: (destination: Destination) => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  isFav,
  onToggleFav,
  onOpenDetails,
  onAskAI,
}) => {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination.mapQuery)}`;

  return (
    <article className="group bg-white rounded-2xl border border-[#E7DFD3] overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      {/* Top Media Container */}
      <div>
        <div className="relative aspect-[16/10] overflow-hidden bg-[#ECE4D8]">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

          {/* Badges Overlay */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-1.5 flex-wrap">
              {destination.isHiddenGem ? (
                <span className="pointer-events-auto flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#D96B43] text-white shadow-sm tracking-wide">
                  <Gem className="w-3 h-3" />
                  Hidden Gem
                </span>
              ) : (
                <span className="pointer-events-auto flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#1B4332] text-amber-200 shadow-sm tracking-wide">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  Famous Landmark
                </span>
              )}
              <span className="pointer-events-auto text-[11px] font-semibold px-2 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[#143224] capitalize shadow-xs">
                {destination.category}
              </span>
            </div>

            {/* Favourites Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleFav(destination.id);
              }}
              className={`pointer-events-auto w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-md ${
                isFav
                  ? 'bg-rose-500 text-white scale-110 ring-2 ring-white'
                  : 'bg-white/85 backdrop-blur-xs text-[#3E5246] hover:bg-white hover:text-rose-500 hover:scale-105'
              }`}
              title={isFav ? 'Remove from favourites' : 'Save to favourites'}
              aria-label="Save to favourites"
            >
              <Heart className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
            </button>
          </div>

          {/* Location & Title overlay at bottom of photo */}
          <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
            <div className="flex items-center gap-1 text-xs text-amber-200 font-medium mb-1 drop-shadow-sm">
              <MapPin className="w-3.5 h-3.5" />
              <span>
                {destination.district}, <span className="uppercase tracking-wider font-bold">{destination.state}</span>
              </span>
            </div>
            <h3 className="font-serif text-xl font-bold leading-snug drop-shadow-md">
              {destination.name}
            </h3>
            {destination.hindiName && (
              <p className="text-xs text-stone-300 font-normal drop-shadow-xs">
                {destination.hindiName}
              </p>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5 space-y-3.5">
          {/* Tagline */}
          <p className="text-xs font-semibold text-[#B8502B] uppercase tracking-wide">
            {destination.tagline}
          </p>

          {/* Short description */}
          <p className="text-xs sm:text-sm text-[#44554C] leading-relaxed line-clamp-3">
            {destination.description}
          </p>

          {/* Cultural or Historical Significance Highlight Box */}
          <div className="bg-[#FAF6F0] border-l-3 border-[#D96B43] p-2.5 rounded-r-lg text-xs text-[#3E5246] space-y-1">
            <div className="font-bold text-[#143224] flex items-center gap-1">
              <span>Significance:</span>
            </div>
            <p className="line-clamp-2 leading-relaxed text-[#55695E]">
              {destination.significance}
            </p>
          </div>

          {/* Why Visit Highlight */}
          <div className="text-xs text-[#2D6A4F] bg-[#EBF3EE] p-2 rounded-lg font-medium flex items-start gap-1.5">
            <Sparkles className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#2D6A4F]" />
            <span className="line-clamp-2"><strong>Why Visit:</strong> {destination.whyVisit}</span>
          </div>

          {/* Travel & Best Season Highlights */}
          <div className="pt-2 border-t border-[#F0EAE1] space-y-1.5 text-xs text-[#55695E]">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#B8502B] shrink-0" />
              <span className="truncate"><strong>Best Season:</strong> {destination.bestSeason}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Train className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0" />
              <span className="truncate"><strong>Nearest Rail:</strong> {destination.travelInfo.nearestRailway}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-4 sm:p-5 pt-0 bg-white">
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#F0EAE1]">
          {/* View In-depth Details */}
          <button
            onClick={() => onOpenDetails(destination)}
            className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#F2EBE0] hover:bg-[#E8DFCE] text-[#143224] text-xs font-bold transition-colors cursor-pointer"
          >
            <Info className="w-3.5 h-3.5 text-[#1B4332]" />
            <span>Full Story</span>
          </button>

          {/* Google Maps Directions */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#1B4332] hover:bg-[#143224] text-amber-100 text-xs font-bold transition-all shadow-2xs hover:shadow cursor-pointer"
          >
            <span>Directions</span>
            <ExternalLink className="w-3 h-3 text-amber-300" />
          </a>
        </div>
      </div>
    </article>
  );
};
