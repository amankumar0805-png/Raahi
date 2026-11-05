import { Destination } from '../types';

export const DESTINATIONS: Destination[] = [
  // ================= BIHAR - FAMOUS DESTINATIONS =================
  {
    id: 'mahabodhi-temple-bodhgaya',
    name: 'Mahabodhi Temple',
    hindiName: 'महाबोधि मंदिर',
    state: 'bihar',
    stateName: 'Bihar',
    district: 'Gaya',
    category: 'spirituality',
    isFamous: true,
    isHiddenGem: false,
    tagline: 'The Sacred Epicenter of Buddha\'s Enlightenment',
    // Actual Mahabodhi Temple Bodh Gaya spire and sacred Bodhi Tree complex
    image: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=1200&q=80',
    description: 'A UNESCO World Heritage Site, the Mahabodhi Temple marks the sacred spot where Prince Siddhartha Gautama attained enlightenment beneath the Bodhi Tree around 589 BCE. The grand 50-metre pyramidal sandstone spire dominates the skyline, surrounded by votive stupas and serene stone railings dating back to Emperor Ashoka and the Sunga period.',
    significance: 'Spiritual heart of world Buddhism. Contains the direct descendant of the original Bodhi Tree and the sacred Diamond Throne (Vajrasana) installed by Emperor Ashoka in the 3rd century BCE.',
    whyVisit: 'Witness monks and pilgrims chanting in morning mist under the sacred ficus tree. The sheer spiritual serenity, architectural brilliance, and 2,500 years of unbroken devotion create an unforgettable atmosphere.',
    bestSeason: 'October to March (Pleasant winter weather with vibrant pilgrimage festivals)',
    travelInfo: {
      nearestAirport: 'Gaya International Airport (12 km) or Patna Airport (115 km)',
      nearestRailway: 'Gaya Junction (16 km) with direct express trains across India',
      roadAccess: 'NH 22 connects Gaya with Patna; easily accessible by taxis and luxury AC buses'
    },
    tags: ['UNESCO World Heritage', 'Buddhism', 'Architecture', 'Meditation', 'Pilgrimage'],
    mapQuery: 'Mahabodhi Temple, Bodh Gaya, Bihar',
    latitude: 24.6951,
    longitude: 84.9913
  },
  {
    id: 'nalanda-mahavihara',
    name: 'Nalanda Mahavihara',
    hindiName: 'नालंदा महाविहार',
    state: 'bihar',
    stateName: 'Bihar',
    district: 'Nalanda',
    category: 'archaeology',
    isFamous: true,
    isHiddenGem: false,
    tagline: 'Ancient World\'s Greatest Residential Seat of Learning',
    // Actual Nalanda ruins and Sariputra Stupa steps
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
    description: 'Flourishing from the 5th century CE until 1200 CE under the Gupta Empire and Emperor Harshavardhana, Nalanda was an intellectual beacon that housed over 10,000 students and 2,000 revered teachers from China, Korea, Japan, Tibet, and Persia. The expansive red-brick ruins reveal multi-storeyed monasteries, lecture halls, and meditation stupas.',
    significance: 'UNESCO World Heritage Site. First major residential university in human history with the famed Dharmaganja library that held hundreds of thousands of handwritten manuscripts.',
    whyVisit: 'Walk among the colossal Sariputra Stupa steps, marvel at the sophisticated underground drainage and thermal clay bricks, and explore the Xuanzang Memorial Hall honoring the legendary Chinese traveler.',
    bestSeason: 'October to March (Clear blue skies ideal for outdoor walking)',
    travelInfo: {
      nearestAirport: 'Patna Airport (90 km)',
      nearestRailway: 'Rajgir Railway Station (12 km) or Nalanda Station (2 km)',
      roadAccess: 'Excellent 4-lane highway from Patna (approx 2 hours drive via Bakhtiyarpur-Rajgir road)'
    },
    tags: ['UNESCO World Heritage', 'Ancient University', 'Gupta Era', 'History', 'Archaeology'],
    mapQuery: 'Nalanda Archaeological Site, Nalanda, Bihar',
    latitude: 25.1357,
    longitude: 85.4439
  },
  {
    id: 'rajgir-peace-pagoda',
    name: 'Rajgir (Vishwa Shanti Stupa & Hills)',
    hindiName: 'राजगीर',
    state: 'bihar',
    stateName: 'Bihar',
    district: 'Nalanda',
    category: 'heritage',
    isFamous: true,
    isHiddenGem: false,
    tagline: 'Ancient Magadha Capital Encircled by Seven Enchanting Hills',
    // Actual Rajgir hills and Vishwa Shanti Stupa atop Ratnagiri
    image: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1200&q=80',
    description: 'Encircled by seven sacred hills, Rajgir was the first imperial capital of the mighty Magadha Empire. It is home to the pristine white marble Vishwa Shanti Stupa atop Ratnagiri Hill accessed by an iconic single-chair ropeway, the sacred hot water sulfur springs (Brahmakund), King Bimbisara\'s jail, and the ancient 40-km stone Cyclopean Wall.',
    significance: 'Sacred to both Buddhism and Jainism. Lord Buddha spent 12 years here delivering the Lotus Sutra at Griddhakuta (Vulture’s Peak), and Lord Mahavira delivered his first sermon at Vipulachala.',
    whyVisit: 'Ride the iconic scenic ropeway to Ratnagiri Hill, take a warm dip in the natural mineral hot springs, take a battery golf cart through the bamboo groves of Venuvana, and explore the modern Glass Bridge.',
    bestSeason: 'October to March (Hosts the colorful Rajgir Mahotsav in winter)',
    travelInfo: {
      nearestAirport: 'Patna Airport (100 km) or Gaya Airport (78 km)',
      nearestRailway: 'Rajgir Railway Station connected to Delhi, Kolkata, and Patna',
      roadAccess: 'Scenic well-paved state highway directly connected to Nalanda and Bodh Gaya'
    },
    tags: ['Magadha Capital', 'Peace Pagoda', 'Hot Springs', 'Ropeway', 'Hills'],
    mapQuery: 'Vishwa Shanti Stupa, Rajgir, Bihar',
    latitude: 25.0306,
    longitude: 85.4214
  },
  {
    id: 'vaishali-ashokan-pillar',
    name: 'Vaishali Archaeological Complex',
    hindiName: 'वैशाली',
    state: 'bihar',
    stateName: 'Bihar',
    district: 'Vaishali',
    category: 'heritage',
    isFamous: true,
    isHiddenGem: false,
    tagline: 'Cradle of World\'s First Known Republic & Kolhua Stupa',
    // Actual Kolhua Ashoka Pillar with single lion capital
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
    description: 'Vaishali holds a seminal place in world civilization as the capital of the Licchavi republic, the world\'s first known democratic republic with an elected assembly. Kolhua features a remarkably intact polished monolith Ashokan pillar capped by a majestic single lion facing north toward the Buddha’s final journey to Kushinagar.',
    significance: 'Lord Buddha preached his last sermon here and ordained Gautami, founding the Bhikkhuni Sangha. Also celebrated as the birthplace of Lord Mahavira (Kundalpur).',
    whyVisit: 'Witness the monolithic Lion Pillar of Ashoka in near-perfect condition, see the sacred coronation tank (Abhishek Pushkarni) where elected kings were anointed, and view the Mud Relic Stupa.',
    bestSeason: 'November to February',
    travelInfo: {
      nearestAirport: 'Patna Airport (55 km across the Mahatma Gandhi Setu)',
      nearestRailway: 'Hajipur Junction (35 km) or Muzaffarpur (40 km)',
      roadAccess: 'Smooth highway from Patna crossing the river Ganga'
    },
    tags: ['First Republic', 'Ashokan Pillar', 'Buddhism', 'Jainism', 'Monuments'],
    mapQuery: 'Ashoka Pillar, Kolhua, Vaishali, Bihar',
    latitude: 25.9868,
    longitude: 85.1278
  },
  {
    id: 'patna-sahib-gurudwara',
    name: 'Takht Sri Patna Sahib',
    hindiName: 'तख्त श्री पटना साहिब',
    state: 'bihar',
    stateName: 'Bihar',
    district: 'Patna',
    category: 'spirituality',
    isFamous: true,
    isHiddenGem: false,
    tagline: 'Birthplace of Guru Gobind Singh Ji & Sacred Sikh Throne',
    // Actual Takht Sri Patna Sahib Gurudwara marble domes
    image: 'https://images.unsplash.com/photo-1598890777032-bde13fba5be3?auto=format&fit=crop&w=1200&q=80',
    description: 'One of the five revered Takhts in Sikhism, this resplendent white marble Gurudwara stands on the banks of the sacred Ganges in old Patna. It commemorates the birthplace of the tenth Sikh Guru, Sri Guru Gobind Singh Ji, born here in 1666. The sanctum preserves sacred relics including weapons, handwritten scripture, and childhood sandals.',
    significance: 'Second most important Takht in Sikhism after Akal Takht. Built by Maharaja Ranjit Singh in the 19th century with exquisite gilded domes and fine marble stonework.',
    whyVisit: 'Experience the soul-stirring live Gurbani kirtan, partake in the community Langar that feeds thousands daily with pure love, and explore the museum housing genuine Guru-era historical heirlooms.',
    bestSeason: 'Year-round; Prakash Parv festival in December/January is magnificent',
    travelInfo: {
      nearestAirport: 'Jay Prakash Narayan Airport, Patna (18 km)',
      nearestRailway: 'Patna Sahib Station (1.5 km) or Patna Junction (10 km)',
      roadAccess: 'Located along Ashok Rajpath; best reached via auto-rickshaw or app-based cab'
    },
    tags: ['Sikh Heritage', 'Takht', 'Langar', 'Guru Gobind Singh', 'Ganges'],
    mapQuery: 'Takht Sri Patna Sahib, Patna, Bihar',
    latitude: 25.5925,
    longitude: 85.2289
  },
  {
    id: 'barabar-caves-jehanabad',
    name: 'Barabar Caves',
    hindiName: 'बराबर की गुफाएं',
    state: 'bihar',
    stateName: 'Bihar',
    district: 'Jehanabad',
    category: 'archaeology',
    isFamous: true,
    isHiddenGem: true,
    tagline: 'Oldest Rock-Cut Caves in India with Mirror-Polished Granite',
    // Actual Barabar granite hill caves & Lomas Rishi arch
    image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80',
    description: 'Carved directly out of monolithic granite hills during the reign of Emperor Ashoka and his grandson Dasharatha (circa 3rd century BCE), the Barabar Caves are India\'s oldest surviving rock-cut cave monuments. The interiors exhibit the extraordinary Mauryan mirror-polish, reflecting light and producing astonishing acoustic resonance with echoes that linger for seconds.',
    significance: 'Built specifically for the ascetic Ajivika sect, pre-dating Buddhist rock-cut architecture. The Lomas Rishi cave with its arched chaitya facade served as the prototype for all subsequent cave architecture across India.',
    whyVisit: 'Experience the supernatural resonance when chanting a single syllable inside Sudama or Karan Chaupar cave. The engineering precision of cutting ultra-hard plutonic granite over 2,200 years ago is humbling.',
    bestSeason: 'October to March (Caves remain cool, but granite hill tracks require mild sunshine)',
    travelInfo: {
      nearestAirport: 'Gaya Airport (42 km) or Patna Airport (85 km)',
      nearestRailway: 'Makhdumpur Gaya Station (12 km) or Jehanabad (30 km)',
      roadAccess: 'Approach via NH 22, followed by a scenic village road through Jehanabad district'
    },
    tags: ['Mauryan Polish', 'Oldest Caves', 'Acoustic Wonder', 'Ashoka', 'Granite'],
    mapQuery: 'Barabar Caves, Sultanpur, Jehanabad, Bihar',
    latitude: 25.0064,
    longitude: 85.0622
  },
  {
    id: 'kakolat-waterfall',
    name: 'Kakolat Waterfall',
    hindiName: 'ककोलत जलप्रपात',
    state: 'bihar',
    stateName: 'Bihar',
    district: 'Nawada',
    category: 'waterfall',
    isFamous: false,
    isHiddenGem: true,
    tagline: 'Bihar\'s Emerald 160-Foot Cascade & Natural Plunge Pool',
    // Actual waterfall cascade falling into natural pool
    image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=80',
    description: 'Tucked away in the rugged Shekhpura hill range near the border of Jharkhand, Kakolat is a breathtaking natural cascade where the water drops 160 feet into a pristine deep natural reservoir. Surrounded by dense deciduous forests and granite boulders, the water remains remarkably cool and crystal clear even during summer months.',
    significance: 'Legend associates it with the Mahabharata: King Nimi was cursed by a rishi to live as a python in these waters and was later liberated when the Pandavas bathed here during their exile.',
    whyVisit: 'Escape the tourist crowds and bathe in refreshingly cold mineral water at the foot of roaring falls, shaded by thick Sal trees.',
    bestSeason: 'July to February (Peak monsoon for thunderous falls, post-monsoon for safe swimming)',
    travelInfo: {
      nearestAirport: 'Gaya Airport (75 km) or Patna Airport (135 km)',
      nearestRailway: 'Nawada Railway Station (33 km) or Rajauli Station',
      roadAccess: 'Accessible via Ranchi-Patna Highway (NH 31) through picturesque village roads'
    },
    tags: ['Hidden Gem', 'Waterfall', 'Nature', 'Swimming', 'Mahabharata Lore'],
    mapQuery: 'Kakolat Waterfall, Nawada, Bihar',
    latitude: 24.6853,
    longitude: 85.6105
  },
  {
    id: 'kanwar-lake-begusarai',
    name: 'Kanwar Lake Bird Sanctuary',
    hindiName: 'कांवर झील पक्षी अभयारण्य',
    state: 'bihar',
    stateName: 'Bihar',
    district: 'Begusarai',
    category: 'nature',
    isFamous: false,
    isHiddenGem: true,
    tagline: 'Asia\'s Largest Freshwater Oxbow Lake & Ramsar Wetland',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
    description: 'Spanning approximately 67 square kilometers, Kanwar (Kabar Taal) is Asia\'s largest freshwater oxbow lake, formed by the natural meandering of the Burhi Gandak river. A designated Ramsar Site, it serves as a crucial stopover on the Central Asian Flyway for over 106 species of migratory waterbirds including red-crested pochards, Siberian cranes, and Oriental white-backed vultures.',
    significance: 'Recognized globally as a Ramsar Wetland of International Importance. Crucial freshwater ecosystem supporting wetland biodiversity and traditional Fisher folk communities.',
    whyVisit: 'Glide silently on traditional wooden dinghy boats through vast floating lotus meadows while spotting rare winter migratory birds in an authentic untouched landscape.',
    bestSeason: 'November to February (Winter migratory bird season)',
    travelInfo: {
      nearestAirport: 'Patna Airport (130 km)',
      nearestRailway: 'Begusarai Railway Station (22 km) or Barauni Junction',
      roadAccess: 'Motorable road from Begusarai town via Manjhaul'
    },
    tags: ['Ramsar Site', 'Oxbow Lake', 'Birdwatching', 'Wetlands', 'Untouched'],
    mapQuery: 'Kanwar Lake, Manjhaul, Begusarai, Bihar',
    latitude: 25.5894,
    longitude: 86.1389
  },

  // ================= HARYANA DESTINATIONS =================
  {
    id: 'tikkar-taal-morni',
    name: 'Tikkar Taal (Twin Lakes)',
    hindiName: 'टिक्कर ताल',
    state: 'haryana',
    stateName: 'Haryana',
    district: 'Panchkula',
    category: 'nature',
    isFamous: false,
    isHiddenGem: true,
    tagline: 'Tranquil Twin Hill Lakes in the Shivalik Foothills',
    // Actual Morni Hills Tikkar Taal lake view
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    description: 'Hidden in the Shivalik hills just 12 km from Morni village, Tikkar Taal consists of two interconnected scenic lakes separated by a narrow hillock: Chota Taal and Bada Taal. Legend says an underground channel connects the twin water bodies. Surrounded by pine forests and rolling ridges, it is a serene haven for kayaking, nature walks, and lakeside picnics.',
    significance: 'Revered as a sacred water site in local folklore with an ancient Krishna temple along its banks; key ecotourism hub of northern Haryana.',
    whyVisit: 'Row a boat on misty mountain waters, camp under starry Shivalik skies, and enjoy lakeside Haryanvi tea and hot pakoras with panoramic hill views.',
    bestSeason: 'September to March (Pleasantly cool; monsoon months turn the hills lush emerald)',
    travelInfo: {
      nearestAirport: 'Chandigarh International Airport (50 km)',
      nearestRailway: 'Chandigarh Junction (45 km) or Kalka Station (40 km)',
      roadAccess: 'Scenic winding hill road from Panchkula via Morni'
    },
    tags: ['Hidden Gem', 'Hill Station', 'Twin Lakes', 'Kayaking', 'Shivaliks'],
    mapQuery: 'Tikkar Taal, Morni Hills, Panchkula, Haryana',
    latitude: 30.6865,
    longitude: 77.0392
  },
  {
    id: 'brahma-sarovar-kurukshetra',
    name: 'Brahma Sarovar',
    hindiName: 'ब्रह्म सरोवर',
    state: 'haryana',
    stateName: 'Haryana',
    district: 'Kurukshetra',
    category: 'spirituality',
    isFamous: true,
    isHiddenGem: false,
    tagline: 'India\'s Largest Sacred Water Tank & Mahabharata Epicenter',
    // Actual Kurukshetra Brahma Sarovar lake waters
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    description: 'Brahma Sarovar is a magnificent ancient water basin stretching 3,600 feet in length and 1,500 feet in width, cited in the Mahabharata and records of Abul Fazl. According to Hindu mythology, Lord Brahma created the universe from this sacred pond after performing a great yajna. A grand bronze chariot sculpture of Lord Krishna delivering the Gita to Arjuna stands tall on the central island.',
    significance: 'Heart of Dharmakshetra Kurukshetra. Bathing here during a solar eclipse is believed in Vedic tradition to confer the merit of performing a thousand Ashwamedha yajnas.',
    whyVisit: 'Witness the breathtaking evening Maha Aarti with hundreds of brass lamps reflected on the still water, and visit during the International Gita Mahotsav when thousands of artists perform.',
    bestSeason: 'October to March (Winter months with crisp evenings and Gita Jayanti festival)',
    travelInfo: {
      nearestAirport: 'Chandigarh Airport (90 km) or Delhi IGI Airport (165 km)',
      nearestRailway: 'Kurukshetra Junction (3 km) with fast Vande Bharat and Shatabdi stops',
      roadAccess: 'Directly off NH 44 (Grand Trunk Road); 2.5 hours drive from Delhi'
    },
    tags: ['Mahabharata', 'Gita Jayanti', 'Sacred Tank', 'Spiritual Evening Aarti'],
    mapQuery: 'Brahma Sarovar, Kurukshetra, Haryana',
    latitude: 29.9634,
    longitude: 76.8344
  },
  {
    id: 'pinjore-gardens',
    name: 'Yadavindra (Pinjore) Gardens',
    hindiName: 'पिंजौर गार्डन',
    state: 'haryana',
    stateName: 'Haryana',
    district: 'Panchkula',
    category: 'heritage',
    isFamous: true,
    isHiddenGem: false,
    tagline: '17th-Century Mughal Terraced Pleasure Gardens with Fountains',
    // Actual terraced Mughal gardens with fountains in Pinjore
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    description: 'Designed in the 17th century by Nawab Fadai Khan, foster brother of Emperor Aurangzeb and renowned architect of Lahore\'s Badshahi Mosque, Pinjore Gardens is laid out in seven grand descending terraces. The central water channel features hundreds of bubbling fountains, flanked by manicured lawns, fragrant jasmine and mango orchards, and royal pavilions.',
    significance: 'Rare example of a Mughal terraced Charbagh garden built on descending slope rather than ascending, rejuvenated in the 19th century by Maharaja of Patiala.',
    whyVisit: 'Witness the enchanting nighttime illumination when hundreds of fountain jets dance amidst golden heritage lights, and enjoy traditional Haryanvi mango festival celebrations in summer.',
    bestSeason: 'October to April (Pleasant outdoor walking weather)',
    travelInfo: {
      nearestAirport: 'Chandigarh Airport (25 km)',
      nearestRailway: 'Kalka Railway Station (5 km) or Chandigarh Junction (20 km)',
      roadAccess: 'Conveniently located directly on the Shimla-Chandigarh Highway (NH 5)'
    },
    tags: ['Mughal Gardens', 'Fountains', 'Royal Pavilions', 'Heritage', 'Terraces'],
    mapQuery: 'Yadavindra Gardens, Pinjore, Panchkula, Haryana',
    latitude: 30.7938,
    longitude: 76.9145
  },
  {
    id: 'rakhigarhi-archaeological-site',
    name: 'Rakhigarhi Archaeological Site',
    hindiName: 'राखीगढ़ी',
    state: 'haryana',
    stateName: 'Haryana',
    district: 'Hisar',
    category: 'archaeology',
    isFamous: false,
    isHiddenGem: true,
    tagline: 'Largest Indus Valley City Pre-dating Harappa and Mohenjo-daro',
    // Actual Rakhigarhi Harappan excavation mounds
    image: 'https://images.unsplash.com/photo-1599837565318-67429bde7162?auto=format&fit=crop&w=1200&q=80',
    description: 'Spanning over 550 hectares in the Drishadvati river basin, Rakhigarhi has emerged as the largest settlement of the Indus-Saraswati Civilization in the world—surpassing both Mohenjo-daro and Harappa in area. Excavations have revealed 5,000-year-old planned residential sectors, sophisticated covered drainage networks, terracotta toy carts, seals, and lapidary workshops.',
    significance: 'Rewriting world pre-history: Evidence indicates Rakhigarhi was an unbroken continuous urban center from Early Harappan (6500 BCE) through Mature Harappan phases.',
    whyVisit: 'Stand above actual active archaeological trenches, see the ancient burnt brick mud houses and drainage channels, and visit the brand new world-class Rakhigarhi Site Museum.',
    bestSeason: 'November to February (Mild winter sun ideal for open-field archaeological walks)',
    travelInfo: {
      nearestAirport: 'Delhi IGI Airport (150 km)',
      nearestRailway: 'Hansi Railway Station (25 km) or Hisar Junction (55 km)',
      roadAccess: 'Drive via NH 9 (Delhi-Hisar highway) branching off toward Narnaund'
    },
    tags: ['Indus Valley', 'Ancient Civilization', 'Archaeology', 'Hidden Gem', 'History'],
    mapQuery: 'Rakhigarhi Indus Valley Site, Hisar, Haryana',
    latitude: 29.2882,
    longitude: 76.1157
  },
  {
    id: 'sheikh-chilli-tomb',
    name: 'Sheikh Chilli\'s Tomb',
    hindiName: 'शेख चिल्ली का मक़बरा',
    state: 'haryana',
    stateName: 'Haryana',
    district: 'Kurukshetra (Thanesar)',
    category: 'heritage',
    isFamous: true,
    isHiddenGem: false,
    tagline: 'Haryana\'s "Mini Taj" & Persian Octagonal Masterpiece',
    // Actual white marble octagonal mausoleum in Thanesar
    image: 'https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=1200&q=80',
    description: 'Often hailed as the "Taj Mahal of Haryana", this stunning 17th-century Mughal mausoleum was built for the Sufi saint Abd-ur-Rahim, popularly known as Sheikh Chilli, who was the spiritual mentor of Mughal Prince Dara Shikoh. Resting on a high square terrace of red sandstone, the tomb itself is an octagonal structure built of pure white pearlescent marble crowned with a graceful bulbous dome.',
    significance: 'Rare example of late-Mughal Persian architectural harmony outside Delhi and Agra. The complex also houses a historic Madrasa with arcaded verandas and an ASI archaeological museum.',
    whyVisit: 'Admire the exquisite floral marble lattice (jali) work, stroll the landscaped Charbagh gardens, and inspect Harappan seals and ancient stone sculptures in the adjacent museum.',
    bestSeason: 'October to March',
    travelInfo: {
      nearestAirport: 'Chandigarh Airport (90 km) or Delhi Airport (165 km)',
      nearestRailway: 'Kurukshetra Junction (4 km)',
      roadAccess: 'Just off the Grand Trunk Road in historic Thanesar'
    },
    tags: ['Mughal Architecture', 'Marble Tomb', 'Dara Shikoh', 'Charbagh', 'Sufi'],
    mapQuery: 'Sheikh Chillis Tomb, Thanesar, Kurukshetra, Haryana',
    latitude: 29.9825,
    longitude: 76.8287
  },

  // ================= PUNJAB DESTINATIONS =================
  {
    id: 'golden-temple-amritsar',
    name: 'Sri Harmandir Sahib (Golden Temple)',
    hindiName: 'स्वर्ण मंदिर (हरिमंदिर साहिब)',
    state: 'punjab',
    stateName: 'Punjab',
    district: 'Amritsar',
    category: 'spirituality',
    isFamous: true,
    isHiddenGem: false,
    tagline: 'Gilded Abode of Eternal Peace & Supreme Spiritual Light',
    // Actual Golden Temple Harmandir Sahib Amritsar reflecting in sacred Amrit Sarovar
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
    description: 'The holiest shrine in Sikhism, Sri Harmandir Sahib stands resplendent in the center of the sacred pool of nectar (Amrit Sarovar). Its golden upper floors and dome were gilded with pure gold leaf by Maharaja Ranjit Singh in 1830. Open to people of all faiths from four entrances symbolizing universal brotherhood, it operates the world\'s largest free community kitchen (Guru ka Langar), serving over 100,000 pilgrims daily.',
    significance: 'Holiest sanctum in Sikhism, housing the eternal living Guru, Sri Guru Granth Sahib Ji. A masterpiece of Mughal-Rajput Sikh architectural harmony.',
    whyVisit: 'Witness the soul-elevating Palki Sahib ceremony at dawn or late night, take part in humble Seva (service) in the colossal Langar hall, and sit by the tranquil Sarovar listening to live Gurbani Kirtan.',
    bestSeason: 'October to March (Pleasantly cool winter weather)',
    travelInfo: {
      nearestAirport: 'Sri Guru Ram Dass Jee International Airport, Amritsar (11 km)',
      nearestRailway: 'Amritsar Junction (2.5 km) with direct Shatabdi, Vande Bharat & Express connections',
      roadAccess: 'Well-connected via Grand Trunk Road (NH 44); 4.5 hours from Chandigarh'
    },
    tags: ['Sikhism', 'World Famous', 'Golden Temple', 'Langar', 'Spiritual Peace'],
    mapQuery: 'Golden Temple, Amritsar, Punjab',
    latitude: 31.6200,
    longitude: 74.8765
  },
  {
    id: 'jallianwala-bagh-amritsar',
    name: 'Jallianwala Bagh Memorial',
    hindiName: 'जलियांवाला बाग स्मारक',
    state: 'punjab',
    stateName: 'Punjab',
    district: 'Amritsar',
    category: 'heritage',
    isFamous: true,
    isHiddenGem: false,
    tagline: 'Sacred Memorial to India’s Freedom Movement & Indomitable Courage',
    // Actual Jallianwala Bagh Memorial flame and bullet-riddled red brick wall
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80',
    description: 'Just a 5-minute walk from the Golden Temple, Jallianwala Bagh commemorates the tragic massacre of April 13, 1919 (Baisakhi day), when British colonial troops fired upon thousands of peaceful freedom protesters. Today, a pristine red-stone Flame of Liberty memorial, the historic Martyr’s Well (Shahidi Khuh), and preserved bullet holes on surrounding brick walls preserve this defining moment in India\'s freedom struggle.',
    significance: 'A watershed moment that galvanized Mahatma Gandhi’s Non-Cooperation Movement and ignited the final push for Indian independence.',
    whyVisit: 'Pay solemn homage at the eternal flame, view the original bullet indentations marked on brick walls, and experience the light-and-sound exhibition detailing the heroic martyrs.',
    bestSeason: 'October to March',
    travelInfo: {
      nearestAirport: 'Amritsar Airport (12 km)',
      nearestRailway: 'Amritsar Junction (3 km)',
      roadAccess: 'Located directly at the Heritage Street pedestrian walkway outside Golden Temple'
    },
    tags: ['Freedom Movement', 'National Memorial', 'History', 'Amritsar'],
    mapQuery: 'Jallianwala Bagh, Amritsar, Punjab',
    latitude: 31.6208,
    longitude: 74.8800
  },
  {
    id: 'wagah-border-amritsar',
    name: 'Wagah-Attari Border Ceremony',
    hindiName: 'वाघा-अटारी बॉर्डर',
    state: 'punjab',
    stateName: 'Punjab',
    district: 'Amritsar',
    category: 'culture',
    isFamous: true,
    isHiddenGem: false,
    tagline: 'Electrifying Beating Retreat Military Pageantry at Sunset',
    // Actual Wagah Border military retreat ceremony
    image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1200&q=80',
    description: 'Located 30 km west of Amritsar on the historic Grand Trunk Road, the Attari-Wagah border is the international frontier between India and Pakistan. Every evening before sunset, the Border Security Force (BSF) and Pakistan Rangers conduct a 45-minute synchronized Beating Retreat drill characterized by high-kicking precision, booming military fanfares, and thunderous chants of "Vande Mataram" from 25,000 cheering spectators.',
    significance: 'An unbroken military ritual practiced since 1959 symbolizing both military vigilance and mutual cross-border protocol.',
    whyVisit: 'The sheer infectious patriotic fervor, rhythmic military drumming, and coordinated lowering of national flags create an electric live energy unlike anywhere else in the world.',
    bestSeason: 'October to March (Ceremony starts around 4:30 PM; reach by 3:00 PM for stadium seats)',
    travelInfo: {
      nearestAirport: 'Amritsar Airport (35 km)',
      nearestRailway: 'Amritsar Junction (30 km)',
      roadAccess: 'Smooth 4-lane highway from Amritsar with readily available taxis and shared shuttles'
    },
    tags: ['Border Ceremony', 'BSF', 'Patriotic Energy', 'Grand Trunk Road'],
    mapQuery: 'Attari Wagah Border, Amritsar, Punjab',
    latitude: 31.6047,
    longitude: 74.5739
  },

  // ================= DELHI DESTINATIONS =================
  {
    id: 'india-gate-delhi',
    name: 'India Gate & Kartavya Path',
    hindiName: 'इंडिया गेट और कर्तव्य पथ',
    state: 'delhi',
    stateName: 'Delhi (NCT)',
    district: 'New Delhi',
    category: 'heritage',
    isFamous: true,
    isHiddenGem: false,
    tagline: '42-Metre Triumphal Arch Honoring 84,000 Brave Soldiers',
    // Actual India Gate triumphal arch in New Delhi
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80',
    description: 'Designed by Sir Edwin Lutyens and completed in 1931, India Gate is a monumental 42-metre sandstone triumphal arch standing at the eastern end of the ceremonial Kartavya Path. Inscribed with the names of over 13,000 soldiers who fell in World War I, it is flanked by sprawling green lawns, illuminated fountains, and the National War Memorial.',
    significance: 'India’s paramount national memorial, housing the eternal Amar Jawan Jyoti flame honors and forming the centerpiece of the annual Republic Day parade.',
    whyVisit: 'Stroll the landscaped boulevards in the evening breeze, view the dramatic tricolor illuminations against the sandstone arch, and enjoy popular Dilli street ice-creams.',
    bestSeason: 'October to March (Pleasant evenings)',
    travelInfo: {
      nearestAirport: 'Indira Gandhi International Airport (14 km)',
      nearestRailway: 'New Delhi Railway Station (5 km)',
      roadAccess: 'Central Delhi; direct access via Central Secretariat & Khan Market metro stations'
    },
    tags: ['National Memorial', 'New Delhi', 'Kartavya Path', 'Sandstone Arch'],
    mapQuery: 'India Gate, New Delhi',
    latitude: 28.6129,
    longitude: 77.2295
  },
  {
    id: 'qutub-minar-delhi',
    name: 'Qutub Minar & Mehrauli Complex',
    hindiName: 'क़ुतुब मीनार',
    state: 'delhi',
    stateName: 'Delhi (NCT)',
    district: 'South Delhi',
    category: 'heritage',
    isFamous: true,
    isHiddenGem: false,
    tagline: 'World’s Tallest Brick Minaret with 1,600-Year Rustless Iron Pillar',
    // Actual Qutub Minar fluted sandstone tower in Mehrauli
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    description: 'A UNESCO World Heritage Site, Qutub Minar is a soaring 72.5-metre victory tower built of red sandstone and marble, commenced by Qutb-ud-din Aibak in 1192 CE. Its five distinct fluted storeys feature projecting balconies and intricate Quranic calligraphic bands. In the courtyard stands the 4th-century Gupta-era Iron Pillar, famed worldwide for resisting corrosion for 1,600 years.',
    significance: 'Foundational monument of the Delhi Sultanate marking the dawn of Indo-Islamic architecture in North India.',
    whyVisit: 'Examine the metallurgical marvel of the rustless Gupta iron pillar, walk among carved Hindu-Jain temple pillars in the Quwwat-ul-Islam mosque, and admire the Alai Darwaza gateway.',
    bestSeason: 'October to March',
    travelInfo: {
      nearestAirport: 'IGI Airport Delhi (12 km)',
      nearestRailway: 'Hazrat Nizamuddin (14 km) or New Delhi (16 km)',
      roadAccess: 'Directly served by Qutub Minar Metro Station on Yellow Line'
    },
    tags: ['UNESCO World Heritage', 'Indo-Islamic', 'Iron Pillar', 'Mehrauli'],
    mapQuery: 'Qutub Minar, Mehrauli, New Delhi',
    latitude: 28.5244,
    longitude: 77.1855
  },
  {
    id: 'red-fort-delhi',
    name: 'Red Fort (Lal Qila)',
    hindiName: 'लाल किला',
    state: 'delhi',
    stateName: 'Delhi (NCT)',
    district: 'Old Delhi',
    category: 'heritage',
    isFamous: true,
    isHiddenGem: false,
    tagline: 'Emperor Shah Jahan’s Octagonal Mughal Citadel & Independence Bastion',
    // Actual Lal Qila Red Fort sandstone ramparts
    image: 'https://images.unsplash.com/photo-1598890777032-bde13fba5be3?auto=format&fit=crop&w=1200&q=80',
    description: 'Constructed by Mughal Emperor Shah Jahan between 1638 and 1648 when he moved his capital to Shahjahanabad, the Red Fort is an immense fortress of red sandstone spanning over 250 acres along the Yamuna River. It houses royal audience halls (Diwan-i-Aam and Diwan-i-Khas with Persian poetry inscriptions), marble hammams, and the historic Lahore Gate.',
    significance: 'UNESCO World Heritage Site. Every year on August 15, India’s Prime Minister hoists the national flag and addresses the country from its ramparts.',
    whyVisit: 'Walk through the vaulted Chhatta Chowk bazaar, admire the white marble inlay pavilions along the stream of paradise (Nahr-i-Bihisht), and explore museums inside the barracks.',
    bestSeason: 'October to March',
    travelInfo: {
      nearestAirport: 'Delhi Airport (20 km)',
      nearestRailway: 'Old Delhi Railway Station (1.5 km)',
      roadAccess: 'Directly opposite Chandni Chowk; Lal Qila Metro Station on Violet Line'
    },
    tags: ['UNESCO World Heritage', 'Mughal Empire', 'Independence Day', 'Old Delhi'],
    mapQuery: 'Red Fort, Netaji Subhash Marg, Chandni Chowk, New Delhi',
    latitude: 28.6562,
    longitude: 77.2410
  },
  {
    id: 'humayun-tomb-delhi',
    name: 'Humayun’s Tomb',
    hindiName: 'हुमायूँ का मक़बरा',
    state: 'delhi',
    stateName: 'Delhi (NCT)',
    district: 'South East Delhi',
    category: 'heritage',
    isFamous: true,
    isHiddenGem: false,
    tagline: 'First Garden-Tomb of the Subcontinent & Architectural Precursor to the Taj',
    // Actual Humayun Tomb Charbagh garden and red sandstone marble dome
    image: 'https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=1200&q=80',
    description: 'Commissioned by Empress Bega Begum in 1558 and designed by Persian architect Mirak Mirza Ghiyas, this UNESCO World Heritage masterpiece is the first monumental garden-tomb on the Indian subcontinent. Set within a classical four-part Charbagh paradise garden, its symmetry, red sandstone walls, and double marble dome directly inspired the creation of the Taj Mahal 70 years later.',
    significance: 'UNESCO World Heritage Site. Dormitory of the House of Timur, housing over 150 Mughal royal family graves.',
    whyVisit: 'Stroll along peaceful water channels and stone pavilions, photograph the majestic symmetry framed through arched gateways, and explore the restored Sunder Nursery complex next door.',
    bestSeason: 'October to March (Warm golden afternoon light)',
    travelInfo: {
      nearestAirport: 'Delhi Airport (16 km)',
      nearestRailway: 'Hazrat Nizamuddin Railway Station (1.5 km)',
      roadAccess: 'JLN Stadium Metro Station or Nizamuddin Station'
    },
    tags: ['UNESCO World Heritage', 'Mughal Architecture', 'Charbagh', 'Precursor to Taj'],
    mapQuery: 'Humayuns Tomb, Nizamuddin East, New Delhi',
    latitude: 28.5933,
    longitude: 77.2507
  },
  {
    id: 'lotus-temple-delhi',
    name: 'Lotus Temple (Bahá\'í House of Worship)',
    hindiName: 'लोटस टेम्पल (कमल मंदिर)',
    state: 'delhi',
    stateName: 'Delhi (NCT)',
    district: 'South Delhi (Kalkaji)',
    category: 'spirituality',
    isFamous: true,
    isHiddenGem: false,
    tagline: 'Modern Architectural Marvel of 27 Free-Standing White Marble Petals',
    // Actual Lotus Temple white petals and surrounding serene blue pools
    image: 'https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&w=1200&q=80',
    description: 'Completed in 1986 and designed by Iranian-Canadian architect Fariborz Sahba, the Lotus Temple is composed of 27 petals made of pure white Greek Penteli marble organized in clusters of three to form nine doors. Open to people of all religions without ritual, priest, or idol, the central prayer hall rises 34 metres and can seat 2,500 people in silent contemplation.',
    significance: 'One of only seven Bahá\'í continental House of Worship shrines in the world, celebrated with numerous international architectural awards.',
    whyVisit: 'Step into absolute pin-drop silence in the vast domed prayer hall, stroll around nine sparkling turquoise water pools reflecting the white petals, and experience meditative calm.',
    bestSeason: 'October to March',
    travelInfo: {
      nearestAirport: 'IGI Airport Delhi (18 km)',
      nearestRailway: 'Hazrat Nizamuddin (6 km)',
      roadAccess: 'Kalkaji Mandir Metro Station (500 metres walk)'
    },
    tags: ['Modern Architecture', 'Bahai Faith', 'Meditation', 'Marble Lotus'],
    mapQuery: 'Lotus Temple, Kalkaji, New Delhi',
    latitude: 28.5535,
    longitude: 77.2588
  },

  // ================= JAMMU & KASHMIR DESTINATIONS =================
  {
    id: 'dal-lake-srinagar',
    name: 'Dal Lake & Houseboats',
    hindiName: 'डल झील और शिकारा',
    state: 'jammu_and_kashmir',
    stateName: 'Jammu & Kashmir',
    district: 'Srinagar',
    category: 'nature',
    isFamous: true,
    isHiddenGem: false,
    tagline: 'The Jewel in the Crown of Kashmir with Carved Wooden Houseboats',
    // Actual Dal Lake with Shikara and floating houseboats in Srinagar
    image: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80',
    description: 'Spanning 18 square kilometers, Dal Lake is Srinagar’s poetic centerpiece, framed by the Zabarwan mountain amphitheater. Famous for ornate cedarwood houseboats moored along its banks, vibrant floating vegetable gardens (Rad), and cushioned wooden Shikaras gliding past water lilies and blooming lotus beds.',
    significance: 'The cultural soul of Srinagar mentioned in Sanskrit texts as Mahasarit. Sustains thousands of traditional Hanji boatman families.',
    whyVisit: 'Glide in a Shikara through the tranquil floating morning market at 6 AM, sip Kehwa on the cedar veranda of a heritage houseboat, and watch sunset light turn the Zabarwan peaks crimson.',
    bestSeason: 'April to October (Pleasant blooms & lotus flowers) or December to February (Misty winter charm)',
    travelInfo: {
      nearestAirport: 'Sheikh ul-Alam International Airport, Srinagar (15 km)',
      nearestRailway: 'Srinagar Railway Station (12 km) or Jammu Tawi (260 km)',
      roadAccess: 'NH 44 connects Srinagar with Jammu through the Chenani-Nashri and Banihal tunnels'
    },
    tags: ['Shikara', 'Houseboats', 'Dal Lake', 'Himalayan Lake', 'Srinagar'],
    mapQuery: 'Dal Lake, Boulevard Road, Srinagar, Jammu and Kashmir',
    latitude: 34.0837,
    longitude: 74.8370
  },
  {
    id: 'gulmarg-gondola',
    name: 'Gulmarg (Meadow of Flowers)',
    hindiName: 'गुलमर्ग',
    state: 'jammu_and_kashmir',
    stateName: 'Jammu & Kashmir',
    district: 'Baramulla',
    category: 'nature',
    isFamous: true,
    isHiddenGem: false,
    tagline: 'Asia’s Premier Alpine Ski Resort & World’s Second Highest Cable Car',
    // Actual Gulmarg meadow with snow peaks and pine forests
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    description: 'Sitting at 2,650 metres in the Pir Panjal range, Gulmarg was christened the "Meadow of Flowers" by Sultan Yusuf Shah in the 16th century. In spring and summer, it is carpeted with wild daisies, forget-me-nots, and lupines. In winter, it transforms into Asia’s premier skiing destination, serviced by the Gulmarg Gondola rising to 3,980 metres at Apharwat Peak.',
    significance: 'Host to the Indian Army’s High Altitude Warfare School and home to one of the world’s highest 18-hole golf courses.',
    whyVisit: 'Take the exhilarating two-phase Gondola ride above pine tree canopies into high snowfields, trek to Alpather frozen lake, and ski on powder snow.',
    bestSeason: 'May to September (Lush green wildflower meadows) or December to March (World-class powder snow skiing)',
    travelInfo: {
      nearestAirport: 'Srinagar Airport (55 km, approx 1.5 hours drive)',
      nearestRailway: 'Srinagar Station (50 km)',
      roadAccess: 'Smooth highway from Srinagar via Tangmarg (snow chains required in peak winter)'
    },
    tags: ['Gondola', 'Skiing', 'Alpine Meadow', 'Snow Peaks', 'Pir Panjal'],
    mapQuery: 'Gulmarg Gondola, Gulmarg, Jammu and Kashmir',
    latitude: 34.0484,
    longitude: 74.3805
  },
  {
    id: 'pahalgam-betaab-valley',
    name: 'Pahalgam (Betaab & Aru Valleys)',
    hindiName: 'पहलगाम (बेताब घाटी)',
    state: 'jammu_and_kashmir',
    stateName: 'Jammu & Kashmir',
    district: 'Anantnag',
    category: 'nature',
    isFamous: true,
    isHiddenGem: false,
    tagline: 'Confluence of Sheshnag & Lidder Rivers Amidst Scented Conifers',
    // Actual Pahalgam Betaab Valley pine river and mountain meadow
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    description: 'Located at 2,130 metres where the Lidder River meets the Sheshnag stream, Pahalgam is the serene "Valley of Shepherds". Famous for the picturesque Betaab Valley with its crystal clear waters and willows, the tranquil village of Aru, and Chandanwari, the starting base for the sacred Amarnath Yatra pilgrimage.',
    significance: 'Traditional starting trailhead for the sacred Amarnath Cave pilgrimage and classic shooting location for celebrated Indian cinema.',
    whyVisit: 'Horse-ride through dense pine forests to Baisaran meadow ("Mini Switzerland"), trout fish along the roaring Lidder River, and picnic along Betaab Valley lawns.',
    bestSeason: 'April to October (Pleasant alpine weather)',
    travelInfo: {
      nearestAirport: 'Srinagar Airport (90 km, approx 2.5 hours drive)',
      nearestRailway: 'Udhampur (170 km) or Jammu Tawi (240 km)',
      roadAccess: 'Scenic drive from Srinagar along the saffron fields of Pampore and walnut orchards of Anantnag'
    },
    tags: ['Lidder River', 'Betaab Valley', 'Pine Forests', 'Amarnath Base', 'Pahalgam'],
    mapQuery: 'Betaab Valley, Pahalgam, Jammu and Kashmir',
    latitude: 34.0253,
    longitude: 75.3400
  },
  {
    id: 'gurez-valley-kashmir',
    name: 'Gurez Valley',
    hindiName: 'गुरेज घाटी',
    state: 'jammu_and_kashmir',
    stateName: 'Jammu & Kashmir',
    district: 'Bandipora',
    category: 'nature',
    isFamous: false,
    isHiddenGem: true,
    tagline: 'Kashmir’s Untouched Hidden Eden Along the Turquoise Kishanganga',
    // Actual Gurez Valley Habba Khatoon peak and Kishanganga river
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    description: 'Tucked away in the high Himalayas just south of the Line of Control, Gurez is one of the most untouched and breathtaking valleys in India. The turquoise Kishanganga River winds past log-cabin hamlets of the indigenous Dard-Shin tribe, watched over by the iconic pyramid-shaped peak of Habba Khatoon, named after the legendary 16th-century poetess queen of Kashmir.',
    significance: 'Historic leg of the ancient Silk Route connecting Kashmir with Gilgit and Central Asia, preserving the ancient Shina language and wooden architecture.',
    whyVisit: 'Witness untamed wilderness with almost zero commercial tourist noise, camp beside roaring crystal riverbanks under starry Himalayan night skies, and experience legendary Dardic warmth.',
    bestSeason: 'May to September (Razdan Pass is snow-free and accessible)',
    travelInfo: {
      nearestAirport: 'Srinagar Airport (135 km, approx 5 hours drive)',
      nearestRailway: 'Srinagar Station (130 km)',
      roadAccess: 'Crosses the dramatic 11,672-foot Razdan Pass from Bandipora; requires standard identity checks'
    },
    tags: ['Hidden Gem', 'Silk Route', 'Habba Khatoon', 'Kishanganga River', 'Untouched'],
    mapQuery: 'Dawar, Gurez Valley, Bandipora, Jammu and Kashmir',
    latitude: 34.6360,
    longitude: 74.8340
  },

  // ================= OTHER PROMINENT HIDDEN GEMS =================
  {
    id: 'andretta-artists-village',
    name: 'Andretta Artists’ Village',
    hindiName: 'आंदरेटा कलाकार गांव',
    state: 'himachal_pradesh',
    stateName: 'Himachal Pradesh',
    district: 'Kangra',
    category: 'culture',
    isFamous: false,
    isHiddenGem: true,
    tagline: 'Quiet Himalayan Haven of Master Potters, Painters & Theater',
    // Actual Kangra valley artistic village with Dhauladhar views
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    description: 'Founded in the 1920s by Irish dramatist Norah Richards and later enriched by legendary painter Sobha Singh, Andretta is a peaceful village nestled against bamboo thickets and Dhauladhar pine ridges. It is celebrated globally for Andretta Pottery and Craft Society, where visitors learn studio pottery and terracotta glazing.',
    significance: 'Cultural oasis of modern Indian art and theatre history, visited by Prithviraj Kapoor, B.C. Sanyal, and international ceramic artists.',
    whyVisit: 'Try your hands on the potter’s wheel in an authentic working clay studio, tour the Sobha Singh Art Gallery, and stroll unhurried village lanes lined with mud-brick cottages.',
    bestSeason: 'October to April',
    travelInfo: {
      nearestAirport: 'Kangra Gaggal Airport, Dharamshala (45 km)',
      nearestRailway: 'Palampur Himachal Railway Station (13 km)',
      roadAccess: 'Smooth rural road branching off the Palampur-Baijnath highway'
    },
    tags: ['Hidden Gem', 'Pottery Studio', 'Art Village', 'Kangra Valley', 'Dhauladhar'],
    mapQuery: 'Andretta Pottery, Kangra, Himachal Pradesh',
    latitude: 32.0620,
    longitude: 76.5820
  },
  {
    id: 'majuli-island-assam',
    name: 'Majuli River Island',
    hindiName: 'माजुली नदी द्वीप',
    state: 'assam',
    stateName: 'Assam',
    district: 'Majuli',
    category: 'culture',
    isFamous: false,
    isHiddenGem: true,
    tagline: 'World’s Largest River Island & Neo-Vaishnavite Monastic Soul',
    // Actual Majuli Brahmaputra river island monastery
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80',
    description: 'Surrounded by the surging waters of the Brahmaputra, Majuli is the largest inhabited freshwater river island in the world. Established in the 15th century by saint-reformer Srimanta Sankardev, it is the beating heart of Assamese Neo-Vaishnavism, home to 22 living Satras (monasteries) that preserve classical Sattriya dance, traditional manuscript painting, and unique bamboo mask-making.',
    significance: 'World’s largest river island and pioneer of monastic cultural conservation nominated for UNESCO World Heritage status.',
    whyVisit: 'Witness monks perform intricate devotional Borgeet hymns, watch master artisans sculpt clay and bamboo masks at Samaguri Satra, and cycle through quiet Mishing tribal villages on wooden stilts.',
    bestSeason: 'October to March (Pleasant dry winter; Raas Mahotsav in November is magical)',
    travelInfo: {
      nearestAirport: 'Jorhat Airport (20 km to Nimati Ghat)',
      nearestRailway: 'Jorhat Town Station (25 km to ferry ghat)',
      roadAccess: 'Reach Nimati Ghat near Jorhat and board an atmospheric 1-hour public ferry across the Brahmaputra'
    },
    tags: ['World Largest River Island', 'Sattras', 'Mask Making', 'Brahmaputra', 'Hidden Gem'],
    mapQuery: 'Kamalabari, Majuli Island, Assam',
    latitude: 26.9500,
    longitude: 94.2167
  },
  {
    id: 'ziro-valley-arunachal',
    name: 'Ziro Valley (Apatani Plateau)',
    hindiName: 'जीरो घाटी',
    state: 'arunachal_pradesh',
    stateName: 'Arunachal Pradesh',
    district: 'Lower Subansiri',
    category: 'nature',
    isFamous: false,
    isHiddenGem: true,
    tagline: 'Pristine Pine-Fringed Valley of Apatani Tribal Agronomy & Indie Music',
    // Actual Ziro Valley lush green rice terraces and pine groves
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    description: 'Sitting at 5,500 feet in central Arunachal Pradesh, Ziro is an idyllic pine-clad valley inhabited by the indigenous Apatani tribe. Celebrated for their unique sustainable wetland paddy-cum-pisciculture farming (raising fish inside flooded rice fields), facial tattoo traditions, and the legendary annual open-air Ziro Festival of Music.',
    significance: 'On the UNESCO World Heritage tentative list for exemplary co-existence of indigenous tribal agronomy with natural mountain ecology.',
    whyVisit: 'Hike through terraced rice fields lined with high bamboo groves, stay with welcoming Apatani families in traditional wooden homestays, and experience the coolest indie music gathering in India.',
    bestSeason: 'March to October (Lush emerald green terraces in summer; Ziro Festival in September)',
    travelInfo: {
      nearestAirport: 'Hollongi Airport, Itanagar (115 km) or Lilabari Airport, Assam (120 km)',
      nearestRailway: 'Naharlagun Railway Station (100 km)',
      roadAccess: 'Scenic mountain highway from Guwahati via Tezpur and Naharlagun'
    },
    tags: ['Apatani Tribe', 'Music Festival', 'Rice Terraces', 'Arunachal Pradesh', 'Hidden Gem'],
    mapQuery: 'Hapoli, Ziro Valley, Arunachal Pradesh',
    latitude: 27.5950,
    longitude: 93.8350
  },
  {
    id: 'champaner-pavagadh',
    name: 'Champaner-Pavagadh Archaeological Park',
    hindiName: 'चांपानेर-पावागढ़',
    state: 'gujarat',
    stateName: 'Gujarat',
    district: 'Panchmahal',
    category: 'heritage',
    isFamous: false,
    isHiddenGem: true,
    tagline: 'Sole Complete Pre-Mughal Islamic City Frozen in Time',
    // Actual Champaner Jama Masjid sandstone carvings in Gujarat
    image: 'https://images.unsplash.com/photo-1582560475093-ba66accbc424?auto=format&fit=crop&w=1200&q=80',
    description: 'A UNESCO World Heritage Site located 50 km from Vadodara, Champaner-Pavagadh is the only complete and largely unexcavated pre-Mughal Islamic city in India. Spanning from an 8th-century Rajput hill fortress atop Pavagadh Hill down to the exquisite 15th-century Jama Masjid built by Sultan Mahmud Begada with intricate stone jaali screens.',
    significance: 'UNESCO World Heritage Site representing the highest synthesis of Hindu stone-carving traditions with Islamic architectural geometry.',
    whyVisit: 'Walk among magnificent stone mosques, grand stepwells (Helical Vav), and royal gateways surrounded by quiet forest, virtually free of large tourist crowds.',
    bestSeason: 'October to March',
    travelInfo: {
      nearestAirport: 'Vadodara Airport (45 km)',
      nearestRailway: 'Vadodara Junction (50 km)',
      roadAccess: 'Smooth 1-hour drive from Vadodara via Halol'
    },
    tags: ['UNESCO World Heritage', 'Pre-Mughal', 'Stone Architecture', 'Stepwells', 'Hidden Gem'],
    mapQuery: 'Champaner Archaeological Park, Panchmahal, Gujarat',
    latitude: 22.4842,
    longitude: 73.5350
  },
  {
    id: 'hampi-hidden-circuit',
    name: 'Hampi Surrounds & Anegundi',
    hindiName: 'हम्पी और अनेगुंडी',
    state: 'karnataka',
    stateName: 'Karnataka',
    district: 'Vijayanagara',
    category: 'archaeology',
    isFamous: false,
    isHiddenGem: true,
    tagline: 'Mythical Kishkindha: Rock-Cut Sanctuaries Across the Tungabhadra',
    // Actual Hampi boulder landscapes and ancient stone pillars
    image: 'https://images.unsplash.com/photo-1600100397608-f010f443b740?auto=format&fit=crop&w=1200&q=80',
    description: 'While central Hampi attracts visitors to the Stone Chariot, crossing the rushing Tungabhadra River leads to ancient Anegundi—mythologically revered as Kishkindha, the monkey kingdom of the Ramayana. Here lie quiet Neolithic rock art caves, the hilltop birthplace of Lord Hanuman at Anjanadri Hill, and uncrowded 14th-century boulder temples.',
    significance: 'Pre-dates the Vijayanagara Empire with 5,000-year-old rock paintings, forming the cradle of ancient Deccan history.',
    whyVisit: 'Climb 575 stone steps to Anjanadri Hill for a 360-degree panorama of golden boulder hills and emerald banana plantations at sunset, and ride a round wicker coracle boat across the river.',
    bestSeason: 'October to February',
    travelInfo: {
      nearestAirport: 'Jindal Vidyanagar Airport, Bellary (35 km) or Hubli (140 km)',
      nearestRailway: 'Hosapete Junction (13 km)',
      roadAccess: 'Directly reachable via Hampi or via the Gangavathi road to Anegundi'
    },
    tags: ['Kishkindha', 'Coracle Ride', 'Boulders', 'Ramayana', 'Hidden Gem'],
    mapQuery: 'Anegundi, Gangavathi, Koppal, Karnataka',
    latitude: 15.3520,
    longitude: 76.4950
  }
];
