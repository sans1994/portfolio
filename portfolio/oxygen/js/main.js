$('.slider__inner').slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});


$(document).ready(function () {
  // Animate the scroll to top
  $('.footer__gotop-btn').click(function (event) {
    event.preventDefault();

    $('html, body').animate({ scrollTop: 0 }, 1000);
  })
});

// init Isotope
var initial_items = 9;
var next_items = 3;
var $grid = $("#portfolio__items").isotope({
  itemSelector: ".portfolio__item-img",
  layoutMode: "masonry"
});


// bind filter button click
$(".portfolio__btns").on("click", "button", function() {
  var filterValue = $(this).attr("data-filter");
  // use filterFn if matches value
  $grid.isotope({ filter: filterValue });
  updateFilterCounts();
});
function updateFilterCounts() {
  // get filtered item elements
  var itemElems = $grid.isotope('getFilteredItemElements');
  var count_items = $(itemElems).length;

  if (count_items > initial_items) {
    $('#showMore').show();
  }
  else {
    $('#showMore').hide();
  }
  if ($(".portfolio__item-img").hasClass("visible_item")) {
    $(".portfolio__item-img").removeClass("visible_item");
  }
  var index = 0;

  $(itemElems).each(function () {
    if (index >= initial_items) {
      $(this).addClass('visible_item');
    }
    index++;
  });
  $grid.isotope('layout');
}
// change is-checked class on buttons
$(".portfolio__btns").each(function(i, buttonGroup) {
  var $buttonGroup = $(buttonGroup);
  $buttonGroup.on("click", "button", function() {
    $buttonGroup.find(".is-checked").removeClass("is-checked");
    $(this).addClass("is-checked");
  });
});

function showNextItems(pagination) {
  var itemsMax = $('.visible_item').length;
  var itemsCount = 0;
  $('.visible_item').each(function () {
    if (itemsCount < pagination) {
      $(this).removeClass('visible_item');
      itemsCount++;
    }
  });
  if (itemsCount >= itemsMax) {
    $('#showMore').hide();
  }
  $grid.isotope('layout');
}
// function that hides items when page is loaded
function hideItems(pagination) {
  var itemsMax = $(".portfolio__item-img").length;
  var itemsCount = 0;
  $(".portfolio__item-img").each(function() {
    if (itemsCount >= pagination) {
      $(this).addClass("visible_item");
    }
    itemsCount++;
  });
  if (itemsCount < itemsMax || initial_items >= itemsMax) {
    $('#showMore').hide();
  }
  $grid.isotope('layout');
}
$('#showMore').on('click', function (e) {
  e.preventDefault();
  showNextItems(next_items);
});
hideItems(initial_items);