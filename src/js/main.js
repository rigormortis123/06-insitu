import Swiper, { EffectFade, Autoplay } from "swiper";

// var circle = document.querySelector(".circle");
// body.addEventListener("click", function () {
//   circle.classList.add("is-active");
// });

Swiper.use([EffectFade, Autoplay]);

const swiper = new Swiper(".swiper-container", {
  effect: "fade",

  autoplay: {
    delay: 4200,
    disableOnInteraction: false,
  },
});

swiper.on("slideChange", function (slider) {
  slider.slides.forEach(function (slide, index) {
    if (index != slider.activeIndex) {
      slide.style.opacity = 0;
    }
  });
  var slide = slider.slides[slider.activeIndex];
  var circle = document.getElementsByClassName(slide.dataset.color);
  //   var body = document.querySelector("body");
  //   body.style.background = slide.dataset.color;
  circle[0].style.zIndex = -1;
  setTimeout(function () {
    circle[0].classList.add("is-active");
  }, 200);
  setTimeout(function () {
    circle[0].style.zIndex = -3;
  }, 3600);
  setTimeout(function () {
    circle[0].classList.remove("is-active");
  }, 7600);
});

var langFr = document.querySelector(".language.french");
var langDe = document.querySelector(".language.deutsch");
var langEn = document.querySelector(".language.english");
var langSelect = document.querySelector(".language-selection");

langSelect.classList.add("french");
langFr.classList.add("is-active");

langFr.addEventListener("click", function () {
  langSelect.classList.remove("deutsch");
  langSelect.classList.remove("english");
  langSelect.classList.add("french");
  langDe.classList.remove("is-active");
  langEn.classList.remove("is-active");
  langFr.classList.add("is-active");
});

langDe.addEventListener("click", function () {
  langSelect.classList.remove("french");
  langSelect.classList.remove("english");
  langSelect.classList.add("deutsch");
  langEn.classList.remove("is-active");
  langFr.classList.remove("is-active");
  langDe.classList.add("is-active");
});

langEn.addEventListener("click", function () {
  langSelect.classList.remove("french");
  langSelect.classList.remove("deutsch");
  langSelect.classList.add("english");
  langDe.classList.remove("is-active");
  langFr.classList.remove("is-active");
  langEn.classList.add("is-active");
});
