let portfolioInstances = [];
const portfolioMobileMedia = window.matchMedia("(max-width: 479px)");

function managePortfolioSliders() {
  if (portfolioMobileMedia.matches === true) {
    // Якщо екран мобільний і слайдери ще не створені
    if (portfolioInstances.length === 0) {
      // Знаходимо всі три обгортки
      const sliderContainers = document.querySelectorAll(
        ".portfolio-slider-wrap",
      );

      sliderContainers.forEach(container => {
        // Шукаємо слайдер всередині конкретного блоку
        const sliderElement = container.querySelector(
          ".portfolio-page-section__slider",
        );
        // Шукаємо пагінацію СУТО всередині цього ж блоку
        const paginationElement = container.querySelector(".pagination");

        const swiper = new Swiper(sliderElement, {
          loop: true,
          slidesPerView: 1,
          spaceBetween: 20,
          pagination: {
            el: paginationElement, // Прив'язуємо саме цю конкретну пагінацію
            clickable: true,
            bulletClass: "pagination__button",
            bulletActiveClass: "pagination__button--active",
          },
        });

        // Записуємо в масив, щоб потім можна було зробити destroy
        portfolioInstances.push(swiper);
      });
    }
  } else {
    // Якщо екран більше за телефон — повністю вирубаємо Swiper, повертаючи твою верстку
    if (portfolioInstances.length > 0) {
      portfolioInstances.forEach(instance => instance.destroy(true, true));
      portfolioInstances = []; // Очищаємо масив
    }
  }
}

// Слухаємо зміни розміру вікна і запускаємо при старті
portfolioMobileMedia.addEventListener("change", managePortfolioSliders);
managePortfolioSliders();
