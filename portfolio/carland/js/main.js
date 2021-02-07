// $(document).ready(function(){
//     var touch   = $('#resp-menu');
//     var menu    = $('.menu');

//     $(touch).on('click', function(e) {
//         e.preventDefault();
//         menu.slideToggle();
//     });

//     $(window).resize(function(){
//         var w = $(window).width();
//         if(w > 767 && menu.is(':hidden')) {
//             menu.removeAttr('style');
//         }
//     });
// });

$(".main__slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
  customPaging: function (slider, i) {
    console.log($(slider.$slides[i]).html());
    return '<button class="tab"></button>';
  },
});
$(".brands__slider").slick({
  infinite: true,
  slidesToShow: 8,
  slidesToScroll: 8,
  arrows: true,
  dots: false,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
  customPaging: function (slider, i) {
    console.log($(slider.$slides[i]).html());
    return '<button class="tab"></button>';
  },
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
});
$(".items__subslider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".items__slider",
});
$(".items__slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: ".items__subslider",
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true,
});
$(".outside__slider-wrap").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
  customPaging: function (slider, i) {
    console.log($(slider.$slides[i]).html());
    return '<button class="tab"></button>';
  },
});

var youtube = document.querySelectorAll(".youtube");
for (var i = 0; i < youtube.length; i++) {
  var source =
    "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/sddefault.jpg";
  var image = new Image();
  image.src = source;
  image.addEventListener(
    "load",
    (function () {
      youtube[i].appendChild(image);
    })(i)
  );

  youtube[i].addEventListener("click", function () {
    var iframe = document.createElement("iframe");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute(
      "src",
      "https://www.youtube.com/embed/" +
        this.dataset.embed +
        "?rel=0&showinfo=0&autoplay=1"
    );
    this.innerHTML = "";
    this.appendChild(iframe);
  });
}

$(".message a").click(function () {
  $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
});

$(".callback__btn").on("click", function (event) {
  var body = document.querySelector("body");
  $(".op-wrap").show();
  $(".callback").show();
  body.style.overflow = "hidden";
});
$(".addtocart__btn").on("click", function (event) {
  var body = document.querySelector("body");
  $(".op-wrap").show();
  $(".a-cart__wrap").show();
  body.style.overflow = "hidden";
});
$(".oneclick__btn").on("click", function (event) {
  var body = document.querySelector("body");
  $(".op-wrap").show();
  $(".oneclick__form-wrap").show();
  body.style.overflow = "hidden";
});
$(".cheaper__btn").on("click", function (event) {
  var body = document.querySelector("body");
  $(".op-wrap").show();
  $(".cheaper__form-wrap").show();
  body.style.overflow = "hidden";
});

$(".close__btn").on("click", function (event) {
  var body = document.querySelector("body");
  $(".form").hide();
  body.style.overflow = "visible";
  $(".op-wrap").hide();
});
$(".form__submit-title").on("click", function (event) {
  $(".comment__form-wrap").toggleClass('show-block');
});

$(".more__btn").on("click", function (event) {
  if ($('.more__btn').hasClass('active')) {
    return;
  }
  $(".item-cart__doc-wrap").hide();
  $(".item__about-fb-wrap").hide();
  $(".item__about-more").show();
  $(".fb__btn").removeClass('active');
  $(".doc__btn").removeClass('active');
  $(".more__btn").toggleClass('active');
});
$(".fb__btn").on("click", function (event) {
  if ($('.fb__btn').hasClass('active')) {
    return;
  }
  $(".item-cart__doc-wrap").hide();
  $(".item__about-fb-wrap").show();
  $(".item__about-more").hide();
  $(".fb__btn").toggleClass('active');
  $(".doc__btn").removeClass('active');
  $(".more__btn").removeClass('active');
});
$(".doc__btn").on("click", function (event) {
  if ($('.doc__btn').hasClass('active')) {
    return;
  }
  $(".item-cart__doc-wrap").css('display', 'flex');
  $(".item__about-fb-wrap").hide();
  $(".item__about-more").hide();
  $(".doc__btn").toggleClass('active');
  $(".fb__btn").removeClass('active');
  $(".more__btn").removeClass('active');
});


//open/close mega-navigation
$(".cd-dropdown-trigger").on("click", function (event) {
  event.preventDefault();
  toggleNav();
  $(".op-wrap").show();
  var body = document.querySelector("body");
  body.style.overflow = "hidden";
});

