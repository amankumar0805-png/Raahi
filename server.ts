import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { DESTINATIONS } from './src/data/destinations';
import { FOOD_ITEMS, CULTURAL_CRAFTS } from './src/data/culture';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// Initialize GoogleGenAI only if a real API key is present
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
let isGeminiHealthy = true;
let lastGeminiFailure = 0;

if (apiKey && apiKey !== 'MY_GEMINI_API_KEY' && apiKey.trim().length >= 10) {
  try {
    ai = new GoogleGenAI({
      apiKey: apiKey.trim(),
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
    console.log('[ExploreLocal AI] GoogleGenAI client initialized successfully with API key.');
  } catch (err) {
    console.error('[ExploreLocal AI] Failed to initialize GoogleGenAI client:', err);
    isGeminiHealthy = false;
  }
} else {
  console.log('[ExploreLocal AI] No GEMINI_API_KEY provided in environment. Real-time deterministic local synthesis active.');
  isGeminiHealthy = false;
}

// Health check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    hasApiKey: Boolean(ai),
    keyPrefix: apiKey ? `${apiKey.slice(0, 4)}...${apiKey.slice(-3)} (len ${apiKey.length})` : 'none',
    timestamp: new Date().toISOString(),
    primaryStates: ['bihar', 'haryana'],
  });
});

