$('.program-parts  .part-content').not(':first-of-type').hide();
$('.program-parts  .part-top').click(function(e) {
    e.preventDefault();

    var findArticle = $(this).next();
    var findWrapper = $(this).closest('.program-parts');

    if (findArticle.is(':visible')) {
        findArticle.slideUp('fast');
        $(this).closest(".part-top").removeClass('active');
    }
    else {
        findWrapper.find('.part-content').slideUp('fast').removeClass('active');
        findArticle.slideDown('fast').addClass('active');
        findWrapper.find('.part-top').removeClass('active');
        $(this).closest(".part-top").addClass('active');
    }
});


var active = false;
$(".grav__more-btn").on("click", function() {
  $('.grav__text-item.hidden').slideToggle();
  $(this).text(active ? 'Посмотреть всё' : 'Свернуть всё')
  active = !active;
});

(function () {
    for (var e = document.querySelectorAll(".youtube"), t = 0; t < e.length; t++) {
      var i = "./images/preview.webp",
        s = new Image();
      (s.src = i),
        s.addEventListener("load", void e[t].appendChild(s)),
        e[t].addEventListener("click", function () {
          var e = document.createElement("iframe");
          e.setAttribute("frameborder", "0"),
            e.setAttribute("allowfullscreen", ""),
            e.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1"),
            (this.innerHTML = ""),
            this.appendChild(e);
        });
    }
  })();

  $('.header__list-link').on('click', function(e){
    e.preventDefault();
    let scroll_el = $(this).attr('href'),
        scroll = $(scroll_el).offset().top - 62;
    
    // $('.menu-link').removeClass('active');
    // $(this).addClass('active');
    
    $('html, body').animate({
      scrollTop: scroll
    }, 10);
  });
  
  window.onscroll = (function(){
    let $sections = $('section');
  $sections.each(function(i,el){
      let top  = $(el).offset().top - 100;
      let bottom = top +$(el).height();
      let scroll = $(window).scrollTop();
      let id = $(el).attr('id');
      if( scroll > top && scroll < bottom){
        $('a.active').removeClass('active');
  $('a[href="#'+id+'"]').addClass('active');
      }
    });
    // growShrinkLogo()
   });


  //  window.onscroll = function() {
  //   growShrinkLogo()
  // };
  
  // var Logo = document.getElementById("logo");
  // var endOfDocumentTop = 50;
  // var size = 0;
  
  // function growShrinkLogo() {
  // var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  
  //   if (size == 0 && scroll > endOfDocumentTop) {
  //     // Logo.style.transform = 'scale(0)';
  //     Logo.style.display = 'none';
  //     size = 1;
  //   } else if(size == 1 && scroll <= endOfDocumentTop){
  //     // Logo.style.transform = 'scale(1)';
  //     Logo.style.display = 'block';
  //    size = 0;
  //   }
  // }

  $(".phone__input").mask("+7(999) 999-99-99");


