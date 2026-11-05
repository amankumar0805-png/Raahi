import { CulturalCraft, FoodItem } from '../types';

export const FOOD_ITEMS: FoodItem[] = [
  // ============= BIHAR CUISINE =============
  {
    id: 'litti-chokha',
    name: 'Litti Chokha',
    hindiName: 'लिट्टी चोखा',
    state: 'bihar',
    stateName: 'Bihar',
    originRegion: 'Bhojpur & Magadh',
    category: 'main',
    description: 'The indisputable crown jewel of Bihari gastronomy. Whole wheat dough balls stuffed with spiced roasted gram flour (sattu), ajwain, mangrela, garlic, mustard oil, and pickled mango masala. Roasted over slow cow-dung embers till smoky, cracked open, and drenched in fragrant desi ghee. Served with chokha—fire-roasted brinjal, tomatoes, and mashed potatoes infused with raw pungent mustard oil.',
    isVeg: true,
    keyIngredients: ['Roasted Gram Flour (Sattu)', 'Whole Wheat', 'Pure Desi Ghee', 'Roasted Brinjal', 'Mustard Oil', 'Pickle Spices'],
    culturalStory: 'Favoured by ancient travelers, royal soldiers, and freedom fighters due to its exceptional nutritional value and long shelf-life in arid campaigns.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=80',
    bestPairedWith: 'Fire-roasted Baingan Chokha, fiery Green Chilli Chutney, and fresh spiced buttermilk'
  },
  {
    id: 'sattu-paratha',
    name: 'Sattu Paratha',
    hindiName: 'सत्तू पराठा',
    state: 'bihar',
    stateName: 'Bihar',
    originRegion: 'Across Bihar',
    category: 'breakfast',
    description: 'Golden pan-crisped flatbread generously stuffed with seasoned roasted black chickpea flour (sattu), chopped shallots, pungent green chillies, ginger, carom seeds, and a squeeze of fresh lemon. Crisped to perfection with a light brushing of pure ghee.',
    isVeg: true,
    keyIngredients: ['Sattu', 'Kalonji & Ajwain', 'Green Chilli', 'Mustard Oil', 'Lemon Juice'],
    culturalStory: 'Sattu is the nutritional backbone of Bihar—a low-glycemic, high-protein superfood that has energized farmers, scholars, and athletes for generations.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80',
    bestPairedWith: 'Aloo Bhujia, thick homemade Dahi (curd), and sweet tomato chutney'
  },
  {
    id: 'thekua',
    name: 'Thekua (Khajuria)',
    hindiName: 'ठेकुआ',
    state: 'bihar',
    stateName: 'Bihar',
    originRegion: 'Mithila & Magadh',
    category: 'sweet',
    description: 'The revered sacred cookie of Bihar, prepared with reverence during Chhath Puja. Made by kneading coarse whole wheat flour with organic sugarcane jaggery (gur), green cardamom pods, dry coconut slices, and ghee, then pressed into carved wooden moulds (sancha) and deep-fried slowly in pure ghee until crispy and caramelized.',
    isVeg: true,
    keyIngredients: ['Coarse Whole Wheat', 'Sugarcane Jaggery (Gur)', 'Desi Ghee', 'Cardamom', 'Dry Coconut'],
    culturalStory: 'Thekua holds profound spiritual sanctity as the primary Mahaprasad offered to Bhagwan Surya and Chhathi Maiya during Chhath Puja.',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1000&q=80',
    bestPairedWith: 'Warm spiced chai or eaten as an artisanal tea-time treat'
  },
  {
    id: 'silao-khaja',
    name: 'Silao Khaja',
    hindiName: 'सिलाव का खाजा',
    state: 'bihar',
    stateName: 'Bihar',
    originRegion: 'Silao (Nalanda)',
    category: 'sweet',
    description: 'Awarded the prestigious Geographical Indication (GI) tag, Silao Khaja is an engineering marvel of 52 wafer-thin, crisp, flaky pastry layers folded together and dipped in light sugar glaze. Incredibly light, crisp, and golden, it melts delicately on the tongue without being overly sweet.',
    isVeg: true,
    keyIngredients: ['Refined Flour', 'Desi Ghee', 'Cardamom', 'Water from Rajgir natural springs', 'Light Sugar Syrup'],
    culturalStory: 'According to legend, Lord Buddha was offered Khaja when he passed through Silao on his way to Rajgir over 2,500 years ago.',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1000&q=80',
    bestPairedWith: 'Fresh hot Rabri or savored with tea while exploring the Nalanda ruins'
  },
  {
    id: 'bihari-malpua',
    name: 'Bihari Malpua',
    hindiName: 'मालपुआ',
    state: 'bihar',
    stateName: 'Bihar',
    originRegion: 'Patna & Bhojpur',
    category: 'sweet',
    description: 'A decadent festival dessert pancake prepared especially during Holi and auspicious celebrations. Made from a velvety batter of flour, reduced milk (khoya), mashed ripe bananas, fennel seeds, and green cardamom, fried in pure ghee till edges turn golden-crisp, and soaked in fragrant saffron syrup.',
    isVeg: true,
    keyIngredients: ['Flour & Semolina', 'Mawa / Khoya', 'Ripe Banana', 'Fennel Seeds', 'Saffron Sugar Syrup'],
    culturalStory: 'In Bihari households, welcoming guests with hot homemade malpua alongside savory mutton or spicy dum aloo is the highest mark of hospitality.',
    image: 'https://images.unsplash.com/photo-1579954115563-e72bf1381629?auto=format&fit=crop&w=1000&q=80',
    bestPairedWith: 'Spiced Dum Aloo or thick chilled Rabdi garnished with pistachios'
  },

  // ============= HARYANA CUISINE =============
  {
    id: 'bajra-roti-makhan',
    name: 'Bajra Roti with Desi Makhan & Lahsun Chutney',
    hindiName: 'बाजरे की रोटी और मक्खन',
    state: 'haryana',
    stateName: 'Haryana',
    originRegion: 'Rural Haryana (Rohtak, Jhajjar)',
    category: 'main',
    description: 'Rustic winter comfort food at its finest. Thick, hand-patted pearl millet (bajra) rotis roasted over earthen clay hearths (chulha) until lightly blistered, served piping hot with an indulgent dollop of fresh, white hand-churned butter (taza makhan) and fiery dry garlic-red chilli chutney.',
    isVeg: true,
    keyIngredients: ['Pearl Millet (Bajra)', 'Fresh Churned White Butter', 'Garlic', 'Kashmiri Red Chillies', 'Rock Salt'],
    culturalStory: 'Bajra is the traditional dietary staple of Haryana’s agricultural heartland, packed with iron, fibre, and warming properties essential for cold winters.',
    image: 'https://images.unsplash.com/photo-1505253758473-96b3d5ebcd94?auto=format&fit=crop&w=1000&q=80',
    bestPairedWith: 'Kachri ki Sabzi, raw jaggery (gur) chunks, and tall glasses of spiced chaas'
  },
  {
    id: 'haryanvi-churma',
    name: 'Haryanvi Churma',
    hindiName: 'हरियाणवी चूरमा',
    state: 'haryana',
    stateName: 'Haryana',
    originRegion: 'Across Rural Haryana',
    category: 'sweet',
    description: 'The ultimate celebratory sweet of Haryana. Thick unleavened whole wheat rotis baked over embers are vigorously hand-crushed while hot, mixed with generous ladles of bubbling golden desi ghee, and sweetened with raw desi khand (unrefined organic sugar) or crushed jaggery with chopped almonds.',
    isVeg: true,
    keyIngredients: ['Whole Wheat Flour', 'Pure Desi Ghee', 'Desi Khand / Gur', 'Cardamom', 'Almonds'],
    culturalStory: 'Symbol of strength and stamina in Haryanvi wrestling (pehlwani) culture, traditionally fed to wrestlers in akharas to build immense physical power.',
    image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=1000&q=80',
    bestPairedWith: 'A steaming cup of full-cream buffalo milk or eaten after savory dal-baati'
  },
  {
    id: 'hara-cholia',
    name: 'Hara Dhania Cholia',
    hindiName: 'हरा धनिया छोलिया',
    state: 'haryana',
    stateName: 'Haryana',
    originRegion: 'Kurukshetra & Karnal',
    category: 'main',
    description: 'A vibrant, aromatic regional curry made from tender fresh green chickpeas (cholia / hara chana) harvested during early winter, simmered in a luscious gravy of blended fresh coriander leaves, green chillies, ginger, and aromatic ground cumin.',
    isVeg: true,
    keyIngredients: ['Fresh Green Chickpeas (Cholia)', 'Fresh Green Coriander Leaves', 'Cumin', 'Ginger', 'Mustard Oil'],
    culturalStory: 'A seasonal delicacy celebrating the winter harvest when chickpea pods are plucked fresh from the lush green fields of Haryana.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80',
    bestPairedWith: 'Steaming hot Missi Roti or fresh Basmati rice from the fields of Karnal'
  },
  {
    id: 'kachri-ki-sabzi',
    name: 'Kachri ki Sabzi',
    hindiName: 'काचरी की सब्जी',
    state: 'haryana',
    stateName: 'Haryana',
    originRegion: 'Western Haryana (Bhiwani & Sirsa)',
    category: 'main',
    description: 'A unique tangy, semi-dry curry made from wild desert melon (kachri), a small aromatic fruit that grows in semi-arid soils. Peeled, sliced, and cooked in mustard oil with fenugreek seeds, turmeric, red chillies, and yoghurt or buttermilk to balance the natural tartness.',
    isVeg: true,
    keyIngredients: ['Wild Cucumis Melo (Kachri)', 'Mustard Oil', 'Methi Seeds', 'Spiced Buttermilk', 'Turmeric'],
    culturalStory: 'Indigenous to arid northwestern plains, Kachri is a natural tenderizer and digestive wonder deeply cherished by rural farming communities.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80',
    bestPairedWith: 'Hot Bajra Roti, sliced raw onions, and chilled buttermilk'
  },

  // ============= PUNJAB CUISINE =============
  {
    id: 'amritsari-kulcha',
    name: 'Amritsari Kulcha with Chole',
    hindiName: 'अमृतसरी कुलचा और छोले',
    state: 'punjab',
    stateName: 'Punjab',
    originRegion: 'Amritsar',
    category: 'breakfast',
    description: 'Flaky, multi-layered tandoor-baked flatbread stuffed with spiced crushed potatoes, onions, anardana (pomegranate seeds), and coriander. Crushed by hand while hot with bubbling butter, served with dark spiced Punjabi chickpea curry and tangy tamarind-onion chutney.',
    isVeg: true,
    keyIngredients: ['Maida & Whole Wheat', 'Spiced Mashed Potatoes', 'Anardana', 'Amritsari Chole', 'Desi Butter'],
    culturalStory: 'Amritsari Kulcha has been perfected over centuries in historic community tandoors around Harmandir Sahib.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=80',
    bestPairedWith: 'Spicy Chole, Imli Pyaz Chutney, and tall brass glass of sweet Patiala Lassi'
  },
  {
    id: 'sarson-saag-makki-roti',
    name: 'Sarson da Saag & Makki di Roti',
    hindiName: 'सरसों का साग और मक्के की रोटी',
    state: 'punjab',
    stateName: 'Punjab',
    originRegion: 'Rural Punjab',
    category: 'main',
    description: 'The quintessential winter dish of Punjab. Freshly harvested mustard greens slow-simmered with bathua, spinach, green chillies, and ginger for hours in earthen pots, mashed with maize flour, and tempered in pure ghee. Served with thick golden maize flour rotis and fresh churned white butter.',
    isVeg: true,
    keyIngredients: ['Mustard Greens (Sarson)', 'Spinach & Bathua', 'Maize Flour (Makki)', 'Desi Makhan', 'Jaggery (Gur)'],
    culturalStory: 'Celebrates the winter harvest and Lohri season, providing hearty nourishment to hardworking farmers in the chilly fields.',
    image: 'https://images.unsplash.com/photo-1505253758473-96b3d5ebcd94?auto=format&fit=crop&w=1000&q=80',
    bestPairedWith: 'Fresh white butter, raw onion rings, and large chunks of sugarcane jaggery'
  },
  {
    id: 'punjabi-lassi',
    name: 'Patiala Shahi Malai Lassi',
    hindiName: 'पटियाला शाही लस्सी',
    state: 'punjab',
    stateName: 'Punjab',
    originRegion: 'Patiala & Amritsar',
    category: 'drink',
    description: 'Thick, creamy yogurt churned with wooden madhani (whisk), sweetened with sugar and scented with rose water and cardamom, served in tall clay kullhads topped with a generous 2-inch layer of clotted cream (malai) and chopped pistachios.',
    isVeg: true,
    keyIngredients: ['Full-Cream Buffalo Curd', 'Clotted Cream (Malai)', 'Cardamom', 'Kewra / Rose Water', 'Pistachios'],
    culturalStory: 'The ultimate gesture of Punjabi hospitality, offered to every guest as an elixir of warmth and vitality.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=80',
    bestPairedWith: 'Hot crisp jalebis or enjoyed as a refreshing standalone afternoon cooler'
  },

  // ============= DELHI CUISINE =============
  {
    id: 'chole-bhature-delhi',
    name: 'Dilli Ke Chole Bhature',
    hindiName: 'दिल्ली के छोले भटूरे',
    state: 'delhi',
    stateName: 'Delhi (NCT)',
    originRegion: 'Old Delhi & Karol Bagh',
    category: 'street',
    description: 'Fluffy, golden, puffed-up deep-fried leavened bread (bhatura) paired with piquant, dark chickpea curry simmered in tea leaves, dried amla, and a secret potli masala. Served with spicy pickled green chillies and mint-onion relish.',
    isVeg: true,
    keyIngredients: ['Kabuli Chana', 'Puffed Bhatura Dough', 'Amla & Dried Pomegranate', 'Paneer Stuffing', 'Pickled Carrot'],
    culturalStory: 'Delhi’s favorite weekend breakfast institution, perfected by legendary century-old street vendors in Chandni Chowk and Paharganj.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=80',
    bestPairedWith: 'Fried green chillies, pickled ginger juliennes, and sweet lassi'
  },
  {
    id: 'dilli-chaat-parathas',
    name: 'Chandni Chowk Parathas & Chaat',
    hindiName: 'चांदनी चौक के पराठे और चाट',
    state: 'delhi',
    stateName: 'Delhi (NCT)',
    originRegion: 'Chandni Chowk, Old Delhi',
    category: 'street',
    description: 'Deep-fried flaky flatbreads from the historic 1870s Parathe Wali Gali, stuffed with varieties like khoya, crushed papad, radish, or bananas. Accompanied by sweet pumpkin sabzi, spicy potato curry, and classic Dilli Dahi Bhalla and Papdi Chaat.',
    isVeg: true,
    keyIngredients: ['Whole Wheat Dough', 'Pure Ghee', 'Crispy Papdi', 'Thick Beaten Curd', 'Saunth Tamarind Chutney'],
    culturalStory: 'Parathe Wali Gali has served generations of prime ministers, artists, and travelers in the narrow Mughal corridors of Shahjahanabad.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80',
    bestPairedWith: 'Sweet gourd subzi, tangy mint coriander dip, and banana tamarind chutney'
  },

  // ============= JAMMU & KASHMIR CUISINE =============
  {
    id: 'kashmiri-rogan-josh',
    name: 'Kashmiri Rogan Josh',
    hindiName: 'रोगन जोश',
    state: 'jammu_and_kashmir',
    stateName: 'Jammu & Kashmir',
    originRegion: 'Kashmir Valley',
    category: 'main',
    description: 'An aromatic Persian-influenced curry of tender meat cooked in generous oil/ghee with Kashmiri dried red chillies (giving it a vivid crimson red hue without burning heat), fennel powder, dried ginger (sonth), and the prized botanical root Ratan Jot.',
    isVeg: false,
    keyIngredients: ['Kashmiri Dried Chillies', 'Fennel Powder (Saunf)', 'Dry Ginger (Sonth)', 'Ratan Jot Root', 'Cardamom & Cloves'],
    culturalStory: 'The centerpiece of the royal 36-course Kashmiri feast known as the Wazwan, originally introduced during the Mughal courts.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80',
    bestPairedWith: 'Steaming white Kashmiri rice (Batta) and walnut radish chutney (Doen Chetin)'
  },
  {
    id: 'kashmiri-dum-aloo',
    name: 'Kashmiri Dum Aloo',
    hindiName: 'कश्मीरी दम आलू',
    state: 'jammu_and_kashmir',
    stateName: 'Jammu & Kashmir',
    originRegion: 'Kashmir Valley (Pandit Tradition)',
    category: 'main',
    description: 'Baby potatoes deep-fried till golden, pricked all over, and slow-cooked in a sealed pot (dum) in a luscious, fiery red yoghurt-based gravy infused with Kashmiri red chillies, fennel powder, asafoetida, and ginger without onion or garlic.',
    isVeg: true,
    keyIngredients: ['Baby Potatoes', 'Kashmiri Red Chilli Paste', 'Whisked Yoghurt', 'Fennel Powder', 'Hing (Asafoetida)'],
    culturalStory: 'A timeless signature dish of the Kashmiri Pandit community, prepared with reverence during Shivratri (Herath).',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80',
    bestPairedWith: 'Steaming Basmati rice or fresh Sheermal bread'
  },
  {
    id: 'kashmiri-kahwa',
    name: 'Kashmiri Saffron Kahwa',
    hindiName: 'कश्मीरी कहवा',
    state: 'jammu_and_kashmir',
    stateName: 'Jammu & Kashmir',
    originRegion: 'Across Kashmir',
    category: 'drink',
    description: 'A delicate golden green tea brewed in an ornate brass samovar with whole green cardamom pods, cinnamon bark, pure Kashmiri saffron strands, and crushed almonds. Sweetened with wildflower honey.',
    isVeg: true,
    keyIngredients: ['Kashmiri Green Tea Leaves', 'Pure Pampore Saffron', 'Crushed Almonds', 'Green Cardamom', 'Wild Honey'],
    culturalStory: 'Served as an ancient digestive welcoming drink in every Kashmiri home to warm the body against freezing Himalayan winter winds.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80',
    bestPairedWith: 'Crispy Kashmiri Girda or Telvor bread and almond Bakarkhani'
  },

  // ============= RAJASTHAN CUISINE =============
  {
    id: 'dal-baati-churma',
    name: 'Rajasthani Dal Baati Churma',
    hindiName: 'दाल बाटी चूरमा',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    originRegion: 'Mewar & Marwar',
    category: 'main',
    description: 'Hard whole-wheat dough balls (baati) baked over cow-dung embers till golden brown, crushed and drowned in pure desi ghee. Served with panchmel dal (five lentils tempered with cumin, cloves, and asafoetida) and sweet crushed jaggery/khand churma.',
    isVeg: true,
    keyIngredients: ['Whole Wheat Flour', 'Desi Ghee', 'Five Lentils (Panchmel Dal)', 'Jaggery / Khand', 'Garlic Chutney'],
    culturalStory: 'Originated during the reign of Bappa Rawal in the 8th century, when Rajput soldiers buried dough balls under desert sand beneath campfires for wartime sustenance.',
    image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=1000&q=80',
    bestPairedWith: 'Gatte ki Sabzi, spicy dry garlic chutney, and chilled chaas'
  },
  {
    id: 'rajasthani-ghewar',
    name: 'Jaipuri Malai Ghewar',
    hindiName: 'जयपुर का मलाई घेवर',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    originRegion: 'Jaipur',
    category: 'sweet',
    description: 'A disc-shaped honeycomb dessert made by pouring refined flour and ghee batter into boiling clarified butter from height. Once golden and crisp with hundreds of tiny pores, it is soaked in cardamom saffron syrup and capped with thick rabdi, slivered pistachios, and silver vark.',
    isVeg: true,
    keyIngredients: ['Flour & Desi Ghee', 'Saffron Sugar Syrup', 'Reduced Milk (Rabri)', 'Pistachios & Almonds', 'Silver Leaf (Vark)'],
    culturalStory: 'The traditional celebratory sweet gifted by brothers to sisters during the monsoon festival of Teej in Rajasthan.',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1000&q=80',
    bestPairedWith: 'Hot kesar milk or savored as a royal festive dessert'
  },

  // ============= UTTAR PRADESH CUISINE =============
  {
    id: 'banarasi-chaat-petha',
    name: 'Banarasi Tamatar Chaat & Agra Petha',
    hindiName: 'बनारसी टमाटर चाट और पेठा',
    state: 'uttar_pradesh',
    stateName: 'Uttar Pradesh',
    originRegion: 'Varanasi & Agra',
    category: 'street',
    description: 'Unique to Varanasi, Tamatar Chaat is prepared by mashing ripe tomatoes with boiled potatoes, cumin, ginger, and hing in pure ghee, bathed in hot cumin-sugar syrup and garnished with crisp nimki. Paired with translucent crystallised white ash-gourd Petha from Agra.',
    isVeg: true,
    keyIngredients: ['Ripe Tomatoes', 'Desi Ghee', 'Jeera-Sugar Syrup', 'Crisp Namakpare (Nimki)', 'Ash Gourd (Petha)'],
    culturalStory: 'A culinary institution of Kashi’s ancient winding alleyways, served piping hot in small unglazed earthen clay cups (kullhads).',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80',
    bestPairedWith: 'Banarasi Lassi with thick malai and Banarasi Meetha Paan'
  },

  // ============= WEST BENGAL CUISINE =============
  {
    id: 'rosogolla-mishti-doi',
    name: 'Kolkata Rosogolla & Mishti Doi',
    hindiName: 'रसगुल्ला और मिष्टी दोई',
    state: 'west_bengal',
    stateName: 'West Bengal',
    originRegion: 'Kolkata',
    category: 'sweet',
    description: 'Spongy, delicate spheres of fresh cottage cheese (chhena) simmered in light sugar syrup, invented in Kolkata by Nobin Chandra Das in 1868. Accompanied by Mishti Doi—fermented caramelized sweet curd slow-baked in porous earthen clay pots that impart a distinct earthy aroma.',
    isVeg: true,
    keyIngredients: ['Fresh Cow Milk Chhena', 'Sugarcane Syrup', 'Caramelized Milk Curd', 'Cardamom', 'Earthen Matka'],
    culturalStory: 'No festival, wedding, or intellectual Adda in Bengal is complete without these iconic sweet symbols of celebration.',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1000&q=80',
    bestPairedWith: 'Kolkata Kathi Rolls or savored after traditional fish curry and rice'
  },
  {
    id: 'kolkata-kathi-roll',
    name: 'Kolkata Kathi Roll',
    hindiName: 'कोलकाता काठी रोल',
    state: 'west_bengal',
    stateName: 'West Bengal',
    originRegion: 'Park Street, Kolkata',
    category: 'street',
    description: 'Flaky pan-fried paratha layered with beaten egg, wrapped around skewered succulent kebabs or spiced paneer, sliced red onions, fresh green chillies, and a squeeze of lime with a sprinkle of chaat masala. Invented at Nizam’s Restaurant in 1932.',
    isVeg: false,
    keyIngredients: ['Flaky Layered Paratha', 'Marinated Skewer Kebabs', 'Egg Layer', 'Green Chillies & Onion', 'Lime Juice'],
    culturalStory: 'The world’s first true roll wrap, designed for busy British commuters and office-goers who needed a clean meal on the go.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80',
    bestPairedWith: 'Cold spiced thums up or sweet lime soda along Park Street'
  },

  // ============= MAHARASHTRA CUISINE =============
  {
    id: 'vada-pav-misal',
    name: 'Mumbai Vada Pav & Kolhapuri Misal',
    hindiName: 'मुंबई वड़ा पाव और मिसल पाव',
    state: 'maharashtra',
    stateName: 'Maharashtra',
    originRegion: 'Mumbai & Kolhapur',
    category: 'street',
    description: 'The heartbeat of Mumbai: Spiced mashed potato patty coated in golden chickpea batter and deep-fried, nestled in a soft pav bun slathered with fiery dry garlic-coconut chutney and green chilli chutney. Accompanied by fiery Kolhapuri Misal—sprouted moth beans topped with crisp farsan in a blazing red rassa gravy.',
    isVeg: true,
    keyIngredients: ['Potatoes with Mustard & Curry Leaves', 'Gram Flour (Besan)', 'Soft Pav', 'Dry Garlic Chutney', 'Sprouted Beans (Matki)'],
    culturalStory: 'Created by Ashok Vaidya outside Dadar railway station in 1966 to feed millions of textile mill workers quickly and affordably.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80',
    bestPairedWith: 'Fried salted green chillies and cutting chai'
  },

  // ============= GUJARAT CUISINE =============
  {
    id: 'dhokla-khandvi-thepla',
    name: 'Gujarati Dhokla, Thepla & Khandvi',
    hindiName: 'गुजराती ढोकला, थेपला और खांडवी',
    state: 'gujarat',
    stateName: 'Gujarat',
    originRegion: 'Across Gujarat',
    category: 'breakfast',
    description: 'A celebration of steaming, tempering, and delicate texture. Spongy fermented chickpea Khaman Dhokla tempered with mustard seeds and curry leaves; paper-thin melt-in-mouth rolls of spiced gram flour Khandvi topped with fresh grated coconut; and nutritious fenugreek-infused Thepla.',
    isVeg: true,
    keyIngredients: ['Chickpea Flour (Besan)', 'Mustard Seeds & Green Chillies', 'Fresh Fenugreek (Methi)', 'Grated Coconut', 'Sesame Seeds'],
    culturalStory: 'Embodies the genius of Gujarati Jain and Vaishnava cooking—light, low-oil, protein-rich, and perfectly balanced between sweet and tangy.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=80',
    bestPairedWith: 'Sweet papaya sambharo, raw mango pickle (chhundo), and ginger tea'
  },

  // ============= SOUTH INDIA CUISINE =============
  {
    id: 'masala-dosa-idli',
    name: 'Crispy Masala Dosa & Steamed Idli',
    hindiName: 'मसाला डोसा और इडली',
    state: 'tamil_nadu',
    stateName: 'Tamil Nadu & South India',
    originRegion: 'Across South India',
    category: 'breakfast',
    description: 'Golden paper-crisp fermented rice and urad dal crepe cooked on a cast iron griddle with pure ghee, enclosing a spiced potato mash with onions and mustard seeds. Served alongside cloud-soft steamed idlis, steaming drumstick sambar, and fresh coconut and tomato-onion chutneys.',
    isVeg: true,
    keyIngredients: ['Fermented Parboiled Rice & Urad Dal', 'Desi Ghee', 'Spiced Potato Masala', 'Fresh Coconut Chutney', 'Toor Dal Sambar'],
    culturalStory: 'Globally celebrated breakfast masterpiece with roots in temple kitchens dating back over 1,500 years in classical Tamil and Kannada texts.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80',
    bestPairedWith: 'Piping hot filter coffee served in a traditional brass davara-tumbler'
  },
  {
    id: 'hyderabadi-biryani',
    name: 'Hyderabadi Dum Biryani',
    hindiName: 'हैदराबादी दम बिरयानी',
    state: 'telangana',
    stateName: 'Telangana',
    originRegion: 'Hyderabad',
    category: 'main',
    description: 'The undisputed monarch of rice dishes. Long-grain aged Basmati rice and marinated meat are layered raw (Kacchi Yakhni) with saffron-infused milk, caramelized onions (birista), mint leaves, and desi ghee, sealed with dough in a heavy handi, and slow-cooked over glowing coals on dum.',
    isVeg: false,
    keyIngredients: ['Aged Basmati Rice', 'Kashmiri Saffron', 'Fried Onions (Birista)', 'Star Anise & Shahi Jeera', 'Desi Ghee'],
    culturalStory: 'Perfected in the royal kitchens of the Asaf Jahi Nizams of Hyderabad, blending Mughal Persian techniques with fiery Telugu spices.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80',
    bestPairedWith: 'Mirchi ka Salan (spicy peanut-sesame chilli gravy) and cooling cucumber raita'
  }
];

