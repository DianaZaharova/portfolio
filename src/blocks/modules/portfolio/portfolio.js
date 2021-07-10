import Swiper from "swiper/bundle";

const swiper = new Swiper(".portfolio__slider", {
  loop: true,
  direction: "vertical",
  speed: 800,
  slidesPerView: 3,
  spaceBetween: 100,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
