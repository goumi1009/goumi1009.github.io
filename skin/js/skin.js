$(document).ready(function () {
  $('.btn-m-toggle').on('click', function () {
    $('.header').toggleClass('active');
    $('body').toggleClass('no-scroll');
  });
});

$(window).scroll(function() {
  var st = $(window).scrollTop();
  if(st >= 100 && !$('body').hasClass('main')) {
    $('body').addClass('fix-tit');
  } else {
    $('body').removeClass('fix-tit');
  }
});