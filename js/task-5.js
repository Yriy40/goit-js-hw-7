const body = document.body;
const changeColor = document.querySelector(".change-color");
const color = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColor.addEventListener("click", () => {
  const randomColor = getRandomHexColor();

  body.style.bagkroundColor = randomColor;
  color.textContent = randomColor;
});
console.log(changeColor);
