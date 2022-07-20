$(function () {
  $(document)
    .on('click', '.product-card__favorite', function () {
      $(this).toggleClass('product-card__favorite--active')
    })



  $('.header__catalog, .counter').styler();

  const discountSwiper = new Swiper('.discount-swiper', {


    loop: true,
    autoplay: {
      delay: 5000,
    },

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