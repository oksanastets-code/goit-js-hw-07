const refs = {
    counterValue: document.querySelector('#value'),
    plusBtn: document.querySelector('[data-action="increment"]'),
    minusBtn: document.querySelector('[data-action="decrement"]'),
};

let total = Number(refs.counterValue.textContent);

const increment = () => {
    total += 1;
};

function decrement() {
    total -= 1;
};

refs.plusBtn.addEventListener('click', function () {
    increment();
    refs.counterValue.textContent = total;
});

refs.minusBtn.addEventListener('click', function () {
    decrement();
    refs.counterValue.textContent = total;
});