// Trip Planner Itinerary Endpoint
app.post('/api/itinerary', async (req: Request, res: Response) => {
  const {
    startingLocation = 'Patna / Delhi',
    state = 'bihar',
    district,
    budget = 'moderate',
    travellers = 2,
    duration = 3,
    interests = ['heritage', 'food'],
    travelType = 'family',
    language = 'en',
  } = req.body;

  const stateKey = (state || 'bihar').toLowerCase();
  const relevantDestinations = DESTINATIONS.filter(
    (d) => d.state === stateKey || stateKey === 'all'
  );
  const relevantFoods = FOOD_ITEMS.filter((f) => f.state === stateKey);
  const relevantCulture = CULTURAL_CRAFTS.filter((c) => c.state === stateKey);

  const placesSummary = relevantDestinations
    .map(
      (d) =>
        `- ${d.name} (${d.district}): ${d.tagline}. Category: ${d.category}. Hidden Gem: ${d.isHiddenGem ? 'Yes' : 'No'}. Best season: ${d.bestSeason}. Travel: ${d.travelInfo.nearestRailway}, ${d.travelInfo.roadAccess}`
    )
    .join('\n');

  const foodsSummary = relevantFoods
    .map((f) => `- ${f.name} (${f.originRegion}): ${f.description.slice(0, 100)}...`)
    .join('\n');

  const shouldTryGemini = Boolean(ai && (isGeminiHealthy || Date.now() - lastGeminiFailure > 60000));

  if (shouldTryGemini && ai) {
    try {
      const prompt = `You are the chief travel architect for "RAHI – राही" (Tagline: "Every Journey Has a Story."), the premier Indian tourism discovery platform.
Create a personalized, geographically logical, day-by-day travel itinerary for a trip to ${state.toUpperCase()}, India.

TARGET LANGUAGE: ${language === 'hi' ? 'Hindi (हिन्दी)' : language === 'pa' ? 'Punjabi (ਪੰਜਾਬੀ)' : language === 'bn' ? 'Bengali (বাংলা)' : language === 'ta' ? 'Tamil (தமிழ்)' : language === 'te' ? 'Telugu (తెలుగు)' : language === 'mr' ? 'Marathi (मराठी)' : language === 'gu' ? 'Gujarati (ગુજરાતી)' : language === 'ur' ? 'Urdu (اردو)' : language === 'ml' ? 'Malayalam (മലയാളം)' : 'English'}.
Write the textual descriptions, tips, and summaries in this target language, while keeping proper nouns (monuments, town names, dishes) authentic and recognizable.

CRITICAL LOGISTICAL CONSTRAINT:
Do NOT pair geographically distant destinations in the same half-day. Cluster nearby attractions within the same district or transit corridor.

USER TRIP PARAMETERS:
- Starting Point: ${startingLocation}
- Destination State: ${state}
${district ? `- Target District/Focus: ${district}` : ''}
- Budget Category: ${budget}
- Number of Travellers: ${travellers}
- Duration: ${duration} Days
- Travel Type: ${travelType}
- Specific Interests: ${Array.isArray(interests) ? interests.join(', ') : interests}

VERIFIED DESTINATIONS DATABASE FOR ${state.toUpperCase()}:
${placesSummary}

VERIFIED LOCAL CUISINES TO FEATURE:
${foodsSummary}

OUTPUT FORMAT:
Return pure valid JSON (no markdown formatting, no code blocks) matching this exact JSON schema:
{
  "title": "string (catchy, evocative title)",
  "summary": "string (2-3 sentences overview of the journey)",
  "state": "${state}",
  "durationDays": ${duration},
  "budgetLevel": "${budget}",
  "travelType": "${travelType}",
  "travellersCount": ${travellers},
  "days": [
    {
      "day": 1,
      "title": "string (e.g. Sacred Awakening in Bodh Gaya)",
      "morning": {
        "time": "08:00 AM - 11:30 AM",
        "title": "string",
        "locationName": "string",
        "description": "string",
        "localFoodTip": "string",
        "practicalTip": "string",
        "mapQuery": "string"
      },
      "afternoon": {
        "time": "12:30 PM - 04:00 PM",
        "title": "string",
        "locationName": "string",
        "description": "string",
        "localFoodTip": "string",
        "practicalTip": "string",
        "mapQuery": "string"
      },
      "evening": {
        "time": "05:00 PM - 08:30 PM",
        "title": "string",
        "locationName": "string",
        "description": "string",
        "localFoodTip": "string",
        "practicalTip": "string",
        "mapQuery": "string"
      },
      "localCuisineToTry": "string",
      "approxDailyExpensePerPerson": "string (e.g. ₹1,200 - ₹1,800)"
    }
  ],
  "budgetBreakdown": {
    "accommodation": "string (e.g. ₹2,000 - ₹3,500/night)",
    "food": "string (e.g. ₹800/person/day)",
    "localTransport": "string",
    "entryAndGuides": "string",
    "totalEstimated": "string (e.g. ₹14,000 - ₹18,000 for ${travellers} travellers)"
  },
  "culturalEtiquette": ["string", "string", "string"],
  "travelTips": ["string", "string", "string"],
  "alternativeDestinations": ["string", "string"]
}`;

      const response = await Promise.race([
        ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: prompt,
          config: {
            systemInstruction:
              'You are an authoritative Indian tourism planner for ExploreLocal AI. Respond with strictly valid JSON only.',
            responseMimeType: 'application/json',
          },
        }),
        new Promise<any>((_, reject) =>
          setTimeout(() => reject(new Error('Gemini API timeout')), 6500)
        ),
      ]);

      const responseText = response.text || '';
      const cleanJson = responseText
        .replace(/```json/gi, '')
        .replace(/```/g, '')
        .trim();

      const parsed = JSON.parse(cleanJson);
      parsed.id = `itin-${Date.now()}`;
      parsed.createdAt = new Date().toISOString();
      return res.json(parsed);
    } catch (error) {
      console.error('[ExploreLocal AI] Gemini itinerary error, applying verified synthesis fallback:', error);
      isGeminiHealthy = false;
      lastGeminiFailure = Date.now();
      // Fall through to deterministic high-quality synthesis
    }
  }

  // Smart Synthesis Fallback using verified dataset
  const fallbackItinerary = generateStructuredFallbackItinerary({
    startingLocation,
    state: stateKey,
    district,
    budget,
    travellers: Number(travellers),
    duration: Math.min(Math.max(Number(duration), 1), 7),
    interests: Array.isArray(interests) ? interests : [interests],
    travelType,
    destinations: relevantDestinations,
    foods: relevantFoods,
  });

  return res.json(fallbackItinerary);
});

