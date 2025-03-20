document.addEventListener("DOMContentLoaded", function () {
  const cardsContainer = document.querySelector(".City");
  const cards = document.querySelectorAll(".card");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const descriptionTitle = document.querySelector(".description h1");
  const descriptionText = document.querySelector(".description p:nth-child(3)");
  const body = document.body;

  function updateBackground() {
    const firstCard = cardsContainer.firstElementChild;
    const cityName = firstCard.getAttribute("data-city");
    const cityImage = firstCard.getAttribute("data-image");

    descriptionTitle.textContent = cityName;
    descriptionText.textContent = firstCard.querySelector("p").textContent;
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
