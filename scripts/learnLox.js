const learnLoxBtn = document.querySelector("#learn-lox-btn");
const learnLoxPrevBtn = document.querySelector("#learn-lox-prev-btn");
const learnLoxNextBtn = document.querySelector("#learn-lox-next-btn");
const learnLox = document.querySelector('#learn-lox');
const articleSpace = document.querySelector('#article');

const articleArray = [...syntaxArticles, ...exampleArticles, ...challengeArticles];
let currentArticleIndex;

const introductionArticle = syntaxArticles[0];
currentArticleIndex = 0;
articleSpace.innerHTML = introductionArticle.articleHTML;
highlightArticleLoxCode();

learnLoxBtn.addEventListener('click', () => {
    learnLox.style.display = 'flex';
});

learnLox.addEventListener('click', () => {
    learnLox.style.display = 'none';
});

learnLoxPrevBtn.addEventListener('click', () => {
    if (currentArticleIndex === 0) {
        return;
    }
    currentArticleIndex--;
    articleSpace.innerHTML = articleArray[currentArticleIndex].articleHTML;
    highlightArticleLoxCode();
});

learnLoxNextBtn.addEventListener('click', () => {
    if (currentArticleIndex === articleArray.length - 1) {
        return;
    }
    currentArticleIndex++;
    articleSpace.innerHTML = articleArray[currentArticleIndex].articleHTML;
    highlightArticleLoxCode();
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
            articleSpace.innerHTML = article.articleHTML;
            highlightArticleLoxCode();
            setCurrentArticleIndex(article.title);
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

function setCurrentArticleIndex(articleTitle) {
    for (let i = 0; i < articleArray.length; i++) {
        if (articleArray[i].title === articleTitle) {
            currentArticleIndex = i;
        }
    }
}
