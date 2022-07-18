$(function () {

  $('.header__catalog').styler();

  const discountSwiper = new Swiper('.discount-swiper', {


    loop: true,

    wrapperClass: 'discount-swiper__wrapper',

    slideClass: 'discount-swiper__slide',


    pagination: {
      el: '.swipers-pagination',
      type: 'bullets',
      bulletClass: 'swipers__pagination-bullet',
      bulletActiveClass: 'swipers__pagination-bullet--active',
      clickable: true
    },


    navigation: {
      nextEl: '.swipers-button-next',
      prevEl: '.swipers-button-prev',
    },


  });

});