const img = document.getElementsByClassName("imgToChange")[0];

img.src = `image${getRandom(1, 9)}.jpg`;

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
