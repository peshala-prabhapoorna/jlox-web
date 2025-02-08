const learnLoxBtn = document.querySelector("#learn-lox-btn");
const learnLoxPrevBtn = document.querySelector("#learn-lox-prev-btn");
const learnLoxNextBtn = document.querySelector("#learn-lox-next-btn");
const learnLox = document.querySelector('#learn-lox');
const articleSpace = document.querySelector('#article');

const articleArray = [...syntaxArticles, ...exampleArticles, ...challengeArticles];
let currentArticleIndex;
let currentSyntaxArticleIndex = 0;
let currentExampleArticleIndex = 0;
let currentChalleneArticleIndex = 0;

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
    const newArticle = articleArray[currentArticleIndex];
    setCurrentArticleTypeIndex(newArticle);
    activateArticleTypeGuideBtn(newArticle.type);
    articleSpace.innerHTML = newArticle.articleHTML;
    highlightArticleLoxCode();
});

learnLoxNextBtn.addEventListener('click', () => {
    if (currentArticleIndex === articleArray.length - 1) {
        return;
    }
    currentArticleIndex++;
    const newArticle = articleArray[currentArticleIndex];
    setCurrentArticleTypeIndex(newArticle);
    activateArticleTypeGuideBtn(newArticle.type);
    articleSpace.innerHTML = newArticle.articleHTML;
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
            activateArticleTypeGuideBtn(article.type);
            highlightArticleLoxCode();
            setCurrentArticleIndex(article);
            setCurrentArticleTypeIndex(article);
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

function setCurrentArticleIndex(article) {
    const articleTitle = article.title;
    for (let i = 0; i < articleArray.length; i++) {
        if (articleArray[i].title === articleTitle) {
            currentArticleIndex = i;
        }
    }
}

function setCurrentArticleTypeIndex(article) {
    switch (article.type) {
        case 'syntax':
            currentSyntaxArticleIndex = currentArticleIndex;
            break;
        case 'example':
            currentExampleArticleIndex = currentArticleIndex - syntaxArticles.length;
            break;
        case 'challenge':
            currentChalleneArticleIndex = (
                currentArticleIndex -
                syntaxArticles.length -
                exampleArticles.length
            )
            break;
    }
}

const guideBtns = document.querySelectorAll('.guide-btn');
guideBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        activateGuideBtn(btn);

        switch (btn.id) {
            case 'guide-syntax':
                currentArticleIndex = currentSyntaxArticleIndex;
                break;
            case 'guide-examples':
                currentArticleIndex = syntaxArticles.length + currentExampleArticleIndex;
                break;
            case 'guide-challenges':
                currentArticleIndex = (
                    syntaxArticles.length +
                    exampleArticles.length +
                    currentChalleneArticleIndex
                );
                break;
        }
        articleSpace.innerHTML = articleArray[currentArticleIndex].articleHTML;
        highlightArticleLoxCode();
    });
});

function activateGuideBtn(btn) {
    const activeGuideBtn = document.querySelector('.active-guide-btn');
    activeGuideBtn.classList.remove('active-guide-btn');
    btn.classList.add('active-guide-btn');
}

function activateArticleTypeGuideBtn(articleType) {
    let btnID;
    switch (articleType) {
        case 'syntax':
            btnID = 'guide-syntax';
            break;
        case 'example':
            btnID = 'guide-examples';
            break;
        case 'challenge':
            btnID = 'guide-challenges';
            break;
    }

    const btn = document.querySelector(`#${btnID}`);
    activateGuideBtn(btn);
}
