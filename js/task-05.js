const refs = {
    inputField: document.querySelector('#name-input'),
    outputText: document.querySelector('#name-output'),
}

refs.inputField.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value != '') {
        refs.outputText.textContent = event.currentTarget.value;
    } else refs.outputText.textContent = 'unknown';
};