// AI Local Tourism Guide (Chatbot) Endpoint
app.post('/api/chat', async (req: Request, res: Response) => {
  const { message, history = [], contextState, contextDestination, language = 'en' } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required' });
  }

  const shouldTryGemini = Boolean(ai && (isGeminiHealthy || Date.now() - lastGeminiFailure > 60000));

  if (shouldTryGemini && ai) {
    try {
      const stateFilter = (contextState || 'bihar').toLowerCase();
      const stateDestinations = DESTINATIONS.filter(
        (d) => d.state === stateFilter || stateFilter === 'all'
      );
      const stateFoods = FOOD_ITEMS.filter((f) => f.state === stateFilter);
      const stateCrafts = CULTURAL_CRAFTS.filter((c) => c.state === stateFilter);

      const systemInstruction = `You are "RAHI – Your AI Travel Companion" (राही), the intelligent, warm, authentic travel guide for India.
Tagline: "Every Journey Has a Story." (हर सफ़र की एक नई कहानी।)

LANGUAGE INSTRUCTION:
- If the user asks in Hindi, or if language is 'hi', respond primarily in fluent, warm, respectful Hindi.
- If the user specifies another language (${language}), respond respectfully in that language while keeping place names and dishes authentic.
- Otherwise, respond in fluent, engaging English with cultural warmth.

GUIDING PRINCIPLES:
1. Emphasize authentic travel experiences, famous monuments, and lesser-known hidden gems across India (e.g., Kakolat Waterfall, Barabar Caves, Valmiki Tiger Reserve in Bihar; Tikkar Taal, Sheikh Chilli Tomb, Rakhigarhi in Haryana; Gurez Valley in Kashmir; Andretta in Himachal; Ziro Valley in Arunachal).
2. Recommend real traditional culinary dishes (Litti Chokha, Silao Khaja, Bajra Roti with fresh white butter, Amritsari Kulcha, Rogan Josh, Dal Baati Churma, etc.).
3. Be candid, accurate, and culturally appreciative. If specific road conditions or ticketing rules are uncertain, state so politely instead of fabricating facts.
4. Keep answers beautifully formatted with bullet points for readability.

VERIFIED DATABASE CONTEXT:
Destinations: ${stateDestinations.slice(0, 15).map((d) => `${d.name} (${d.district}, ${d.category}${d.isHiddenGem ? ', Hidden Gem' : ''})`).join('; ')}
Foods: ${stateFoods.slice(0, 10).map((f) => f.name).join(', ')}
Culture: ${stateCrafts.slice(0, 6).map((c) => c.title).join(', ')}`;

      // Format previous chat history for multi-turn context
      const formattedContents = history
        .filter((h: any) => h && h.content)
        .slice(-6)
        .map((h: any) => ({
          role: h.role === 'user' ? 'user' : 'model',
          parts: [{ text: h.content }],
        }));

      formattedContents.push({
        role: 'user',
        parts: [
          {
            text: `${contextDestination ? `[User is currently viewing: ${contextDestination}] ` : ''}${message}`,
          },
        ],
      });

      const response = await Promise.race([
        ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: formattedContents,
          config: {
            systemInstruction,
          },
        }),
        new Promise<any>((_, reject) =>
          setTimeout(() => reject(new Error('Gemini API timeout')), 5000)
        ),
      ]);

      const reply = response.text || 'I am ready to help you explore India!';
      return res.json({
        reply,
        recommendedPlaces: extractRecommendedPlaces(reply),
        suggestedPrompts: generateFollowUpPrompts(message, contextState),
      });
    } catch (error) {
      console.error('[ExploreLocal AI] Chat generation error, using fallback:', error);
      isGeminiHealthy = false;
      lastGeminiFailure = Date.now();
    }
  }

  // Smart fallback response
  const fallback = generateSmartChatFallback(message, contextState, contextDestination);
  return res.json(fallback);
});

