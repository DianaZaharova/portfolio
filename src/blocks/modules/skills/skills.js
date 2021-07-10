import Swiper from "swiper/bundle";

const swiper = new Swiper(".skills__slider", {
  loop: true,
  speed: 800,
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 90,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
