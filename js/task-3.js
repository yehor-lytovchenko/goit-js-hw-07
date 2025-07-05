const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

const onInput = e => {
  const input = e.currentTarget.value.trim();

  input.length === 0
    ? (spanEl.textContent = 'Anonymous')
    : (spanEl.textContent = input);
};

inputEl.addEventListener('input', onInput);
