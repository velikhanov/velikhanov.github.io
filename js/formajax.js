// const form=document.getElementById("contact_form");var myTimer;form.addEventListener("submit",function(e){e.preventDefault(),clearTimeout(myTimer);const t={name:document.querySelector("input[name=name]").value,email:document.querySelector("input[name=email]").value,subject:document.querySelector("input[name=subject]").value,message:document.querySelector("input[name=message]").value,lang:localStorage.getItem("lang")||window.navigator.userLanguage||window.navigator.language},a=JSON.stringify(t),o=new XMLHttpRequest,s=form.getAttribute("action");o.open("POST",s,!0),o.setRequestHeader("Content-type","text/plain"),o.onload=function(){4==this.readyState&&200==this.status&&t.name.length<=50&&t.email.length>=5&&t.email.length<=50&&/\S+@\S+\.\S+/.test(t.email)&&t.subject.length<=50&&t.message.length>=5?(document.querySelector(".toast").classList.contains("toast--error")?(document.querySelector(".toast").classList.remove("toast--error"),document.querySelector(".toast").classList.add("toast--success")):document.querySelector(".toast").classList.add("toast--success"),document.getElementById("contact_form").reset(),document.querySelector("input[name=name]").hasAttribute("disabled")||document.querySelector("input[name=email]").hasAttribute("disabled")||document.querySelector("input[name=subject]").hasAttribute("disabled")||document.querySelector("input[name=message]").hasAttribute("disabled")||document.querySelector(".app-form-button").hasAttribute("disabled")||(document.querySelector("input[name=name]").disabled=!0,document.querySelector("input[name=email]").disabled=!0,document.querySelector("input[name=subject]").disabled=!0,document.querySelector("input[name=message]").disabled=!0,document.querySelector(".app-form-button").disabled=!0),document.querySelector(".toast").innerHTML=this.responseText):(document.querySelector(".toast").classList.contains("toast--success")?(document.querySelector(".toast").classList.remove("toast--success"),document.querySelector(".toast").classList.add("toast--error")):document.querySelector(".toast").classList.add("toast--error"),document.querySelector(".toast").innerHTML=this.responseText),document.querySelector(".toast").classList.add("toast--visible"),myTimer=setTimeout(function(){document.querySelector(".toast").classList.remove("toast--visible")},7500)},o.onerror=function(){document.querySelector(".toast").classList.contains("toast--success")?(document.querySelector(".toast").classList.remove("toast--success"),document.querySelector(".toast").classList.add("toast--error")):document.querySelector(".toast").classList.add("toast--error"),"az"==localStorage.getItem("lang")||"az"==window.navigator.userLanguage||"az"==window.navigator.language?document.querySelector(".toast").innerHTML="Bir səhv baş verdi. Server, yəqin ki, müvəqqəti olaraq əlçatan deyil, xahiş edirəm daha sonra yenidən cəhd edin!":"ru"==localStorage.getItem("lang")||"ru"==window.navigator.userLanguage||"ru"==window.navigator.language?document.querySelector(".toast").innerHTML="Произошла ошибка. Вероятно, сервер временно недоступен, повторите попытку позже!":document.querySelector(".toast").innerHTML="An error has occurred. The server is probably temporarily unavailable, please try again later!",document.querySelector(".toast").classList.add("toast--visible"),myTimer=setTimeout(function(){document.querySelector(".toast").classList.remove("toast--visible")},7500)},o.send(a)});

// replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g, '');

const form = document.getElementById("contact_form");
var myTimer;
form.addEventListener("submit", function (e) {
    e.preventDefault(), clearTimeout(myTimer);
    const t = {
            name: document.querySelector("input[name=name]").value.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim(),
            email: document.querySelector("input[name=email]").value.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim(),
            subject: document.querySelector("input[name=subject]").value.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim(),
            message: document.querySelector("input[name=message]").value.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim(),
            lang: localStorage.getItem("lang") || window.navigator.userLanguage || window.navigator.language,
        },
        a = JSON.stringify(t),
        o = new XMLHttpRequest(),
        s = form.getAttribute("action");
    o.open("POST", s, !0),
        o.setRequestHeader("Content-type", "text/plain"),
        (o.onload = function () {
            4 == this.readyState && 200 == this.status && t.name.length <= 50 && t.email.length >= 5 && t.email.length <= 50 && /\S+@\S+\.\S+/.test(t.email) && t.subject.length <= 50 && t.message.length >= 5
                ? (document.querySelector(".toast").classList.contains("toast--error")
                      ? (document.querySelector(".toast").classList.remove("toast--error"), document.querySelector(".toast").classList.add("toast--success"))
                      : document.querySelector(".toast").classList.add("toast--success"),
                  document.getElementById("contact_form").reset(),
                  document.querySelector("input[name=name]").hasAttribute("disabled") ||
                      document.querySelector("input[name=email]").hasAttribute("disabled") ||
                      document.querySelector("input[name=subject]").hasAttribute("disabled") ||
                      document.querySelector("input[name=message]").hasAttribute("disabled") ||
                      document.querySelector(".app-form-button").hasAttribute("disabled") ||
                      ((document.querySelector("input[name=name]").disabled = !0),
                      (document.querySelector("input[name=email]").disabled = !0),
                      (document.querySelector("input[name=subject]").disabled = !0),
                      (document.querySelector("input[name=message]").disabled = !0),
                      (document.querySelector(".app-form-button").disabled = !0)),
                  (document.querySelector(".toast").innerHTML = this.responseText))
                : (document.querySelector(".toast").classList.contains("toast--success")
                      ? (document.querySelector(".toast").classList.remove("toast--success"), document.querySelector(".toast").classList.add("toast--error"))
                      : document.querySelector(".toast").classList.add("toast--error"),
                  (document.querySelector(".toast").innerHTML = this.responseText)),
                document.querySelector(".toast").classList.add("toast--visible"),
                (myTimer = setTimeout(function () {
                    document.querySelector(".toast").classList.remove("toast--visible");
                }, 7500));
        }),
        (o.onerror = function () {
            document.querySelector(".toast").classList.contains("toast--success")
                ? (document.querySelector(".toast").classList.remove("toast--success"), document.querySelector(".toast").classList.add("toast--error"))
                : document.querySelector(".toast").classList.add("toast--error"),
                "az" == localStorage.getItem("lang") || "az" == window.navigator.userLanguage || "az" == window.navigator.language
                    ? (document.querySelector(".toast").innerHTML = "Bir səhv baş verdi. Server, yəqin ki, müvəqqəti olaraq əlçatan deyil, xahiş edirəm daha sonra yenidən cəhd edin!")
                    : "ru" == localStorage.getItem("lang") || "ru" == window.navigator.userLanguage || "ru" == window.navigator.language
                    ? (document.querySelector(".toast").innerHTML = "Произошла ошибка. Вероятно, сервер временно недоступен, повторите попытку позже!")
                    : (document.querySelector(".toast").innerHTML = "An error has occurred. The server is probably temporarily unavailable, please try again later!"),
                document.querySelector(".toast").classList.add("toast--visible"),
                (myTimer = setTimeout(function () {
                    document.querySelector(".toast").classList.remove("toast--visible");
                }, 7500));
        }),
        o.send(a);
});
