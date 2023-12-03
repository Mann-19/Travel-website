// Get the cardId from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const cardId = urlParams.get("id");

console.log(cardId);

// Data
const data = {
  dubaiData: [
    {
      id: "1-1",
      locationName:
        "The Burj Khalifa 'At The Top' Observation Deck Admission Ticket",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178510207566!2d55.271801473725645!3d25.197201831703573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sin!4v1701374516440!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: ["No Itinerary Plan available"],
      about:
        "The world’s tallest building, Burj Khalifa, is not to be missed when visiting Dubai. Enjoy expansive views of the city from the 124th, 125th, and 148th floors with this admission ticket to “At The Top.” Head to the top in speedy elevators, get a closer look at your surroundings through high-powered telescopes, and enjoy an immersive virtual reality experience soaring above the clouds.",
      price: {
        amount: "₹4,624.73",
        category: "adult",
      },
    },
    {
      id: "1-2",
      locationName: "Abu Dhabi Private City Tour",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.120505352641!2d54.37735507369765!3d24.51591225896115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e66e58c0355bf%3A0xe50baed961b822f5!2sAbu%20Dhabi%20Dates%20Market!5e0!3m2!1sen!2sin!4v1701378954801!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "Heritage Village",
        "Emirates Palace Mandarin Oriental, Abu Dhabi",
        "Ferrari World Abu Dhabi",
        "Marina Mall",
        "Abu Dhabi Dates Market",
      ],
      about:
        "Experience the best of Abu Dhabi with the benefit of your own guide to provide the insights you want on this private half-day tour. Travel by private air-conditioned vehicle and spend as much or as little time as you wish at highlights including the Sheikh Zayed Grand Mosque, Corniche, and Heritage Village. Plus, select your departure time and add stops such as Yas Island for a tour that’s fully customized to your needs and interests.",
      price: {
        amount: "₹17,081.19",
        category: "group",
      },
    },
    {
      id: "1-3",
      locationName:
        "Dubai Harbour:Super Yacht Experience with Live station & Drinks",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.241286868402!2d55.131612573721235!3d25.093692335888424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xe29335b282f118a0!2s34VM%2BFM%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1701412531807!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "You'll start at: 34VM+FM Dubai",
        "You'll return to the starting point",
      ],
      about:
        "Set sail on the ultimate luxury experience aboard a super yacht in Dubai Harbour. Prepare to be dazzled as you cruise past landmarks and sights, all while enjoying delicious meals and premium beverages. With a live DJ setting the mood, this is a party you won't want to miss. Soak up the sun on the top deck, dance the night away, or find tranquility on the lower deck.",
      price: {
        amount: "₹8,423.59",
        category: "adult",
      },
    },
    {
      id: "1-4",
      locationName:
        "Atlantis Aquaventure Ticket (with options for Aquarium), Dubai",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7224.078752607039!2d55.11209652324499!3d25.134359577418405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xb78f1e79bffcf25d!2sAquaventure%20Waterpark!5e0!3m2!1sen!2sin!4v1701412757199!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "You'll start at: Atlantis The Palm",
        "Atlantis Aquaventure Waterpark",
        "The Lost Chambers Aquarium",
      ],
      about:
        "Book a 1-day pass for Dubai’s Aquaventure Waterpark before you travel and avoid the uncertainty involved in waiting till the last-minute. With your ticket secure, you can relax knowing entry is guaranteed on the day of your choice. Then, just leap into the aquatic fun promised by more than 30 water rides and attractions; a private beach, depending on the option you have chosen access to the Lost Chambers Aquarium at the neighboring Atlantis hotel.",
      price: {
        amount: " ₹7,330.39",
        category: "adult",
      },
    },
    {
      id: "1-5",
      locationName:
        "Dubai: Red Dunes ATV, Sandsurf, Camels, Stargazing & 5* BBQ at Al Khayma Camp™️",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462494.9173640599!2d54.55390597343747!3d25.09368370000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f1571793bc843%3A0x587c56b07639dc1d!2sDubai%20Harbour%20Cruise%20Terminal!5e0!3m2!1sen!2sin!4v1701413017070!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "Lahbab",
        "Al Khayma Camp “Elite Camping & Dining Experience.”",
      ],
      about:
        "Experience several desert pursuits in one outing, including ATV-driving—something many tours only offer at an extra cost—on this red-dune desert tour from Dubai. Skip the hassle of transport and logistical planning; and be free to simply enjoy the dunes and activities provided. Zoom off on an ATV, ride a camel, go sandboarding; enjoy henna art and Arabian-costume photos; and conclude with a barbecue-buffet dinner and live shows.",
      price: {
        amount: "₹7,310.75",
        category: "adult",
      },
    },
  ],
  sydneyData: [
    {
      id: "2-1",
      locationName:
        "All Inclusive Small-Group Blue Mountains Day Trip from Sydney with Scenic World",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1705880.341405997!2d149.1668546270318!3d-33.37635127916719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12750cf28ca111%3A0x459d55ceda733f5e!2sBlue%20Mountains!5e0!3m2!1sen!2sin!4v1701509924260!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "PARKROYAL Darling Harbour, Sydney",
        "The Three Sisters",
        "Scenic World Blue Mountains",
        "Blue Mountains",
        "Featherdale Sydney Wildlife Park",
        "You'll end at: Barangaroo, Wharf 1",
      ],
      about:
        "Take a day trip from Sydney to the spectacular Blue Mountains, leaving the navigation and transportation to someone else. Soak in the mountains’ scenery and enjoy all the region’s must-dos on a tour that covers the main sites in one day and also includes a chef-prepared lunch as well as entrance fees.",
      price: {
        amount: "₹16,139.62",
        category: "adult",
      },
    },
    {
      id: "2-2",
      locationName:
        "Journey Beyond Cruise Sydney Harbour - All inclusive Dinner Cruise",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.741338731394!2d151.19784951210022!3d-33.8705564110161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12afe2c804e687%3A0x6cb18b12e08fe3ae!2sKing%20Street%20Wharf%201!5e0!3m2!1sen!2sin!4v1701539042872!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "You'll depart from: King Street Wharf 1, Sydney",
        "You'll return at the starting point",
      ],
      about:
        "Escape the crowds on land and admire Sydeny’s top landmarks—including Sydney Harbour Bridge and the Sydney Opera House—on an evening dinner cruise that includes a 3-course meal with food and wine sourced from New South Wales. Sailing at sunset means that you’ll admire Sydney Harbour when it's at its most photogenic, while a top deck provides you with panoramic views of the scenery.",
      price: {
        amount: "₹11,212.79",
        category: "adult",
      },
    },
    {
      id: "2-3",
      locationName: "Sydney Harbour Tour by Helicopter",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6620.0309672288!2d151.18606057607067!3d-33.940729870854156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b11c1f26d19f%3A0x812fc6ba66d106c8!2sSydney%20HeliTours!5e0!3m2!1sen!2sin!4v1701539141998!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: ["No itinerary plan available"],
      about:
        "Make sure you get the best possible views of Sydney by booking this helicopter tour over Australia's capital. With your pilot-guide pointing out all of the highlights and landmarks, get a whirlwind introduction to spots like the Sydney Opera House, Sydney Harbour Bridge, Bondi Beach, and Manly Cove. There's no better way to cover more ground in such a short time.",
      price: {
        amount: "₹13,591.26",
        category: "adult",
      },
    },
    {
      id: "2-4",
      locationName:
        "Blue Mountains: Three Sisters, Scenic World and Wildlife park",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.8071262128246!2d151.20332237441738!3d-33.86886121905978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3f4100379f%3A0xdcefb6f023fc341f!2sThe%20Grace%20Sydney!5e0!3m2!1sen!2sin!4v1701539263602!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "You'll start at: The Grace Sydney",
        "You'll return at: The Grace Sydney",
      ],
      about:
        "Head into the Blue Mountains with this small group tour from Sydney. Start your day with breakfast in the Blue Mountains at a quaint mountain village. Visit a wildlife park to see koalas, kangaroos, crocodiles, and more incredible animals. Enjoy thrilling rides at Scenic World, and check out dramatic cliffs, waterfalls, and the striking rock formation known as the Three Sisters. Following a day of wow factors you’re tour guide will return you to Sydney.",
      price: {
        amount: "₹18,404.83",
        category: "adult",
      },
    },
  ],
  taipeiData: [
    {
      id: "3-1",
      locationName: "Private Taroko Gorge National Park Day Tour",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24482.354096024465!2d121.47107244949946!3d24.1954397892098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346882845fc2e7ef%3A0xddd9fd85e0b0aa31!2sTaroko%20National%20Park!5e0!3m2!1sen!2sin!4v1701539712352!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "You'll be picked from at hotel lobby",
        "Qingshui Cliff",
        "Taroko Gorge",
        "Yanzihkou Trail (Swallow Grotto)",
        "Tunnel of Nine Turns Trail",
        "Eternal Spring Shrine",
      ],
      about:
        "Taroko Gorge is one of the seven wonders of Asia. Explore this beloved National Park on a private guided tour to discover its many attractions and trails, as well as other landmarks along the way. These include the marble cliffs and canyons that stretch along the Liwu River, Cimu Bridge and the Tunnel of Nine Turns Trail. The private nature of the tour allows more personal service and flexibility to ensure you see the best of this national treasure.",
      price: {
        amount: "₹12,805.63 ",
        category: "adult (prices varies by group size)",
      },
    },
    {
      id: "3-2",
      locationName:
        "The Award-Winning PRIVATE Food Tour of Taipei: The 10 Tastings",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.005687908614!2d121.52613897371887!3d25.033881038299498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9826384cae7%3A0xa9a53445738e173f!2sDongmen!5e0!3m2!1sen!2sin!4v1701539993214!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "You'll start at: Dongmen station",
        "Dongmen Market",
        "Tamsui Zhongzheng Market",
        "Taipei 101",
        "Longshan Temple",
        "Fish Pottery Studio",
        "Remains of Taipei Prison Wall",
      ],
      about:
        "Taipei is renowned for its delicious variety of street food and regional specialties. On this walking tour, numbers are kept to a maximum of 8 people, ensuring that you get the most out of your guide. Explore the atmospheric Zhongzheng District, visit Dongmen Market, and sample a wide selection of Taiwanese dishes, with your guide on-hand to explain the ingredients and translate any food preferences.",
      price: {
        amount: "₹6,692.59",
        category: "adult (prices varies by group size)",
      },
    },
    {
      id: "3-3",
      locationName: "4-Hour Morning Cycling Tour in Taipei",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2555.725181261616!2d121.51206911879831!3d25.056421698470178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a914c4e20a61%3A0x78c187f9638ff131!2sNo.%209%2C%20Lane%2070%2C%20Section%202%2C%20Chongqing%20N%20Rd%2C%20Datong%20District%2C%20Taipei%20City%2C%20Taiwan%20103!5e0!3m2!1sen!2sin!4v1701540224436!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "You'll start at: No. 9, Lane 70, Section 2, Chongqing N Rd",
        "Wenchang Temple",
        "Shuanglian Market",
        "Dr.Sun Yat-sen Memorial House (Sun Yat-sen Park)",
        "Chiang Kai-shek Memorial Hall",
        "Ximending",
        "Dihua Street",
        "Xiahai City God Temple",
      ],
      about:
        "Discover Taipei like a local, by pedaling through the streets on a bicycle. This small-group tour begins with a traditional Taiwanese breakfast to fuel a full morning of adventures as you pedal your way to traditional markets, grand architecture, serene temples, and more. As you explore, your guide will tell you all about the culture and history of the city.",
      price: {
        amount: "₹5,543.98",
        category: "adult",
      },
    },
    {
      id: "3-4",
      locationName: "Full-Day Private Custom Taipei City Tour",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57819.627180286654!2d121.17160093666273!3d25.077250700000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34429fc062d215d5%3A0x70a3b690a9b5b109!2sTaiwan%20Taoyuan%20International%20Airport!5e0!3m2!1sen!2sin!4v1701540451503!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "Longshan Temple",
        "Chiang Kai-Shek Memorial Hall",
        "Dalongdong Bao An Temple",
        "Lin An Tai Historical House & Museum",
        "National Revolutionary Martyrs' Shrine",
        "National Palace Museum",
        "Dihua Street",
        "Elephant Mountain (aka Nangang District Hiking Trail)",
      ],
      about:
        "On a private tour of Taipei you can explore at your own pace and see only the places that interest you. Make the most of your time on this private tour that offers an itinerary customized to your interests, whether that is exploring the city's shrines or discovering the best places to eat and shop.",
      price: {
        amount: "₹9,390.79",
        category: "adult (price varies by group size)",
      },
    },
  ],
  airliebeachData: [
    {
      id: "4-1",
      locationName: "Whitsundays Guided Jet Ski Tour",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.3197814398145!2d148.71035981574798!3d-20.266502661155968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6bd8353848462f49%3A0x2f47ce769f4019f7!2s38%20Shingley%20Dr%2C%20Airlie%20Beach%20QLD%204802%2C%20Australia!5e0!3m2!1sen!2sin!4v1701541284027!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "You'll start at: 38 Shingley Dr",
        "Whitsunday Jetski Tours",
        "Coral Sea Marina",
        "You'll return to the starting point",
      ],
      about:
        "Explore the Whitsundays islands by jet ski on this adventure-filled tour. Zoom past coves and white sandy beaches and learn about this UNESCO-listed site from your guide. This tour is suitable for all skill levels from beginner to experienced with four different tour options. Tours are limited to 20 guests for a great small-group experience.",
      price: {
        amount: "₹7,078.78",
        category: "adult",
      },
    },
    {
      id: "4-2",
      locationName:
        "Whitsunday Islands and Heart Reef Scenic Flight - 70 minutes",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7485.11044112439!2d148.7522209336677!3d-20.277273040697544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6bd84ab73f550599%3A0x1150b72e63b76c4a!2s12%20Air%20Whitsunday%20Rd%2C%20Flametree%20QLD%204802%2C%20Australia!5e0!3m2!1sen!2sin!4v1701541491339!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "You'll start at: 12 Air Whitsunday Rd",
        "You'll pass by: Airlie beach, Whitsunday Islands, Heart Reef, Great Barrier Reef",
        "You'll return to the starting point",
      ],
      about:
        "The rainforest-clad islands, white-sand beaches, and vast coral reefs of the Whitsundays are even more impressive when viewed from above. With this tour, take off on a scenic flight over the Whitsunday Islands and admire the views from the panoramic windows. Fly over Whitehaven Beach, Hill Inlet, and the Heart Reef, and enjoy a magnificent bird’s eye view of the Great Barrier Reef.",
      price: {
        amount: "₹15,799.84",
        category: "adult",
      },
    },
    {
      id: "4-3",
      locationName:
        "2-Night Whitsundays Sailing Cruise incl. Whitehaven Beach & Great Barrier Reef",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.814766414405!2d148.70914037370878!3d-20.266515548872693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6bd83545ff629af7%3A0xd5d5d21de8f7d94b!2sOzSail!5e0!3m2!1sen!2sin!4v1701541864097!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [""],
      about:
        "This sailing excursion stands out by offering two days of travel and exploration instead of one. Spend two days exploring the Whitsunday Islands and the fringes of the Great Barrier Reef, stopping at good snorkeling locations along the way. Travel on a large sailboat, sleep below decks on bunks, and take advantage of the provided meals and snorkeling gear.",
      price: {
        amount: "₹28,258.50",
        category: "adult",
      },
    },
    {
      id: "4-4",
      locationName:
        "Ocean Rafting Tour to Whitehaven Beach, Hill Inlet Lookout & Top Snorkel Spots",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.815010089348!2d148.70914037330243!3d-20.26650544661814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6bd835383a0ebb2b%3A0x747dd342a28b134f!2sCoral%20Sea%20Marina!5e0!3m2!1sen!2sin!4v1701541972834!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "You'll start at: Coral Sea Marina",
        "Whitsunday Islands",
        "Ocean Rafting",
        "Whitehaven Beach",
        "Hill Inlet",
        "You'll return to starting point",
      ],
      about:
        "Make the most of your time exploring the Whitsunday Islands' Whitehaven Beach aboard a motorized raft on this full-day tour. Choose between tours that offer a snorkeling expedition or extended beach time at secluded spots you wouldn't be able to access on your own. Listen to your naturalist guide talk about the flora and fauna of the area during nature walks and guided snorkeling expeditions (use of snorkel equipment is included). Afternoon tea and cake, as well as hotel pickup and drop-off, make this tour a convenient option.",
      price: {
        amount: "₹10,816.38",
        category: "adult",
      },
    },
  ],
  nashikData: [
    {
      id: "5-1",
      locationName: "Sula Vineyards Day tour from Mumbai",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.0759930847453!2d73.68587167353328!3d20.005325022144913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddedba795be8dd%3A0xb20dce447adb0a9d!2sSula%20Vineyards!5e0!3m2!1sen!2sin!4v1701622520948!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: ["Sula Vineyards", "You'll return to the starting point"],
      about:
        "Escape the bustle of Mumbai and spend the day sampling wine at Sula Vineyards. Located 3 hours away in Nashik, it can be a hassle getting to the vineyard and back on your own. With this tour, you can leave the driving to someone else, and enjoy your day out in at India’s largest vineyard, complete with wine factory, restaurants, amphitheater and gardens.",
      price: {
        amount: "₹8,100.69",
        category: "adult (price varies by group size)",
      },
    },
    {
      id: "5-2",
      locationName: "Three Jyotirlinga Temples in Maharashtra",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.608493691663!2d75.16725237353394!3d20.024939821501224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb93b793c1dc95%3A0x15be6fc3178c365d!2sGrishneswar%20Jyotirlinga%20Temple!5e0!3m2!1sen!2sin!4v1701623023337!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "Nashik",
        "Shirdi",
        "Grishneshwar Jyotirlinga Temple",
        "Ellora Caves",
        "Bhimashankar",
        "Lonavala",
        "Mumbai",
      ],
      about:
        "Embark on a spiritual journey with the 'Three Jyotirlinga Temples in Maharashtra' private tour. Visit the sacred Trimbakeshwar Jyotirlinga Temple in Nashik, the ancient Grishneshwar Temple in Aurangabad, and the serene Bhimashankar Temple nestled in the Sahyadri Hills. Discover the rich heritage, architectural splendor, and spiritual significance of these revered Hindu pilgrimage sites. Immerse yourself in devotion and experience the divine energy of Lord Shiva on this soulful expedition.",
      price: {
        amount: "₹75,549.59",
        category: "adult (price varies by group size)",
      },
    },
    {
      id: "5-3",
      locationName: "Walking tour of historic Old Nashik and Panchwati",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7498.530985561844!2d73.78802513543836!3d19.997368957646792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb01b97b7403%3A0x5557b3347d54fb6!2sOld%20Nashik%2C%20Koknipura%2C%20Nashik%2C%20Maharashtra%20422001!5e0!3m2!1sen!2sin!4v1701624017679!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "You'll start at: Shree Kalaram Mandir Sansthan",
        "Kalaram Temple",
        "You'll end at: Saraf Bazar Road",
      ],
      about:
        "Wonder through the winding narrow streets of Nashik and explore parts of the town only accessible by foot. Your guide will take you on a walking tour to discover lesser known spots. See medieval temples, old housing complexes known as ‘wadas’, and see the riverside promenade. Visit the State Archaeology Museum and the Kale Ram Temple. Experience the culture of the town like a local.",
      price: {
        amount: "₹910",
        category: "adult",
      },
    },
    {
      id: "5-4",
      locationName: "Travel 12 days in wonderful Maharashtra",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14996.095369499764!2d73.78261812435736!3d20.0075140152062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddea54b213a9d7%3A0xc2f9ac85ac767a9d!2sPanchavati%2C%20Nashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1701624044172!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "Panchavati",
        "Shree Laxmanji Temple",
        "Siddha Laxmi Temple",
        "Aurangabad",
        "Ajanta Caves",
        "Ellora Caves",
        "Khuldabad",
        "Maqbara Malik Amber",
        "Daulatabad Fort",
        "Hazur Sahib Nanded",
        "Takhat Sachkhand Sri Hazur Abchalnagar Sahib",
        "Nanded",
        "Shri Guru Gobind Singh Ji Airport",
      ],
      about: `The guided spiritual tour in Maharashtra is the ideal experience to know the religions of India and discover the religious tolerance, characteristic of Maharashtra. 
        Akvin Tourism offers you a unique tour which will make you discover Hinduism, Jainism, Buddhism, Sufism and Sikhism.
        During 12 days, we offer you a discovery of each religion in exceptional places. In Aurangabad, you have an option of homestay for discover the Indian culture meticulously. 
        This tour is ideal for understanding Indian spirituality in all aspects. We choose places that are not very touristy or off beat in order to make it as closely experience as possible.
        We are working on sustainable tourism. 
        
        Safety precautions for covid: 
        We are following the advice of all governments and public health authorities for the safety purpose of public health crisis and proactively implementing a range of precautionary measures, from regular sanitization of the car, cleaning protocols, wearing mask, temperature check.`,
      price: {
        amount: "₹45,490",
        category: "adult",
      },
    },
  ],
  baliData: [
    {
      id: "6-1",
      locationName: "Nusa Penida One Day Trip with All-inclusive",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31541.400061117103!2d115.18950361083984!3d-8.81657039999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd25cd3a15a1b23%3A0x2e91e9e0c925ac1b!2sNusa%20Dua!5e0!3m2!1sen!2sin!4v1701625467138!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "Sanur Beach",
        "Pasih Uug Beach",
        "Angel's Billabong",
        "Kelingking Beach",
        "Crystal Bay",
      ],
      about:
        "Visit the island of Nusa Penida with this full-day excursion from Bali. You'll travel by speedboat to the island, where your local driver will take you around to some of the prettiest areas. Highlights include the cliff formations at Broken Beach, the natural infinity pool at Angel's Billabong, and the white sand beach at Crystal Bay, with a stop for an included local lunch along the way.",
      price: {
        amount: "₹7,418.53",
        category: "adult (price varies by group size)",
      },
    },
    {
      id: "6-2",
      locationName:
        "Bali Food Tour: Savor Street Food and Night Market Adventures",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15783.834602312707!2d115.24785145541989!3d-8.503395900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23d408cf3fa7f%3A0x62ea8c77a3802beb!2sMarket!5e0!3m2!1sen!2sin!4v1701626732862!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "Sanur Beach",
        "Pasih Uug Beach",
        "Angel's Billabong",
        "Kelingking Beach",
        "Crystal Bay",
      ],
      about: `Bali Food Tour: An Authentic Culinary Journey with Local Flavor

        Indulge in a delectable adventure with our Bali Culinary Delights experience. Culinary Exploration: Our tour is designed to be a gastronomic adventure, where you'll have the opportunity to sample a wide array of mouthwatering Balinese delicacies. 
        Discover the heart and soul of Balinese street food through three unique sessions featuring appetizers, main courses, and desserts. Here's what you and your fellow food enthusiasts will experience:
         Appetizer Extravaganza, Main Course Adventure, Bali's Sweet for Dessert Sensation.
        
        Customization for Vegetarians:
        We warmly welcome vegetarian participants to join this experience. We have thoughtfully curated a variety of vegetarian options for each session to ensure a delightful culinary journey for all.
        
        Join us on this mouthwatering adventure, where you'll savor Bali's street food like a true local. Book now on TripAdvisor and treat your taste buds to a memorable journey!`,
      price: {
        amount: "₹7,418.53",
        category: "adult (price varies by group size)",
      },
    },
    {
      id: "6-3",
      locationName: "Ubud Tour - Best of Ubud - All Inclusive",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.794041126108!2d115.25805497335064!3d-8.519367386284443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23d43f6189b67%3A0xb6ec43164befc356!2sSacred%20Monkey%20Forest%20Sanctuary!5e0!3m2!1sen!2sin!4v1701627055092!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "Sacred Monkey Forest Sanctuary",
        "Tegalalang Rice Terrace",
        "D Alas Warung Restaurant",
        "Tirta Empul Temple",
        "Tegenungan Waterfall",
      ],
      about: `If you’re visiting Ubud for the first time, get your bearings on a private tour that allows you to customize your itinerary according to your interests. As well as beating the heat in an air-conditioned car, benefit from both the insider knowledge and undivided attention of your guide as you zip between top attractions such as the Tegalalang Rice Terrace, Tegenungan Waterfall, and the Sacred Monkey Forest Sanctuary.`,
      price: {
        amount: "₹8,527",
        category: "adult (price varies by group size)",
      },
    },
  ],
  mountAbuData: [
    {
      id: "7-1",
      locationName:
        "4 Night 5 Days Golden Triangle Tour ( Jaipur - Agra - Delhi - Jaipur )",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58046.068806467694!2d72.67956642274534!3d24.593361391655506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395d2a7b9c58c24f%3A0x41ec48d89a772ec9!2sMount%20Abu%2C%20Rajasthan%20307501!5e0!3m2!1sen!2sin!4v1701635304812!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [""],
      about:
        "Take a whirlwind tour through Jaipur, Delhi, and Agra--dubbed the 'Golden Triangle'--with this private tour from Jaipur. You'll have five days and four nights in total to see the highlights of all three cities, from the Taj Mahal in Agra to the Pink City of Jaipur, all in a private, air-conditioned vehicle just for your group.",
      price: {
        amount: "₹28,991.94",
        category: "adult (price varies by group size)",
      },
    },
    {
      id: "7-2",
      locationName: "Private Day Tour Of Mount Abu From Udaipur",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.076169925002!2d72.69984837370053!3d24.586567356165787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395cd585aeb45481%3A0xb004841923bdb521!2sSunset%20Point%20Rd%2C%20Mount%20Abu%2C%20Rajasthan%20307501!5e0!3m2!1sen!2sin!4v1701635476929!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "You'll get picked up",
        "Sunset Point Mount Abu",
        "Nakki Lake",
        "Dilwara Jain Temples",
        "Guru Shikhar",
        "You'll retunr to the starting point",
      ],
      about:
        "Be awestruck by the beauty of one of the beautiful Jain temples in world, Dilwara Temples , Nakki Lake And More Attraction followed by a quick tour of Mount Abu.",
      price: {
        amount: "₹4,519.33",
        category: "adult (price varies by group size)",
      },
    },
    {
      id: "7-3",
      locationName: "One Day Guided Mount Abu Local Sightseeing Trip by Cab",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.076169925002!2d72.69984837370053!3d24.586567356165787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395cd585aeb45481%3A0xb004841923bdb521!2sSunset%20Point%20Rd%2C%20Mount%20Abu%2C%20Rajasthan%20307501!5e0!3m2!1sen!2sin!4v1701635476929!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "You'll get picked up",
        "Sunset Point Mount Abu",
        "Nakki Lake",
        "Dilwara Jain Temples",
        "Guru Shikhar",
        "Mount Abu",
        "You'll retunr to the starting point",
      ],
      about:
        "Situated a short drive from Udaipur, Mount Abu is a lush hill station known for its relatively cool climate and the Dilwara Jain temples, dating back to the 11th and 13th centuries. With this tour, you'll get to see the best of what the charming city has to offer, with visits to its local bazaars and temples. You'll also get to watch the sun sink into the horizon at the panoramic Sunset Point before heading back to Udaipur.",
      price: {
        amount: "₹4,500",
        category: "adult (price varies by group size)",
      },
    },
  ],
  tokyoData: [
    {
      id: "8-1",
      locationName:
        "Mt Fuji, Hakone Lake Ashi Cruise Bullet Train Day Trip from Tokyo",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.461524539759!2d139.69167667425302!3d35.69025872948059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd4741c62e1%3A0x51d797d25c62db8d!2sKeio%20Plaza%20Hotel%20Tokyo!5e0!3m2!1sen!2sin!4v1701636548456!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "You'll start at: Keio Plaza Hotel Tokyo, Shinjuku City, Tokyo 160-8330, Japan",
        "Mount Fuji",
        "Lake Ashinoko",
        "Hakone Ropeway",
        "Tokyo Station, Chiyoda City, Tokyo, Japan",
      ],
      about:
        "Navigating Japan’s public transport system can often be a daunting task. Let a guide do the work for you on this tour of Mt. Fuji and Lake Ashi by coach and bullet train, which saves you hours in travel time. Ascend to the Mt. Fuji’s 5th Station; ride on the Komagatake Ropeway, one of Japan’s highest aerial tramways; and take a cruise on Lake Ashi, part of Hakone National Park. ",
      price: {
        amount: "₹10,775.89",
        category: "adult",
      },
    },
    {
      id: "8-2",
      locationName: "1-Day Tokyo Bus Tour",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.192311784623!2d139.76407767425192!3d35.67226643046895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188be6a11b4be5%3A0x527322ddc6836357!2sMatsuya%20Ginza!5e0!3m2!1sen!2sin!4v1701636859975!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "You'll start at: Matsuya Ginza",
        "Shinjuku I Land",
        "Meiji Jingu Shrine",
        "Imperial Palace",
        "Senso-ji Temple",
        "Asakusa",
        "Tokyo Skytree",
        "Odaiba District",
        "Mode Gakuen Cocoon Tower",
        "You'll end at: 1-chōme-7-2 Nishishinjuku",
      ],
      about: `Discover Tokyo's must-see landmarks on the deluxe coach tour including a Matcha experience, admission to Skytree, and a Tokyo Bay ferry(except Tuesday). Stroll the natural scenery at Meiji Shrine and drive past Akihabara, Ueno and other major attractions en route to the Imperial Palace. Then explore Asakusa with historical temples, shopping, matcha tea and Japanese Izakaya Lunch! 
        In the afternoon, enjoy a 360-degree panoramic view from Tokyo Sky Tree and relaxing at Tokyo Bay Cruise. Return to Shinjuku while enjoy the view of the Tokyo city.
        
        ・Discover Tokyo's the most iconic landmarks on the coach tour efficiently
        ・Try Authentic Matcha experience & IZAKAYA Lunch at Historical place, Asakusa
        ・Benefit from skip-the-line admission to skytree which is the tallest broadcasting tower in the world 
        ・Get a light breeze of Tokyo Bay Ferry (Except every Tuesday)
        ・A Professional English-speaking guide attend this tour
        ・Also, multilingual audio guidance is available in EN, FR, IT, ES, TH, ID, UK`,
      price: {
        amount: "₹8,961.47",
        category: "adult",
      },
    },
    {
      id: "8-3",
      locationName: "Official Street Go-Kart in Shibuya",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.783083013087!2d139.69180407425108!3d35.657715631268076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d06f918e801%3A0x21cb6385dc94ddd2!2sStreet%20Kart%20Shibuya!5e0!3m2!1sen!2sin!4v1701637106353!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "You'll start at: Street Kart Shibuya",
        "Shibuya Crossing",
        "Shibuya Crossing",
        "Omotesando",
        "You'll return to the starting point",
      ],
      about: `You will drive our karts through the famous Shibuya Crossing dressed up in character costume from Comics, Games or Anime. Many on-lookers will wave at you and take photos of you making you feel like a celebrity.
        On our Shibuya course, you will also drive through Harajuku and Omotesando which is the origin of Japanese pop fashion. 
        
        You can come solo and join others to tour in a group of maximum 6 drivers. 
        
        Our activity is a completely guided tour by our well trained guides.
        Our guides will keep you safe and make sure you have an extraordinary experience. 
        Our guides will take as many photos possible and give you the data at the end of your tour.
        
        Come join a tour with us for an unforgettable memory that you can share with family and friends.`,
      price: {
        amount: "₹8,737.21",
        category: "adult",
      },
    },
  ],
  kyotoData: [
    {
      id: "9-1",
      locationName: "Kyoto 6hr Private Tour with Government-Licensed Guide",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.8327681733203!2d135.756191774212!3d34.98585336786204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600108ae918b02ef%3A0xb61a446e74a21c08!2sKyoto%20Station!5e0!3m2!1sen!2sin!4v1701543202260!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "Fushimi Inari-taisha Shrine",
        "Kiyomizu-dera Temple",
        "Nijo Castle",
        "Nishiki Market Shopping District",
        "Kyoto Imperial Palace",
        "Higashiyama Ward",
        "Nanzenji Suirokaku",
        "Katsura Imperial Villa",
        "Tenryuji Temple",
        "Okochi Sanso Garden",
        "Eikando Zenrinji Temple",
        "Sanjusangendo Temple",
      ],
      about:
        "Discover both modern and traditional sides of history-rich Kyoto during this full-day private tour. Travel like a local by public transportation as you tick off the city’s most celebrated sights, from UNESCO-listed Nijo Castle to the well-preserved neighborhood of Higashiyama and streets of Gion, otherwise known as Kyoto’s Geisha district.",
      price: {
        amount: "₹12,176.31",
        category: "adult (price varies by group size)",
      },
    },
    {
      id: "9-2",
      locationName:
        "Arashiyama Walking Tour - Bamboo Forest, Monkey Park & Secrets",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.5173465614203!2d135.67860617421397!3d35.018785366082014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001a9fe9bfe5279%3A0x1259413423edf0d9!2sSaga-Arashiyama%20Station!5e0!3m2!1sen!2sin!4v1701543932807!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "You'll start at: Saga-Arashiyama Station",
        "Arashiyama",
        "The Bamboo Forest Trail",
        "Tenryu-ji Temple Sogenchi Teien",
        "Togetsukyo Bridge",
        "Monkey Park Iwatayama",
        "You'll end at: Arashiyama Monkey Park Iwatayama",
      ],
      about: `Join our tour and embrace Arashiyama's spiritual awakening on foot and explore some hidden gems with our local guide. 

      This walking tour of Arashiyama is unique because it offers a perfect combination of natural beauty, cultural heritage, and interactive experiences. From the serene Bamboo Grove to the UNESCO World Heritage Site of Tenryuji Gardens, the colorful Kimono Forest, the iconic Togetsukyo Bridge, and the Arashiyama Monkey Park, this tour provides a comprehensive experience of the highlights of Arashiyama. With stunning views, interactive wildlife encounters, and cultural landmarks, this tour is a perfect way to explore the best of Arashiyama in a short time.
      
      Places you will visit:
      
      - Arashiyama Bamboo Grove
      - Monkey Park 
      - Tenryuji Garden
      - Kimono Forest
      - Togetsukyo Bridge 
      - and few hidden spots `,
      price: {
        amount: "₹6,997.85",
        category: "adult",
      },
    },
    {
      id: "9-3",
      locationName: "Hidden Kyoto E-Biking tour",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52280.23426094476!2d135.63998105539733!3d35.01885306509662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600107ebd1a5e095%3A0x5abce8694c9aa210!2sNORU%20Kyoto%20Bike%20Tours!5e0!3m2!1sen!2sin!4v1701544271565!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [""],
      about: `On this bike-ride exploration of Kyoto’s hidden gems, you’ll beat the crowds and visit more peaceful parts of the city. From zen gardens to UNESCO-listed temples such as Kinkakuji, it’s the perfect way to spend time in the great outdoors. You’ll also learn about Japan’s history and culture from your guide along the way. And you can pack light, as a foldable bike and helmet are both provided.

      - See Kyoto from a local's perspective and visit hidden sites that locals love
      - You’ll pedal past top attractions like Kinkakuji temple and Kitano Tenmangu
      - Spend time in the fresh air and escape the crowds in Kyoto’s busier areas
      - Great choice for travelers of all fitness levels and children over 13 years
      `,
      price: {
        amount: "₹8,117.54",
        category: "adult",
      },
    },
    {
      id: "9-4",
      locationName: "Kyoto Night Foodie Tour",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.103420115046!2d135.769363474213!3d35.00411616687506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600108eaa74aa6ff%3A0xedebf228e32708d6!2sStatue%20of%20Izumo-no-Okuni!5e0!3m2!1sen!2sin!4v1701544383021!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "You'll start at: Statue of Izumo-no-Okuni",
        "Gion",
        "Pontocho District",
        "Kawaramachidori",
        "You'll return at starting point",
      ],
      about: `Get a deeper experience of Kyoto food culture than would be possible on your own by joining this guided tour. Stroll through the districts of Gion and Pontocho, stopping into small bars and restaurants to sample traditional drinks and food that have been carefully chosen and make up a full meal; choose from over 20 combinations.`,
      price: {
        amount: "₹13,712.84",
        category: "adult",
      },
    },
  ],
  hanoiData: [
    {
      id: "10-1",
      locationName:
        "Ninh Binh Full-Day Tour from Hanoi to Hoa Lu, Tam Coc & Mua Cave Via Boat & Bike",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.210383244624!2d105.85582742356729!3d21.024266437936134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abe956029433%3A0xf3b1bd60dfd4a857!2zS-G7i2NoIEjDoCBO4buZaQ!5e0!3m2!1sen!2sin!4v1701549202654!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "You'll start at: Kịch Hà Nội",
        "Hoa Lu temples of the Dinh & Le Dynasties",
        "Ninh Binh Mountain Side Homestay & Cafe",
        "Tam Coc",
        "Mua Caves",
        "You'll return to the starting point",
      ],
      about:
        "Escape the bustling confines of Hanoi city, and breath the fresh air on this full-day rural Vietnam tour. With a local lunch of goat meat, fried rice and local fruits onboard, you’ll be fueled for an afternoon of action, taking in the scenery by both bamboo boat and mountain bike. See local villagers going about their daily lives as you come to appreciate a quieter slice of Vietnamese culture.",
      price: {
        amount: "₹5,122.25",
        category: "adult",
      },
    },
    {
      id: "10-2",
      locationName: "5 Traditional Dishes Hanoi Cooking Class with Market Trip",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.989403569659!2d105.85068107356761!3d21.033109987632404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abc0633477e1%3A0xd0a5643b2eba8c7f!2zOCBQLiBHaWEgTmfGsCwgSMOgbmcgQuG6oWMsIEhvw6BuIEtp4bq_bSwgSMOgIE7hu5lpLCBWaWV0bmFt!5e0!3m2!1sen!2sin!4v1701549458949!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [""],
      about: `Step up from just eating Vietnamese food to learning the art behind it on this small-group Hanoi cooking and market experience. Meet your instructor-guide in old Hanoi, and explore its biggest market to learn about and select fresh ingredients. Next, enjoy your hands-on cooking class: prepping staple Vietnamese dishes before sitting down to enjoy them with rice wine. A choice of time slots gives you useful flexibility.

      - Learn to mak local dishes on a cooking class and market trip in Hanoi
      - Dig deeper into Vietnam food with insight and tuition from a local expert
      - Visit a market and prep classic recipes to eat with glass of rice wine
      - Choice of timings for convenience, with recipe book and certificate included
      `,
      price: {
        amount: "₹2,955.54",
        category: "adult",
      },
    },
    {
      id: "10-3",
      locationName:
        "Ha Long Bay Cruise Day Tour - best selling: Kayaking, Swimming, hiking & Lunch",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.6854789346785!2d106.98580957356391!3d20.924969941338563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a5ec6c1fba745%3A0xd8c824609119f9db!2sTu%E1%BA%A7n%20Ch%C3%A2u%20Harbor%20%2F%20Tuan%20Chau%20Port!5e0!3m2!1sen!2sin!4v1701549684476!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "Halong Bay",
        "Halong Bay",
        "Halong Bay",
        "You'll return to starting point",
      ],
      about: `Get out on the water and escape the crowds on land during a cruise that offers the best views of Halong Bay. Ideal for first-time visitors, this activity-packed excursion includes a kayaking tour, swimming at a beautiful beach, a visit to Surprise Cave, and a hiking trip to Titop Island.`,
      price: {
        amount: "₹4,780.77",
        category: "adult",
      },
    },
    {
      id: "10-4",
      locationName:
        "Hanoi Jeep Tours: Food+ Culture + Sight +Fun By Vietnam Army Jeep",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.976974568492!2d105.8523903735676!3d21.033607287615347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abc0f9612f75%3A0xc1b60c35cc2147a7!2zM0IgUC4gSMOgbmcgVHJlLCBMw70gVGjDoWkgVOG7lSwgSG_DoG4gS2nhur9tLCBIw6AgTuG7mWksIFZpZXRuYW0!5e0!3m2!1sen!2sin!4v1701549857755!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "You'll start at: 3B P. Hàng Tre",
        "Hai Ba Trung Temple",
        "Hanoi Train Street",
        "Long Bien Bridge",
        "Old Quarter",
        "You'll return to the starting point",
      ],
      about: `Experience the sights, sounds, and smells of Hanoi in a unique way as you explore the city in a Soviet-era GAZ-69 jeep. See a mix of city highlights and hidden gems in the capital of Vietnam and learn about the country’s history from your guide. Choose from morning, afternoon, or evening tours and enjoy a delicious street food meal and drink at a rooftop bar included in your package.`,
      price: {
        amount: "₹4,524.66",
        category: "adult",
      },
    },
  ],
  singaporeData: [
    {
      id: "11-1",
      locationName:
        "Private Singapore Tour with a Local, Highlights & Hidden Gems 100% Personalised",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8151766069113!2d103.84007638885497!3d1.2848480000000189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1975b723bb19%3A0x7472c3c611d95357!2sStarbucks!5e0!3m2!1sen!2sin!4v1701550923078!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "You'll start at: Starbucks",
        "Marina Bay",
        "Gardens by the Bay",
        "Chinatown",
        "Fort Canning Park",
      ],
      about:
        "Choose your own adventure with this private host for a day in Singapore. Choose whatever highlights or hidden gems (suggested by your host) interest you and spend the day traveling at your own pace. Learn about the ins and outs of life in Singapore and listen to in-depth commentary on the stops you choose to visit. Multiple tour lengths available to suit your schedule and budget; this tour can accommodate up to six people.",
      price: {
        amount: "₹6,485.73",
        category: " adult (price varies by group size)",
      },
    },
    {
      id: "11-2",
      locationName: "Mangrove Kayaking Adventure in Singapore",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6220362314043!2d103.96647201539317!3d1.4031015018580175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3e82e956484d%3A0x4d8b38b6e92a08e7!2sPulau%20Ubin%20Jetty!5e0!3m2!1sen!2sin!4v1701551234592!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [""],
      about:
        "See a different side of Singapore with a guided kayaking tour around Pulau Ubin. Paddle in a pair or with the guide on a tandem kayak. Spend a short time crossing the open sea before reaching the calm waters of the mangrove forest. Soak in the tranquil environment while learning about the ecosystem and looking for birds like Kingfishers, Eagles and Herons. All equipment provided, and no kayaking experience is necessary.",
      price: {
        amount: "₹6,805.92",
        category: " adult (price varies by group size)",
      },
    },
    {
      id: "11-3",
      locationName: "Sunset Sail Cruise with 5 Course Seated Dinner",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.855320381117!2d103.81667377324376!3d1.258875961865107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1bfd0772fe17%3A0x524866b9440a9e99!2s22%20Sentosa%20Gateway%2C%20Singapore%20098136!5e0!3m2!1sen!2sin!4v1701551573998!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [""],
      about:
        "Rediscover the magic of old Singapore when you board the Royal Albatross 4-mast, 22-sail tall ship for a luxury sunset dinner cruise. Sip a welcome aperitif, then indulge in five delicious courses of international cuisine, washed down with soft drinks, as you sail past the sandy beaches of Sentosa Island, the towering skyscrapers of Marina Bay and Singapore’s Southern Islands. Alcoholic drinks are available to purchase.",
      price: {
        amount: "₹18,941.01",
        category: " adult",
      },
    },
    {
      id: "11-4",
      locationName: "Singapore Duck Tour",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.797576661046!2d103.85674877324365!3d1.2960706617499471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da190d6de8fbd7%3A0xd66bc53a053c9f1!2sSingapore%20DUCKtours!5e0!3m2!1sen!2sin!4v1701551991628!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "You'll start at: Singapore DUCKtours",
        "Singapore Flyer",
        "The Helix Bridge",
        "Espalande - Theatres on the Bay",
        "Merlion Park",
        "Old Supreme Court Building",
        "Fountain of Wealth",
      ],
      about:
        "Explore Singapore on a 1-hour duck tour, known officially as DUCKtours®, which allows you to see city sights by both land and water. On ‘the duck,’ an amphibious military vehicle that was refurbished from World War II, you’ll drive around the city to check out attractions like the Fountain of Wealth and Singapore Flyer. Then hit the water to cruise past landmarks like the Merlion, Singapore’s famous statue that sits where the Singapore River meets Marina Bay. Audio commentary is included.",
      price: {
        amount: "₹2,889.31",
        category: " adult",
      },
    },
  ],
  jejuData: [
    {
      id: "12-1",
      locationName:
        "Jeju Island East Bus Tour with Lunch included Full Day Trip Tours",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.7818000941525!2d126.492776!3d33.5070537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x350cfb3b0ac5bfc5%3A0xedff3343f60bcc67!2sJeju%20International%20Airport!5e0!3m2!1sen!2sin!4v1701552876233!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "You'll start at: Jeju International Airport",
        "Jeolmul Natural Forest Resort",
        "Seongeup Folk Village",
        "Gwangchigi Beach",
        "Seongsan Ilchulbong",
        "Manjanggul Lava Tube",
      ],
      about: `Vacationers on UNESCO-listed Jeju Island will find much to admire on the east coast. Tour this section on a full-day coach tour that includes highlights such as the Seongeup Folk Village, Seongsan Ilchulbong, and Manjang Cave, all narrated by your guide.
        - Travel the east side of Jeju Island by sightseeing coach
        - Explore the Manjanggul Lava Tube and and Seongeup Folk Village
        - Guide helps you discover the UNESCO World Heritage Site
        `,
      price: {
        amount: "₹8,451.72",
        category: " adult (price varies by group size)",
      },
    },
    {
      id: "12-2",
      locationName:
        "Jeju Island English Flexible itenary Private Tour for 1 to 3 days",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.781629170628!2d126.49020107412855!3d33.507058146323544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x350cfb3b0ac5bfc5%3A0xedff3343f60bcc67!2sJeju%20International%20Airport!5e0!3m2!1sen!2sin!4v1701553619899!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [""],
      about: `This tour operated by samjin travel service., ltd. If you need English speaking tour specialists(pls read reviews in tripadvior SAMJIN TRAVEL JOHN)who knows well about history and culture of jeju lsland. This tour offers you private and flexible itenaries from oneday to multiple days from 1 to 13 tourists. Also who can bring you to local food restaurants with economic prices. You will get additional 20% discounts for most of private attractions except for government operations. Top tour operators in trip advisor SAMJIN TRAVEL JOHN .
        `,
      price: {
        amount: "₹19,635.30",
        category: " adult group (up to 4)",
      },
    },
    {
      id: "12-3",
      locationName:
        "[Jeju] Hanbok Private guide tour & photo session in beautiful Yongduam rock,",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.4594111865226!2d126.50412057412902!3d33.515439245887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x350ce4b4aaa5e883%3A0xbc13c5fc80e48721!2s15%20Yongma-ro%204-gil%2C%20Cheju%2C%20Jeju-do%2C%20South%20Korea!5e0!3m2!1sen!2sin!4v1701553327033!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [""],
      about: `Take home more than just memories after this private tour and photoshoot of Jeju wearing traditional South Korean *hanbok* outfits. Under the direction of your private photographer guide, you’ll pose for photographs in front of the famous Yongduam Rock and receive 70 photos (some of which are edited) after your experience.
        `,
      price: {
        amount: "₹6,573.56",
        category: " adult (price varies by group size)",
      },
    },
  ],
  delhiData: [
    {
      id: "13-1",
      locationName: "Old Delhi Food and Heritage Walk",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9088147850152!2d77.21541697387828!3d28.632494884085315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3873747683%3A0x6c597f5b2ded0279!2sGate%20No.%207%2C%20Rajiv%20Chowk%20Metro%20Station!5e0!3m2!1sen!2sin!4v1701630886199!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "You'll start at: Gate No. 7, Rajiv Chowk Metro Station",
        "Khari Baoli",
        "Balli Maran",
        "Naughara - Row Of Nine Houses",
        "Chandni Chowk",
      ],
      about: `Foodie travelers won’t want to miss this half-day food and heritage tour of Old Delhi. Avoid getting lost in the maze of streets or getting sick eating at the wrong places. On this small-group tour (max. 6) you’ll be taken to some of the best, cleanest, and most interesting street food spots that you might not find independently. Learn more about Old Delhi’s culture and history through its cuisine.
        `,
      price: {
        amount: "₹3,751.90",
        category: " adult",
      },
    },
    {
      id: "13-2",
      locationName: "Private Full Day Old and New Delhi City Tour",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.3016969015216!2d77.23086717387915!3d28.650683883259045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd18df89b215%3A0xdd57369e29bf9d96!2sJama%20Masjid!5e0!3m2!1sen!2sin!4v1701631138506!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "You'll start at: Friday Mosque (Jama Masjid)",
        "Gurudwara Bangla Sahib",
        "India Gate",
        "Humayun's Tomb",
        "Swaminarayan Akshardham",
        "Qutub Minar",
        "Lotus Temple",
        "Raj Ghat",
      ],
      about: `Explore the sights of Old and New Delhi with your own private guide on a full-day tour. Travel in a private air-conditioned vehicle to UNESCO World Heritage sites including Jama Masjid, Qutub Minar, and Humayun's Tomb. You'll also go to other attractions like Raj Ghat—a memorial to Mahatma Gandhi, Parliament House, and Chandni Chowk; and temples such as the lavish Akshardham. Includes entrance fees, and round-trip transfers from your Delhi hotel, airport or train station.
        `,
      price: {
        amount: "₹1,108.52",
        category: " adult (price varies by group size)",
      },
    },
    {
      id: "13-3",
      locationName: "Sunrise Taj Mahal Trip from Delhi all Inclusive",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1282593.9979674933!2d77.00094028346007!3d27.38511801251071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397470d491343beb%3A0x640a5ccc94029576!2sAgra%20Fort!5e0!3m2!1sen!2sin!4v1701631481814!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "You'll get picked up from hotel",
        "Taj Mahal",
        "Agra Fort",
        "You'll return to the starting point",
      ],
      about: `Make a tour to Agra easy and stress-free with round-trip private transportation and a dedicated guide. Make your own schedule for pickup and drop-off at your New Delhi hotel; move at your own pace while exploring the landmarks in Agra. Lunch at a top Agra restaurant and entry fees to sites visited are included in the tour price.
        `,
      price: {
        amount: "₹8,365.03",
        category: " adult (price varies by group size)",
      },
    },
    {
      id: "13-4",
      locationName: "Chandni Chowk Delhi Food Tour with 13+ Tastings",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.0386064281147!2d77.23505117387953!3d28.658562682901017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd1ce1bb4817%3A0x77cd599c9b6e6ee8!2sAngoori%20Bagh%20Rd%2C%20Lal%20Qila%2C%20Chandni%20Chowk%2C%20Delhi%2C%20110006!5e0!3m2!1sen!2sin!4v1701631871964!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "You'll start at:  Angoori Bagh Road",
        "Chandni Chowk",
        "You'll return to the starting point",
      ],
      about: `Taste your way through Old Delhi’s food scene on this private excursion. After meeting your guide at Chandni Chowk metro station, immerse yourself Delhi cuisine and culture with complimentary tastings of pani puris, pakoras, stuffed parathas, paneer masala curry, and other dishes. Tour a Sikh temple with a 24-hour kitchen and learn to make chapattis, explore a spice market, and savor delicious desserts.
        `,
      price: {
        amount: "₹2,984.46",
        category: " adult",
      },
    },
  ],
  phuketData: [
    {
      id: "14-1",
      locationName: "Atv Big Buddha Phuket Viewpoint",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.642763542909!2d98.31026737327159!3d7.827581606640389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30502f60cf972939%3A0x7fcb3b1b04652c5c!2sThe%20Big%20Buddha%2C%20Phuket!5e0!3m2!1sen!2sin!4v1701629446022!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "You'll start at: Jeju International Airport",
        "Big Buddha Phuket",
        "Big Buddha Phuket",
        "You'll return to the starting point",
      ],
      about: `Take in views of the sea and the jungle and get a chance to stop for a visit to Phuket's massive Big Buddha statue with this ATV tour. A variety of options are available depending on how much time you want to spend out exploring, from quick half-hour jaunts to two-hour trips.
        `,
      price: {
        amount: "₹2,952.20",
        category: " adult",
      },
    },
    {
      id: "14-2",
      locationName: "Phuket Thai Cooking Class",
      mapCode: `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.717746741297!2d98.30441617327143!3d7.819671206748898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3050259b23db3cdb%3A0xa1dea2cb696f7701!2sPhuket%20Thai%20Cooking%20Class%20by%20VJ!5e0!3m2!1sen!2sin!4v1701629537567!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      `,
      itinerary: [""],
      about: `Learn how to prepare authentic Thai curry in a relaxed environment during a small-group cooking class. If you select the morning tour, visit a local traditional market, brimming with color and foreign smells, to pickup fresh ingredients. As you use mortar and pestle, your local instructor shares culinary secrets passed down from generation to generation. Upon request, the menu can be altered to accommodate any dietary restrictions.
        `,
      price: {
        amount: "₹4,920.34",
        category: " adult",
      },
    },
    {
      id: "14-3",
      locationName:
        "Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine Tour",
      mapCode: `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.3059194450693!2d98.38802757327302!3d7.967302904707178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305036aeab8fa03d%3A0x4d60aca5c646232f!2sV.MarineTour-%20Phi%20Phi%20Islands%20Day%20Trip%20-%20Private%20Boat%20Charters!5e0!3m2!1sen!2sin!4v1701629756504!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      `,
      itinerary: [
        "V.MarineTour- Phi Phi Islands Day Trip - Private Boat Charters",
        "Bamboo Island",
        "Ko Phi Phi Don",
        "Monkey Beach",
        "Viking Cave",
        "Pileh Bay",
        "Maya Bay",
        "You'll return to the starting point",
      ],
      about: `
      Make the most of limited time in Thailand on a speedboat tour of the Phi Phi islands from Phuket. Traveling by speedboat means you spend less time at sea and more time exploring the white sands and crystal waters of the islands, home to the bay made famous by "The Beach." Enjoy free time to snorkel, sunbathe, and swim, and relish the convenience of hotel pickup and drop-off in Phuket.
      `,
      price: {
        amount: "₹6,888.47",
        category: " adult",
      },
    },
  ],
  
  bangkokData: [
    {
      id: "15-1",
      locationName: "Longtail boat 2 hrs - Bangkok Canal tour",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.572283924451!2d100.48996547336505!3d13.744325697470007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29904fae6944f%3A0xd2899f493c21a4d9!2sElefin%20Coffee!5e0!3m2!1sen!2sin!4v1701638319883!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "You'll start at: Elefin Coffee",
        "Baan Silapin",
        "Wat Paknam Phasi Charoen",
        "You'll return to the starting point",
      ],
      about: `See a side of Bangkok that most travelers don’t get to see as you cruise along the city’s canal ways. Set sail along the klong (canals) of the Chao Phraya River in a traditional longtail boat and enjoy a glimpse of local life in the Thonburi district of Bangkok. Enjoy up to two hours on the water and stop to visit Baan Silapin (The Artist’s House) and Wat Paknam Phasi Charoen.
        `,
      price: {
        amount: "₹2,829.19",
        category: " adult",
      },
    },
    {
      id: "15-2",
      locationName: "Three BEST Temples Bangkok City Tour 'Must Visit'",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.681668004431!2d100.51087957336493!3d13.737712697623044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e298d90522aa59%3A0xe2ffaa66d6175279!2sWat%20Traimit%20Withayaram%20Worawihan%20(Golden%20Buddha)!5e0!3m2!1sen!2sin!4v1701638534936!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "You'll start at: Thailand Travel Agency by Sun Leisure World",
        "Temple of the Golden Buddha (Wat Traimit)",
        "Temple Of Dawn (Wat Arun)",
        "You'll return to the starting point",
      ],
      about: `Bangkok is full of beautiful temples, but it’s easy to feel overwhelmed and unsure of which to visit first. This convenient city tour visits three must-see temples—Wat Traimit, Wat Pho, and Wat Arun—as well as other city sights such as markets and ethnic minority neighborhoods. This is a great tour for first-time visitors to Bangkok as you’ll learn all about the culture and religion of Thailand.
        `,
      price: {
        amount: "₹7,380.51",
        category: " adult",
      },
    },
    {
      id: "15-3",
      locationName: "River Kwai Full Day Tour",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30967.882252324787!2d99.49970820204764!3d14.018886767586496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e374c107c527fd%3A0xe253ef5116d16e5!2sKanchanaburi%20War%20Cemetery%20(DonRak)!5e0!3m2!1sen!2sin!4v1701638837467!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "You'll start at: Kanchanaburi War Cemetery",
        "JEATH War Museum",
        "Bridge Over the River Kwai",
        "Burma-Thai Railway",
        "Tham Kra Sae Bridge",
        "You'll retunr to the starting point",
      ],
      about: `The trip includes a visit to the infamous bridge on the River Kwai, built by Allied prisoners of war (POW) during World War II. It includes a visit to a war cemetery containing the graves of an estimated 9,000 Allied soldiers who died while building the bridge and constructing the notorious -Death Railway-. At the JEATH Museum, guests will see a replica of a Japanese POW camp, followed by a train journey along a stunning stretch of the -Death Railway-. A buffet lunch is served upon arrival at Wang Po station, close to the Burmese border.
      - JEATH Museum

      - Visit Japanese POW camp
      
      - Exciting train journey at Death Railway
      
      - Buffet lunch at Wang Po station
      
      - Round Trip Transfer
        `,
      price: {
        amount: "₹6,150.42",
        category: " adult",
      },
    },
    {
      id: "15-4",
      locationName: "Bangkok Jungle Bike Tour - Including Transfer & Lunch",
      mapCode: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.1719504849834!2d100.56076827336425!3d13.708033398308839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f729d39dcf5%3A0x61871a35a2bdde80!2sWat%20Khlong%20Toei%20Nok!5e0!3m2!1sen!2sin!4v1701639010602!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      itinerary: [
        "You'll start at: Wat Khlong Toei Nok",
        "Sri Nakhon Khuean Khan Park And Botanical Garden",
        "Bangkok Tree House",
        "Maha Devalaya Hindu Temple",
        "Bang Nam Phueng Floating Market",
        "Bang Kachao",
        "You'll return to the starting point",
      ],
      about: `Discover some of Bangkok’s beautiful natural spaces on a 4-hour small-group bike tour. Pedal through Benjakiti Park and admire the beautiful Bangkok skyline, explore local markets and canals, and visit the massive green space of the Bang Krajao peninsula. Enjoy light refreshments and water throughout the tour as well as a delicious Thai lunch while visiting Krajao.
        `,
      price: {
        amount: "₹6,150.42 ",
        category: " adult",
      },
    },
  ],
};

