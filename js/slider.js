const swiper = new Swiper(".services-section__slider", {
  loop: true,

  slidesPerView: 1, // телефон

  breakpoints: {
    480: {
      slidesPerView: 2, // планшет
    },

    // 768: {
    //   slidesPerView: 3, // десктоп
    // },
  },

  pagination: {
    el: ".pagination",
    clickable: true,
    bulletClass: "pagination__button",
    bulletActiveClass: "pagination__button--active",
  },
});
