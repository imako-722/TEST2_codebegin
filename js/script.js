$(function () {
  // スライダー
  $(".slick-box").slick({
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    dots: false,
    arrows: false,
  });
  $("#humberger-btn").click(function () {
    $(this).toggleClass("active");
    $("#humberger-nav").toggleClass("h-nav-active");
  });

  var pagetop = $("#page_top");
  // ボタン非表示
  pagetop.hide();
  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $("body, html").animate({ scrollTop: 0 }, 0);
    return false;
  });
});
