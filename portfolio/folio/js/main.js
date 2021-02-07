document.querySelectorAll('.about__btn').forEach(btn => {
    btn.addEventListener('click', e => {
        btn.classList.toggle('active');
    });
});

$('.about__btn').on('click', function () {
  $('.about').toggleClass('active')
  $("html,body").css("overflow", "hidden");
  $('.about__btn svg').toggleClass('btn-color')
});

let numOfClicks = 0;
const $elem = $('.about__btn');

$elem.on('click', () => {
  ++numOfClicks;
  if (numOfClicks % 2 !== 0) 
    $("html,body").css("overflow", "hidden");
  else
    $("html,body").css("overflow", "visible");
});