// Helper for local synthesis fallback
function generateStructuredFallbackItinerary(params: any) {
  const {
    startingLocation,
    state,
    budget,
    travellers,
    duration,
    travelType,
    destinations,
    foods,
  } = params;

  const isHaryana = state === 'haryana';
  const stateName = isHaryana ? 'Haryana' : 'Bihar';

  const days = [];
  const selectedDests = isHaryana
    ? [
        { main: 'brahma-sarovar-kurukshetra', sub: 'sheikh-chilli-tomb', food: 'Hara Dhania Cholia & Missi Roti' },
        { main: 'pinjore-gardens', sub: 'morni-hills', food: 'Haryanvi Churma & Full Cream Dairy' },
        { main: 'tikkar-taal-morni', sub: 'khwaja-khizr-tomb', food: 'Bajra Roti with Desi Makhan & Garlic Chutney' },
        { main: 'rakhigarhi-archaeological-site', sub: 'sultanpur-national-park', food: 'Kachri ki Sabzi & Lassi' },
      ]
    : [
        { main: 'mahabodhi-temple-bodhgaya', sub: 'barabar-caves-jehanabad', food: 'Authentic Litti Chokha with Desi Ghee' },
        { main: 'nalanda-mahavihara', sub: 'rajgir-peace-pagoda', food: 'Silao Khaja & Sattu Paratha' },
        { main: 'kakolat-waterfall', sub: 'pawapuri-jal-mandir', food: 'Thekua & Bihari Malpua' },
        { main: 'valmiki-tiger-reserve', sub: 'vaishali-ashokan-pillar', food: 'Handi Champaran Curry & Sattu Drink' },
        { main: 'telhar-kund-rohtas', sub: 'karkat-waterfall-rohtas', food: 'Kaimur Hill Snacks & Fresh Dal Puri' },
      ];

  const budgetMultipliers: Record<string, { acc: string; food: string; total: string }> = {
    budget: {
      acc: '₹1,000 - ₹1,800/night',
      food: '₹400 - ₹600/person/day',
      total: `₹${(3500 * duration * travellers).toLocaleString('en-IN')}`,
    },
    moderate: {
      acc: '₹2,500 - ₹4,500/night',
      food: '₹800 - ₹1,200/person/day',
      total: `₹${(5800 * duration * travellers).toLocaleString('en-IN')}`,
    },
    luxury: {
      acc: '₹6,000 - ₹11,000/night',
      food: '₹1,800 - ₹2,500/person/day',
      total: `₹${(11500 * duration * travellers).toLocaleString('en-IN')}`,
    },
  };

  const selectedCost = budgetMultipliers[budget] || budgetMultipliers.moderate;

  for (let i = 0; i < duration; i++) {
    const cycle = selectedDests[i % selectedDests.length];
    const dMain = destinations.find((d: any) => d.id === cycle.main) || destinations[0];
    const dSub = destinations.find((d: any) => d.id === cycle.sub) || destinations[1];

    days.push({
      day: i + 1,
      title: `Day ${i + 1}: ${dMain ? dMain.name : 'Heritage'} & ${dSub ? dSub.name : 'Hidden Discovery'}`,
      morning: {
        time: '08:30 AM - 12:00 PM',
        title: `Morning Exploration of ${dMain.name}`,
        locationName: `${dMain.name}, ${dMain.district}`,
        description: `Begin early to enjoy mild temperatures. Discover ${dMain.tagline}. ${dMain.description.slice(0, 160)}...`,
        localFoodTip: `Light local breakfast with fresh chai and local puffed grain snacks.`,
        practicalTip: 'Wear comfortable walking footwear and carry a personal water flask.',
        mapQuery: dMain.mapQuery,
      },
      afternoon: {
        time: '12:30 PM - 03:30 PM',
        title: `Authentic Regional Lunch & Cultural Transition`,
        locationName: `${dMain.district} Heritage Quarter`,
        description: `Relish authentic ${cycle.food}. Take time to interact with local stall owners and visit nearby artisan workshops.`,
        localFoodTip: `Signature recommendation: ${cycle.food}.`,
        practicalTip: 'Afternoon sun is strongest; ideal for indoor museums or shaded tree canopies.',
        mapQuery: `${dMain.district}, ${stateName}`,
      },
      evening: {
        time: '04:30 PM - 07:30 PM',
        title: `Sunset at ${dSub.name}`,
        locationName: `${dSub.name}, ${dSub.district}`,
        description: `Transition to ${dSub.name}. ${dSub.tagline}. Catch the golden twilight reflecting across historic walls or water vistas.`,
        localFoodTip: `Evening tea and crispy regional fritters.`,
        practicalTip: 'Capture golden hour photography approximately 40 minutes before sunset.',
        mapQuery: dSub.mapQuery,
      },
      localCuisineToTry: cycle.food,
      approxDailyExpensePerPerson: `₹${budget === 'budget' ? '900 - ₹1,400' : '₹1,800 - ₹2,800'}`,
    });
  }

  return {
    id: `itin-${Date.now()}`,
    title: `${duration}-Day Authentic ${stateName} Heritage & Hidden Gems Expedition`,
    summary: `A carefully balanced ${duration}-day journey crafted for ${travellers} travellers starting from ${startingLocation}. Seamlessly bridges world-renowned heritage sites with tranquil natural wonders and real regional cuisine.`,
    state: stateName,
    durationDays: duration,
    budgetLevel: budget,
    travelType,
    travellersCount: travellers,
    days,
    budgetBreakdown: {
      accommodation: selectedCost.acc,
      food: selectedCost.food,
      localTransport: 'Clean AC private cab or pre-booked regional taxi',
      entryAndGuides: '₹200 - ₹500/day for state archaeological monuments and museum tickets',
      totalEstimated: selectedCost.total,
    },
    culturalEtiquette: [
      'Dress modestly when visiting active places of worship, monasteries, and rural village chaupals.',
      'Remove footwear before stepping onto sanctum stones or wooden temple platforms.',
      'Always ask politely before taking close-up portraits of traditional village artisans.',
    ],
    travelTips: [
      'Book inter-district private cabs or verified express trains (Jan Shatabdi / Vande Bharat) in advance.',
      'Carry cash in small denominations (₹50, ₹100) for rural tea stalls and local craft purchases.',
      'Carry mosquito repellent and binoculars for wildlife sanctuaries and oxbow wetlands.',
    ],
    alternativeDestinations: isHaryana
      ? ['Surajkund Amphitheatre', 'Pinjore Mango Orchards', 'Sonipat Khwaja Khizr Tomb']
      : ['Kanwar Lake Bird Sanctuary', 'Telhar Kund Canyon', 'Pawapuri Jal Mandir'],
    createdAt: new Date().toISOString(),
  };
}

