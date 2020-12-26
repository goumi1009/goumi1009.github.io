$(document).ready(function () {
  // 모바일 메뉴 버튼 클릭 이벤트
  $('.btn-m-toggle').on('click', function () {
    $('.header').toggleClass('active');
  });

  // 팝업 열기 클릭이벤트
  $('.btn-popup').on('click', function (e) {
    e.preventDefault();
    var name = $(this).data('popName'); // data-pop-name속성값 = 파일명
    popupLoad(name);
  });

  // 아코디언 
  $('.accordion-box .ac-title').on('click', function() {
    $(this).toggleClass('active');
    if($(this).hasClass('active')) {
      $(this).parents('li').siblings('li').find('.ac-title').removeClass('active');
      $('.accordion-box .ac-con').stop().slideUp();
      $(this).next('.ac-con').stop().slideDown();

    } else {
      $(this).next('.ac-con').slideUp();
    }
  });

  var fileTarget = $('.attach-file #ifile_PC'); 
  fileTarget.on('change', function () {
    if(window.FileReader){ // modern browser 
      var filename = $(this)[0].files[0].name; 
    } else { // old IE 
      var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출 } // 추출한 파일명 삽입 
    }
    $(this).siblings('.file-name').text(filename); 
  });

})

// 브라우저 resize 
$(window).resize(function () {
  if (matchMedia("screen and (min-width: 769px)").matches) {
    // 모바일 메뉴 제어
    if($('.header').hasClass('active')) {
      $('.header').removeClass('active');
    }
  }
});

// popup 불러오기
function popupLoad(name, slideIdx) {
  var popup = '<div class="pop-wrap"></div>';
  $('body').append(popup);
  $('html').addClass('dimd');
  $('.pop-wrap').load('/popup/' + name + '.asp', function () {
    // 팝업 닫기 클릭이벤트
    $('.btn-close-pop').on('click', function () {
      var popup = $(this).parents('.pop-wrap');
      popup.remove();
      if (!$('.header').hasClass('active')) {
        $('html').removeClass('dimd');
      }
    });

    $('.prev-slide .slick-wrapper').slick('slickGoTo', slideIdx);
  });
}