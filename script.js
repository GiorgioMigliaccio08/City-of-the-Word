document.addEventListener("DOMContentLoaded", function () {
  const cardsContainer = document.querySelector(".City");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const descriptionTitle = document.querySelector(".description h1");
  const descriptionSubtitle = document.querySelector(
    ".description p:first-child"
  ); // Testo "Italian City"
  const descriptionText = document.querySelector(".description p:nth-child(3)");
  const pageNumber = document.querySelector(".number");
  const body = document.body;

  const cityData = {
    Roma: { subtitle: "Italian - City", number: "01" },
    Parigi: { subtitle: "French - City", number: "02" },
    Egitto: { subtitle: "Egyptian - City", number: "03" },
    NewYork: { subtitle: "American - City", number: "04" }, // Senza spazio
    Dubai: { subtitle: "Emirati - City", number: "05" },
  };

  function updateBackground() {
    const firstCard = cardsContainer.firstElementChild;
    const cityName = firstCard.getAttribute("data-city");
    const cityImage = firstCard.getAttribute("data-image");

    descriptionTitle.textContent = firstCard.querySelector("h3").textContent;
    descriptionSubtitle.textContent = cityData[cityName].subtitle;
    descriptionText.textContent = firstCard.querySelector("p").textContent;
    pageNumber.textContent = cityData[cityName].number;
    body.style.backgroundImage = `url(${cityImage})`;
  }

  function moveNext() {
    const firstCard = cardsContainer.firstElementChild;
    cardsContainer.appendChild(firstCard);
    updateBackground();
  }

  function movePrev() {
    const lastCard = cardsContainer.lastElementChild;
    cardsContainer.insertBefore(lastCard, cardsContainer.firstElementChild);
    updateBackground();
  }

  nextButton.addEventListener("click", moveNext);
  prevButton.addEventListener("click", movePrev);
});
