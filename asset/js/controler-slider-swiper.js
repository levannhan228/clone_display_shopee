var swiper = new Swiper('.slider-1', {
  centeredSlides: true,
  autoplay: {
    delay: 3500,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper = new Swiper('.slider-2', {
  slidesPerView: 6,
  slidesPerGroup: 6,
  speed:800,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.swiper-button-next-2',
    prevEl: '.swiper-button-prev-2',
  },
});