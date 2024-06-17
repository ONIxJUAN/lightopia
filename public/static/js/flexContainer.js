const imageList = [
  "static/img/002-Edit-Lightopia-0491.jpg",
  "static/img/003-Edit-Lightopia-0327.jpg",
  "static/img/004-Edit-Lightopia-0527.jpg",
  "static/img/005-Edit-Lightopia-0137.jpg",
  "static/img/006-Edit-Lightopia-0151.jpg",
  "static/img/007-Edit-Lightopia-0178.jpg",
  "static/img/009-Edit-Lightopia-0080.jpg",
  "static/img/010-lightopia-08.jpg",
  "static/img/011-Lightopia-BXL-Still-007-edit.jpg",
  "static/img/012-Lightopia-BXL-Still-010-edit.jpg",
];

const images = document.getElementById("images");
let html = "";
for (const image of imageList) {
  html += `<div class="image_card"><img id="${image}" src="${image}"></div>`;
}

images.innerHTML += html;

for (const image of imageList) {
  const $image = document.getElementById(image);

  $image.addEventListener("click", function (e) {
    const $betweenOverlay = document.getElementById("between_overlay");
    const $imageOverlay = document.getElementById("image_overlay");

    $betweenOverlay.style.display = "block";
    $betweenOverlay.addEventListener("click", function (e) {
      $betweenOverlay.style.display = "none";
      $imageOverlay.style.display = "none";
    });
    $imageOverlay.style.display = "block";
    $imageOverlay.innerHTML = `<img id="${image} img" src="${image}">`;
    document.getElementById(`${image} img`).style.display = "block";
  });
}
