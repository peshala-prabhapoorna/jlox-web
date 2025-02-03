const btns = document.querySelectorAll('.guide-btn');
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const activeGuideBtn = document.querySelector('.active-guide-btn');
        activeGuideBtn.classList.remove('active-guide-btn');
        btn.classList.add('active-guide-btn');
    });
});
