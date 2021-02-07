// Модалки формы
$('#price-1__btn').on("click", function () {
  $('#modal-1').fadeIn();
  $('.bg_layer').show();
});
$('#price-2__btn').on("click", function () {
  $('#modal-2').fadeIn();
  $('.bg_layer').show();
});
$('#price-3__btn').on("click", function () {
  $('#modal-3').fadeIn();
  $('.bg_layer').show();
});
$('#price-4__btn').on("click", function () {
  $('#modal-4').fadeIn();
  $('.bg_layer').show();
});
$('.bg_layer').on("click", function () {
  $('.bg_layer').hide();
  $('.modal').hide();
});

$(".program__item").slice(0, 6).css('display', 'flex');
$(".show-more__btn").click(function (e) {
  e.preventDefault();
  $(".program__item:hidden").slice(0, 6).fadeIn("slow");

  if ($(".program__item:hidden").length == 0) {
    $(".show-more__btn").fadeOut("slow");
  }
});