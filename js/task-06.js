const inputText = document.querySelector('#validation-input');
inputText.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    
    if (event.currentTarget.value.length === Number(inputText.dataset.length)) {
        inputText.classList.add('valid')
    }
    else inputText.classList.add('invalid')
}
