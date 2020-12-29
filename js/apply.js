
$(document).ready(function () {
  $(".tab-title input").each(function (idx, btn) {
    $(btn).on('click', function () {
      $(".tab-con").removeClass("on");
      $(".tab-con").eq(idx).addClass("on")

      var price = $(this).data('price');
      console.log(price)

      $('.js-price').text(price)
    })
  })
})