import React, { useState } from 'react';
import { 
  X, 
  Heart, 
  Bookmark, 
  MapPin, 
  Trash2, 
  ExternalLink, 
  Calendar, 
  Compass, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Destination, GeneratedItinerary } from '../types';
import { DESTINATIONS } from '../data/destinations';

interface SavedDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedFavIds: string[];
  savedItineraries: GeneratedItinerary[];
  onRemoveFav: (id: string) => void;
  onRemoveItinerary: (id: string) => void;
  onOpenDestination: (destination: Destination) => void;
  onViewItinerary: (itinerary: GeneratedItinerary) => void;
  onPlanNewTrip: () => void;
}

export const SavedDrawer: React.FC<SavedDrawerProps> = ({
  isOpen,
  onClose,
  savedFavIds,
  savedItineraries,
  onRemoveFav,
  onRemoveItinerary,
  onOpenDestination,
  onViewItinerary,
  onPlanNewTrip,
}) => {
  const [activeTab, setActiveTab] = useState<'favourites' | 'itineraries'>('favourites');

  if (!isOpen) return null;

  const favDestinations = DESTINATIONS.filter((d) => savedFavIds.includes(d.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div 
        className="w-full max-w-xl bg-[#FAF7F2] h-full shadow-2xl border-l border-[#E7DFD3] flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#E7DFD3] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#FAF2EC] text-[#D96B43] flex items-center justify-center font-bold">
              <Bookmark className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl font-bold text-[#143224]">
                My Saved Travel Collection
              </h2>
              <p className="text-xs text-[#55695E]">Persisted securely in local storage</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#FAF7F2] text-[#55695E] hover:text-[#143224] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="px-5 pt-4 bg-[#FAF7F2] flex items-center gap-2">
          <button
            onClick={() => setActiveTab('favourites')}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'favourites'
                ? 'bg-white text-[#D96B43] shadow-xs border border-[#DDD3C3]'
                : 'text-[#55695E] hover:bg-[#F2ECE1]'
            }`}
          >
            <Heart className="w-3.5 h-3.5 fill-current text-[#D96B43]" />
            <span>Saved Places ({favDestinations.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('itineraries')}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'itineraries'
                ? 'bg-white text-[#1B4332] shadow-xs border border-[#DDD3C3]'
                : 'text-[#55695E] hover:bg-[#F2ECE1]'
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-[#1B4332]" />
            <span>Trip Itineraries ({savedItineraries.length})</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {activeTab === 'favourites' && (
            <div className="space-y-3">
              {favDestinations.length === 0 ? (
                <div className="py-16 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-stone-200/60 mx-auto flex items-center justify-center text-stone-500">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#143224]">
                    No Saved Destinations Yet
                  </h3>
                  <p className="text-xs text-[#6B7D72] max-w-xs mx-auto">
                    Click the heart icon on any destination card across Bihar or Haryana to keep your favorite spots organized.
                  </p>
                </div>
              ) : (
                favDestinations.map((destination) => (
                  <div
                    key={destination.id}
                    className="bg-white rounded-2xl p-3.5 border border-[#E7DFD3] shadow-2xs hover:shadow-xs transition-all flex items-center gap-3 justify-between"
                  >
                    <div 
                      onClick={() => {
                        onOpenDestination(destination);
                        onClose();
                      }}
                      className="flex items-center gap-3 cursor-pointer flex-1 min-w-0"
                    >
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-16 h-16 rounded-xl object-cover shrink-0"
                      />
                      <div className="min-w-0">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8502B]">
                          {destination.district}, {destination.state}
                        </span>
                        <h4 className="font-serif font-bold text-sm text-[#143224] truncate">
                          {destination.name}
                        </h4>
                        <p className="text-xs text-[#55695E] truncate">
                          {destination.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination.mapQuery)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-[#1B4332] hover:bg-[#F2ECE1] transition-colors"
                        title="Directions on Google Maps"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <button
                        onClick={() => onRemoveFav(destination.id)}
                        className="p-2 rounded-lg text-rose-500 hover:bg-rose-50 transition-colors cursor-pointer"
                        title="Remove from saved"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'itineraries' && (
            <div className="space-y-3">
              {savedItineraries.length === 0 ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-stone-200/60 mx-auto flex items-center justify-center text-stone-500">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#143224]">
                    No Saved Itineraries Yet
                  </h3>
                  <p className="text-xs text-[#6B7D72] max-w-xs mx-auto">
                    Generate an AI personalized travel route and click "Save Itinerary" to access your timelines anytime offline.
                  </p>
                  <button
                    onClick={() => {
                      onPlanNewTrip();
                      onClose();
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#1B4332] text-amber-200 text-xs font-bold cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Create My First Itinerary</span>
                  </button>
                </div>
              ) : (
                savedItineraries.map((itin) => (
                  <div
                    key={itin.id}
                    className="bg-white rounded-2xl p-4 border border-[#E7DFD3] shadow-2xs space-y-3"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FAF2EC] text-[#D96B43] uppercase tracking-wide">
                          {itin.durationDays} Days • {itin.state}
                        </span>
                        <h4 className="font-serif font-bold text-base text-[#143224] mt-1">
                          {itin.title}
                        </h4>
                        <p className="text-xs text-[#55695E] line-clamp-2 mt-1">
                          {itin.summary}
                        </p>
                      </div>

                      <button
                        onClick={() => onRemoveItinerary(itin.id)}
                        className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50 transition-colors shrink-0 cursor-pointer"
                        title="Delete itinerary"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="pt-2 border-t border-[#F0EAE1] flex items-center justify-between text-xs">
                      <span className="text-[11px] font-bold text-[#143224]">
                        Est. Budget: {itin.budgetBreakdown.totalEstimated}
                      </span>
                      <button
                        onClick={() => {
                          onViewItinerary(itin);
                          onClose();
                        }}
                        className="inline-flex items-center gap-1 font-bold text-[#1B4332] hover:text-[#D96B43] cursor-pointer"
                      >
                        <span>Open Timeline</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-[#E7DFD3] text-center">
          <button
            onClick={() => {
              onPlanNewTrip();
              onClose();
            }}
            className="w-full py-2.5 rounded-xl bg-[#1B4332] hover:bg-[#143224] text-amber-100 text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            Launch AI Trip Planner
          </button>
        </div>
      </div>
    </div>
  );
};
