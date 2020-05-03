const bgBox = document.querySelector(".js-bg");

const IMG_NUMBER = 7;

function paintImage(imgNUmber) {
  const image = new Image();
  image.src = `src/images/${imgNUmber + 1}.jpg`;
  image.classList.add("bgImage");
  bgBox.prepend(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
