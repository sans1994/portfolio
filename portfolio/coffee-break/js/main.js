$(function(){

    $('.slider-news').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        dots: false
    });

    $('.slider-products').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,
        centerMode: true,
        responsive: [
            {
              breakpoint: 976,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: true
              }
            },
            {
                breakpoint: 655,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                  arrows: true
                }
              },
              {
                breakpoint: 420,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                  arrows: true,
                  centerMode: true
                }
              }
          ]
    });

    $('.header-menu__btn').on('click', function(){
        $('.header__menu').toggleClass('active')
      });
  
});