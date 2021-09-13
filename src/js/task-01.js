const categories = document.querySelector('#categories');
const categoriesItems = [...categories.children];
const quantityCategoriesMessage = `В списке ${categoriesItems.length} категории.`
console.log(quantityCategoriesMessage);

const message = categoriesItems.map(item => {
const categoriesItemTitle = item.querySelector('h2');
console.log('Категория:', categoriesItemTitle.textContent);

const categoriesItemList = item.querySelector('ul');
console.log('Количество элементов:', categoriesItemList.children.length);
})