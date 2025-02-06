const doc = document;
const learnLoxBtn = doc.querySelector("#learn-lox-btn");
const learnLox = doc.querySelector('#learn-lox');

learnLoxBtn.addEventListener('click', () => {
    learnLox.style.display = 'flex';
});

learnLox.addEventListener('click', () => {
    learnLox.style.display = 'none';
});
