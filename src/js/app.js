const slides = [
  {
    img: "./assets/images/berlin.jpeg",
    alt: "Berlin capital",
    caption: "Berlin",
    Number: "1/8",
  },
  {
    img: "./assets/images/london.jpeg",
    alt: "London capital",
    caption: "London",
    Number: "2/8",
  },
  {
    img: "./assets/images/paris.jpeg",
    alt: "Paris capital",
    caption: "Paris",
    Number: "3/8",
  },
  {
    img: "./assets/images/rome.jpeg",
    alt: "Rome capital",
    caption: "Rome",
    Number: "4/8",
  },
  {
    img: "./assets/images/stockholm.jpeg",
    alt: "Stockholm capital",
    caption: "Stockholm",
    Number: "5/8",
  },
  {
    img: "./assets/images/athen.jpeg",
    alt: "Athen capital",
    caption: "Athen",
    Number: "6/8",
  },
  {
    img: "./assets/images/reikjavik.jpeg",
    alt: "Reykjavik capital",
    caption: "Reykjavik",
    Number: "7/8",
  },
  {
    img: "./assets/images/madrid.jpg",
    alt: "Madrid capital",
    caption: "Madrid",
    Number: "8/8",
  },
];

const prevButton = document.querySelector(".slideshow__button--prev");
const nextButton = document.querySelector(".slideshow__button--next");
const imageElement = document.querySelector(".slideshow__image");
const numberElement = document.querySelector(".slideshow__number");
const captionElement = document.querySelector(".slideshow__caption");
const dotElement = document.querySelectorAll(".slideshow__dot");

let currentSlide = 0;

function updateSlide() {
  const slide = slides[currentSlide];
  imageElement.src = slide.img;
  imageElement.alt = slide.alt;
  numberElement.textContent = slide.Number;
  captionElement.textContent = slide.caption;

  dotElement.forEach((dot, index) => {
    dot.classList.toggle("slideshow__dot--active", index === currentSlide);
  });
}

nextButton.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
});

prevButton.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide();
});

updateSlide();
