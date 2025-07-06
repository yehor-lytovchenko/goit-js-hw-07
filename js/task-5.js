const buttonEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const colorEl = document.querySelector('.color');

const buttonOn = e => {
  const getColor = getRandomHexColor();
  bodyEl.style.background = getColor;
  colorEl.textContent = getColor;
};
buttonEl.addEventListener('click', buttonOn);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
