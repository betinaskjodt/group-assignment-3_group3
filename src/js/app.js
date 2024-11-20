const slides = [
  { img: "./assets/images/berlin.jpeg", alt: "Berlin capital", caption: "Berlin" },
  { img: "./assets/images/london.jpeg", alt: "London capital", caption: "London" },
  { img: "./assets/images/paris.jpeg", alt: "Paris capital", caption: "Paris" },
  { img: "./assets/images/rome.jpeg", alt: "Rome capital", caption: "Rome" },
  { img: "./assets/images/stockholm.jpeg", alt: "Stockholm capital", caption: "Stockholm" },
  { img: "./assets/images/athen.jpeg", alt: "Athen capital", caption: "Athen" },
  { img: "./assets/images/reikjavik.jpeg", alt: "Reykjavik capital", caption: "Reykjavik" },
  { img: "./assets/images/madrid.jpeg", alt: "Madrid capital", caption: "Madrid" }
];

const prevButton = document.querySelector(".slideshow__button--prev");
const nextButton = document.querySelector(".slideshow__button--next");
const imageElement = document.querySelector(".slideshow__image"); 

let currentSlide = 0; // Start på den första bilden

// Funktion för att uppdatera bilden
function updateSlide() {
  const slide = slides[currentSlide];
  imageElement.src = slide.img; // Uppdaterar bildens src
  imageElement.alt = slide.alt; // Uppdaterar bildens alt-text
}

// Navigera till nästa bild
nextButton.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length; 
  updateSlide();
});

// Navigera till föregående bild
prevButton.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length; 
  updateSlide();
});

// Initialisera slideshow genom att visa den första bilden
updateSlide();
