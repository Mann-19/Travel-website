const cardData = [
  {
    img: "../public/Images/booking/atlantis-the-palm.jpg",
    name: "Atlantis the Palm",
    prices: {
      bestPrice: {
        source: "Booking.com",
        before: "1,52,330",
        after: "96,770",
      },
      otherPrices: [
        {
          source: "Trivago",
          price: "98,800",
        },
        {
          source: "Agoda.com",
          price: "97,650",
        },
        {
          source: "Expedia",
          price: "1,10,250",
        },
      ],
    },
  },
];

const cardContainer = document.getElementById("card-container");

function createCard(cardData) {
  const card = document.createElement("div");

  card.innerHTML = `
  <div class="w-3/5 mx-auto bg-lightest rounded-xl overflow-hidden flex border-2 border-solid border-black">
  <!-- Image Section -->
  <div class="w-56 h-56 overflow-hidden">
      <img src="${cardData.img}" alt="Card Image" class="w-full h-full object-cover">
  </div>

  <!-- Text Section -->
  <div class="flex flex-col justify-center items-center p-8 gap-2">
      <!-- Heading -->
      <h2 class="text-base font-[500] mb-2 text-dark">${cardData.prices.bestPrice.source}</h2>

      <!-- Content Elements -->
      <div class="mb-2">
          <p class="text-2xl line-through text-red-600">&#8377;${cardData.prices.bestPrice.before}</p>
          <p class="text-2xl text-green-500">&#8377;${cardData.prices.bestPrice.after}</p>
      </div>

      <button class="bg-brand text-darkest p-2 rounded-lg text-sm w-2/4">Book</button>
  </div>

  <!-- Vertical Partition -->
  <div class="border-[1px] border-solid border-mid my-3 mx-6"></div>

  <!-- Mini Elements Section -->
    <div class="flex flex-col items-start justify-evenly p-4">
        <div class="w-1/3">
            <p class="text-sm">${cardData.prices.otherPrices[0].source}</p>
            <div class="border-[1px] border-mid w-16 my-1"></div>
            <p class="text-sm text-dark">&#8377;${cardData.prices.otherPrices[0].price}</p>
        </div>

        <div class="w-1/3">
            <p class="text-sm">${cardData.prices.otherPrices[1].source}</p>
            <div class="border-[1px] border-mid w-16 my-1"></div>
            <p class="text-sm text-dark">&#8377;${cardData.prices.otherPrices[1].price}</p>
        </div>

        <div class="w-1/3">
            <p class="text-sm">${cardData.prices.otherPrices[2].source}</p>
            <div class="border-[1px] border-mid w-16 my-1"></div>
            <p class="text-sm text-dark">&#8377;${cardData.prices.otherPrices[2].price}</p>
        </div>
    </div>
    </div>
  `;

  cardContainer.appendChild(card);
}

cardData.forEach((data) => {
  createCard(data);
});
