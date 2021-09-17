const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imageElements = images.map(el => {
const imageItem = document.createElement('li');
imageItem.classList.add('gallery__item');


  const imageEl = document.createElement('img');
  imageEl.src = el.url;
  imageEl.alt = el.alt;
  imageEl.width = 400;
  imageEl.classList.add('gallery__image');
  imageEl.style.marginLeft = '10px';

  imageItem.insertAdjacentElement('afterbegin', imageEl)
  return imageItem;
});

const list = document.querySelector('#gallery');
list.style.listStyle = 'none';
list.style.display = 'flex';
list.style.flexWrap = 'wrap';
list.style.justifyContent = 'center';
list.style.paddingLeft = '0px';
list.style.marginLeft = '-10px';
list.style.alignItems = 'center';
list.append(...imageElements);


