(async function () {
    const output = document.querySelector('#output');
    console.log = (str) => {
        switch (str) {
            case 'CheerpJ runtime ready':
                str = '<span class="output-update">Runtime starting...</span>';
                break;
            case 'Jar is loaded, main is starting':
                str = '<span class="output-update">Runtime ready</span>';
                break;
            case '\n':
                return;
        }
        output.innerHTML += `<span class="output-symbol">&gt;</span> <span class="output-text">${str}</span><br>`;
    }

    output.innerHTML += '<span class="output-symbol">&gt;</span> <span class="output-rt-loading">Loading Runtime: </span><span id="output-rt-percentage"></span><br>';
    const outputRTPercentage = output.querySelector('#output-rt-percentage');
    function showPreloadProgress(preloadDone, preloadTotal) {
        const percentage = (preloadDone * 100) / preloadTotal;
        outputRTPercentage.textContent = Math.round(percentage * 100) / 100 + '%';
    }

    await cheerpjInit({
        preloadProgress: showPreloadProgress,
        preloadResources: {
            "/lt/8/jre/lib/javaws.jar": [ 0, 131072, 1441792, 1703936 ],
            "/lt/8/jre/lib/resources.jar": [ 0, 131072, 917504, 1179648 ],
            "/lt/8/jre/lib/charsets.jar": [ 0, 131072, 1703936, 1835008 ],
            "/lt/8/jre/lib/jce.jar": [ 0, 131072 ],
            "/lt/8/jre/lib/jsse.jar": [ 0, 131072, 786432, 917504 ],
            "/lt/8/lib/ext/meta-index": [ 0, 131072 ],
            "/lt/etc/passwd": [ 0, 131072 ],
            "/lt/8/jre/lib/cheerpj-awt.jar": [ 0, 131072 ],
            "/lt/8/jre/lib/rt.jar": [ 0, 131072, 10354688, 10878976, 11403264, 11534336, 11665408, 11796480, 12320768, 12451840, 15204352, 15335424, 15466496, 15597568, 17694720, 17825792, 18087936, 18612224, 19005440, 19136512, 21364736, 21495808, 21626880, 21757952, 22020096, 22282240, 22413312, 23068672, 23199744, 26869760 ],
            "/lt/etc/localtime": [],
            "/lt/8/lib/ext": [],
            "/lt/8/lib/ext/index.list": [],
            "/lt/8/lib/ext/localedata.jar": [],
            "/lt/8/lib/ext/sunjce_provider.jar": [],
        }
    });

    const runBtn = document.querySelector('#run-btn');
    runBtn.addEventListener('click', async () => {
        const loxCodeStr = document.querySelector('#code-input code').textContent;
        cheerpOSAddStringFile('/str/script.lox', loxCodeStr);
        await cheerpjRunJar('/app/assets/packages/jlox-0.1.0.jar', '/str/script.lox');
    });
})();
