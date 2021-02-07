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

$('#radio1').change(function () {
	if ($(this).is(':checked')) {
		$('.plan-mon').toggleClass('flex');
		$('.plan-ann').toggleClass('flex');
	};
});
$('#radio2').change(function () {
	if ($(this).is(':checked')) {
		$('.plan-ann').toggleClass('flex');
		$('.plan-mon').toggleClass('flex');
	};
});


document.querySelectorAll('.header__menu-btn').forEach(btn => {
	btn.addEventListener('click', e => {
		btn.classList.toggle('active');
		$('.header__menu').toggleClass('flex-transform');
		$('body').toggleClass('.ofl');
	});
});

$('.meet__box-reviews').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	dots: false,
	fade: true,
	cssEase: 'linear',
	infinite: false,
	speed: 500,
	// asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
slidesToShow: 3,
slidesToScroll: 1,
asNavFor: '.slider-for',
dots: true,
centerMode: true,
focusOnSelect: true
});