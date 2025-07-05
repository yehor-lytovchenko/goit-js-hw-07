const buttonEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const colorEl = document.querySelector('.color');

const buttonOn = e => {
  bodyEl.style.background = getRandomHexColor();
  colorEl.textContent = getRandomHexColor();
};
buttonEl.addEventListener('click', buttonOn);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
