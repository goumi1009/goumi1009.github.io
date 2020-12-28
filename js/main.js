// page load 
$(window).on('load', function(){
	$('.load-wrap').addClass('loaded');
	setTimeout(function(){
		$('.load-wrap').remove();
	},1600);
});

$(document).ready(function () {

	// fullpage
	$('.fullpage-wrap').fullpage({
		navigation: true,
		navigationPosition: 'right',
		afterLoad: function (anchorLink, index) {
			$('.fp-section').eq(index - 1).addClass('loaded');
		}
	});

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
	});

	// 조문객 이용가이드 slide
	$('.guide-list .slick-wrapper').on('init', function() {
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
		});

});