const itineraryPlannerContainer = document.getElementById("itinerary-planner");
const mapContainer = document.getElementById("map-container");
const aboutInfo = document.getElementById("about-info");
const price = document.getElementById("price");
const category = document.getElementById("category");

// Function to create header section
function createHeader(data) {
  const locationName = document.getElementById("location-name");
  const mapElement = document.createElement("div");
  mapElement.innerHTML = `
    ${data.mapCode}
    `;
  mapContainer.appendChild(mapElement);

  for (let i = 0; i < data.itinerary.length; i++) {
    createItineraryPlanner(data.itinerary, i);
  }

  locationName.textContent = data.locationName;
  aboutInfo.textContent = data.about;
  price.textContent = data.price.amount;
  category.textContent = data.price.category;
}

// Function to create itinerary
function createItineraryPlanner(itineraryData, iteration) {
  const circularElement = document.createElement("div");

  if (itineraryData.length !== 1) {
    circularElement.innerHTML = `
        <div class="w-fit flex">
            <div class="flex flex-col">
                <div class="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-base z-10">
                    ${iteration + 1}
                </div>
                <div class="mt-4">
                    <svg height="21" width="60" class="rotate-90">
                        <g stroke="gray" stroke-width="2">
                            <path stroke-dasharray="7,7" d="M5 20 l215 0" />
                        </g>
                    </svg>                
                </div>
            </div>
        
            <div class="text-lg text-dark font-[500] my-1">${
              itineraryData[iteration]
            }</div>
        </div>
        `;
  } else {
    const journeyStartElement = document.getElementById(
      "journey-start-element"
    );
    journeyStartElement.style.display = "none";
    circularElement.innerHTML = `<div class="text-lg text-dark font-[500]">No Itinerary plan available</div>`;
  }

  itineraryPlannerContainer.appendChild(circularElement);
}

Object.keys(data).forEach((key) => {
  console.log(data[key]);
  for (let i = 0; i < data[key].length; i++) {
    if (data[key][i].id === cardId) {
      createHeader(data[key][i]);
    }
  }
});
