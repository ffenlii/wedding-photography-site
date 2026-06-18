const blogswiper = new Swiper(".blog-section__slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,

  // delete
  navigation: {
    nextEl: ".blog-section__arrow--next",
    prevEl: ".blog-section__arrow--prev",
  },

  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    1200: {
      slidesPerView: 2,
      spaceBetween: 100,
      allowTouchMove: false,
    },
  },

  pagination: {
    el: ".pagination",
    clickable: true,
    bulletClass: "pagination__button",
    bulletActiveClass: "pagination__button--active",
  },
});
