const inputSliderEl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

console.log(text.style.color = 'red');

inputSliderEl.min = 10;
inputSliderEl.max = 60;
inputSliderEl.step = 2;
inputSliderEl.addEventListener('input', onSizeControl);

function onSizeControl(event) {
    text.style.fontSize = event.currentTarget.value + 'px';
};