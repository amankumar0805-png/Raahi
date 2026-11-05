/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Destination, GeneratedItinerary, LanguageCode } from './types';
import { DESTINATIONS } from './data/destinations';
import { 
  getFavourites, 
  toggleFavourite, 
  getSavedItineraries, 
  saveItinerary as persistItinerary,
  deleteItinerary as removePersistedItinerary
} from './utils/storage';
import { getSavedLanguage, saveLanguage, t } from './utils/i18n';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveIndiaMap } from './components/InteractiveIndiaMap';
import { HomeSections } from './components/HomeSections';
import { StateExplorer } from './components/StateExplorer';
import { StateDiscoveryView } from './components/StateDiscoveryView';
import { DestinationsGrid } from './components/DestinationsGrid';
import { HiddenGemsSection } from './components/HiddenGemsSection';
import { FoodExplorer } from './components/FoodExplorer';
import { TripPlanner } from './components/TripPlanner';
import { LocalCultureSection } from './components/LocalCultureSection';
import { AIGuideChat } from './components/AIGuideChat';
import { DestinationModal } from './components/DestinationModal';
import { SavedDrawer } from './components/SavedDrawer';
import { Footer } from './components/Footer';
import { Bot, Sparkles, MessageCircle, X } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedState, setSelectedState] = useState<string>('bihar');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageCode>('en');

  // Floating AI Chat widget state
  const [isFloatingChatOpen, setIsFloatingChatOpen] = useState(false);
  
  // Destination Modal state
  const [modalDestination, setModalDestination] = useState<Destination | null>(null);

  // Trip planner prepopulated state
  const [plannerState, setPlannerState] = useState<string>('bihar');
  const [plannerDestinationName, setPlannerDestinationName] = useState<string>('');

  // AI Guide prepopulated query
  const [guideQuery, setGuideQuery] = useState<string>('');

  // Saved state from localStorage
  const [favourites, setFavourites] = useState<string[]>([]);
  const [savedItineraries, setSavedItineraries] = useState<GeneratedItinerary[]>([]);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);

  // Initialize language & storage from localStorage on load
  useEffect(() => {
    setSelectedLanguage(getSavedLanguage());
    setFavourites(getFavourites());
    setSavedItineraries(getSavedItineraries());
  }, []);

  const handleSelectLanguage = (lang: LanguageCode) => {
    setSelectedLanguage(lang);
    saveLanguage(lang);
  };

  const handleToggleFav = (id: string) => {
    const { list } = toggleFavourite(id);
    setFavourites(list);
  };

  const handleSaveItinerary = (itinerary: GeneratedItinerary) => {
    const updated = persistItinerary(itinerary);
    setSavedItineraries(updated);
  };

  const handleRemoveItinerary = (id: string) => {
    const updated = removePersistedItinerary(id);
    setSavedItineraries(updated);
  };

  const handleNavigate = (view: string, stateFilter?: string) => {
    setCurrentView(view);
    if (stateFilter) {
      setSelectedState(stateFilter);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectState = (stateId: string) => {
    setSelectedState(stateId);
    setCurrentView('state-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHeroSearch = (query: string, state: string) => {
    setSearchQuery(query);
    if (state !== 'all') {
      setSelectedState(state);
    }
    setCurrentView('destinations');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDestinationDetails = (destination: Destination) => {
    setModalDestination(destination);
  };

  const handleOpenDestinationByName = (name: string) => {
    const found = DESTINATIONS.find(
      (d) => d.name.toLowerCase().includes(name.toLowerCase()) || name.toLowerCase().includes(d.name.toLowerCase())
    );
    if (found) {
      setModalDestination(found);
    }
  };

  const handlePlanTripToDestination = (destination: Destination) => {
    setPlannerState(destination.state);
    setPlannerDestinationName(destination.name);
    setCurrentView('trip-planner');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAskAIAboutDestination = (destination: Destination) => {
    setGuideQuery(`Tell me interesting facts, historical context, and travel secrets about ${destination.name} in ${destination.district}, ${destination.state}.`);
    setSelectedState(destination.state);
    setCurrentView('ai-guide');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLaunchTripPlanner = (state?: string) => {
    if (state) setPlannerState(state);
    setPlannerDestinationName('');
    setCurrentView('trip-planner');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLaunchGuideWithQuery = (query: string) => {
    setGuideQuery(query);
    setCurrentView('ai-guide');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1E2922] font-sans selection:bg-[#E07A5F]/20 selection:text-[#1B4332]">
      {/* Top Navigation with 10-Language Selector */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        selectedLanguage={selectedLanguage}
        onSelectLanguage={handleSelectLanguage}
        savedFavCount={favourites.length}
        savedItinCount={savedItineraries.length}
        onOpenSaved={() => setIsSavedDrawerOpen(true)}
      />

      {/* Main Body Routing */}
      <main className="flex-1">
        {/* VIEW 1: HOME */}
        {currentView === 'home' && (
          <div>
            {/* Animated Welcome Hero */}
            <Hero
              selectedLanguage={selectedLanguage}
              onSearch={handleHeroSearch}
              onExploreState={handleSelectState}
              onLaunchPlanner={handleLaunchTripPlanner}
              onLaunchGuide={() => handleNavigate('ai-guide')}
              onExploreAll={() => handleNavigate('destinations')}
            />

            {/* Interactive India Map / Region Explorer */}
            <InteractiveIndiaMap
              selectedLanguage={selectedLanguage}
              onSelectState={handleSelectState}
              onPlanTrip={(stId) => handleLaunchTripPlanner(stId)}
            />

            {/* Popular Destinations & Hidden Gems Preview */}
            <HomeSections
              selectedLanguage={selectedLanguage}
              favourites={favourites}
              onToggleFav={handleToggleFav}
              onOpenDetails={handleOpenDestinationDetails}
              onNavigate={handleNavigate}
            />

            {/* Pan-India State Directory */}
            <StateExplorer
              selectedLanguage={selectedLanguage}
              onSelectState={handleSelectState}
              selectedState={selectedState}
              onPlanTrip={(stId) => handleLaunchTripPlanner(stId)}
            />
          </div>
        )}

        {/* VIEW 2: ALL INDIAN STATES */}
        {currentView === 'states' && (
          <StateExplorer
            selectedLanguage={selectedLanguage}
            onSelectState={handleSelectState}
            selectedState={selectedState}
            onPlanTrip={(stId) => handleLaunchTripPlanner(stId)}
          />
        )}

        {/* VIEW 3: DYNAMIC STATE DETAIL (Works for Bihar, Haryana, Punjab, Delhi, and all states) */}
        {(currentView === 'state-detail' || currentView === 'state-bihar' || currentView === 'state-haryana') && (
          <StateDiscoveryView
            stateId={currentView === 'state-bihar' ? 'bihar' : currentView === 'state-haryana' ? 'haryana' : selectedState}
            selectedLanguage={selectedLanguage}
            favourites={favourites}
            onToggleFav={handleToggleFav}
            onOpenDetails={handleOpenDestinationDetails}
            onStartTripPlanning={handleLaunchTripPlanner}
            onAskAI={handleLaunchGuideWithQuery}
            onBackToStates={() => handleNavigate('states')}
          />
        )}

        {/* VIEW 4: ALL DESTINATIONS GRID */}
        {currentView === 'destinations' && (
          <DestinationsGrid
            initialSearchQuery={searchQuery}
            initialStateFilter={selectedState}
            favourites={favourites}
            onToggleFav={handleToggleFav}
            onOpenDetails={handleOpenDestinationDetails}
          />
        )}

        {/* VIEW 5: HIDDEN GEMS ("Beyond the Tourist Trail") */}
        {currentView === 'hidden-gems' && (
          <HiddenGemsSection
            selectedLanguage={selectedLanguage}
            favourites={favourites}
            onToggleFav={handleToggleFav}
            onOpenDetails={handleOpenDestinationDetails}
            onStartTripPlanning={handleLaunchTripPlanner}
          />
        )}

        {/* VIEW 6: INDIA ON A PLATE (FOOD EXPLORER) */}
        {currentView === 'food' && (
          <FoodExplorer
            selectedLanguage={selectedLanguage}
            onAskAIAboutFood={(dish, state) => {
              handleLaunchGuideWithQuery(`Where can I find the most authentic and famous ${dish} in ${state}? Include historic sweetshops or dhabas.`);
            }}
            onExploreState={handleSelectState}
          />
        )}

        {/* VIEW 7: AI SMART TRIP PLANNER */}
        {currentView === 'trip-planner' && (
          <TripPlanner
            selectedLanguage={selectedLanguage}
            initialState={plannerState}
            initialDestinationName={plannerDestinationName}
            onSaveItinerary={handleSaveItinerary}
            savedItineraries={savedItineraries}
            onOpenDetailsByName={handleOpenDestinationByName}
          />
        )}

        {/* VIEW 8: LOCAL CULTURE & COMMUNITY */}
        {currentView === 'local-culture' && (
          <LocalCultureSection
            onAskAIAboutCulture={handleLaunchGuideWithQuery}
          />
        )}

        {/* VIEW 9: RAHI AI GUIDE CHATBOT (FULL PAGE) */}
        {currentView === 'ai-guide' && (
          <AIGuideChat
            selectedLanguage={selectedLanguage}
            initialState={selectedState || 'bihar'}
            initialQuery={guideQuery}
            onOpenDestinationByName={handleOpenDestinationByName}
          />
        )}
      </main>

      {/* FLOATING RAHI AI CHAT TRIGGER BUTTON */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isFloatingChatOpen && (
          <button
            type="button"
            onClick={() => setIsFloatingChatOpen(true)}
            className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#1B4332] hover:bg-[#143224] text-amber-100 font-bold text-xs sm:text-sm shadow-2xl transition-all duration-300 hover:scale-105 ring-4 ring-white/80 cursor-pointer"
          >
            <div className="w-6 h-6 rounded-full bg-[#D96B43] flex items-center justify-center text-white shrink-0">
              <Bot className="w-3.5 h-3.5" />
            </div>
            <span>{selectedLanguage === 'hi' ? 'राही AI से पूछें' : 'Ask RAHI AI'}</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </button>
        )}

        {/* FLOATING CHAT POPUP MODAL */}
        {isFloatingChatOpen && (
          <div className="fixed inset-4 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[420px] sm:h-[600px] z-50 shadow-2xl rounded-3xl overflow-hidden border border-[#E7DFD3] animate-in fade-in zoom-in-95 duration-200">
            <AIGuideChat
              selectedLanguage={selectedLanguage}
              initialState={selectedState || 'bihar'}
              onOpenDestinationByName={(name) => {
                handleOpenDestinationByName(name);
                setIsFloatingChatOpen(false);
              }}
              isFloating={true}
              onCloseFloating={() => setIsFloatingChatOpen(false)}
            />
          </div>
        )}
      </div>

      {/* Destination Detail Modal */}
      <DestinationModal
        destination={modalDestination}
        onClose={() => setModalDestination(null)}
        isFav={modalDestination ? favourites.includes(modalDestination.id) : false}
        onToggleFav={handleToggleFav}
        onPlanTripToDestination={handlePlanTripToDestination}
        onAskAIAboutDestination={handleAskAIAboutDestination}
      />

      {/* Saved Drawer */}
      <SavedDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedFavIds={favourites}
        savedItineraries={savedItineraries}
        onRemoveFav={handleToggleFav}
        onRemoveItinerary={handleRemoveItinerary}
        onOpenDestination={handleOpenDestinationDetails}
        onViewItinerary={(itin) => {
          handleLaunchTripPlanner(itin.state.toLowerCase());
        }}
        onPlanNewTrip={() => handleLaunchTripPlanner()}
      />

      {/* Global Footer */}
      <Footer
        selectedLanguage={selectedLanguage}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
