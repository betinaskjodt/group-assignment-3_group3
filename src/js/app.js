//   const image = document.querySelectorAll(".slideshow__img");
//   const slideDot = document.querySelectorAll(".slideshow__dot");
//   const imageNumber = document.querySelector(".slideshow__img-number");
//   const prevButton = document.querySelector(".back-btn");
//   const nextButton = document.querySelector(".next-btn"); 

//   let slideIndex = 0;

  
  

//   function updateSlideshow() {
//     image.forEach((img, index) => {
//       img.classList.remove("slideshow__img--active");
//     });
  
//     image[slideIndex].classList.add("slideshow__img--active");
//   }
  


//   function updateSlideshow() {
//     slidedot.forEach((dot, index) => {
//       dot.classList.remove("slideshow__dot--active");
//     });
  
//     slideDot[slideIndex].classList.add("slideshow__dot--active");
//   }
  




  const slideShowContainer = document.querySelectorAll(".slideshow");
  const slideDot = document.querySelectorAll(".slideshow__dot");
  const prevButton = document.querySelector(".back-btn");
  const nextButton = document.querySelector(".next-btn"); 

  let slideIndex = 0;



  function updateSlideShow() {
    slideShowContainer.forEach((slide, index) => {
      img.classList.remove("slideshow--active");
    });
  
    slide[slideIndex].classList.add("slideshow--active");
  }

  nextButton.addEventListener("click", () => {
     slideIndex ++ 
    //  = (slideIndex + 1); 
    updateSlideShow();
  });


//   nextButton.addEventListener("click",updateSlideShow )




  