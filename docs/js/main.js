$(function () {
  let basket = $(".basket");
  let basketButton = $(".user-memu__item--busket");
  let headerSearch = $(".search");
  let searchButton = $(".user-memu__item--search-bar");
  let headerMobile = $(".header-mobile");
  let burger = $(".burger");
  let body = $("body");

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

    $(document).on('click', '.jq-selectbox__select', function () {
      $('.jq-selectbox__dropdown').toggle();
    })
  }

  $('.header__catalog, .header-mobile__catalog, .counter').styler();
  // documnet


  $(document)
    .on('click', function (hideMobileMenu) {
      if (
        headerMobile.hasClass("header-mobile--active")
        &&
        !headerMobile.is(hideMobileMenu.target) && headerMobile.has(hideMobileMenu.target).length === 0 &&
        !burger.is(hideMobileMenu.target) && burger.has(hideMobileMenu.target).length === 0) {
        headerMobile.removeClass('header-mobile--active')
        burger.removeClass('burger--active')
        body.removeClass('no-scroll');
      }

      if (
        basket.hasClass("basket--active")
        &&
        !basket.is(hideMobileMenu.target) && basket.has(hideMobileMenu.target).length === 0 &&
        !basketButton.is(hideMobileMenu.target) && basketButton.has(hideMobileMenu.target).length === 0) {
        basket.removeClass('basket--active')
        body.removeClass('no-scroll');
      }

      if (
        headerSearch.hasClass("search-mobile--active")
        &&
        !headerSearch.is(hideMobileMenu.target) && headerSearch.has(hideMobileMenu.target).length === 0 &&
        !searchButton.is(hideMobileMenu.target) && searchButton.has(hideMobileMenu.target).length === 0) {
        headerSearch.removeClass('search-mobile--active')
        body.removeClass('no-scroll');
      }
    })
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
      $('.basket').toggleClass('basket--active')
      $('body').toggleClass('no-scroll')
    })
    .on('click', '.basket__close', function () {
      $('.basket').removeClass('basket--active')
      $('body').removeClass('no-scroll')
    })
    .on('click', '.user-memu__item--search-bar', function () {
      $('.search-mobile').toggleClass('search-mobile--active')
      $('body').toggleClass('no-scroll')
    })
    .on('click', '.header__burger', function () {
      $('.header-mobile').toggleClass('header-mobile--active')
      $('body').toggleClass('no-scroll')
    })
    .on('click', '.header-mobile__closed', function () {
      $('.header__burger').removeClass('burger--active')
      $('.header-mobile').removeClass('header-mobile--active')
      $('body').removeClass('no-scroll')
    })
    .on('click', '.top-products__add-button', function () {
      $('.top-products__item.hidden').slice(0, 4).removeClass('hidden').addClass('mix');
      mixerTopProducts.destroy();
      mixerTopProducts = mixitup('.top-products__mixer-container', mixerConfig);
    })
    .on('click', '.stock__add-button', function () {
      $('.stock-list__item.hidden').slice(0, 4).removeClass('hidden').addClass('mix');
      mixerStock.destroy();
      mixerStock = mixitup('.stock__mixer-container', mixerConfig);
    })
    .on('DOMSubtreeModified', function () {
      if (!$('.top-products__content .hidden').length >= 1) {
        $('.top-products__add-button').remove();
      }
      if (!$('.stock__content .hidden').length >= 1) {
        $('.stock__add-button').remove();
      }
    })

  // window
  $(window)
    .on('scroll', function () {
      let scroll = $(window).scrollTop();
      if (scroll >= $('.header').height()) {
        $(".header").addClass("header--fixed");
      } else {
        $(".header").removeClass("header--fixed");
      }
    });
  // common

  let mixerConfig = {
    controls: {
      scope: 'local'
    }
  };

  let mixerTopProducts = mixitup('.top-products__mixer-container', mixerConfig);

  let mixerStock = mixitup('.stock__mixer-container', mixerConfig);



  if ($('.discount-swiper').length) {
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
    })
  }

});