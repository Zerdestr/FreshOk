$(function () {
  $(document)
    .on('click', '.product-card__favorite', function () {
      $(this).toggleClass('product-card__favorite--active')
    })

    .on('click', '.top-products__button', function () {
      $('.top-products__button').removeClass('filter-products__button--active')
      $(this).addClass('filter-products__button--active')
    })

    .on('click', '.stock__button', function () {
      $('.stock__button').removeClass('filter-products__button--active')
      $(this).addClass('filter-products__button--active')
    })

    .on('click', '.user-memu__item--busket', function () {
      $('.basket').addClass('basket--active')
      $('body').addClass('no-scroll')
    })

    .on('click', '.basket__close', function () {
      $('.basket').removeClass('basket--active')
      $('body').removeClass('no-scroll')
    })



  $(document).mouseup(function (hideMobileMenu) {
    let basket = $(".basket");
    let body = $("body");

    if
      (basket.hasClass("basket--active")
      && !basket.is(hideMobileMenu.target)
      && basket.has(hideMobileMenu.target)
        .length === 0) {

      basket.removeClass('basket--active')
      body.removeClass('no-scroll');
    }


  });


  let mixerConfig = {
    controls: {
      scope: 'local'
    }
  };

  let mixerTopProducts = mixitup('.top-products__mixer-container', mixerConfig);

  let mixerStock = mixitup('.stock__mixer-container', mixerConfig);

  $(document)
    .on('click', '.top-products__add-button', function () {

      $('.top-products__item.hidden').slice(0, 4).removeClass('hidden').addClass('mix');
      mixerTopProducts.destroy();
      mixerTopProducts = mixitup('.top-products__mixer-container', mixerConfig);
    })
    .on('DOMSubtreeModified', function () {
      if (!$('.top-products__content .hidden').length >= 1) {
        $('.top-products__add-button').remove();
      }
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