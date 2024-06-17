const $images = document.querySelectorAll(".images");

$images.forEach(($image) => {
  $image.addEventListener("click", function (e) {
    const $betweenOverlay = document.getElementById("between_overlay");
    const $imageOverlay = document.getElementById("image_overlay");

    $imageOverlay.innerHTML = `<img id="${e.target.src} img" src="${e.target.src}">`;
    document.getElementById(`${e.target.src} img`).style.display = "block";
    $imageOverlay.style.display = "block";
    $betweenOverlay.style.display = "block";
    $betweenOverlay.addEventListener("click", function (e) {
      $betweenOverlay.style.display = "none";
      $imageOverlay.style.display = "none";
    });
  });
});
