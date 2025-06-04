const swCard = new Swiper(".sw-card", {
  centeredSlides: false,
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 20,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
      centeredSlides: false,
    },
    1220: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: false,
    },
  },
});
