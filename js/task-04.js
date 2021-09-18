const refs = {
    counterValue: document.querySelector('#value'),
    plusBtn: document.querySelector('[data-action="increment"]'),
    minusBtn: document.querySelector('[data-action="decrement"]'),
};
let total = Number(refs.counterValue.textContent);

const increment = () => {
    total += 1;
    refs.counterValue.textContent = total;
};
const decrement = () => {
    total -= 1;
    refs.counterValue.textContent = total;
};

refs.plusBtn.addEventListener('click', increment);
refs.minusBtn.addEventListener('click', decrement);