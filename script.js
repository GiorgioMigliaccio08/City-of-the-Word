document.addEventListener("DOMContentLoaded", function () {
  const cardsContainer = document.querySelector(".City");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const descriptionTitle = document.querySelector(".description h1");
  const descriptionSubtitle = document.querySelector(
    ".description p:first-child"
  );
  const descriptionText = document.querySelector(".description p:nth-child(3)");
  const pageNumber = document.querySelector(".number");
  const body = document.body;

  const cityData = {
    Roma: { subtitle: "Italian - City", number: "01" },
    Parigi: { subtitle: "French - City", number: "02" },
    Egitto: { subtitle: "Egyptian - City", number: "03" },
    NewYork: { subtitle: "American - City", number: "04" },
    Dubai: { subtitle: "Emirati - City", number: "05" },
  };

  function updateBackground() {
    const firstCard = cardsContainer.firstElementChild;
    const cityName = firstCard.getAttribute("data-city");
    descriptionTitle.textContent = firstCard.querySelector("h3").textContent;
    descriptionSubtitle.textContent = cityData[cityName].subtitle;
    descriptionText.textContent = firstCard.querySelector("p").textContent;
    pageNumber.textContent = cityData[cityName].number;
    body.style.backgroundImage = `url(${firstCard.getAttribute("data-image")})`;
  }

  nextButton.addEventListener("click", () => {
    cardsContainer.appendChild(cardsContainer.firstElementChild);
    updateBackground();
  });
  prevButton.addEventListener("click", () => {
    cardsContainer.insertBefore(
      cardsContainer.lastElementChild,
      cardsContainer.firstElementChild
    );
    updateBackground();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav p");

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      const sectionName = item.textContent.toLowerCase();
      const section = document.querySelector(`.${sectionName}`);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
