import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Filter, 
  Gem, 
  Sparkles, 
  RotateCcw,
  Compass
} from 'lucide-react';
import { Destination } from '../types';
import { DESTINATIONS } from '../data/destinations';
import { DestinationCard } from './DestinationCard';

interface DestinationsGridProps {
  initialSearchQuery?: string;
  initialStateFilter?: string;
  favourites: string[];
  onToggleFav: (id: string) => void;
  onOpenDetails: (destination: Destination) => void;
}

export const DestinationsGrid: React.FC<DestinationsGridProps> = ({
  initialSearchQuery = '',
  initialStateFilter = 'all',
  favourites,
  onToggleFav,
  onOpenDetails,
}) => {
  const [query, setQuery] = useState(initialSearchQuery);
  const [selectedState, setSelectedState] = useState(initialStateFilter);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [onlyHiddenGems, setOnlyHiddenGems] = useState(false);

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'heritage', label: 'Heritage' },
    { id: 'nature', label: 'Nature' },
    { id: 'waterfall', label: 'Waterfalls' },
    { id: 'spirituality', label: 'Spirituality' },
    { id: 'archaeology', label: 'Archaeology' },
    { id: 'wildlife', label: 'Wildlife' },
  ];

  const filtered = DESTINATIONS.filter((d) => {
    if (selectedState !== 'all' && d.state !== selectedState) return false;
    if (selectedCategory !== 'all' && d.category !== selectedCategory) return false;
    if (onlyHiddenGems && !d.isHiddenGem) return false;

    if (query.trim()) {
      const q = query.toLowerCase();
      const matchName = d.name.toLowerCase().includes(q);
      const matchDistrict = d.district.toLowerCase().includes(q);
      const matchDesc = d.description.toLowerCase().includes(q);
      const matchTags = d.tags.some((t) => t.toLowerCase().includes(q));
      if (!matchName && !matchDistrict && !matchDesc && !matchTags) return false;
    }

    return true;
  });

  const handleReset = () => {
    setQuery('');
    setSelectedState('all');
    setSelectedCategory('all');
    setOnlyHiddenGems(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
      {/* Page Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D96B43] uppercase tracking-wider">
          <Compass className="w-4 h-4" />
          <span>Curated Destination Directory</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#143224]">
          Explore Destinations Across India
        </h1>
        <p className="text-xs sm:text-sm text-[#55695E] max-w-2xl">
          Search, filter by state, or discover offbeat sanctuaries with full travel logistics and Google Maps directions.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-3xl p-5 border border-[#E7DFD3] shadow-xs space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
          {/* Keyword Search */}
          <div className="sm:col-span-5 relative">
            <Search className="w-4 h-4 text-[#7A8B80] absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by monument, district, or keyword..."
              className="w-full pl-10 pr-3 py-2.5 rounded-2xl bg-[#FAF7F2] border border-[#DDD3C3] text-xs sm:text-sm text-[#143224] focus:outline-none focus:ring-2 focus:ring-[#D96B43]/30"
            />
          </div>

          {/* State Filter */}
          <div className="sm:col-span-3">
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full px-3 py-2.5 rounded-2xl bg-[#FAF7F2] border border-[#DDD3C3] text-xs sm:text-sm font-semibold text-[#143224] focus:outline-none cursor-pointer"
            >
              <option value="all">All States ({DESTINATIONS.length})</option>
              <option value="bihar">Bihar (13 Spots)</option>
              <option value="haryana">Haryana (9 Spots)</option>
            </select>
          </div>

          {/* Hidden Gem Checkbox */}
          <div className="sm:col-span-4 flex items-center justify-between sm:justify-end gap-3">
            <label className="flex items-center gap-2 text-xs font-bold text-[#143224] cursor-pointer select-none">
              <input
                type="checkbox"
                checked={onlyHiddenGems}
                onChange={(e) => setOnlyHiddenGems(e.target.checked)}
                className="w-4 h-4 accent-[#D96B43] rounded cursor-pointer"
              />
              <span className="flex items-center gap-1 text-[#D96B43]">
                <Gem className="w-3.5 h-3.5" />
                Only Hidden Gems
              </span>
            </label>

            {(query || selectedState !== 'all' || selectedCategory !== 'all' || onlyHiddenGems) && (
              <button
                onClick={handleReset}
                className="p-2 rounded-xl text-[#7A8B80] hover:text-[#143224] hover:bg-[#FAF7F2] transition-colors cursor-pointer"
                title="Reset filters"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 border-t border-[#F0EAE1]">
          {categories.map((cat) => {
            const active = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  active
                    ? 'bg-[#1B4332] text-amber-100 shadow-2xs font-bold'
                    : 'bg-[#FAF7F2] text-[#55695E] border border-[#E7DFD3] hover:bg-[#F2ECE1]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-[#55695E]">
        <span>
          Showing <strong>{filtered.length}</strong> of {DESTINATIONS.length} verified destinations
        </span>
        {selectedState !== 'all' && (
          <span className="capitalize font-bold text-[#D96B43]">
            Filtered to {selectedState}
          </span>
        )}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-[#E7DFD3] space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#FAF2EC] text-[#D96B43] mx-auto flex items-center justify-center">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl font-bold text-[#143224]">
            No Destinations Found
          </h3>
          <p className="text-xs sm:text-sm text-[#55695E] max-w-md mx-auto">
            We couldn't find any destinations matching "{query}". Try checking your spelling or clearing the filters to view all places.
          </p>
          <button
            onClick={handleReset}
            className="px-5 py-2.5 rounded-xl bg-[#1B4332] text-amber-100 text-xs font-bold cursor-pointer"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((destination) => (
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
  );
};
