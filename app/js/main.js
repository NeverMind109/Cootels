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
});
