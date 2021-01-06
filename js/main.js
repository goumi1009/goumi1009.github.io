// page load 
$(window).on('load', function(){
  $('.intro').addClass('loaded');
  $('.guide-list').width($('.guide-list .bg').width() * 5);
});

$(document).ready(function () {

  // fullpage
  $('.fullpage-wrap').fullpage({
    navigation: true,
    navigationPosition: 'right',
    afterLoad: function (anchorLink, index) {
      $('.fp-section').eq(index - 1).addClass('loaded');
    },
    onLeave: function (anchorLink, index) {
      if(index === 2) {
        $('.service-list .slick-wrapper').slick('init');
      } else if(index === 4) {
        $('.guide-list .slick-wrapper').slick('init');
      }
    }
  });

  // footer top버튼 클릭이벤트
  $(document).on('click', '.fp-section .footer .btn-top', function(){
    $.fn.fullpage.moveTo();
  });

  // 주요서비스 slide
  $('.service-list .slick-wrapper').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    var slideNum = $('.service-list .slick-pagination .page-num strong');
    currentSlide = nextSlide + 1;
    $(slideNum).text('0'+currentSlide);
  });

  $('.service-list .slick-wrapper').slick({
    fade: true,
    draggable:false,
    nextArrow: '.service-list .slick-pagination .next',
    prevArrow: '.service-list .slick-pagination .prev',
    autoplay: true,
    autoplaySpeed: 3500,
  });

  // 조문객 이용가이드 slide
  $('.guide-list .slick-wrapper').on('init', function() {
    $('.guide-list').width($('.guide-list .bg').width() * 5);
    $('.guide-list .slick-current').addClass('slick-current-on');
  });

  $('.guide-list .slick-wrapper').on('afterChange', function() {
    $('.guide-list .slick-slide ').removeClass('slick-current-on');
    $('.guide-list .slick-current').addClass('slick-current-on');
  });

  $('.guide-list .slick-wrapper').slick({
    slidesToShow:5,
    slidesToScroll:1,
    arrows: true,
    dots:false,
    autoplay: true,
    autoplaySpeed: 3500,
  });

  

  // 스크롤 버튼 클릭 이벤트
  $('.scroll-arrow').on('click', function() {
    var idx = $(this).parents('.fp-section').index();
    $.fn.fullpage.moveTo(idx + 2);
  })

  //intro 뒷배경 흩날리는 동그라미
  particlesJS("particles-js", {
    particles: {
      number: { value: 10, density: { enable: true, value_area: 800 } },
      color: { value: "#fff" },
      shape: {
        type: "circle",
        stroke: { width: 0}
      },
      opacity: {
        value: 0.1,
        random: true,
        anim: { enable: false, speed: 20, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 100,
        random: true,
        anim: { enable: true, speed: 1, size_min: 40, sync: false }
      },
      line_linked: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { 
          enable: false, 
        },
        onclick: { 
          enable: false, 
        },
        resize: true
      }
    },
  });

});