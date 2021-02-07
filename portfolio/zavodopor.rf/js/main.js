   /* AJAX SEND-EMAIL ===================================
   =====================================================*/

   $("form").submit(function () { //Change
    var th = $(this);
    $.ajax({
       type: "POST",
       url: "index.php", //Change
       data: th.serialize()
    }).done(function () {
    $('.popup-thanks').fadeIn();
    $('.bg-wrapper').fadeIn();
    // $('html').toggleClass('lock');
    $('.popup-item').fadeOut();
    $('.popup-form').fadeOut();
    if(!$("html").hasClass("lock")){
        $('html').toggleClass('lock');
    }
    setTimeout(function() {
        // Done Functions
        th.trigger("reset");
    }, 1000);
    });
    return false;
});

$('.consult__btn').on('click', function() {
    $('#price-form').toggleClass('trans-pos');
    $('#price-form').fadeIn();
    $('.bg-wrapper').fadeIn();
    $('html').toggleClass('lock');
    $('#price-form').css({'visibility' : 'visible'});
});
$('.croinsh__btn').on('click', function() {
    $('#croinsh-form').toggleClass('trans-pos');
    $('#croinsh-form').fadeIn();
    $('.bg-wrapper').fadeIn();
    $('html').toggleClass('lock');
    $('#croinsh-form').css({'visibility' : 'visible'});
});
$('.svetil__btn').on('click', function() {
    $('#svetil-form').toggleClass('trans-pos');
    $('#svetil-form').fadeIn();
    $('.bg-wrapper').fadeIn();
    $('html').toggleClass('lock');
    $('#svetil-form').css({'visibility' : 'visible'});
});

$('.close__btn').on('click', function() {
    $('.popup-form').toggleClass('trans-pos');
    $('.popup-form').fadeOut();
    $('#croinsh-form').fadeOut();
    $('#svetil-form').fadeOut();
    $('.bg-wrapper').fadeOut();
    $('html').toggleClass('lock');
});


$('.close-thanks').on('click', function() {
    $('.popup-thanks').fadeOut();
    $('.popup-form').fadeOut();
    $('.bg-wrapper').fadeOut();
    $('html').removeClass('lock');
});
