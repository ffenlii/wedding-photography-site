const blogswiper = new Swiper(".blog-section__slider", {
  loop: true,
  slidesPerView: 1, // за замовчуванням (на мобільних) показуємо 1 картку
  spaceBetween: 20, // відступ на мобільних

  breakpoints: {
    // від 480px (планшет)
    480: {
      spaceBetween: 30,
    },
    // від 768px і вище (десктоп)
    768: {
      slidesPerView: 2, // залишаємо 2 картки, які гортаються
      spaceBetween: 30, // відступ між ними
    },
  },

  pagination: {
    el: ".pagination",
    clickable: true,
    bulletClass: "pagination__button",
    bulletActiveClass: "pagination__button--active",
  },
});
