const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rigthBtn = document.getElementById("right");

let activeSlide = 1;

rigthBtn.addEventListener("click", () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setBgToBody();
  setActiveClass();
});
leftBtn.addEventListener("click", () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setBgToBody();
  setActiveClass();
});

setBgToBody();

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveClass() {
  slides.forEach((slide) => slide.classList.remove("active"));

  slides[activeSlide].classList.add("active");
}
