const ingredients = [
  'Potato',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Green',
  'Flavouring',
];

const elements = ingredients.map(el => {
  const item = document.createElement('li');
  item.textContent = el;
  return item;
});

const list = document.querySelector('#ingredients');
list.append(...elements);