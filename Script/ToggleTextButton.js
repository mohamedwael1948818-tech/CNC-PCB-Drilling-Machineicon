function toggleDownInfo(infoId, dataId) {
    const info = document.getElementById(infoId);
    const data = document.getElementById(dataId);

    const originalMargin = "10px 0 20px 10%";
    const originalPaddingTop = "15px";

    if (!info.dataset.open || info.dataset.open === "false") {
        // فتح المحتوى
        info.style.height = info.scrollHeight + "px";
        info.style.margin = originalMargin;
        info.style.paddingTop = originalPaddingTop;
        info.dataset.open = "true";

        // بعد اكتمال ارتفاع الـ height (1s) نعرض المحتوى تدريجي
        setTimeout(() => {
            data.style.opacity = 1;
        }, 1000);

    } else {
        // إخفاء المحتوى أولاً
        data.style.opacity = 0;

        // بعد 0.5s نبدأ تصغير الـ height و margin و padding
        setTimeout(() => {
            info.style.height = "0";
            info.style.margin = "0 0 0 10%";
            info.style.paddingTop = "0";
            info.dataset.open = "false";
        }, 500);
    }
}

// FAQs BUTTON
function toggleParagraph(id){
    const p = document.getElementById(id);
    if(!p.dataset.open || p.dataset.open === "false"){
        p.style.height = p.scrollHeight + "px";
        setTimeout(()=>{
            p.style.padding = "0 0 20px 4%";
        },10);
        p.dataset.open = "true";
    }else{
        p.style.padding = "0 0 0 4%";
        setTimeout(()=>{
            p.style.height = "0px";
        },10);
        p.dataset.open = "false";
    }
}

// BUTTON
function createToggleTextButton(button, str1, str2, speed = 20) {
    if (!button.dataset.current) button.dataset.current = "0"; 
    if (button.dataset.animating === "true") return;

    let current = parseInt(button.dataset.current);
    let target = current === 0 ? str2 : str1;
    let text = button.textContent;
    button.dataset.animating = "true";

    let firstChar = text.charAt(0);

    let deleteInterval = setInterval(() => {
        text = text.slice(0, -1);
        button.textContent = firstChar + text.slice(1);
        if (text.length <= 1) {
            clearInterval(deleteInterval);

            let i = 1;
            button.textContent = firstChar;
            let writeInterval = setInterval(() => {
                button.textContent += target[i];
                i++;
                if (i === target.length) {
                    clearInterval(writeInterval);
                    button.dataset.current = 1 - current;
                    button.dataset.animating = "false";
                }
            }, speed);
        }
    }, speed);
}