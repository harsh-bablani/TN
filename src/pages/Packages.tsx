import { useEffect, useState } from 'react';
import { MapPin, Clock, Users, Star, Calendar, Heart, ArrowRight, Sparkles, X, CheckCircle, XCircle } from 'lucide-react';

const packages = [
  {
    id: 1,
    destination: "Dubai",
    title: "5 Days / 4 Nights Luxury Dubai Itinerary",
    description: "Experience the ultimate luxury in the city of gold. From world-class shopping to breathtaking architecture, Dubai offers an unforgettable blend of modern opulence and traditional charm.",
    duration: "5 Days / 4 Nights",
    highlights: [
      "Burj Khalifa & Dubai Mall",
      "Desert Safari Experience",
      "Dubai Marina Cruise",
      "Gold Souk Shopping",
      "Helicopter City Tour"
    ],
    image: "https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.9,
    reviews: 324,
    category: "Luxury",
    bestFor: "Couples, Families",
    fullDetails: {
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival in Dubai & Marina Dhow Cruise",
          description: "Welcome to Dubai, the city of luxury and unforgettable experiences. Upon arrival at Dubai International Airport, meet our representative and transfer to the hotel for check-in. Relax and refresh before starting your Dubai journey.\n\nIn the evening, enjoy a magical Dhow Cruise Dinner at Dubai Marina with international buffet dinner, live music, Tanoura dance performances, and breathtaking skyline views of modern Dubai. Overnight stay in Dubai."
        },
        {
          day: "Day 2",
          title: "Dubai City Tour, Burj Khalifa & Dubai Mall",
          description: "After breakfast, proceed for a guided Dubai City Tour covering the iconic attractions of the city including Jumeirah Mosque, Burj Al Arab photo stop, Palm Jumeirah, Atlantis The Palm photo point, Bluewaters Island, Ain Dubai, Dubai Marina, JBR Walk, Museum of the Future photo stop, Sheikh Zayed Road, Dubai Creek, Gold Souk, and Spice Souk.\n\nLater visit Dubai Mall, one of the world's largest shopping destinations featuring luxury brands, Dubai Aquarium, VR Park, and endless entertainment options.\n\nIn the evening, visit the iconic Burj Khalifa observation deck for stunning panoramic views of the city skyline followed by the world-famous Dubai Fountain Show. Overnight stay in Dubai."
        },
        {
          day: "Day 3",
          title: "Desert Safari Adventure with BBQ Dinner",
          description: "Morning free for leisure, shopping, or optional activities.\n\nIn the afternoon, embark on a thrilling Desert Safari experience in the Arabian Desert. Enjoy exciting dune bashing in 4x4 vehicles, camel riding, quad biking, sandboarding, and sunset photography in the golden dunes.\n\nAt the desert camp, experience authentic Arabian hospitality with Arabic coffee, henna painting, shisha, live belly dance, Tanoura dance, fire show, and delicious BBQ buffet dinner under the stars. Return to hotel for overnight stay."
        },
        {
          day: "Day 4",
          title: "Dubai Adventure & Luxury Experiences",
          description: "After breakfast, enjoy a full day of Dubai's exciting attractions and modern experiences. Guests can enjoy:\n\n* Visit to Museum of the Future\n* Explore Ain Dubai and JBR Walk\n* Speed boat or yacht cruise experience at Dubai Marina\n* Sky Views Observatory glass slide experience\n* Optional visit to Aquaventure Waterpark\n* Luxury shopping at Mall of the Emirates\n* Evening at La Mer or Global Village (seasonal)\n\nReturn to hotel for overnight stay."
        },
        {
          day: "Day 5",
          title: "Departure from Dubai",
          description: "After breakfast, check out from the hotel and transfer to Dubai International Airport for your onward journey with unforgettable memories of Dubai's luxury, adventure, shopping, and entertainment experiences."
        }
      ],
      includes: [
        "4 Nights hotel accommodation in Dubai",
        "Daily breakfast at hotel",
        "Airport return transfers",
        "Dubai Marina Dhow Cruise with dinner",
        "Full Dubai City Tour",
        "Burj Khalifa entry ticket",
        "Desert Safari with BBQ dinner",
        "All sightseeing and transfers",
        "Professional tour assistance"
      ],
      excludes: [
        "Dubai Visa charges",
        "International flight tickets",
        "Tourism Dirham tax",
        "Personal expenses",
        "Optional tours & activities",
        "Travel insurance"
      ],
      bestForTags: [
        "Family Holidays",
        "Honeymoon Packages",
        "Luxury Travelers",
        "Corporate Trips",
        "Friends & Group Tours"
      ]
    }
  },
  {
    id: 2,
    destination: "Singapore",
    title: "4 Days / 3 Nights Singapore Itinerary",
    description: "Discover the perfect blend of nature and innovation in Singapore. From the iconic Gardens by the Bay to vibrant cultural districts, experience Asia's most modern city-state.",
    duration: "4 Days / 3 Nights",
    highlights: [
      "Gardens by the Bay",
      "Universal Studios Singapore",
      "Sentosa Island Tour",
      "Marina Bay Sands Area",
      "Merlion Park",
      "Night Safari Experience",
      "Singapore City Tour",
      "Shopping at Orchard Road"
    ],
    image: "https://images.pexels.com/photos/3152124/pexels-photo-3152124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.8,
    reviews: 256,
    category: "Adventure",
    bestFor: "Families, Solo Travelers",
    fullDetails: {
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival in Singapore & Night Safari",
          description: "Welcome to Singapore, Asia's modern Garden City. Upon arrival at Singapore Changi Airport, meet our representative and transfer to the hotel for check-in. Relax and refresh before beginning your Singapore adventure.\n\nIn the evening, experience the world-famous Night Safari, the first nocturnal wildlife park in the world. Enjoy tram rides, wildlife encounters, cultural performances, and an unforgettable jungle experience. Overnight stay in Singapore."
        },
        {
          day: "Day 2",
          title: "Singapore City Tour & Gardens by the Bay",
          description: "After breakfast, proceed for a guided Singapore city tour covering famous attractions including Merlion Park, Marina Bay Sands, Chinatown, Little India, Orchard Road, and Clarke Quay.\n\nLater visit the iconic Gardens by the Bay featuring the spectacular Supertree Grove, Cloud Forest, and Flower Dome. Enjoy the beautiful Garden Rhapsody light show in the evening. Overnight stay in Singapore."
        },
        {
          day: "Day 3",
          title: "Sentosa Island & Universal Studios",
          description: "After breakfast, enjoy a full day of adventure at Universal Studios Singapore with exciting rides, movie-themed attractions, entertainment shows, and family fun experiences.\n\nLater continue to Sentosa Island for sightseeing and leisure activities including Wings of Time show, beach attractions, cable car rides, Madame Tussauds, and SkyHelix experience. Overnight stay in Singapore."
        },
        {
          day: "Day 4",
          title: "Shopping & Departure",
          description: "After breakfast, enjoy free time for shopping and leisure at Orchard Road or Bugis Street. Later check out from the hotel and transfer to Singapore Changi Airport for your onward journey with unforgettable memories of Singapore."
        }
      ],
      includes: [
        "3 Nights hotel accommodation",
        "Daily breakfast",
        "Airport return transfers",
        "Singapore city tour",
        "Gardens by the Bay visit",
        "Universal Studios Singapore ticket",
        "Sentosa Island tour",
        "Night Safari experience",
        "All sightseeing and transfers"
      ],
      excludes: [
        "International flight tickets",
        "Singapore Visa charges",
        "Personal expenses",
        "Optional tours & activities",
        "Travel insurance"
      ],
      bestForTags: [
        "Families",
        "Honeymoon Couples",
        "Solo Travelers",
        "Corporate Travelers",
        "Friends & Group Tours"
      ]
    }
  },
  {
    id: 3,
    destination: "Thailand",
    title: "Bangkok & Pattaya 05 Nights & 06 Days",
    description: "Immerse yourself in the land of smiles. Experience the perfect mix of vibrant city life in Bangkok and the beautiful beaches of Pattaya.",
    duration: "6 Days / 5 Nights",
    highlights: [
      "Alcazar Show in Pattaya",
      "Coral Island Tour",
      "Nong Nooch Tropical Garden",
      "Chao Phraya Dinner Cruise",
      "Bangkok City & Temple Tour"
    ],
    image: "https://images.pexels.com/photos/1682748/pexels-photo-1682748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.9,
    reviews: 412,
    category: "Beach",
    bestFor: "Couples, Adventure Seekers",
    fullDetails: {
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival in Bangkok & Transfer to Pattaya | Evening Alcazar Show",
          description: "Upon arrival at Bangkok Airport, you will be warmly received by our representative/Driver and transferred to your hotel in Pattaya. After check-in and some time to relax, your evening will be highlighted by a visit to the famous Alcazar Show with normal seating. This spectacular cabaret performance features dazzling costumes, vibrant lighting, and energetic dance routines, offering a colorful introduction to Thai culture and entertainment. After the show, return to your hotel for an overnight stay in Pattaya."
        },
        {
          day: "Day 2",
          title: "Coral Island Tour with Lunch",
          description: "Today after breakfast at the hotel proceed for the Coral Island tour. The Coral Island Tour, also known as the Koh Larn Island Tour, is one of the most popular attractions in Pattaya. The island, with its crystal-clear waters and vibrant coral reefs, offers a perfect escape from the city's hustle and bustle. The island got its name from the beautiful corals found in its waters. You will be picked up from the hotel and transferred to pick up pear of coral island. Take a speedboat and you will be transferred to coral island. Have a day at your leisure, relax on the beach, or try out some fun water activities."
        },
        {
          day: "Day 3",
          title: "Nong Nooch Tropical Garden Tour with Lunch",
          description: "After breakfast, proceed for a private tour of Nong Nooch Tropical Garden, one of Pattaya’s most famous and beautifully maintained attractions. Spread across a vast area, the garden features a diverse range of themed landscapes including the French Garden, Cactus Garden, and Tropical Garden, all showcasing vibrant flowers, exotic plants, and well-manicured greenery. Enjoy a leisurely stroll through the gardens and take in the serene atmosphere. In addition to its botanical beauty, Nong Nooch also offers entertaining cultural shows, including traditional Thai dance performances and elephant shows, providing an engaging glimpse into Thai heritage. After exploring, enjoy a delicious lunch at the garden restaurant before returning to your hotel for some relaxation."
        },
        {
          day: "Day 4",
          title: "Pattaya to Bangkok Transfer & Chao Phraya Dinner Cruise",
          description: "After breakfast, check out from your Pattaya hotel and proceed to Bangkok. Upon arrival, check in to your Bangkok hotel and relax. In the evening, enjoy a memorable experience on the Chao Phraya Dinner Cruise. Sail along the historic Chao Phraya River while indulging in a delicious buffet or set-menu dinner featuring Thai and international cuisine. As you cruise through the heart of the city, take in the illuminated views of iconic landmarks such as the Grand Palace, Wat Arun (Temple of Dawn), and the Rama VIII Bridge. The serene atmosphere is enhanced with live music or traditional Thai performances, making it a perfect evening for both relaxation and celebration. After the cruise, return to your hotel for an overnight stay."
        },
        {
          day: "Day 5",
          title: "Bangkok City tour with 02 Temples",
          description: "Today, after breakfast, you'll begin your exciting day with a visit to the Golden Buddha Temple (Wat Traimit), where you'll be in awe of the world’s largest solid gold Buddha statue, weighing over five tons. Following that, you'll head to the Marble Temple with its white Carrara marble architecture and peaceful surroundings. Take time to explore the temple's stunning details and serene atmosphere, while learning about its rich history. Between the visits, enjoy a scenic drive through the bustling streets of Bangkok, passing by iconic landmarks and vibrant markets. After the tour, you'll return to your hotel for an overnight stay, reflecting on a day full of cultural exploration and architectural wonder."
        },
        {
          day: "Day 6",
          title: "Departure",
          description: "After breakfast, you will be transferred to Bangkok Airport for your departure."
        }
      ],
      includes: [
        "03 Nights Stay in Pattaya",
        "02 Nights Stay in Bangkok",
        "Alcazar Show (Normal Seat)",
        "Breakfast",
        "Coral Island Tour",
        "Nong Nooch Tropical Garden Tour with Lunch",
        "Chao Phraya Dinner Cruise",
        "Bangkok City tour with 02 Temples",
        "Return Airport Transfers on Private & Sightseeing on Sharing Basis"
      ],
      excludes: [
        "Any Air Fare",
        "Any Visa Charges",
        "Anything not specified in inclusions",
        "National Park fee of island",
        "High Peak Season Surcharge (if any)",
        "Travel Insurance"
      ],
      bestForTags: [
        "Couples",
        "Adventure Seekers",
        "Families",
        "Friends & Group Tours"
      ]
    }
  },
  {
    id: 4,
    destination: "Kenya",
    title: "Kenya Safari Adventure",
    description: "Experience the breathtaking beauty of Kenya with an unforgettable safari adventure through Africa’s most iconic wildlife destinations. Discover the magic of the African savannah, witness the Big Five, and enjoy luxury safari lodges.",
    duration: "5 Days / 4 Nights",
    highlights: [
      "Maasai Mara National Reserve",
      "Big Five Wildlife Experience",
      "Great Rift Valley Views",
      "Lake Naivasha Excursion",
      "Crescent Island Walking Safari"
    ],
    image: "https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.9,
    reviews: 320,
    category: "Adventure",
    bestFor: "Wildlife Lovers, Adventure Travelers",
    fullDetails: {
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival in Nairobi & City Experience",
          description: "Arrival at Jomo Kenyatta International Airport in Nairobi. Meet and greet by our representative followed by transfer to the hotel for check-in. Relax and refresh after your journey.\n\nDepending on arrival time, guests can enjoy optional visits to:\n* Giraffe Centre\n* David Sheldrick Elephant Orphanage\n* Karen Blixen Museum\n* Nairobi City Tour\n\nOvernight stay in Nairobi."
        },
        {
          day: "Day 2",
          title: "Nairobi to Maasai Mara Safari",
          description: "After breakfast, depart for the world-famous Maasai Mara National Reserve, one of Africa’s greatest wildlife reserves. Enjoy scenic views of the Great Rift Valley during the journey.\n\nUpon arrival, check in at the safari lodge/camp followed by lunch. In the afternoon, proceed for an exciting game drive in search of the Big Five including lions, elephants, buffaloes, leopards, and rhinos.\n\nDinner and overnight stay at the safari lodge/camp."
        },
        {
          day: "Day 3",
          title: "Full Day Maasai Mara Safari Experience",
          description: "After breakfast, enjoy a full-day safari experience inside Maasai Mara National Reserve with morning and afternoon game drives. Witness incredible wildlife, stunning landscapes, and unforgettable African safari moments.\n\nOptional activities available:\n* Hot Air Balloon Safari\n* Maasai Village Cultural Tour\n* Bush Breakfast Experience\n* Nature Walk Safari\n\nDinner and overnight stay at the safari lodge/camp."
        },
        {
          day: "Day 4",
          title: "Lake Naivasha & Crescent Island",
          description: "After breakfast, depart for Lake Naivasha, a beautiful freshwater lake surrounded by wildlife and scenic landscapes.\n\nEnjoy optional boat rides where guests can spot hippos and various bird species. Later visit Crescent Island for a guided walking safari among giraffes, zebras, antelopes, and other wildlife.\n\nReturn to Nairobi in the evening for overnight stay."
        },
        {
          day: "Day 5",
          title: "Departure",
          description: "After breakfast, check out from the hotel and transfer to the airport for your onward journey with unforgettable memories of Kenya’s wildlife, landscapes, and safari adventure."
        }
      ],
      includes: [
        "4 Nights accommodation",
        "Daily breakfast, lunch & dinner during safari",
        "Airport return transfers",
        "Safari game drives",
        "Professional safari guide",
        "Park entry fees",
        "Transportation in safari vehicle",
        "Lake Naivasha excursion",
        "All sightseeing and transfers"
      ],
      excludes: [
        "International flight tickets",
        "Kenya Visa charges",
        "Personal expenses",
        "Optional safari activities",
        "Travel insurance",
        "Drinks & beverages"
      ],
      bestForTags: [
        "Wildlife Lovers",
        "Adventure Travelers",
        "Honeymoon Couples",
        "Families & Group Tours",
        "Nature & Photography Enthusiasts"
      ]
    }
  },
  {
    id: 5,
    destination: "Zambia",
    title: "Victoria Falls & Cheetah Walk",
    description: "Experience the natural beauty, wildlife adventure, and thrilling activities of Zambia with an unforgettable journey to Victoria Falls, one of the Seven Natural Wonders of the World.",
    duration: "5 Days / 4 Nights",
    highlights: [
      "Victoria Falls Guided Tour",
      "Zambezi Sunset Cruise",
      "Cheetah Walk Experience",
      "Safari Game Drive",
      "Mukuni Village Tour"
    ],
    image: "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.9,
    reviews: 154,
    category: "Adventure",
    bestFor: "Adventure Travelers, Wildlife Enthusiasts",
    fullDetails: {
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival in Livingstone & Sunset Cruise",
          description: "Arrival at Harry Mwanga Nkumbula International Airport in Livingstone. Meet and greet by our representative followed by transfer to the hotel for check-in. Relax and enjoy the beautiful atmosphere of Zambia.\n\nIn the evening, enjoy a luxurious sunset cruise on the Zambezi River with snacks, drinks, wildlife sightings, and breathtaking sunset views. Overnight stay in Livingstone."
        },
        {
          day: "Day 2",
          title: "Victoria Falls Guided Tour",
          description: "After breakfast, proceed for a guided tour of the world-famous Victoria Falls, locally known as “Mosi-oa-Tunya” meaning “The Smoke That Thunders.” Experience the spectacular viewpoints, rainforest walk, photography spots, and the powerful beauty of the falls.\n\nOptional activities available:\n* Helicopter Flight over Victoria Falls\n* Microlight Flight Experience\n* Bungee Jumping\n* Devil’s Pool (seasonal)\n* Bridge Swing\n\nReturn to hotel for overnight stay."
        },
        {
          day: "Day 3",
          title: "Cheetah Walk & Safari Experience",
          description: "After breakfast, enjoy an exciting Cheetah Walk experience where guests can walk alongside rescued cheetahs with professional guides while learning about wildlife conservation and African wildlife protection.\n\nLater continue for a safari game drive in Mosi-oa-Tunya National Park where guests may spot elephants, giraffes, zebras, buffaloes, antelopes, rhinos, and various bird species. Overnight stay in Livingstone."
        },
        {
          day: "Day 4",
          title: "Mukuni Village & Leisure Activities",
          description: "After breakfast, visit the traditional Mukuni Village for a cultural experience and interaction with the local community. Learn about Zambian traditions, local crafts, and village lifestyle.\n\nAfternoon free for optional activities such as:\n* Quad Biking\n* White Water Rafting\n* Canoeing on the Zambezi River\n* Rhino Walking Safari\n* Local Market Shopping\n* Spa & Relaxation\n\nOvernight stay in Livingstone."
        },
        {
          day: "Day 5",
          title: "Departure",
          description: "After breakfast, check out from the hotel and transfer to the airport for your onward journey with unforgettable memories of Zambia’s wildlife, adventure, culture, and natural wonders."
        }
      ],
      includes: [
        "4 Nights hotel accommodation in Livingstone",
        "Daily breakfast",
        "Airport return transfers",
        "Guided Victoria Falls tour",
        "Zambezi Sunset Cruise",
        "Cheetah Walk experience",
        "Safari Game Drive",
        "Mukuni Village tour",
        "All sightseeing and transfers"
      ],
      excludes: [
        "International flight tickets",
        "Zambia Visa charges",
        "Personal expenses",
        "Optional activities",
        "Travel insurance",
        "Meals not mentioned"
      ],
      bestForTags: [
        "Adventure Travelers",
        "Nature Lovers",
        "Honeymoon Couples",
        "Families & Groups",
        "Wildlife Enthusiasts"
      ]
    }
  },
  {
    id: 6,
    destination: "Zanzibar",
    title: "Zanzibar Ultimate Island Escape",
    description: "Experience the perfect tropical holiday in Zanzibar with stunning white sand beaches, crystal-clear turquoise waters, cultural heritage, ocean adventures, luxury resorts, nightlife, and unforgettable island experiences.",
    duration: "8 Days / 7 Nights",
    highlights: [
      "Stone Town Tour",
      "Prison Island Excursion",
      "Safari Blue Ocean Adventure",
      "Mnemba Island Snorkeling",
      "Spice Farm Tour"
    ],
    image: "https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.8,
    reviews: 215,
    category: "Beach",
    bestFor: "Honeymoon Couples, Luxury Travelers, Beach Lovers",
    fullDetails: {
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival in Zanzibar & Beach Relaxation",
          description: "Arrival at Zanzibar International Airport. Meet and greet by our representative followed by transfer to the beach resort for check-in. Relax and enjoy the breathtaking beauty of Zanzibar’s beaches and Indian Ocean views.\n\nSpend the evening at leisure with sunset views, beach walk, swimming pool access, and resort dining experience. Overnight stay in Zanzibar."
        },
        {
          day: "Day 2",
          title: "Stone Town & Prison Island Tour",
          description: "After breakfast, proceed for a guided tour of the historic Stone Town, famous for its Arabic architecture, spice markets, narrow streets, cultural heritage, and historical landmarks.\n\nLater continue by boat to Prison Island where guests can enjoy giant tortoise encounters, beach relaxation, photography, and ocean views. Return to hotel for overnight stay."
        },
        {
          day: "Day 3",
          title: "Safari Blue Ocean Adventure",
          description: "After breakfast, enjoy the famous Safari Blue full-day excursion featuring traditional dhow sailing, snorkeling, swimming in crystal-clear waters, sandbank relaxation, seafood lunch, tropical island exploration, and dolphin sightings.\n\nExperience the beauty of the Indian Ocean with unforgettable marine activities and relaxing beach moments. Overnight stay in Zanzibar."
        },
        {
          day: "Day 4",
          title: "Mnemba Island, Underwater Adventure & Dolphin Tour",
          description: "After breakfast, proceed for an exciting ocean adventure near Mnemba Island. Enjoy snorkeling around colorful coral reefs, tropical fish, and crystal-clear waters of Zanzibar.\n\nGuests can also experience thrilling underwater activities such as scuba diving, underwater sea walking, and submarine/underwater viewing experiences, offering a unique opportunity to explore Zanzibar’s incredible marine life closely.\n\nLater enjoy a dolphin tour and relaxing beach time before returning to the resort. Overnight stay in Zanzibar."
        },
        {
          day: "Day 5",
          title: "Spice Farm Tour & Cultural Experience",
          description: "After breakfast, visit Zanzibar’s famous spice plantations and discover why Zanzibar is known as the “Spice Island.” Experience fresh spices, tropical fruits, herbs, and local farming traditions.\n\nLater enjoy a cultural village experience with local cuisine tasting, traditional performances, and interaction with local communities. Overnight stay in Zanzibar."
        },
        {
          day: "Day 6",
          title: "Leisure Day & Adventure Activities",
          description: "After breakfast, enjoy a free day for relaxation or optional adventure experiences. Guests can choose from:\n* Quad Biking Adventure\n* Horse Riding on the Beach\n* Deep Sea Fishing\n* Sunset Dhow Cruise\n* Romantic Beach Dinner\n* Spa & Wellness Experience\n* Kite Surfing\n* Scuba Diving\n* Underwater Sea Walking\n* Submarine Experience\n* Beach Club & Nightlife Experience\n\nOvernight stay in Zanzibar."
        },
        {
          day: "Day 7",
          title: "Luxury Beach Experience & Sunset Celebration",
          description: "After breakfast, spend the day enjoying Zanzibar’s beautiful beaches, luxury resort facilities, infinity pools, beach cafés, and ocean activities.\n\nIn the evening, enjoy a special sunset dhow cruise or romantic beachfront dinner with live music and tropical ambiance for a memorable final night in Zanzibar. Overnight stay in Zanzibar."
        },
        {
          day: "Day 8",
          title: "Departure",
          description: "After breakfast, check out from the hotel and transfer to Zanzibar International Airport for your onward journey with unforgettable memories of Zanzibar’s beaches, culture, luxury, and adventure experiences."
        }
      ],
      includes: [
        "7 Nights beach resort accommodation",
        "Daily breakfast",
        "Airport return transfers",
        "Stone Town tour",
        "Prison Island excursion",
        "Safari Blue tour with lunch",
        "Mnemba Island snorkeling tour",
        "Dolphin tour",
        "Spice farm tour",
        "All sightseeing and transfers",
        "Professional tour assistance"
      ],
      excludes: [
        "International flight tickets",
        "Tanzania Visa charges",
        "Personal expenses",
        "Optional activities",
        "Travel insurance",
        "Meals not mentioned"
      ],
      bestForTags: [
        "Honeymoon Couples",
        "Luxury Travelers",
        "Families & Groups",
        "Beach Lovers",
        "Adventure Travelers",
        "Romantic Getaways"
      ]
    }
  },
  {
    id: 7,
    destination: "Tanzania",
    title: "Tanzania Great Migration Safari",
    description: "Experience the ultimate African safari adventure in Tanzania with breathtaking wildlife encounters, luxury safari lodges, the world-famous Great Migration, and unforgettable hot air balloon safaris.",
    duration: "8 Days / 7 Nights",
    highlights: [
      "Serengeti National Park Great Migration Safari",
      "Hot Air Balloon Safari Experience",
      "Ngorongoro Crater Safari",
      "Tarangire National Park Game Drive",
      "Bush Breakfast Experience"
    ],
    image: "/Tanzania.jpeg",
    rating: 5.0,
    reviews: 485,
    category: "Adventure",
    bestFor: "Wildlife Lovers, Luxury Travelers, Honeymoon Couples",
    fullDetails: {
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival in Arusha",
          description: "Arrival at Kilimanjaro International Airport followed by meet and greet with our safari representative. Transfer to your hotel in Arusha for relaxation and safari briefing.\n\nEnjoy leisure time at the lodge surrounded by beautiful African landscapes. Overnight stay in Arusha."
        },
        {
          day: "Day 2",
          title: "Arusha to Tarangire National Park Safari",
          description: "After breakfast, depart for Tarangire National Park, famous for its large elephant population, ancient baobab trees, and incredible wildlife diversity.\n\nEnjoy an exciting game drive where guests may spot elephants, lions, giraffes, zebras, wildebeests, buffaloes, antelopes, and exotic bird species.\n\nDinner and overnight stay at luxury safari lodge/camp."
        },
        {
          day: "Day 3",
          title: "Serengeti National Park Safari",
          description: "After breakfast, proceed towards the legendary Serengeti National Park, one of the most famous wildlife destinations in the world and home of the Great Migration.\n\nEnjoy an afternoon game drive across the endless plains of Serengeti with opportunities to witness predators and wildlife in their natural habitat. Overnight stay at safari lodge/camp in Serengeti."
        },
        {
          day: "Day 4",
          title: "Great Migration Safari Experience",
          description: "After breakfast, enjoy a full-day safari experience in Serengeti National Park focusing on the spectacular Great Migration, where thousands of wildebeests and zebras move across the plains searching for fresh grazing lands.\n\nWitness dramatic wildlife action including river crossings, predators hunting, and breathtaking African landscapes. Dinner and overnight stay in Serengeti."
        },
        {
          day: "Day 5",
          title: "Hot Air Balloon Safari & Central Serengeti",
          description: "Early morning enjoy a magical Hot Air Balloon Safari over the Serengeti plains during sunrise, offering panoramic aerial views of wildlife, migration herds, and stunning landscapes.\n\nAfter landing, enjoy a luxurious bush breakfast in the wilderness followed by another exciting game drive through Central Serengeti. Overnight stay at safari lodge/camp."
        },
        {
          day: "Day 6",
          title: "Ngorongoro Crater Safari",
          description: "After breakfast, depart for the world-famous Ngorongoro Crater, a UNESCO World Heritage Site and one of Africa’s best wildlife conservation areas.\n\nDescend into the crater for a safari experience surrounded by breathtaking scenery and rich wildlife including rhinos, lions, elephants, hippos, flamingos, and hyenas. Overnight stay near Ngorongoro."
        },
        {
          day: "Day 7",
          title: "Lake Manyara & Cultural Experience",
          description: "After breakfast, visit Lake Manyara National Park known for its tree-climbing lions, flamingos, beautiful lake views, and diverse birdlife.\n\nLater enjoy a cultural village tour and local Tanzanian experience before returning to lodge for relaxation and farewell dinner. Overnight stay."
        },
        {
          day: "Day 8",
          title: "Departure",
          description: "After breakfast, transfer to Kilimanjaro International Airport for your onward journey with unforgettable memories of Tanzania’s wildlife, luxury safari experiences, and Great Migration adventure."
        }
      ],
      includes: [
        "7 Nights luxury safari accommodation",
        "Daily breakfast, lunch & dinner during safari",
        "Airport return transfers",
        "Private safari vehicle",
        "Professional safari guide",
        "Park entry fees",
        "Hot Air Balloon Safari",
        "Game drives & sightseeing",
        "All transfers and safari activities"
      ],
      excludes: [
        "International flight tickets",
        "Tanzania Visa charges",
        "Personal expenses",
        "Travel insurance",
        "Optional activities not mentioned",
        "Drinks & beverages"
      ],
      bestForTags: [
        "Wildlife Lovers",
        "Luxury Travelers",
        "Honeymoon Couples",
        "Nature & Photography Enthusiasts",
        "Adventure Travelers",
        "Families & Group Tours"
      ]
    }
  }
];

