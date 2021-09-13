const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const elements = ingredients.map(el => {
  const item = document.createElement('li');
  item.textContent = el;
  return item;
});

const list = document.querySelector('#ingredients');
list.append(...elements);