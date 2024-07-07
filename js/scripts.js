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
    const sidebar = document.querySelector(".sidebar-main");
    sidebar.classList.add("sidebar-transition");
    
    document.querySelector(".animated-icon2").classList.toggle("open");
    sidebar.classList.toggle("show");
    document.body.classList.toggle("lock-scroll");
  
    setTimeout(function() {
      sidebar.classList.remove("sidebar-transition");
    }, 500);
};
