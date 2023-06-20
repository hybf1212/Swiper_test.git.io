var swiper = new Swiper("#bannerSwiper1 .Swiper-1", {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        spaceBetween: 30,
    },
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });