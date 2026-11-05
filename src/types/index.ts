export type Category = 
  | 'heritage'
  | 'nature'
  | 'spirituality'
  | 'waterfall'
  | 'wildlife'
  | 'archaeology'
  | 'village'
  | 'culture'
  | 'adventure';

export type LanguageCode =
  | 'en'
  | 'hi'
  | 'pa'
  | 'bn'
  | 'ta'
  | 'te'
  | 'mr'
  | 'gu'
  | 'ur'
  | 'ml';

export type StateRegion = 
  | 'north'
  | 'east'
  | 'northeast'
  | 'west'
  | 'south'
  | 'central';

export interface IndianState {
  id: string;
  name: string;
  hindiName: string;
  capital: string;
  region: StateRegion;
  tagline: string;
  heroImage: string;
  description: string;
  famousAttraction: string;
  famousFood: string;
  destinationsCount: number;
  hiddenGemsCount: number;
  highlights: string[];
  bestSeason: string;
  cultureSummary: string;
  festivals: string[];
  handicrafts: string[];
  localExperiences: string[];
  popularRoutes: string[];
}

export interface Destination {
  id: string;
  name: string;
  hindiName?: string;
  state: string;
  stateName?: string;
  district: string;
  category: Category;
  isHiddenGem: boolean;
  isFamous: boolean;
  tagline: string;
  image: string;
  gallery?: string[];
  description: string;
  significance: string;
  whyVisit: string;
  bestSeason: string;
  travelInfo: {
    nearestAirport: string;
    nearestRailway: string;
    roadAccess: string;
  };
  tags: string[];
  mapQuery: string;
  latitude: number;
  longitude: number;
}

export interface FoodItem {
  id: string;
  name: string;
  hindiName?: string;
  state: string;
  stateName: string;
  originRegion: string;
  category: 'breakfast' | 'main' | 'street' | 'sweet' | 'snack' | 'drink';
  description: string;
  isVeg: boolean;
  keyIngredients: string[];
  culturalStory: string;
  image: string;
  bestPairedWith: string;
}

export interface CulturalCraft {
  id: string;
  title: string;
  state: string;
  category: 'painting' | 'textile' | 'handicraft' | 'festival' | 'folk_tradition' | 'village_life';
  description: string;
  significance: string;
  communityOrRegion: string;
  image: string;
  experienceTip: string;
}

export interface ItineraryRequest {
  startingLocation: string;
  state: string;
  district?: string;
  budget: 'budget' | 'moderate' | 'luxury';
  travellers: number;
  duration: number; // 1 to 7 days
  interests: string[];
  travelType: 'solo' | 'family' | 'friends' | 'heritage' | 'nature' | 'adventure';
  language?: LanguageCode;
}

export interface ItineraryActivity {
  time: string;
  title: string;
  locationName: string;
  description: string;
  localFoodTip?: string;
  practicalTip?: string;
  mapQuery?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  morning: ItineraryActivity;
  afternoon: ItineraryActivity;
  evening: ItineraryActivity;
  localCuisineToTry: string;
  approxDailyExpensePerPerson: string;
}

export interface GeneratedItinerary {
  id: string;
  title: string;
  summary: string;
  state: string;
  durationDays: number;
  budgetLevel: string;
  travelType: string;
  travellersCount: number;
  days: ItineraryDay[];
  budgetBreakdown: {
    accommodation: string;
    food: string;
    localTransport: string;
    entryAndGuides: string;
    totalEstimated: string;
  };
  culturalEtiquette: string[];
  travelTips: string[];
  alternativeDestinations: string[];
  createdAt: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  recommendedPlaces?: string[];
  suggestedPrompts?: string[];
}
