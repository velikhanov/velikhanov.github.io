let langText;
let timeout;
let i = 0;

function getLanguageFromLocalStorage() {
    return localStorage.getItem("lang") ? localStorage.getItem("lang").slice(0, 2) : null;
}

function getLanguageFromNavigator() {
    return window.navigator.userLanguage ? window.navigator.userLanguage.slice(0, 2) : window.navigator.language.slice(0, 2);
}

function setLangText(language) {
    switch (language) {
        case "az":
            langText = "Salam!<br>Mən Teymuram,<br>web developerəm ";
            break;
        case "ru":
            langText = "Привет!<br>Я Теймур,<br>web разработчик ";
            break;
        default:
            langText = "Hi!<br>I'm Teymur,<br>web developer ";
            break;
    }
}

setLangText(getLanguageFromLocalStorage() || getLanguageFromNavigator());

function animateText() {
    let e, a;
    if (timeout && clearTimeout(timeout), (a = langText.slice(0, ++i)) !== langText) {
        document.querySelector(".index-title-main h1").innerHTML = a;
        let t = a.slice(-1);
        if (("<" === t && (e = !0), ">" === t && (e = !1), e)) return animateText();
        timeout = setTimeout(animateText, 100);
    }
}

animateText();

document.querySelectorAll(".twlang").forEach(element => {
    element.addEventListener("click", function () {
        setLangText(getLanguageFromLocalStorage());
        i = 0;
        animateText();
    });
});
