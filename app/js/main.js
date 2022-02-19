$(function () {
  $(".questions__accordion-title").on("click", function () {
    $(this).toggleClass("accordion--active").next().slideToggle();
    $(".questions__accordion-title")
      .not(this)
      .removeClass("accordion--active")
      .next()
      .slideUp();
  });
  $(".questions__accordion-open")
    .addClass("accordion--active")
    .next()
    .slideToggle();

  $(".reviews__slider").slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
  });

  $("a.scroll-to").on("click", function (e) {
    e.preventDefault();
    var anchor = $(this).attr("href");
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor).offset().top - 60,
        },
        800
      );
  });
});
