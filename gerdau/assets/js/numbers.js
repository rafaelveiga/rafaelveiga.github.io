$(document).ready(function () {
  const animateValue = function (element, start, end, duration) {
    let startTimestamp = null;

    const step = function (timestamp) {
      if (!startTimestamp) {
        startTimestamp = timestamp;
      }

      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      element.text(Math.floor(progress * (end - start) + start));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const startAnimations = () => {
    $(".NumbersDataPoint h2").each((index, elem) => {
      animateValue($(elem), 0, parseInt($(elem).text()), 1000 + index * 350);

      $(elem).css({
        opacity: 0,
        top: "50px",
      });

      $(elem).animate(
        {
          opacity: 1,
          top: 0,
        },
        1000 + index * 350
      );
    });
  };

  // Intersection observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startAnimations();
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.1,
    }
  );

  observer.observe(document.getElementById("Numbers"));
});
