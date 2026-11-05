import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Users, 
  Wallet, 
  Compass, 
  Clock, 
  UtensilsCrossed, 
  Info, 
  ExternalLink, 
  Bookmark, 
  RotateCw, 
  Check, 
  Share2, 
  ArrowRight,
  Copy,
  ChevronDown
} from 'lucide-react';
import { GeneratedItinerary, ItineraryRequest, LanguageCode } from '../types';
import { INDIAN_STATES } from '../data/states';
import { t } from '../utils/i18n';

interface TripPlannerProps {
  selectedLanguage: LanguageCode;
  initialState?: string;
  initialDestinationName?: string;
  onSaveItinerary: (itinerary: GeneratedItinerary) => void;
  savedItineraries: GeneratedItinerary[];
  onOpenDetailsByName: (name: string) => void;
}

export const TripPlanner: React.FC<TripPlannerProps> = ({
  selectedLanguage,
  initialState = 'bihar',
  initialDestinationName,
  onSaveItinerary,
  savedItineraries,
  onOpenDetailsByName,
}) => {
  const [startingLocation, setStartingLocation] = useState('Patna / Delhi');
  const [destinationState, setDestinationState] = useState(initialState || 'bihar');
  const [district, setDistrict] = useState(initialDestinationName ? `Near ${initialDestinationName}` : '');
  const [budget, setBudget] = useState<'budget' | 'moderate' | 'luxury'>('moderate');
  const [travellers, setTravellers] = useState(2);
  const [duration, setDuration] = useState(3);
  const [travelType, setTravelType] = useState<'solo' | 'family' | 'friends' | 'heritage' | 'nature' | 'adventure'>('family');
  const [interests, setInterests] = useState<string[]>([
    'Ancient Heritage',
    'Hidden Waterfalls & Nature',
    'Authentic Regional Cuisine',
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [itinerary, setItinerary] = useState<GeneratedItinerary | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSaved, setIsSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  const interestOptions = [
    'Ancient Heritage',
    'Hidden Waterfalls & Nature',
    'Spiritual & Sacred Sites',
    'Authentic Regional Cuisine',
    'Rural Village & Haveli Stays',
    'Handloom & Folk Crafts',
    'Wildlife & Bird Sanctuaries',
    'Photography & Sunset Panoramas',
  ];

  const travelTypeOptions: Array<{ id: any; label: string; desc: string }> = [
    { id: 'family', label: 'Family Journey', desc: 'Comfortable pacing & all-age comfort' },
    { id: 'heritage', label: 'Heritage & Lore', desc: 'Deep dive into ancient monuments' },
    { id: 'nature', label: 'Nature & Hidden', desc: 'Waterfalls, lakes & scenic trails' },
    { id: 'solo', label: 'Solo Explorer', desc: 'Mindful, budget-conscious exploration' },
    { id: 'friends', label: 'Group of Friends', desc: 'Active discovery & local food crawls' },
    { id: 'adventure', label: 'Rustic Adventure', desc: 'Offbeat canyons & rural experiences' },
  ];

  const loadingSteps = [
    'Consulting verified state geography & road logistics...',
    'Analyzing travel time to prevent illogical criss-crossing...',
    'Curating authentic local food pairings & culinary secrets...',
    'Harmonizing iconic monuments with tranquil hidden gems...',
    'Synthesizing final day-by-day timeline with Gemini AI...',
  ];

  const toggleInterest = (item: string) => {
    if (interests.includes(item)) {
      if (interests.length > 1) {
        setInterests(interests.filter((i) => i !== item));
      }
    } else {
      setInterests([...interests, item]);
    }
  };

  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsLoading(true);
    setErrorMsg(null);
    setIsSaved(false);
    setLoadingStep(0);

    const stepInterval = setInterval(() => {
      setLoadingStep((prev) => (prev < loadingSteps.length - 1 ? prev + 1 : prev));
    }, 1100);

    try {
      const response = await fetch('/api/itinerary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          startingLocation,
          state: destinationState,
          district: district.trim() || undefined,
          budget,
          travellers,
          duration,
          interests,
          travelType,
          language: selectedLanguage, // Send current language to backend for multilingual AI itinerary
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      const data: GeneratedItinerary = await response.json();
      setItinerary(data);

      const exists = savedItineraries.some((item) => item.id === data.id);
      setIsSaved(exists);
    } catch (err: any) {
      console.error('Itinerary generation failed:', err);
      setErrorMsg(
        'Could not complete itinerary generation via API. A safe synthesized fallback is ready to view.'
      );
    } finally {
      clearInterval(stepInterval);
      setIsLoading(false);
    }
  };

  const handleSaveItinerary = () => {
    if (!itinerary) return;
    onSaveItinerary(itinerary);
    setIsSaved(true);
  };

  const handleCopyItinerary = () => {
    if (!itinerary) return;
    const text = `RAHI Travel Plan: ${itinerary.title}\nState: ${itinerary.state}\nDuration: ${itinerary.durationDays} Days\nEstimated Budget: ${itinerary.budgetBreakdown.totalEstimated}\n\nSummary:\n${itinerary.summary}\n\nDays:\n` +
      itinerary.days.map(d => `Day ${d.day} (${d.title}):\n• Morning: ${d.morning.title} - ${d.morning.description}\n• Afternoon: ${d.afternoon.title} - ${d.afternoon.description}\n• Evening: ${d.evening.title} - ${d.evening.description}\n• Food: ${d.localCuisineToTry}\n`).join('\n');

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const selectedStateObj = INDIAN_STATES.find(s => s.id === destinationState) || INDIAN_STATES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF1EC] border border-[#F0D5C9] text-[#D96B43] text-xs font-bold tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-[#D96B43]" />
          <span>{t(selectedLanguage, 'plannerTitle', 'RAHI AI Smart Trip Planner')}</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#143224] tracking-tight">
          {t(selectedLanguage, 'plannerTitle', 'AI Smart Trip Planner')}
        </h1>
        <p className="text-[#55695E] text-sm sm:text-base leading-relaxed">
          {t(selectedLanguage, 'plannerSubtitle', 'Enter your starting point, days, and budget to generate a geographically sensible daily timeline with zero routing errors.')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Planner Input Form */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-[#E7DFD3] shadow-sm space-y-6">
          <div className="border-b border-[#F0EAE1] pb-4 flex items-center justify-between">
            <div>
              <h2 className="font-serif text-xl font-bold text-[#143224]">Configure Your Journey</h2>
              <p className="text-xs text-[#6B7D72]">Verified pan-Indian destination intelligence</p>
            </div>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#FAF2EC] text-[#D96B43] border border-[#F0D5C9]">
              RAHI AI
            </span>
          </div>

          <form onSubmit={handleGenerate} className="space-y-5">
            {/* Target State Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1B4332] mb-2">
                1. {t(selectedLanguage, 'targetState', 'Destination State')}
              </label>
              
              <div className="relative">
                <select
                  value={destinationState}
                  onChange={(e) => setDestinationState(e.target.value)}
                  className="w-full p-3 rounded-2xl border border-[#DDD3C3] bg-[#FAF7F2] text-xs sm:text-sm font-bold text-[#143224] focus:outline-none focus:ring-2 focus:ring-[#1B4332]/20 cursor-pointer"
                >
                  <optgroup label="Priority Focus States">
                    <option value="bihar">Bihar (Nalanda, Bodh Gaya, Kakolat, Valmiki)</option>
                    <option value="haryana">Haryana (Kurukshetra, Morni Hills, Pinjore, Rakhigarhi)</option>
                  </optgroup>
                  <optgroup label="Pan-India States">
                    {INDIAN_STATES.filter(s => s.id !== 'bihar' && s.id !== 'haryana').map(st => (
                      <option key={st.id} value={st.id}>
                        {st.name} ({st.hindiName}) - {st.famousAttraction}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>
            </div>

            {/* Starting Location & District Focus */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1B4332] mb-1.5">
                  {t(selectedLanguage, 'startingPoint', 'Starting Point')}
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-[#B8502B] absolute left-3 top-3" />
                  <input
                    type="text"
                    value={startingLocation}
                    onChange={(e) => setStartingLocation(e.target.value)}
                    placeholder="e.g. Delhi, Patna, Kolkata"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#DDD3C3] bg-[#FAF7F2] text-xs sm:text-sm text-[#143224] focus:outline-none focus:ring-2 focus:ring-[#D96B43]/30"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1B4332] mb-1.5">
                  District Focus (Optional)
                </label>
                <input
                  type="text"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  placeholder={`e.g. ${selectedStateObj.capital}`}
                  className="w-full px-3 py-2.5 rounded-xl border border-[#DDD3C3] bg-[#FAF7F2] text-xs sm:text-sm text-[#143224] focus:outline-none focus:ring-2 focus:ring-[#D96B43]/30"
                />
              </div>
            </div>

            {/* Duration and Number of Travellers */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1B4332] mb-1.5">
                  {t(selectedLanguage, 'durationDays', 'Trip Duration (Days)')}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="1"
                    max="7"
                    value={duration}
                    onChange={(e) => setDuration(parseInt(e.target.value, 10))}
                    className="w-full accent-[#D96B43] cursor-pointer"
                  />
                  <span className="w-10 text-center font-bold text-sm bg-[#FAF2EC] text-[#D96B43] py-1 rounded-lg border border-[#F0D5C9]">
                    {duration}d
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1B4332] mb-1.5">
                  {t(selectedLanguage, 'travellersCount', 'Number of Travellers')}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="1"
                    max="15"
                    value={travellers}
                    onChange={(e) => setTravellers(Math.max(1, parseInt(e.target.value, 10) || 1))}
                    className="w-full px-3 py-2 rounded-xl border border-[#DDD3C3] bg-[#FAF7F2] text-xs sm:text-sm font-bold text-[#143224] text-center focus:outline-none"
                  />
                  <span className="text-xs text-[#6B7D72] shrink-0 font-medium">people</span>
                </div>
              </div>
            </div>

            {/* Travel Budget Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1B4332] mb-1.5">
                {t(selectedLanguage, 'budgetTier', 'Budget Tier')}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'budget', label: t(selectedLanguage, 'budgetLow', 'Budget (₹)'), sub: 'Homestays & trains' },
                  { id: 'moderate', label: t(selectedLanguage, 'budgetMid', 'Moderate (₹₹)'), sub: 'Heritage hotels & cabs' },
                  { id: 'luxury', label: t(selectedLanguage, 'budgetHigh', 'Luxury (₹₹₹)'), sub: 'Top resorts & private guides' },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setBudget(tier.id as any)}
                    className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                      budget === tier.id
                        ? 'bg-[#1B4332] text-white border-[#1B4332] shadow-xs'
                        : 'bg-[#FAF7F2] text-[#44554C] border-[#E7DFD3] hover:bg-[#F2ECE1]'
                    }`}
                  >
                    <div className="font-bold text-xs">{tier.label}</div>
                    <div className={`text-[10px] mt-0.5 ${budget === tier.id ? 'text-amber-200' : 'text-[#7A8B80]'}`}>
                      {tier.sub}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Travel Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1B4332] mb-1.5">
                {t(selectedLanguage, 'travelStyle', 'Travel Style & Pace')}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {travelTypeOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setTravelType(opt.id)}
                    className={`p-2 rounded-xl border text-left transition-all cursor-pointer ${
                      travelType === opt.id
                        ? 'bg-[#FAF2EC] border-[#D96B43] text-[#143224] ring-1 ring-[#D96B43]'
                        : 'bg-[#FAF7F2] border-[#E7DFD3] text-[#44554C] hover:bg-[#F2ECE1]'
                    }`}
                  >
                    <div className="font-bold text-xs">{opt.label}</div>
                    <div className="text-[10px] text-[#7A8B80] truncate">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Travel Interests (Multi-select) */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1B4332] mb-1.5">
                {t(selectedLanguage, 'travelInterests', 'Travel Interests')}
              </label>
              <div className="flex flex-wrap gap-1.5">
                {interestOptions.map((item) => {
                  const active = interests.includes(item);
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleInterest(item)}
                      className={`text-xs px-2.5 py-1.5 rounded-lg border transition-all cursor-pointer ${
                        active
                          ? 'bg-[#D96B43] text-white border-[#D96B43] font-semibold'
                          : 'bg-[#FAF7F2] text-[#55695E] border-[#DDD3C3] hover:bg-[#F2ECE1]'
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3.5 px-4 rounded-2xl text-amber-100 font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer ${
                isLoading
                  ? 'bg-[#2D6A4F] cursor-wait'
                  : 'bg-[#1B4332] hover:bg-[#143224] hover:shadow-lg'
              }`}
            >
              {isLoading ? (
                <>
                  <RotateCw className="w-4 h-4 text-amber-300 animate-spin" />
                  <span>Synthesizing Authentic Route...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>{t(selectedLanguage, 'btnGenerateItinerary', 'Generate Personalized Itinerary')}</span>
                </>
              )}
            </button>
          </form>

          {/* Prompt / API notice */}
          <div className="text-[11px] text-[#7A8B80] bg-[#FAF7F2] p-3 rounded-xl border border-[#F0EBE1] flex items-start gap-2">
            <Info className="w-3.5 h-3.5 text-[#B8502B] shrink-0 mt-0.5" />
            <span>
              RAHI – राही utilizes server-side Gemini AI models with geographic validation to prevent illogical routes.
            </span>
          </div>
        </div>

        {/* Itinerary Output Area */}
        <div className="lg:col-span-7">
          {isLoading && (
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E7DFD3] shadow-sm text-center space-y-6">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-[#1B4332] to-[#2D6A4F] flex items-center justify-center text-amber-200 shadow-md">
                <Sparkles className="w-8 h-8 text-amber-300 animate-pulse" />
              </div>
              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="font-serif text-2xl font-bold text-[#143224]">
                  Crafting Your {selectedStateObj.name} Journey
                </h3>
                <p className="text-xs text-[#55695E]">
                  Balancing iconic landmarks with quiet uncommercialized retreats
                </p>
              </div>

              {/* Step indicator */}
              <div className="max-w-md mx-auto bg-[#FAF7F2] p-4 rounded-2xl border border-[#F0EAE1] text-xs text-[#2D6A4F] font-semibold flex items-center justify-center gap-2">
                <RotateCw className="w-3.5 h-3.5 animate-spin text-[#D96B43]" />
                <span>{loadingSteps[loadingStep]}</span>
              </div>
            </div>
          )}

          {!isLoading && !itinerary && (
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E7DFD3] shadow-sm text-center space-y-6">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#FAF2EC] text-[#D96B43] flex items-center justify-center">
                <Compass className="w-8 h-8" />
              </div>
              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="font-serif text-2xl font-bold text-[#143224]">
                  Your Custom Timeline Will Appear Here
                </h3>
                <p className="text-xs sm:text-sm text-[#55695E] leading-relaxed">
                  Configure your starting point, days, and interests on the left to receive a comprehensive day-by-day plan with timings, food recommendations, and map routes.
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleGenerate()}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FAF2EC] hover:bg-[#F5E5DC] text-[#B8502B] text-xs font-bold border border-[#F0D5C9] transition-all cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Generate Recommended 3-Day Plan for {selectedStateObj.name}</span>
                </button>
              </div>
            </div>
          )}

          {!isLoading && itinerary && (
            <div className="space-y-6">
              {/* Itinerary Header Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E7DFD3] shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#F0EAE1] pb-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FAF2EC] text-[#D96B43] border border-[#F0D5C9]">
                      {itinerary.durationDays} Days • {itinerary.state}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#143224] mt-2">
                      {itinerary.title}
                    </h2>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={handleCopyItinerary}
                      className="p-2.5 rounded-xl bg-[#FAF7F2] text-[#1B4332] border border-[#DDD3C3] hover:bg-[#F2ECE1] transition-all cursor-pointer flex items-center gap-1 text-xs font-bold"
                      title="Copy Itinerary"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      <span className="hidden sm:inline">{copied ? 'Copied' : t(selectedLanguage, 'btnCopyItinerary', 'Copy')}</span>
                    </button>
                    
                    <button
                      type="button"
                      onClick={handleSaveItinerary}
                      className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs ${
                        isSaved
                          ? 'bg-emerald-700 text-white'
                          : 'bg-[#1B4332] text-amber-100 hover:bg-[#143224]'
                      }`}
                    >
                      {isSaved ? <Check className="w-3.5 h-3.5" /> : <Bookmark className="w-3.5 h-3.5 text-amber-300" />}
                      <span>{isSaved ? t(selectedLanguage, 'savedBtn', 'Saved') : t(selectedLanguage, 'btnSaveItinerary', 'Save Itinerary')}</span>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => handleGenerate()}
                      className="p-2.5 rounded-xl bg-[#FAF7F2] text-[#55695E] border border-[#DDD3C3] hover:bg-[#F2ECE1] transition-all cursor-pointer"
                      title="Regenerate Itinerary"
                    >
                      <RotateCw className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <p className="text-sm text-[#44554C] leading-relaxed">
                  {itinerary.summary}
                </p>

                {/* Quick Spec Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-xs">
                  <div className="bg-[#FAF7F2] p-2.5 rounded-xl border border-[#F0EBE1]">
                    <span className="text-[10px] text-[#7A8B80] uppercase font-bold block">Pacing</span>
                    <span className="font-bold text-[#143224] capitalize">{itinerary.travelType}</span>
                  </div>
                  <div className="bg-[#FAF7F2] p-2.5 rounded-xl border border-[#F0EBE1]">
                    <span className="text-[10px] text-[#7A8B80] uppercase font-bold block">Travellers</span>
                    <span className="font-bold text-[#143224]">{itinerary.travellersCount} Person(s)</span>
                  </div>
                  <div className="bg-[#FAF7F2] p-2.5 rounded-xl border border-[#F0EBE1]">
                    <span className="text-[10px] text-[#7A8B80] uppercase font-bold block">Budget Level</span>
                    <span className="font-bold text-[#143224] capitalize">{itinerary.budgetLevel}</span>
                  </div>
                  <div className="bg-[#FAF7F2] p-2.5 rounded-xl border border-[#F0EBE1]">
                    <span className="text-[10px] text-[#7A8B80] uppercase font-bold block">Total Est. Cost</span>
                    <span className="font-bold text-[#D96B43]">{itinerary.budgetBreakdown.totalEstimated}</span>
                  </div>
                </div>
              </div>

              {/* Day-by-day Timeline */}
              <div className="space-y-5">
                {itinerary.days.map((dayItem) => (
                  <div
                    key={dayItem.day}
                    className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E7DFD3] shadow-xs space-y-5"
                  >
                    {/* Day Title Bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F0EAE1] pb-3">
                      <div className="flex items-center gap-3">
                        <span className="w-9 h-9 rounded-xl bg-[#1B4332] text-amber-200 font-bold text-sm flex items-center justify-center shrink-0">
                          D{dayItem.day}
                        </span>
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-[#143224]">
                          {dayItem.title}
                        </h3>
                      </div>
                      <div className="text-xs text-[#55695E] bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#E7DFD3] w-fit">
                        Est. Day Spend: <strong>{dayItem.approxDailyExpensePerPerson}</strong>
                      </div>
                    </div>

                    {/* Timeline activities (Morning, Afternoon, Evening) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Morning */}
                      <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#F0EAE1] flex flex-col justify-between space-y-3">
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs text-[#B8502B] font-bold">
                            <span className="uppercase tracking-wider">{t(selectedLanguage, 'morning', 'Morning')}</span>
                            <span className="text-[11px] font-mono font-normal text-[#7A8B80]">{dayItem.morning.time}</span>
                          </div>
                          <h4 className="font-serif font-bold text-sm text-[#143224] leading-snug">
                            {dayItem.morning.title}
                          </h4>
                          <p className="text-xs text-[#55695E] leading-relaxed">
                            {dayItem.morning.description}
                          </p>
                          {dayItem.morning.practicalTip && (
                            <p className="text-[11px] text-[#2D6A4F] bg-[#EBF3EE] p-2 rounded-lg font-medium">
                              💡 {dayItem.morning.practicalTip}
                            </p>
                          )}
                        </div>

                        {dayItem.morning.mapQuery && (
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dayItem.morning.mapQuery)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1B4332] hover:text-[#D96B43] transition-colors"
                          >
                            <span>View on Maps</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>

                      {/* Afternoon */}
                      <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#F0EAE1] flex flex-col justify-between space-y-3">
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs text-[#B8502B] font-bold">
                            <span className="uppercase tracking-wider">{t(selectedLanguage, 'afternoon', 'Afternoon')}</span>
                            <span className="text-[11px] font-mono font-normal text-[#7A8B80]">{dayItem.afternoon.time}</span>
                          </div>
                          <h4 className="font-serif font-bold text-sm text-[#143224] leading-snug">
                            {dayItem.afternoon.title}
                          </h4>
                          <p className="text-xs text-[#55695E] leading-relaxed">
                            {dayItem.afternoon.description}
                          </p>
                          {dayItem.afternoon.localFoodTip && (
                            <p className="text-[11px] text-[#B8502B] bg-[#FAF2EC] p-2 rounded-lg font-medium">
                              🍽️ {dayItem.afternoon.localFoodTip}
                            </p>
                          )}
                        </div>

                        {dayItem.afternoon.mapQuery && (
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dayItem.afternoon.mapQuery)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1B4332] hover:text-[#D96B43] transition-colors"
                          >
                            <span>View on Maps</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>

                      {/* Evening */}
                      <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#F0EAE1] flex flex-col justify-between space-y-3">
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs text-[#B8502B] font-bold">
                            <span className="uppercase tracking-wider">{t(selectedLanguage, 'evening', 'Evening')}</span>
                            <span className="text-[11px] font-mono font-normal text-[#7A8B80]">{dayItem.evening.time}</span>
                          </div>
                          <h4 className="font-serif font-bold text-sm text-[#143224] leading-snug">
                            {dayItem.evening.title}
                          </h4>
                          <p className="text-xs text-[#55695E] leading-relaxed">
                            {dayItem.evening.description}
                          </p>
                          {dayItem.evening.practicalTip && (
                            <p className="text-[11px] text-[#2D6A4F] bg-[#EBF3EE] p-2 rounded-lg font-medium">
                              🌅 {dayItem.evening.practicalTip}
                            </p>
                          )}
                        </div>

                        {dayItem.evening.mapQuery && (
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dayItem.evening.mapQuery)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1B4332] hover:text-[#D96B43] transition-colors"
                          >
                            <span>View on Maps</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Daily Food Spotlight */}
                    <div className="bg-[#FAF2EC] border border-[#F0D5C7] rounded-xl p-3 flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2">
                        <UtensilsCrossed className="w-4 h-4 text-[#D96B43] shrink-0" />
                        <span className="font-bold text-[#402C23]">{t(selectedLanguage, 'dailyFoodTip', 'Recommended Regional Meal')}:</span>
                        <span className="text-[#8F3B1A] font-semibold">{dayItem.localCuisineToTry}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Budget Breakdown & Logistics Notes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Budget Details */}
                <div className="bg-white rounded-3xl p-6 border border-[#E7DFD3] space-y-4">
                  <h3 className="font-serif text-lg font-bold text-[#143224] flex items-center gap-2">
                    <Wallet className="w-4 h-4 text-[#D96B43]" />
                    <span>{t(selectedLanguage, 'estimatedBudget', 'Estimated Budget Breakdown')}</span>
                  </h3>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1.5 border-b border-[#F0EAE1]">
                      <span className="text-[#55695E]">Stay / Accommodation:</span>
                      <span className="font-bold text-[#143224]">{itinerary.budgetBreakdown.accommodation}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-[#F0EAE1]">
                      <span className="text-[#55695E]">Regional Food & Dining:</span>
                      <span className="font-bold text-[#143224]">{itinerary.budgetBreakdown.food}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-[#F0EAE1]">
                      <span className="text-[#55695E]">Local Transport:</span>
                      <span className="font-bold text-[#143224]">{itinerary.budgetBreakdown.localTransport}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-[#F0EAE1]">
                      <span className="text-[#55695E]">Monuments & Site Entry:</span>
                      <span className="font-bold text-[#143224]">{itinerary.budgetBreakdown.entryAndGuides}</span>
                    </div>
                    <div className="flex justify-between pt-2 text-sm font-bold text-[#D96B43]">
                      <span>Total Estimated Cost:</span>
                      <span>{itinerary.budgetBreakdown.totalEstimated}</span>
                    </div>
                  </div>
                </div>

                {/* Cultural Etiquette & Tips */}
                <div className="bg-white rounded-3xl p-6 border border-[#E7DFD3] space-y-4">
                  <h3 className="font-serif text-lg font-bold text-[#143224] flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#2D6A4F]" />
                    <span>{t(selectedLanguage, 'culturalEtiquette', 'Cultural Etiquette & Tips')}</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-[#44554C]">
                    {itinerary.culturalEtiquette.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#D96B43] font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                    {itinerary.travelTips.map((item, idx) => (
                      <li key={`tip-${idx}`} className="flex items-start gap-2">
                        <span className="text-[#2D6A4F] font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {itinerary.alternativeDestinations && itinerary.alternativeDestinations.length > 0 && (
                    <div className="pt-2 border-t border-[#F0EAE1]">
                      <span className="text-[11px] font-bold text-[#7A8B80] uppercase tracking-wide block mb-1">
                        {t(selectedLanguage, 'alternativeSpots', 'Alternative Nearby Spots')}:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {itinerary.alternativeDestinations.map((alt, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] px-2.5 py-1 rounded-md bg-[#FAF7F2] text-[#1B4332] border border-[#DDD3C3]"
                          >
                            {alt}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
