$('.get-price__btn').on('click', function() {
    $('#price-form').toggleClass('trans-pos');
    $('#price-form').fadeIn();
    $('.bg-wrapper').fadeIn();
    $('html').toggleClass('lock');
    $('#price-form').css({'visibility' : 'visible'});
});

$('#price-form .close__btn').on('click', function() {
    $('#price-form').toggleClass('trans-pos');
    $('#price-form').fadeOut();
    $('.bg-wrapper').fadeOut();
    $('html').toggleClass('lock');
    // $('#price-form').css({'visibility' : 'visible'});
});

$('.popup-item__btn').on('click', function() {
    $('.popup-item').toggleClass('trans-pos');
    $('.popup-item').fadeIn();
    $('.bg-wrapper').fadeIn();
    $('html').toggleClass('lock');
    $('.popup-item__btn ').css({'visibility' : 'visible'});
});

$('.popup-item .close__btn').on('click', function() {
    $('.popup-item').toggleClass('trans-pos');
    $('.popup-item').fadeOut();
    $('.bg-wrapper').fadeOut();
    $('html').toggleClass('lock');
    // $('#price-form').css({'visibility' : 'visible'});
});