$('.call__btn').on('click', function() {
  $('#call-form').fadeIn();
  if($('.bg-wrapper').css('display') == 'none')
  {
    $('.bg-wrapper').fadeIn();
  } else {
    $('.bg-wrapper').fadeOut();
  }
  $('html').toggleClass('lock');
});
// $('.gift__btn').on('click', function() {
//   $('#call-form').fadeIn();
//   if($('.bg-wrapper').css('display') == 'none')
//   {
//     $('.bg-wrapper').fadeIn();
//   } else {
//     $('.bg-wrapper').fadeOut();
//   }
//   $('html').toggleClass('lock');
// });
$('.rose__btn1').on('click', function() {
  $('.rose-form1').fadeIn();
  if($('.bg-wrapper').css('display') == 'none')
  {
    $('.bg-wrapper').fadeIn();
  } else {
    $('.bg-wrapper').fadeOut();
  }
  $('html').toggleClass('lock');
});
$('.rose__btn2').on('click', function() {
  $('.rose-form2').fadeIn();
  if($('.bg-wrapper').css('display') == 'none')
  {
    $('.bg-wrapper').fadeIn();
  } else {
    $('.bg-wrapper').fadeOut();
  }
  $('html').toggleClass('lock');
});
$('.rose__btn3').on('click', function() {
  $('.rose-form3').fadeIn();
  if($('.bg-wrapper').css('display') == 'none')
  {
    $('.bg-wrapper').fadeIn();
  } else {
    $('.bg-wrapper').fadeOut();
  }
  $('html').toggleClass('lock');
});
$('.rose__btn4').on('click', function() {
  $('.rose-form4').fadeIn();
  if($('.bg-wrapper').css('display') == 'none')
  {
    $('.bg-wrapper').fadeIn();
  } else {
    $('.bg-wrapper').fadeOut();
  }
  $('html').toggleClass('lock');
});
$('.rose__btn5').on('click', function() {
  $('.rose-form5').fadeIn();
  if($('.bg-wrapper').css('display') == 'none')
  {
    $('.bg-wrapper').fadeIn();
  } else {
    $('.bg-wrapper').fadeOut();
  }
  $('html').toggleClass('lock');
});
$('.rose__btn6').on('click', function() {
  $('.rose-form6').fadeIn();
  if($('.bg-wrapper').css('display') == 'none')
  {
    $('.bg-wrapper').fadeIn();
  } else {
    $('.bg-wrapper').fadeOut();
  }
  $('html').toggleClass('lock');
});
$('.rose__btn7').on('click', function() {
  $('.rose-form7').fadeIn();
  if($('.bg-wrapper').css('display') == 'none')
  {
    $('.bg-wrapper').fadeIn();
  } else {
    $('.bg-wrapper').fadeOut();
  }
  $('html').toggleClass('lock');
});
$('.rose__btn8').on('click', function() {
  $('.rose-form8').fadeIn();
  if($('.bg-wrapper').css('display') == 'none')
  {
    $('.bg-wrapper').fadeIn();
  } else {
    $('.bg-wrapper').fadeOut();
  }
  $('html').toggleClass('lock');
});
$('.rose__btn9').on('click', function() {
  $('.rose-form9').fadeIn();
  if($('.bg-wrapper').css('display') == 'none')
  {
    $('.bg-wrapper').fadeIn();
  } else {
    $('.bg-wrapper').fadeOut();
  }
  $('html').toggleClass('lock');
});
$('.rose__btn10').on('click', function() {
  $('.rose-form10').fadeIn();
  if($('.bg-wrapper').css('display') == 'none')
  {
    $('.bg-wrapper').fadeIn();
  } else {
    $('.bg-wrapper').fadeOut();
  }
  $('html').toggleClass('lock');
});

$('.close__btn').on('click', function() {
  $('.form').fadeOut();
  if($('.bg-wrapper').css('display') == 'none')
  {
    $('.bg-wrapper').fadeIn();
  } else {
    $('.bg-wrapper').fadeOut();
  }
  $('html').toggleClass('lock');
});
$('.header__list-item').on('click', function() {
  $('.header__nav').toggleClass('transform');
  // $('#logo2').toggleClass('none');
  $('.bg-wrapper').fadeOut();
  if($(window).width() < 1250)
  {
    $('html').toggleClass('lock');
  }
  $('.icon__span').toggleClass('black');
  $('.icon').toggleClass('open');
});

$('.header-nav__btn').on('click', function() {
  $('.header__nav').toggleClass('transform');
  // $('#logo2').toggleClass('none');
  if($('.bg-wrapper').css('display') == 'none')
  {
    $('.bg-wrapper').fadeIn();
  } else {
    $('.bg-wrapper').fadeOut();
  }
  $('html').toggleClass('lock');
  $('.icon__span').toggleClass('black');
});


