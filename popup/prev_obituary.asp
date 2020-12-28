<div class="popup prev-slide ">
  <div class="title">
    <h2></h2>
  </div>
  <div class="slick-wrapper obituary-slick">
    <div data-prev-name="Basic">
      <img src="/images/sub/sample-obituary-basic.png" alt="" />
    </div>
    <div data-prev-name="Black">
      <img src="/images/sub/sample-obituary-b.png" alt="" />
    </div>
    <div data-prev-name="White">
      <img src="/images/sub/sample-obituary-w.png" alt="" />
    </div>
  </div>
  <button class="btn-close-pop" type="button">닫기</button>
</div>

<script>
  $('.prev-slide .obituary-slick').slick();
  $('.prev-slide .obituary-slick').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    var prevName = $('.prev-slide .slick-slide').eq(nextSlide + 1).children('div').children('div').data('prevName');
    $('.prev-slide .title h2').text(prevName);
    console.log(nextSlide);
  });
</script>