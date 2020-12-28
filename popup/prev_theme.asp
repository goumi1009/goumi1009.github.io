<div class="popup prev-slide">
  <div class="title">
    <h2></h2>
  </div>
  <div class="slick-wrapper theme-slick">
    <div data-prev-name="Black">
      <img src="/images/sub/sample-theme-b.png" alt="" />
    </div>
    <div data-prev-name="White">
      <img src="/images/sub/sample-theme-w.png" alt="" />
    </div>
  </div>
  <button class="btn-close-pop" type="button">닫기</button>
</div>

<script>
  $('.prev-slide .theme-slick').slick();
  $('.prev-slide .theme-slick').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    var prevName = $('.prev-slide .slick-slide').eq(currentSlide).children('div').children('div').data('prevName');
    $('.prev-slide .title h2').text(prevName);
  });
</script>