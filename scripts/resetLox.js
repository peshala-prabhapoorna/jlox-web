const resetBtn = document.querySelector('#reset-btn');

resetBtn.addEventListener('click', () => {
    document.querySelector('#code-input code').textContent = "";
    document.querySelector('#output').textContent = "";
})
