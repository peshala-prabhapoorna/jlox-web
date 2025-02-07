const learnLoxBtn = document.querySelector("#learn-lox-btn");
const learnLox = document.querySelector('#learn-lox');
const articleSpace = document.querySelector('#article');

const introductionArticle = syntaxArticles[0];
articleSpace.innerHTML = introductionArticle.articleHTML;
highlightArticleLoxCode();

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

        btn.addEventListener('click', () => {
            article.innerHTML = null;
            articleSpace.innerHTML = article.articleHTML;
            highlightArticleLoxCode();
        })

        subMenu.appendChild(btn);
    }
}

function highlightArticleLoxCode() {
    const codeBlocks = document.querySelectorAll('#article pre code');
    codeBlocks.forEach(codeBlock => {
        codeBlock.setAttribute('class', '');
        const codeString = codeBlock.textContent;
        const highlightedCode = hljs.highlight(codeString, {language: 'lox'}).value;
        codeBlock.innerHTML = highlightedCode;
    });
}
