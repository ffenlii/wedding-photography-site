const serviceswiper = new Swiper(".service-section__slider", {
  loop: false,

  // Базові налаштування для найменших екранів (мобільні телефони)
  slidesPerView: 1,
  spaceBetween: 20,

  // Адаптивність (Breakpoints)
  breakpoints: {
    // Коли ширина екрана >= 480px (горизонтальні телефони / маленькі планшети)
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    // Коли ширина екрана >= 768px (планшети в ре things, ноутбуки, десктопи)
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
      allowTouchMove: false, // Порада: якщо всі 3 картки влазять і гортати нікуди, можна вимкнути свайп мишкою
    },
  },

  pagination: {
    el: ".pagination",
    clickable: true,
    bulletClass: "pagination__button",
    bulletActiveClass: "pagination__button--active",
  },
});