export const CULTURAL_CRAFTS: CulturalCraft[] = [
  // ============= BIHAR CULTURE =============
  {
    id: 'madhubani-painting',
    title: 'Madhubani (Mithila) Folk Art',
    state: 'bihar',
    category: 'painting',
    communityOrRegion: 'Madhubani & Darbhanga (Mithila Region)',
    description: 'An ancient folk painting tradition practiced by women of Mithila for centuries. Characterized by complex geometric patterns, two-dimensional perspectives, and natural dyes derived from turmeric, indigo, soot, and marigolds. Traditional themes depict Hindu epics, sacred trees, fish, peacocks, and fertility symbols.',
    significance: 'Recognized globally with GI status. Traditionally drawn on mud walls during weddings and festivals (Kohbar Ghar), now celebrated in international art museums.',
    experienceTip: 'Visit artisan villages like Ranti and Jitwarpur in Madhubani district to watch master women artists create intricate works using bamboo twigs and nibs.',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'bhagalpuri-silk',
    title: 'Bhagalpuri Tussar Silk Handlooms',
    state: 'bihar',
    category: 'textile',
    communityOrRegion: 'Bhagalpur ("The Silk City")',
    description: 'Bhagalpur has been weaving precious wild Tussar silk for over a century. Unlike cultivated mulberry silk, Tussar silk is derived from wild silk moths that feed on Asan and Arjun trees, yielding a distinct rich golden sheen, breathability, and natural textured weave.',
    significance: 'Known as the "Queen of Silks", Bhagalpuri handlooms sustain thousands of traditional weaver families operating wooden pit-looms in Champanagar and Nathnagar.',
    experienceTip: 'Tour the bustling handloom cooperatives of Champanagar to see raw cocoons boiled, yarn spun on wooden charkhas, and exquisite sarees woven.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'chhath-puja-tradition',
    title: 'Chhath Puja: Ancient Vedic Sun Worship',
    state: 'bihar',
    category: 'festival',
    communityOrRegion: 'Celebrated across Bihar along holy riverbanks',
    description: 'The most sacred, austere, and scientifically rooted Vedic festival in India. Spanning four rigorous days of fasting, holy dips, and silent meditation, devotees (vratis) stand waist-deep in water to offer Arghya (sacred offerings of fruits, sugarcane, and thekua in bamboo soop) to both the setting and rising sun.',
    significance: 'One of the rare festivals in the world where both the setting sun (acknowledging completion) and rising sun (welcoming new beginnings) are worshipped without any priest mediation.',
    experienceTip: 'Experience the divine atmosphere along the illuminated Ganga Ghats in Patna during sunset Arghya, where millions join in peaceful devotional song.',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=1000&q=80'
  },

  // ============= HARYANA CULTURE =============
  {
    id: 'haryanvi-folk-ragini-saang',
    title: 'Ragini & Saang Musical Folk Theatre',
    state: 'haryana',
    category: 'folk_tradition',
    communityOrRegion: 'Rural Haryana (Sonipat, Rohtak, Kaithal)',
    description: 'Saang is a traditional open-air musical theatre folk form performed by all-male troupes on wooden platforms, using rustic instruments like Sarangi, Dholak, Harmonium, and Chimta. Raginis are narrative folk ballads composed on folklore, Mahabharata legends, and historical chivalry.',
    significance: 'Preserves the rich oral literature of Haryana, immortalized by legendary folk poets like Pandit Lakhmi Chand and Pandit Mange Ram.',
    experienceTip: 'Attend village Chaupal gatherings or the annual State Folk Festival to hear mesmerizing high-octave live Ragini recitals.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'haryana-phulkari',
    title: 'Phulkari Floral Needlework & Heritage Weaves',
    state: 'haryana',
    category: 'textile',
    communityOrRegion: 'Ambala, Panipat & Rohtak',
    description: 'Phulkari (literally "flower work") is an intricate folk embroidery where untwisted silk floss (pat) is sewn onto coarse, handspun khaddar cloth using darning stitches from the reverse side. Traditional geometric and floral motifs depict rural life, parrots, wheat ears, and peacocks.',
    significance: 'Passed down across generations as bridal heirloom shawls (Bagh and Chope) carrying emotional family blessings and female community camaraderie.',
    experienceTip: 'Explore the textile bazaars of Panipat and rural women’s artisan hubs around Ambala to acquire hand-stitched Phulkari dupattas.',
    image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'haryana-village-akhara',
    title: 'Haveli Living & Traditional Akharas',
    state: 'haryana',
    category: 'village_life',
    communityOrRegion: 'Jhajjar, Sonipat & Bhiwani',
    description: 'Experience authentic rural Haryanvi village hospitality: historic brick havelis with arched courtyards, community hukka sessions at village Chaupals, tractor rides through mustard fields, and traditional mud wrestling akharas where young pehlwans train in red soil with heavy wooden clubs (gorguj).',
    significance: 'Represents the enduring rustic valor, fitness culture, and communal brotherhood that produces India’s highest number of Olympic and national wrestling champions.',
    experienceTip: 'Stay at an eco-farm or heritage homestay near Jhajjar to watch morning mud wrestling drills and milk cows at dawn.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'surajkund-crafts-mela',
    title: 'International Surajkund Crafts Mela',
    state: 'haryana',
    category: 'festival',
    communityOrRegion: 'Surajkund, Faridabad',
    description: 'Held annually in February against the backdrop of the 10th-century Tomar amphitheatre, Surajkund Mela is the world’s largest crafts fair. Over 1,000 national and international master craftspeople, folk dancers, and rural food stalls converge in rural thatched huts.',
    significance: 'Designated a flagship national cultural calendar event celebrating India’s endangered artisanal traditions, folk puppetry, and living heritage.',
    experienceTip: 'Spend a full day exploring regional craft pavilions, enjoying live Chaupal dance performances, and sampling authentic dishes from across India.',
    image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1000&q=80'
  }
];

