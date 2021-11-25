$(document).ready(function () {
  const IMAGE_WIDTH = 600;
  const IMAGE_HEIGHT = 600;

  function loadCamera() {
    const video = $("#webCamera");

    video.attr("autoplay", "");
    video.attr("muted", "");
    video.attr("playsinline", "");

    // Get webcam permission
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ audio: false, video: { facingMode: "user" } })
        .then(function (stream) {
          $(".FilterModal__message").hide();
          $(".FilterModal__container").show().css("display", "flex");
          video.prop("srcObject", stream);
        })
        .catch(function (error) {
          $(".FilterModal .ButtonGroup").hide();
          $(".FilterModal__message").text($.i18n("filter-error"));
        });
    }
  }

  function takeSnapShot() {
    const video = document.querySelector("#webCamera");

    const canvas = document.createElement("canvas");
    canvas.width = IMAGE_WIDTH;
    canvas.height = IMAGE_HEIGHT;
    var ctx = canvas.getContext("2d");

    const filterOverlay = new Image();
    filterOverlay.src = $(".FilterOverlay").attr("src");

    // Draw webcam video onto canvas
    const x = IMAGE_WIDTH / 2 - video.videoWidth / 2;
    const y = IMAGE_HEIGHT / 2 - video.videoHeight / 2;
    ctx.drawImage(video, x, y + 10, video.videoWidth, video.videoHeight);

    // Draw filter overlay onto canvas
    ctx.drawImage(filterOverlay, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

    // Get canvas data as a jpeg blob
    const dataURI = canvas.toDataURL("image/jpeg", 1.0);

    // Adds dataURI to button
    $("a[role='DownloadPicture']").attr("href", dataURI);

    // Adds dataURI to image preview
    $("#FilterResult").css("display", "none").attr("src", dataURI);

    // Show image preview
    $("#FilterGroup").fadeOut(250, () => {
      $("#FilterResult").fadeIn(250);
    });

    // Change actions
    $("div[role='PrePhotoButtonGroup']").fadeOut(250, () => {
      $("div[role='PostPhotoButtonGroup']").fadeIn(250).css("display", "flex");
    });
  }

  // Take snapshot when the user clicks on the button
  $('button[role="TakePicture"]').click(takeSnapShot);

  // Reset picture and buttons
  $("button[role='ResetPicture']").click(() => {
    $("#FilterResult").fadeOut(250, () => {
      $("#FilterGroup").fadeIn(250);
    });

    $("div[role='PostPhotoButtonGroup']").fadeOut(250, () => {
      $("div[role='PrePhotoButtonGroup']").fadeIn(250).css("display", "flex");
    });
  });

  // Open filter modal
  $('button[role="OpenFilter"').click(() => {
    $(".ModalContainer").fadeIn().css("display", "flex");
    loadCamera();
  });

  // Close filter modal
  $("button[role='CloseModal']").click(() => {
    $(".ModalContainer").fadeOut();

    $("#FilterResult").fadeOut(250, () => {
      $("#FilterGroup").fadeIn(250);
    });

    $("div[role='PostPhotoButtonGroup']").fadeOut(250, () => {
      $("div[role='PrePhotoButtonGroup']").fadeIn(250).css("display", "flex");
    });
  });
});
