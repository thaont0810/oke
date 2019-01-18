$(document).ready(function() {
  $(".grid").masonry({
    itemSelector: ".grid-item",
    horizontalOrder: true
  });

  $(".scroll-down ").click(function() {
    $("html,body").animate(
      {
        scrollTop: $("main").offset().top
      },
      "slow"
    );
  });
});
