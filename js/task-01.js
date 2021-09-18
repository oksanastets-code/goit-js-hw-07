const categories = document.querySelector('#categories');
const categoriesItems = [...categories.children];
const quantityCategoriesMessage = `В списке ${categoriesItems.length} категории.`
console.log(quantityCategoriesMessage);

const message = categoriesItems.map(item => {
const categoriesItemTitle = item.firstElementChild;
console.log('Категория:', categoriesItemTitle.textContent);

const categoriesItemList = item.lastElementChild;
console.log('Количество элементов:', categoriesItemList.children.length);
})