function extractRecommendedPlaces(text: string): string[] {
  const matches: string[] = [];
  const allNames = DESTINATIONS.map((d) => d.name);
  for (const name of allNames) {
    if (text.toLowerCase().includes(name.toLowerCase())) {
      matches.push(name);
    }
  }
  return matches.slice(0, 4);
}

function generateFollowUpPrompts(message: string, state?: string): string[] {
  const isHaryana = state === 'haryana';
  if (isHaryana) {
    return [
      'What are the best hidden gems in Haryana?',
      'How to plan a weekend trip to Morni Hills & Tikkar Taal?',
      'Tell me about Rakhigarhi Indus Valley history',
      'What traditional food should I try in Haryana?',
    ];
  }
  return [
    'What are the hidden gems in Bihar?',
    'What can I explore in Rajgir in one day?',
    'Tell me the history of Nalanda University',
    'What is special about Madhubani painting?',
  ];
}

function generateSmartChatFallback(
  message: string,
  stateContext?: string,
  destinationContext?: string
) {
  const q = message.toLowerCase();

  if (q.includes('nalanda')) {
    return {
      reply:
        "Nalanda Mahavihara was the ancient world's premier residential university, founded during the Gupta Empire in the 5th century CE. It flourished for over 700 years, attracting more than 10,000 scholars and 2,000 revered teachers from China, Tibet, Korea, Japan, and Central Asia.\n\nKey highlights to explore:\n• The iconic Stupa of Sariputra (Stupa No. 3) with intricate Buddha votives\n• The Dharmaganja library complex (Ratnasagara, Ratnodadhi, and Ratnaranjaka) which once held hundreds of thousands of handwritten manuscripts\n• The Xuanzang (Hiuen Tsang) Memorial Hall, honoring the Chinese monk who spent 5 years studying and teaching here\n\nPractical tip: Visit between 8:30 AM and 11:30 AM when the morning sun illuminates the ancient red bricks.",
      recommendedPlaces: ['Nalanda Mahavihara', 'Rajgir (Vishwa Shanti Stupa & Hills)'],
      suggestedPrompts: [
        'What can I explore in Rajgir in one day?',
        'What is special about Silao Khaja near Nalanda?',
        'Suggest a 2-day Nalanda-Rajgir-Bodhgaya itinerary',
      ],
    };
  }

  if (q.includes('rajgir') && (q.includes('one day') || q.includes('1 day') || q.includes('plan'))) {
    return {
      reply:
        "Here is the ideal 1-day itinerary for Rajgir:\n\n• **Morning (8:00 AM - 11:00 AM)**: Take the scenic chairlift ropeway up Ratnagiri Hill to the gleaming white Vishwa Shanti Stupa (Peace Pagoda). Soak in the 360-degree views of the seven surrounding hills and visit Griddhakuta (Vulture's Peak) where Lord Buddha delivered the Lotus Sutra.\n• **Midday (11:30 AM - 1:30 PM)**: Visit Venuvana (the bamboo grove donated by King Bimbisara) and experience the sacred hot sulfur springs (Brahmakund) known for their therapeutic minerals.\n• **Lunch (1:30 PM - 2:30 PM)**: Savor hot crispy Sattu Parathas or stop at nearby Silao for freshly made 52-layered GI-tagged Silao Khaja.\n• **Afternoon & Evening (3:00 PM - 6:00 PM)**: Walk along the 2,500-year-old Cyclopean Wall of stone masonry and take a thrilling walk on the modern Rajgir Glass Skywalk.",
      recommendedPlaces: ['Rajgir (Vishwa Shanti Stupa & Hills)', 'Nalanda Mahavihara', 'Pawapuri (Jal Mandir)'],
      suggestedPrompts: [
        'Tell me more about the ancient Cyclopean Wall',
        'Where can I eat the best Silao Khaja?',
        'How to reach Rajgir from Patna?',
      ],
    };
  }

  if (q.includes('hidden gem') || q.includes('lesser known') || q.includes('offbeat')) {
    const isHaryana = stateContext === 'haryana' || q.includes('haryana');
    if (isHaryana) {
      return {
        reply:
          "Here are Haryana's most captivating hidden gems beyond the highway dhabas:\n\n1. **Tikkar Taal, Morni Hills**: Twin serene lakes (Chota & Bada Taal) tucked into the pine-covered Shivalik foothills. Ideal for peaceful boating, hill treks, and star-gazing.\n2. **Rakhigarhi Archaeological Site (Hisar)**: The largest excavated city of the Indus-Saraswati civilization—older and larger than Harappa, with a state-of-the-art site museum.\n3. **Sheikh Chilli's Tomb (Thanesar)**: Known as the 'Taj of Haryana', a breathtaking octagonal white marble Persian mausoleum set in serene Mughal gardens.\n4. **Khwaja Khizr Tomb (Sonipat)**: An exquisite 1520s red sandstone and kankar tomb from the Ibrahim Lodi era.\n5. **Sultanpur National Park**: A peaceful Ramsar wetland sheltering flamingos and over 250 migratory bird species.",
        recommendedPlaces: ['Tikkar Taal (Twin Lakes)', "Sheikh Chilli's Tomb", 'Rakhigarhi Archaeological Site', 'Khwaja Khizr Tomb'],
        suggestedPrompts: [
          'What traditional food should I try in Haryana?',
          'How do I reach Tikkar Taal from Chandigarh?',
          'Tell me about Sheikh Chilli Tomb architecture',
        ],
      };
    }
    return {
      reply:
        "Here are Bihar's extraordinary hidden gems that deserve a spot on every traveler's bucket list:\n\n1. **Kakolat Waterfall (Nawada)**: A stunning 160-foot cascade dropping into a crystal-clear natural plunge pool, surrounded by Shekhpura hills.\n2. **Valmiki Tiger Reserve (West Champaran)**: Bihar's only national park, hugging the Nepal border with 54+ Royal Bengal Tigers, wild elephants, and boating on the Gandak River.\n3. **Barabar Caves (Jehanabad)**: The oldest surviving rock-cut caves in India (circa 3rd century BCE), featuring astonishing mirror-polished granite interiors and incredible acoustic echoes.\n4. **Telhar Kund (Rohtas / Kaimur)**: A jaw-dropping 400-foot waterfall cascading into a deep emerald canyon with a glass viewing deck.\n5. **Kanwar Lake (Begusarai)**: Asia's largest freshwater oxbow lake and a Ramsar wetland sheltering thousands of winter migratory birds.",
      recommendedPlaces: ['Kakolat Waterfall', 'Valmiki Tiger Reserve', 'Barabar Caves', 'Telhar Kund Waterfall', 'Kanwar Lake Bird Sanctuary'],
      suggestedPrompts: [
        'How to visit Barabar Caves from Gaya?',
        'Can I do a safari in Valmiki Tiger Reserve?',
        'What is the best time to visit Kakolat Waterfall?',
      ],
    };
  }

  if (q.includes('madhubani') || q.includes('painting') || q.includes('mithila')) {
    return {
      reply:
        "Madhubani (Mithila) art is a 2,500-year-old folk painting tradition originating in the Mithila region of Bihar. Traditionally painted by women on freshly plastered mud walls (Kohbar) during weddings and harvests, it has now gained international recognition with a GI tag.\n\nDistinct features:\n• **Natural pigments only**: Yellow from turmeric, deep blue from indigo, black from soot, green from wood-apple leaves, red from Kusum flowers\n• **Stylized geometry**: Double-line outlines with fine cross-hatching, fish (fertility), peacocks (love), sacred Kadamba and Lotus trees, and Ramayana motifs\n• **Tools**: Drawn with bamboo twigs, matchsticks, and pointed fountain nibs without using standard paintbrushes\n\nWhere to experience it: Visit the artisan villages of Ranti and Jitwarpur near Madhubani town to meet master artists directly in their courtyard studios.",
      recommendedPlaces: ['Nalanda Mahavihara', 'Patna Sahib Gurudwara'],
      suggestedPrompts: [
        'Where can I buy authentic Madhubani paintings?',
        'Tell me about Bhagalpuri Tussar Silk',
        'What are other traditional crafts of Bihar?',
      ],
    };
  }

  if (q.includes('food') || q.includes('cuisine') || q.includes('eat') || q.includes('dish')) {
    const isHaryana = stateContext === 'haryana' || q.includes('haryana');
    if (isHaryana) {
      return {
        reply:
          "Traditional Haryanvi cuisine is wholesome, nutritious, and deeply rooted in dairy and hearty grains:\n\n1. **Bajra Roti with Desi Taza Makhan**: Hand-patted pearl millet rotis roasted crisp over clay hearths, crowned with fresh white butter and fiery garlic-red chilli chutney.\n2. **Hara Dhania Cholia**: Fresh green winter chickpeas simmered in an aromatic fresh coriander and cumin gravy.\n3. **Kachri ki Sabzi**: A tangy, tart curry made from wild desert melon cooked with mustard seeds and buttermilk.\n4. **Haryanvi Churma**: Hand-crushed whole wheat rotis steeped in pure ghee and sweetened with desi khand or jaggery.\n5. **Jhajjar ki Rabri & Chilled Lassi**: Rich full-cream Murrah buffalo dairy treats served in earthenware matkas.",
        recommendedPlaces: ['Brahma Sarovar', 'Pinjore Gardens'],
        suggestedPrompts: [
          'What is Kachri and how is it cooked?',
          'Best places to try Haryanvi Churma?',
          'What are the hidden gems in Haryana?',
        ],
      };
    }
    return {
      reply:
        "Bihari cuisine is a celebration of smoky, slow-cooked flavors and wholesome superfoods:\n\n1. **Litti Chokha**: Whole wheat dough stuffed with seasoned sattu (roasted gram flour), roasted over coal, cracked open, and drenched in desi ghee. Served with smoky roasted brinjal-tomato chokha.\n2. **Silao Khaja**: A 52-layered wafer-thin crispy sweet with a GI tag, made between Nalanda and Rajgir.\n3. **Thekua**: A sacred crisp prasad made of whole wheat, jaggery, cardamom, dry coconut, and ghee for Chhath Puja.\n4. **Sattu Paratha**: Golden pan-crisped flatbreads stuffed with spicy lemon-zest sattu.\n5. **Bihari Malpua**: Rich festive pancakes made of reduced mawa, banana, and saffron syrup.",
      recommendedPlaces: ['Nalanda Mahavihara', 'Mahabodhi Temple'],
      suggestedPrompts: [
        'How is authentic Litti Chokha prepared?',
        'What is the history of Silao Khaja?',
        'What are the best street food spots in Patna?',
      ],
    };
  }

  if (q.includes('bodh gaya') || q.includes('bodhgaya')) {
    return {
      reply:
        "Bodh Gaya is the spiritual heart of world Buddhism, located 16 km from Gaya Junction:\n\n• **Mahabodhi Temple**: A UNESCO World Heritage Site with a 50-metre spire, marking the sacred Diamond Throne (Vajrasana) where Siddhartha Gautama attained enlightenment.\n• **The Sacred Bodhi Tree**: Sit in quiet meditation under the direct descendant of the original Sri Maha Bodhi tree.\n• **Monasteries of the World**: Explore authentic international Buddhist monasteries built by Bhutan, Thailand, Japan, Tibet, Sri Lanka, and Vietnam.\n• **Great Buddha Statue**: An impressive 80-foot stone Buddha seated in Dhyana Mudra.\n\nBudget Tip: Many peaceful monasteries offer guest accommodations at modest rates, and delicious multi-cuisine vegetarian cafes line the temple road.",
      recommendedPlaces: ['Mahabodhi Temple', 'Barabar Caves'],
      suggestedPrompts: [
        'How many days are needed in Bodh Gaya?',
        'How to visit Barabar Caves from Gaya?',
        'What are the daily chanting timings at Mahabodhi Temple?',
      ],
    };
  }

  return {
    reply: `Namaste! I am **RAHI – Your AI Travel Companion (राही)**.\n*Every Journey Has a Story.* (हर सफ़र की एक नई कहानी।)\n\nI can help you discover genuine destinations, rich history, authentic regional foods, and hidden gems across India, with verified expertise across all Indian states.\n\nYou can ask me about:\n• *Hidden waterfalls & scenic escapes* (Kakolat, Valmiki Tiger Reserve, Tikkar Taal, Gurez Valley, Ziro Valley)\n• *Ancient heritage & archaeology* (Nalanda, Golden Temple, Qutub Minar, Rakhigarhi, Hampi)\n• *Authentic traditional foods* (Litti Chokha, Bajra Roti, Amritsari Kulcha, Rogan Josh, Dal Baati Churma)\n• *Personalized day plans & practical travel tips* in Hindi or English\n\nWhere would you like your story to begin today?`,
    recommendedPlaces: ['Golden Temple', 'Mahabodhi Temple', 'Brahma Sarovar', 'Nalanda Mahavihara', 'Tikkar Taal (Twin Lakes)'],
    suggestedPrompts: [
      'बिहार में घूमने की अच्छी जगह कौन सी हैं?',
      'Best hidden places near Chandigarh',
      'Tell me the history of Nalanda University',
      'Suggest a budget trip to Kashmir',
      'What is the famous food of Punjab?',
    ],
  };
}

// Dev vs Prod Vite Integration
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
    console.log('[ExploreLocal AI] Vite dev middlewares mounted.');
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
    console.log('[ExploreLocal AI] Serving production build from dist.');
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`[ExploreLocal AI] Server is active at http://0.0.0.0:${port}`);
  });
}

startServer().catch((err) => {
  console.error('[ExploreLocal AI] Failed to start server:', err);
  process.exit(1);
});