//close meganavigation
$(".cd-dropdown .cd-close").on("click", function (event) {
  event.preventDefault();
  toggleNav();
});

//on mobile - open submenu
$(".has-children")
  .children("a")
  .on("click", function (event) {
    //prevent default clicking on direct children of .has-children
    event.preventDefault();
    var selected = $(this);
    selected
      .next("ul")
      .removeClass("is-hidden")
      .end()
      .parent(".has-children")
      .parent("ul")
      .addClass("move-out");
  });

//on desktop - differentiate between a user trying to hover over a dropdown item vs trying to navigate into a submenu's contents
var submenuDirection = !$(".cd-dropdown-wrapper").hasClass("open-to-left")
  ? "right"
  : "left";
$(".cd-dropdown-content").menuAim({
  activate: function (row) {
    $(row).children().addClass("is-active").removeClass("fade-out");
    if ($(".cd-dropdown-content .fade-in").length == 0)
      $(row).children("ul").addClass("fade-in");
  },
  deactivate: function (row) {
    $(row).children().removeClass("is-active");
    if (
      $("li.has-children:hover").length == 0 ||
      $("li.has-children:hover").is($(row))
    ) {
      $(".cd-dropdown-content").find(".fade-in").removeClass("fade-in");
      $(row).children("ul").addClass("fade-out");
    }
  },
  exitMenu: function () {
    $(".cd-dropdown-content").find(".is-active").removeClass("is-active");
    return true;
  },
  submenuDirection: submenuDirection,
});

//submenu items - go back link
$(".go-back").on("click", function () {
  var selected = $(this),
    visibleNav = $(this).parent("ul").parent(".has-children").parent("ul");
  selected
    .parent("ul")
    .addClass("is-hidden")
    .parent(".has-children")
    .parent("ul")
    .removeClass("move-out");
});

function toggleNav() {
  var navIsVisible = !$(".cd-dropdown").hasClass("dropdown-is-active")
    ? true
    : false;
  $(".cd-dropdown").toggleClass("dropdown-is-active", navIsVisible);
  $(".cd-dropdown-trigger").toggleClass("dropdown-is-active", navIsVisible);
  if (!navIsVisible) {
    $(".cd-dropdown").one(
      "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
      function () {
        $(".op-wrap").hide();
        var body = document.querySelector("body");
        body.style.overflow = "visible";
        $(".has-children ul").addClass("is-hidden");
        $(".move-out").removeClass("move-out");
        $(".is-active").removeClass("is-active");
      }
    );
  }
}

// //IE9 placeholder fallback
// //credits http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
// if(!Modernizr.input.placeholder){
// 	$('[placeholder]').focus(function() {
// 		var input = $(this);
// 		if (input.val() == input.attr('placeholder')) {
// 			input.val('');
// 	  	}
// 	}).blur(function() {
// 	 	var input = $(this);
// 	  	if (input.val() == '' || input.val() == input.attr('placeholder')) {
// 			input.val(input.attr('placeholder'));
// 	  	}
// 	}).blur();
// 	$('[placeholder]').parents('form').submit(function() {
// 	  	$(this).find('[placeholder]').each(function() {
// 			var input = $(this);
// 			if (input.val() == input.attr('placeholder')) {
// 		 		input.val('');
// 			}
// 	  	})
// 	});
// }

// function increaseValue() {
//   var value = parseInt(document.getElementById('number').value, 10);
//   value = isNaN(value) ? 0 : value;
//   value++;
//   document.getElementById('number').value = value;
// }

// function decreaseValue() {
//   var value = parseInt(document.getElementById('number').value, 10);
//   value = isNaN(value) ? 0 : value;
//   value < 1 ? value = 1 : '';
//   value--;
//   document.getElementById('number').value = value;
// }

$(".value-button").on("click", function () {
  var $button = $(this);
  var oldValue = $button.parent().find("input").val();

  if ($button.text() == "+") {
    var newVal = parseFloat(oldValue) + 1;
  } else {
    // Don't allow decrementing below zero
    if (oldValue > 0) {
      var newVal = parseFloat(oldValue) - 1;
    } else {
      newVal = 0;
    }
  }

  $button.parent().find("input").val(newVal);
});

$(function () {
  $(".quantity__form input").append(
    '<div class="inc button">+</div><div class="dec button">-</div>'
  );
});
