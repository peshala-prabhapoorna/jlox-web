// set code input width to prevent resizing when content exceeds size
const codeInput = document.querySelector('#code-input');
const output = document.querySelector('#output');
const widthPX = codeInput.offsetWidth + "px";
codeInput.style.maxWidth = widthPX;
output.style.maxWidth = widthPX;

const loxCode = document.querySelector('#code-input code');
loxCode.textContent = `fun fibonacci(n) {
    if (n <= 1) return n;
    return fib(n - 2) + fib(n - 1);
}

for (var i = 0; i < 20; i = i + 1) {
    print "Term " + i + ": " + fibonacci(i);
}`;
highlight(loxCode);

// prevent tab natigation when in code input
loxCode.addEventListener('keydown', () => {
    if (event.key === 'Tab') {
        event.preventDefault();
    }
});

// >>> Mutation observer
//const config = {childList: true, subtree: true };
//const observer = new MutationObserver(() => {
//    console.log('change');
//    highlight();
//});
//observer.observe(loxCode, config);
// <<< Mutation observer

loxCode.addEventListener('keyup', (event) => {
    if (
        event.key === 'Enter' ||
        event.key === 'Tab' ||
        event.key === 'ArrowDown' ||
        event.key === 'ArrowUp' ||
        event.key === 'ArrowLeft' ||
        event.key === 'ArrowRight'
    ) return;

    // Do not try to highlight if there is no code
    if (loxCode.textContent.match(/^\s*$/) !== null) return;
    handleHighlight(event);
});

function handleHighlight(event) {
    const caretXY = getCaretPosition(event);
    highlight(event.target);
    createSelectionFromPoint(caretXY.x, caretXY.y, caretXY.x, caretXY.y);
}

function highlight(codeElement) {
    const highlightedCode = hljs.highlight(codeElement.textContent, {language: 'lox'}).value;
    codeElement.innerHTML = highlightedCode;
}

function getCaretPosition() {
    const selection = document.getSelection();
    const caretRect = selection.getRangeAt(0).getClientRects();

    return {
        x: caretRect[0].x,
        y: caretRect[0].y,
    };
}

function createSelectionFromPoint(startX, startY, endX, endY) {
    const doc = document;
    let start, end, range = null;
    if (typeof doc.caretPositionFromPoint != "undefined") {
        // chrome, firefox
        start = doc.caretPositionFromPoint(startX, startY);
        end = doc.caretPositionFromPoint(endX, endY);
        range = doc.createRange();
        range.setStart(start.offsetNode, start.offset);
        range.setEnd(end.offsetNode, end.offset);
    } else if (typeof doc.caretRangeFromPoint != "undefined") {
        start = doc.caretRangeFromPoint(startX, startY);
        end = doc.caretRangeFromPoint(endX, endY);
        range = doc.createRange();
        range.setStart(start.startContainer, start.startOffset);
        range.setEnd(end.startContainer, end.startOffset);
    }
    if (range !== null && typeof window.getSelection != "undefined") {
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (typeof doc.body.createTextRange != "undefined") {
        range = doc.body.createTextRange();
        range.moveToPoint(startX, startY);
        const endRange = range.duplicate();
        endRange.moveToPoint(endX, endY);
        range.setEndPoint("EndToEnd", endRange);
        range.select();
    }
}
