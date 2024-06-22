window.onload = function () {
    let linkObjects = document.querySelector(".sidebar").getElementsByTagName("a");
    for (let i = 0; i < linkObjects.length; i++) {
        if (document.location.href.indexOf(linkObjects[i].href) >= 0) {
            linkObjects[i].classList.add("active");
        }
    }
};

document.querySelector(".mobile-menu").onclick = function (e) {
    e.preventDefault();
    document.querySelector(".animated-icon2").classList.toggle("open");
    document.querySelector(".sidebar-main").classList.toggle("show");
    document.body.classList.toggle("lock-scroll");
};
