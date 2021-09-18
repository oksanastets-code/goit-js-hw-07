const controlPanel = document.querySelector('#controls');
const inputValueEl = document.querySelector('#controls input');
const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const boxesContainer = document.querySelector('#boxes');

inputValueEl.addEventListener('input', onInputValue);
function onInputValue(event) {
};

renderBtn.addEventListener('click', onRenderBtnClick);
function onRenderBtnClick() {
    const amount = inputValueEl.value;
    createBoxes(amount);
};

destroyBtn.addEventListener('click', onDestroyBtnClick);
function onDestroyBtnClick() {
    inputValueEl.value = '';
    boxesContainer.innerHTML = '';
    console.log(boxesContainer);
}

function random() {
    return Math.round(Math.random() * 256);
}

const dimention = 30;

function createBoxes(amount) {
    const boxes = [];

    for (let i = 0; i < amount; i += 1) {
        const box = document.createElement('div');
        box.style.height = dimention + 10 *i +'px';
        box.style.width = dimention + 10 * i + 'px';
        box.style.marginBottom = '10px';
        box.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
        
        boxes.push(box);
    }
    boxesContainer.append(...boxes);
    console.log(boxesContainer);
}