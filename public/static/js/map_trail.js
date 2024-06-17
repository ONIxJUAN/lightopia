mapTrails();

function mapTrails() {
  const $images = document.querySelectorAll(".parcours_bg");
  $images.forEach((image) => {
    image.addEventListener("click", function (e) {
      const $betweenOverlay = document.getElementById("between_overlay_map");
      const $imageOverlayImg = document.getElementById("image_overlay_img");

      $betweenOverlay.style.display = "block";
      $betweenOverlay.addEventListener("click", function () {
        $betweenOverlay.style.display = "none";
        $imageOverlayImg.style.display = "none";
      });

      $imageOverlayImg.src = e.currentTarget.dataset.src;
      document.getElementById(`image_overlay_img`).style.display = "block";
    });
  });
}