export const DEMO_LOCAL_COMMUNITY_LISTINGS = [
  {
    id: 'artisan-1',
    name: 'Mithila Smriti Folk Collective',
    type: 'Master Artisan Workshop',
    state: 'bihar',
    district: 'Madhubani (Jitwarpur)',
    tag: 'Demo Listing',
    description: 'Family-run cooperative of National Award-winning women artists offering live painting demonstrations and genuine handmade Madhubani canvases.',
    contactDemo: 'Verified Cultural Partner (Demo)',
    rating: 4.9,
    reviewsCount: 38
  },
  {
    id: 'artisan-2',
    name: 'Champanagar Tussar Silk Weavers Guild',
    type: 'Handloom Cooperative',
    state: 'bihar',
    district: 'Bhagalpur',
    tag: 'Demo Listing',
    description: 'Generational weavers demonstrating traditional reeling, spinning, and wooden pit-loom weaving of 100% authentic Bhagalpuri Tussar sarees.',
    contactDemo: 'Verified Cultural Partner (Demo)',
    rating: 4.8,
    reviewsCount: 29
  },
  {
    id: 'artisan-3',
    name: 'Shivalik Herbal Honey & Farmer Cluster',
    type: 'Rural Organic Cooperative',
    state: 'haryana',
    district: 'Panchkula (Morni)',
    tag: 'Demo Listing',
    description: 'Himalayan foothills tribal honey-gatherers and medicinal herb growers producing raw multi-flora pine honey and natural herbal tea infusions.',
    contactDemo: 'Verified Cultural Partner (Demo)',
    rating: 4.9,
    reviewsCount: 44
  },
  {
    id: 'artisan-4',
    name: 'Desi Haveli & Akhara Heritage Experience',
    type: 'Village Agro-Homestay',
    state: 'haryana',
    district: 'Jhajjar',
    tag: 'Demo Listing',
    description: 'Centuries-old restored haveli offering authentic chulha-cooked bajra roti, dairy farm tours, and morning wrestling akhara observation.',
    contactDemo: 'Verified Cultural Partner (Demo)',
    rating: 4.9,
    reviewsCount: 52
  }
];