export default function Packages({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [selectedPackage, setSelectedPackage] = useState<typeof packages[0] | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedPackage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedPackage]);

  return (
    <div className="min-h-screen bg-brand-bg relative">
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-48 pb-20 md:pb-28 px-6 bg-gradient-to-br from-brand-dark-blue to-brand-dark-blue/80 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 glass px-5 py-2 rounded-full mb-8 text-brand-gold text-xs font-body font-semibold tracking-[0.25em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            Exclusive Travel Packages
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Our <span className="text-gradient-gold">Packages</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
            Handpicked travel experiences to the world's most amazing destinations. 
            From luxury escapes to cultural adventures, find your perfect journey.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark-blue mb-4">
              Featured Destinations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Explore our carefully curated packages to the world's most sought-after destinations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col cursor-pointer"
                onClick={() => setSelectedPackage(pkg)}
              >
                <div className="relative h-64 overflow-hidden flex-shrink-0">
                  <img
                    src={pkg.image}
                    alt={pkg.destination}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-brand-gold text-white px-4 py-2 rounded-full text-sm font-bold font-body shadow-lg">
                      {pkg.category}
                    </div>
                  </div>
                  
                  {/* Destination Name */}
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-2 text-white">
                      <MapPin size={20} className="text-brand-gold" />
                      <span className="text-2xl font-bold font-display">{pkg.destination}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  {/* Title and Description */}
                  <h3 className="font-display text-2xl font-bold text-brand-dark-blue mb-3 group-hover:text-brand-blue transition-colors duration-300">
                    {pkg.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {pkg.description}
                  </p>
                  
                  {/* Package Details */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock size={16} className="text-brand-gold" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={16} className="text-brand-gold" />
                      <span>{pkg.bestFor}</span>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(pkg.rating) ? "text-brand-gold fill-current" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-brand-dark-blue">{pkg.rating}</span>
                    <span className="text-sm text-gray-500">({pkg.reviews} reviews)</span>
                  </div>
                  
                  <div className="mt-auto">
                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-gray-100">
                      <button 
                        className="flex-1 bg-brand-dark-blue text-white px-6 py-3 rounded-xl font-body font-bold hover:bg-brand-blue transition-colors duration-300 flex items-center justify-center gap-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedPackage(pkg);
                        }}
                      >
                        <span>View Details</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                      <button 
                        className="p-3 border border-gray-200 rounded-xl text-gray-600 hover:text-brand-gold hover:border-brand-gold transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Heart size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-brand-gold to-brand-yellow text-brand-dark-blue">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            We specialize in creating custom travel packages tailored to your dreams. 
            Let our experts design the perfect journey just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-brand-dark-blue text-white px-8 py-4 rounded-2xl text-base font-body font-bold tracking-wide shadow-2xl hover:bg-brand-blue transition-colors duration-300">
              Create Custom Package
            </button>
            <button className="bg-white text-brand-dark-blue px-8 py-4 rounded-2xl text-base font-body font-bold tracking-wide border-2 border-brand-dark-blue hover:bg-brand-dark-blue hover:text-white transition-all duration-300">
              Contact Expert
            </button>
          </div>
        </div>
      </section>

      {/* Package Details Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-brand-dark-blue/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setSelectedPackage(null)} 
          />
          
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
            {/* Header Image & Close */}
            <div className="relative h-64 md:h-80 flex-shrink-0">
              <img src={selectedPackage.image} alt={selectedPackage.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              <button 
                onClick={() => setSelectedPackage(null)} 
                className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full transition-colors text-white z-10"
              >
                <X size={24} />
              </button>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 text-brand-gold mb-2 font-bold tracking-wider uppercase text-sm">
                  <MapPin size={18} />
                  <span>{selectedPackage.destination}</span>
                  <span className="text-white/60 mx-2">•</span>
                  <Clock size={18} />
                  <span>{selectedPackage.duration}</span>
                </div>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-white">{selectedPackage.title}</h2>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 md:p-8 overflow-y-auto flex-1 bg-gray-50">
              {/* @ts-ignore */}
              {selectedPackage.fullDetails ? (
                <div className="space-y-12">
                  {/* Itinerary */}
                  <section>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-brand-blue text-white p-2 rounded-lg">
                        <Calendar size={24} />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-brand-dark-blue">Daily Itinerary</h3>
                    </div>
                    
                    <div className="space-y-6">
                      {/* @ts-ignore */}
                      {selectedPackage.fullDetails.itinerary.map((day, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                          <div className="flex items-center gap-4 mb-3">
                            <span className="bg-brand-gold/10 text-brand-gold font-bold px-3 py-1 rounded-lg text-sm">
                              {day.day}
                            </span>
                            <h4 className="font-display text-lg font-bold text-brand-dark-blue">{day.title}</h4>
                          </div>
                          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                            {day.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Includes & Excludes */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <section className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                      <h3 className="font-display text-xl font-bold text-brand-dark-blue mb-4 flex items-center gap-2">
                        <CheckCircle size={20} className="text-green-500" />
                        Package Includes
                      </h3>
                      <ul className="space-y-3">
                        {/* @ts-ignore */}
                        {selectedPackage.fullDetails.includes.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-600">
                            <Sparkles size={18} className="text-brand-gold flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                    
                    <section className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                      <h3 className="font-display text-xl font-bold text-brand-dark-blue mb-4 flex items-center gap-2">
                        <XCircle size={20} className="text-red-500" />
                        Package Excludes
                      </h3>
                      <ul className="space-y-3">
                        {/* @ts-ignore */}
                        {selectedPackage.fullDetails.excludes.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-600">
                            <X size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>

                  {/* Best For Tags */}
                  <section>
                    <h3 className="font-display text-lg font-bold text-brand-dark-blue mb-4">Best For</h3>
                    <div className="flex flex-wrap gap-2">
                      {/* @ts-ignore */}
                      {selectedPackage.fullDetails.bestForTags.map((tag, idx) => (
                        <span key={idx} className="bg-brand-blue/5 border border-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </section>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Sparkles size={48} className="text-brand-gold mx-auto mb-4 opacity-50" />
                  <h3 className="text-2xl font-bold text-brand-dark-blue mb-2">Detailed Itinerary Coming Soon</h3>
                  <p className="text-gray-500">We are currently updating the full schedule for this package. Please contact us for details.</p>
                </div>
              )}
            </div>
            
            {/* Footer */}
            <div className="p-6 border-t border-gray-100 bg-white flex flex-col sm:flex-row justify-between items-center gap-4 flex-shrink-0">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className={i < Math.floor(selectedPackage.rating) ? "text-brand-gold fill-current" : "text-gray-300"} />
                  ))}
                </div>
                <span className="text-gray-500 font-medium">{selectedPackage.reviews} verified reviews</span>
              </div>
              <button 
                onClick={() => {
                  setSelectedPackage(null);
                  onNavigate('contact');
                }}
                className="w-full sm:w-auto bg-brand-gold hover:bg-yellow-500 text-white px-8 py-3 rounded-xl font-bold font-body transition-colors shadow-lg shadow-brand-gold/20 flex items-center justify-center gap-2"
              >
                <span>Book This Package</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

