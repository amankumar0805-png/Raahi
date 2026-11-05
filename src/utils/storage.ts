import { GeneratedItinerary } from '../types';

const FAVOURITES_KEY = 'explorelocal_favourites_v1';
const ITINERARIES_KEY = 'explorelocal_saved_itineraries_v1';

export function getFavourites(): string[] {
  try {
    const raw = localStorage.getItem(FAVOURITES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error('Failed to read favourites from localStorage:', err);
    return [];
  }
}

export function isFavourite(id: string): boolean {
  const favs = getFavourites();
  return favs.includes(id);
}

export function toggleFavourite(id: string): { isFav: boolean; list: string[] } {
  try {
    const favs = getFavourites();
    const index = favs.indexOf(id);
    let updated: string[];
    let isFav = false;

    if (index >= 0) {
      updated = favs.filter((item) => item !== id);
      isFav = false;
    } else {
      updated = [...favs, id];
      isFav = true;
    }

    localStorage.setItem(FAVOURITES_KEY, JSON.stringify(updated));
    return { isFav, list: updated };
  } catch (err) {
    console.error('Failed to toggle favourite in localStorage:', err);
    return { isFav: false, list: [] };
  }
}

export function getSavedItineraries(): GeneratedItinerary[] {
  try {
    const raw = localStorage.getItem(ITINERARIES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error('Failed to read saved itineraries:', err);
    return [];
  }
}

export function saveItinerary(itinerary: GeneratedItinerary): GeneratedItinerary[] {
  try {
    const list = getSavedItineraries();
    // Prepend new or update existing
    const filtered = list.filter((item) => item.id !== itinerary.id);
    const updated = [itinerary, ...filtered];
    localStorage.setItem(ITINERARIES_KEY, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.error('Failed to save itinerary to localStorage:', err);
    return [];
  }
}

export function deleteItinerary(id: string): GeneratedItinerary[] {
  try {
    const list = getSavedItineraries();
    const updated = list.filter((item) => item.id !== id);
    localStorage.setItem(ITINERARIES_KEY, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.error('Failed to delete itinerary from localStorage:', err);
    return [];
  }
}
