$(document).ready(function () {
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = $(entry.target);

          target.css({
            opacity: 0,
            right: "-100px",
          });

          target.animate(
            {
              opacity: 1,
              right: "0",
            },
            1000
          );

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  observer.observe(document.querySelector("#Phone"));
});
