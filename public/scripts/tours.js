// Get the cardId from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const cardId = urlParams.get("id");

console.log(cardId);

// Data
const data = [
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
];

const itineraryPlannerContainer = document.getElementById("itinerary-planner");
const mapContainer = document.getElementById("map-container");
const aboutInfo = document.getElementById("about-info");
const price = document.getElementById("price");

//
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

  createAboutSection(data.about);

  locationName.textContent = data.locationName;
}

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

function createAboutSection(aboutData) {
  const aboutInfo = document.getElementById("about-info");
  aboutInfo.textContent = aboutData;
}

for (let i = 0; i < 5; i++) {
  if (data[i].id === cardId) {
    createHeader(data[i]);
  }
}
