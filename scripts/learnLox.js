const learnLoxBtn = document.querySelector("#learn-lox-btn");
const learnLox = document.querySelector('#learn-lox');

learnLoxBtn.addEventListener('click', () => {
    learnLox.style.display = 'flex';
});

learnLox.addEventListener('click', () => {
    learnLox.style.display = 'none';
});

const loxSyntaxSubMenu = document.querySelector('#learn-lox-syntax');
appendArticleBtnsToMenu(loxSyntaxSubMenu, syntaxArticles);
const loxExampleSubMenu = document.querySelector('#learn-lox-examples');
appendArticleBtnsToMenu(loxExampleSubMenu, exampleArticles);
const loxChallengeSubMenu = document.querySelector('#learn-lox-challenges');
appendArticleBtnsToMenu(loxChallengeSubMenu, challengeArticles);

function appendArticleBtnsToMenu(subMenu, articles) {
    for (const article of articles) {
        const btn = document.createElement('button');
        btn.textContent = article.title;
        btn.classList.add('learn-lox-btn');
        subMenu.appendChild(btn);
    }
}
