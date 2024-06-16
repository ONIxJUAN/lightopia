function nav_toggle() {
  const $navOverlay = document.getElementById("nav_overlay_bg");
  const $navText = document.getElementById("nav");

  $navOverlay.classList.toggle("overlay");
  if ($navOverlay.classList.contains("overlay")) {
    const $navTextClone = $navText.cloneNode(true);
    $navOverlay.appendChild($navTextClone);
    document.body.style.overflow = "hidden";
  } else {
    const $clonedContent = $navOverlay.querySelector("#nav");
    if ($clonedContent) {
      $clonedContent.remove();
      document.body.style.overflow = "auto";
    }
  }
}
