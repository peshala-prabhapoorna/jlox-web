const downloadBtn = document.querySelector('#download-btn');
downloadBtn.addEventListener('click', () => {
    const loxCodeStr = document.querySelector('#code-input code').textContent;

    const loxFileName = 'script.lox';
    const loxFile = new File([loxCodeStr], loxFileName);
    const loxFileURL = URL.createObjectURL(loxFile);

    const link = document.createElement('a');
    link.href = loxFileURL;
    link.download = loxFileName;
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(loxFileURL);
});
