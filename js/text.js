var langText;null!=localStorage.getItem("lang")?"az"==localStorage.getItem("lang").slice(0,2)?langText="Salam!<br>Mən Teymuram,<br>web developerəm ":"ru"==localStorage.getItem("lang").slice(0,2)?langText="Привет!<br>Я Теймур,<br>web разработчик ":"en"==localStorage.getItem("lang").slice(0,2)&&(langText="Hi!<br>I'm Teymur,<br>web developer "):"az"==window.navigator.language.slice(0,2)||"az"==(null!=window.navigator.userLanguage?window.navigator.userLanguage.slice(0,2):window.navigator.userLanguage)?langText="Salam!<br>Mən Teymuram,<br>web developerəm ":"ru"==window.navigator.language.slice(0,2)||"ru"==(null!=window.navigator.userLanguage?window.navigator.userLanguage.slice(0,2):window.navigator.userLanguage)?langText="Привет!<br>Я Теймур,<br>web разработчик ":("en"==window.navigator.language.slice(0,2)||(null!=window.navigator.userLanguage?window.navigator.userLanguage.slice(0,2):window.navigator.userLanguage),langText="Hi!<br>I'm Teymur,<br>web developer ");var timeout,i=0;function animateText(){var e,a;if(timeout&&clearTimeout(timeout),(a=langText.slice(0,++i))!==langText){document.querySelector(".index-title-main h1").innerHTML=a;var t=a.slice(-1);if("<"===t&&(e=!0),">"===t&&(e=!1),e)return animateText();timeout=setTimeout(animateText,100)}}for(animateText(),i=0;i<document.querySelectorAll(".twlang").length;i++)document.querySelectorAll(".twlang")[i].addEventListener("click",function(){null!=localStorage.getItem("lang")&&("az"==localStorage.getItem("lang").slice(0,2)?langText="Salam!<br>Mən Teymuram,<br>web developerəm ":"ru"==localStorage.getItem("lang").slice(0,2)?langText="Привет!<br>Я Теймур,<br>web разработчик ":(localStorage.getItem("lang").slice(0,2),langText="Hi!<br>I'm Teymur,<br>web developer ")),i=0,animateText()});
