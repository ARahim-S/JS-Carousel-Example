// Select all slides
const slides = document.querySelectorAll(".slide");
// current slide counter
let curSlide = 0;

// maximum number of slides
let maxSlide = slides.length - 1;

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// add event listener and next slide functionality

function nextPhoto() {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
}

nextSlide.addEventListener("click", nextPhoto);

setInterval(nextPhoto, 2000);

const prevSlide = document.querySelector(".btn-prev");

// add event listener and next slide functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
