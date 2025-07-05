const items = document.querySelectorAll('.item');
console.log('Number of categories:', items.length);

items.forEach(item => {
  const title = item.querySelector('h2');
  const listEl = item.querySelectorAll('ul > li');
  console.log('Category:', title.textContent);
  console.log('Elements:', listEl.length);
});
