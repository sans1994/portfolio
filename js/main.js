$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .header__nav-list").toggleClass("active flex");
    $("body").toggleClass("lock");
  });
});
$(".menu__link,.header__btn").click(function (event) {
  $(".header__burger, .header__nav-list").removeClass("active flex");
  $("body").removeClass("lock");
});

$(document).ready(function () {
  $(".nav-list__link").click(function () {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top + "px",
      },
      {
        duration: 1000,
        easing: "swing",
      }
    );
    $(".header__nav-list").removeClass("active flex");
    $(".header__burger").removeClass("active flex");
    $("body").removeClass("lock");
    return false;
  });
});

// //Scroll back to top

// var progressPath = document.querySelector('.progress-wrap path');
// var pathLength = progressPath.getTotalLength();
// progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
// progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
// progressPath.style.strokeDashoffset = pathLength;
// progressPath.getBoundingClientRect();
// progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
// var updateProgress = function () {
//   var scroll = $(window).scrollTop();
//   var height = $(document).height() - $(window).height();
//   var progress = pathLength - (scroll * pathLength / height);
//   progressPath.style.strokeDashoffset = progress;
// }
// updateProgress();
// $(window).scroll(updateProgress);
// var offset = 50;
// var duration = 550;
// jQuery(window).on('scroll', function () {
//   if (jQuery(this).scrollTop() > offset) {
//     jQuery('.progress-wrap').addClass('active-progress');
//   } else {
//     jQuery('.progress-wrap').removeClass('active-progress');
//   }
// });
// jQuery('.progress-wrap').on('click', function (event) {
//   event.preventDefault();
//   jQuery('html, body').animate({ scrollTop: 0 }, duration);
//   return false;
// });

$("#portfolio__wrapper").mixItUp({
  animation: {
    duration: 400,
    effectsIn: "fade translateY(-100%)",
    effectsOut: "fade translateY(-100%)",
  },
  selectors: {
    target: ".mix",
    filter: ".filter-btn",
  },
});

// function wowInit() {
//   var scrollingAnimations = false; // Set false for turn off animation
//   if (scrollingAnimations) {
//     $(window).on('load', function () {
//       setTimeout(function () {
//         new WOW().init();
//       }, 400);
//     });

//   }
// }
// wowInit();

//fixed header
function fixedHeader() {
  var ww = $(window).scrollTop();
  if (ww > 0) {
    $(".header__nav").addClass("active");
  } else {
    $(".header__nav").removeClass("active");
  }
}
fixedHeader();
$(window).on("scroll", function () {
  fixedHeader();
});

//Page cursors

$(window).mousemove(function (e) {
  $(".cursor").css({
    left: e.pageX,
    top: e.pageY,
  });
});
$(".cursor-link")
  .on("mouseenter", function () {
    $(".cursor").addClass("active");
  })
  .on("mouseleave", function () {
    $(".cursor").removeClass("active");
  });

var $input;

function onInputFocus(event) {
  var $target = $(event.target);
  var $parent = $target.parent();
  $parent.addClass("input--filled");
}

function onInputBlur(event) {
  var $target = $(event.target);
  var $parent = $target.parent();

  if (event.target.value.trim() === "") {
    $parent.removeClass("input--filled");
  }
}

$(document).ready(function () {
  $input = $(".input__field");

  // in case there is any value already
  $input.each(function () {
    if ($input.val().trim() !== "") {
      var $parent = $input.parent();
      $parent.addClass("input--filled");
    }
  });

  $input.on("focus", onInputFocus);
  $input.on("blur", onInputBlur);
});



jQuery(document).ready(function ($) {
  $(window).on("load", function () {
    var $preloader = $("#page-preloader"),
      $spinner = $preloader.find(".spinner");
    $spinner.fadeOut();
    $preloader.delay(1000).fadeOut();
  });
  $(".opt_ln").click(function () {
    $("#top_ln").slideDown(300);
    $(".mn_btn").addClass("close_i");
    $(".mn_btn").removeClass("opt_ln");
  });
  $(".close_i").click(function () {
    $("#top_ln").slideUp(300);
    $(".mn_btn").removeClass("close_i");
    $(".mn_btn").addClass("opt_ln");
  });
  $(".menu-body").hide();
  $(".menu-title").click(function () {
    $(this).next().toggle();
  });
  $(".menu_top ul li").hover(
    function () {
      $("ul", this).stop().slideDown(400);
      $("ul ul", this).stop().slideUp(400);
    },
    function () {
      $("ul", this).stop().slideUp(400);
    }
  );
  $(".s_mn").click(function () {
    $(".search_b").slideToggle(300);
    if ($(".s_mn").hasClass("srch_a")) {
      $(this).html('<i class="fas fa-search"></i> Поиск');
      $(".s_mn").removeClass("srch_a");
      $(".s_mn").removeClass("fix_sbt");
    } else {
      $(this).html("X");
      $(".s_mn").addClass("srch_a");
      if ($(".s_mn").hasClass("ha_rgh")) {
        $(".s_mn").addClass("fix_sbt");
      }
    }
  });
});
