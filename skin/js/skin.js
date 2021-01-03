$(document).ready(function () {
  $('.btn-m-toggle').on('click', function () {
    $('.header').toggleClass('active');
    $('body').toggleClass('no-scroll');
  });
  ie_fixed();
});

$(window).scroll(function() {
  var st = $(window).scrollTop();
  if(st >= 100 && !$('body').hasClass('main')) {
    $('body').addClass('fix-tit');
  } else {
    $('body').removeClass('fix-tit');
  }
});

function setDirection(element) {
  if (element.naturalWidth / element.naturalHeight / element.parentNode.offsetWidth * element.parentNode.offsetHeight > 1) {
    element.classList.add('horizontal');
  } else {
    element.classList.add('vertical');
  }
}


/* ie background-fixed 튐 현상 해결을 위한 스크립트 */
function ie_fixed(){
    if(navigator.userAgent.match(/Trident\/7\./)) { // if IE
        $('body').on("mousewheel", function () {
            // remove default behavior
            event.preventDefault(); 
 
            //scroll without smoothing
            var wheelDelta = event.wheelDelta;
            var currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
        });
    }
}