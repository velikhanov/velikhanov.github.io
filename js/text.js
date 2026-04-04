let langText;
let timeout;
let i = 0;

function getLanguageFromLocalStorage() {
    return localStorage.getItem("lang") ? localStorage.getItem("lang").slice(0, 2) : null;
}

function getLanguageFromNavigator() {
    return window.navigator.language.slice(0, 2);
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
    let a;
    if (timeout) clearTimeout(timeout);
    if ((a = langText.slice(0, ++i)) !== langText) {
        while (a.lastIndexOf("<") > a.lastIndexOf(">") && i < langText.length) {
            a = langText.slice(0, ++i);
        }
        document.querySelector(".index-title-main h1").innerHTML = a;
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