const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});



   /* AJAX SEND-EMAIL ===================================
   =====================================================*/

   $("form").submit(function () { //Change
    var th = $(this);
    $.ajax({
       type: "POST",
       url: "mail.php", //Change
       data: th.serialize()
    }).done(function () {
    if($('.bg-wrapper').css('display') == 'none')
    {
      $('.bg-wrapper').fadeIn();
    } else {
      $('.bg-wrapper').fadeOut();
    }
    // $('html').toggleClass('lock');
    if($('.form').css('display') == 'none')
    {
      $('.form').fadeIn();
    } else {
      $('.form').fadeOut();
    }
    if(!$("html").hasClass("lock")){
        $('html').toggleClass('lock');
    }
    setTimeout(function() {
        // Done Functions
      window.location.href="./thanks.html";
        th.trigger("reset");
    }, 1000);
    });
    return false;
});


$(document).ready(function(){
    
  $.getUrlParamVal = function(name){
      var result = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
      return ( result != null ? decodeURI(result[1]) || 0 : null );
  }
  $('input[type=hidden][name^=utm_]').each(function(){
      $(this).val( decodeURIComponent( $.getUrlParamVal( $(this).attr('name') ) ) );
      console.log( $(this).val() ); //<-- debug! заремарить когда будет не нужно
  });

});




$(document).ready(function() {
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});


  // let rosename = $('.catalog__item-btn').data('rosename');
  // $('.rosename').val(rosename);
  // $('.rosename').attr('value', rosename);

  $('.count-input').on('change', function(){
    let summ = $(this).val() *  $(this).closest('.rose-form').find('.cart__item-price').data('price');
    $(this).closest('.rose-form').find('.allcart__price input').val(summ);
    $(this).closest('.rose-form').find('.allcart__price input').attr('value', summ);
  });

//   $(document).ready(function(){
//    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1195.2265771722502!2d50.19195709652941!3d53.191788792276114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDExJzMzLjUiTiA1MMKwMTEnMzUuOSJF!5e0!3m2!1sru!2sru!4v1606505242415!5m2!1sru!2sru" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> });
//  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.2408821204137!2d49.32716721880044!3d53.529817356584594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDMxJzUxLjciTiA0OcKwMTknNDYuNCJF!5e0!3m2!1sru!2sru!4v1606505370334!5m2!1sru!2sru" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> });
window.onload = function(){
  setTimeout(function(){
    document.getElementById('iframe1').src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2390.4300619427345!2d50.191935415832596!3d53.192202979947034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41661c2352dc7675%3A0x45fb1e9fd1f0b7d!2z0YPQuy4g0JDRjdGA0L7QtNGA0L7QvNC90LDRjywgNTAsINCh0LDQvNCw0YDQsCwg0KHQsNC80LDRgNGB0LrQsNGPINC-0LHQuy4sINCg0L7RgdGB0LjRjywgNDQzMDc0!5e0!3m2!1sru!2sua!4v1607164184359!5m2!1sru!2sru';
  },3000);
  setTimeout(function(){
    document.getElementById('iframe2').src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.2408821204137!2d49.32716721880044!3d53.529817356584594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDMxJzUxLjciTiA0OcKwMTknNDYuNCJF!5e0!3m2!1sru!2sru!4v1606505370334!5m2!1sru!2sru';
  },3000);
 };

 $('.link').fancybox({
  openEffect  : 'none',
  closeEffect : 'none',
  helpers : {
      media : {}
  }
});



function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector(".days");
  var hoursSpan = clock.querySelector(".hours");
  var minutesSpan = clock.querySelector(".minutes");
  var secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    var t = getTimeRemaining(endtime);

    if (t.total <= 0) {
      clearInterval(timeinterval);
      var deadline = new Date(Date.parse(endtime) + 2 * 24 * 60 * 60 * 1000);
      initializeClock('countdown', deadline);
    }

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1);
}

var deadline="December 01 2020 00:00:00 GMT+0300";
initializeClock("countdown", deadline);

