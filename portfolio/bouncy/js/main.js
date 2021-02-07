$(function(){

// init Isotope
var $grid = $('.portfolio__top-nav').isotope({
    itemSelector: '.gallery-item',
    layoutMode: 'packery'
  });
  
  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };
  
  // bind filter button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
  
  // bind sort button click
  $('#sorts').on( 'click', 'button', function() {
    var sortByValue = $(this).attr('data-sort-by');
    $grid.isotope({ sortBy: sortByValue });
  });
  
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });

  $('.team__top-slider-box').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1
  });

  $('.testi__slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1
  });

    $('.news__slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    vertical: true
  });

});