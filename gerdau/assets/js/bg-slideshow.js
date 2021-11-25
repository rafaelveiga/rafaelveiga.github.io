$(document).ready(function () {
  const slideCount = 11;

  // Create slide elements for slick slider
  Array(slideCount)
    .fill()
    .forEach((_, i) => {
      const slide = $("<div></div>");
      slide.attr("class", "Slider__slide");
      slide.css({
        backgroundImage: `url(assets/images/start-section/${i + 1}.png)`,
        height: "100vh",
      });

      $(".Slider").append(slide);
    });

  // Initialize slick slider
  $(".Slider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    fade: true,
    cssEase: "linear",
  });

  // Add event listener to Start CTA button
  $(".StartCTA").click(() => {
    document
      .getElementById("NumbersContainer")
      .scrollIntoView({ behavior: "smooth", block: "center" });
  });
});
