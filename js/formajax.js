"use strict";var myTimer,form=document.getElementById("contact_form");form.addEventListener("submit",function(e){e.preventDefault(),clearTimeout(myTimer);var t={name:document.querySelector("input[name=name]").value.replace(/[^\u0400-\u04FF\u00C7\u018F\u011E\u04D9\u0049\u0130\u00D6\u015E\u00DC\u00E7\u01DD\u0259\u04D8\u04D9\u1D4A\u2094\u011F\u0131\u0069\u00F6\u015F\u00FC\w@.?()+"\/,:;*%!№$#=-]+/gi,"").replace(/\s+/g,""),email:document.querySelector("input[name=email]").value.replace(/[^\w@._]+/g,"").replace(/\s+/g,""),subject:document.querySelector("input[name=subject]").value.replace(/[^\u0400-\u04FF\u00C7\u018F\u011E\u04D9\u0049\u0130\u00D6\u015E\u00DC\u00E7\u01DD\u0259\u04D8\u04D9\u1D4A\u2094\u011F\u0131\u0069\u00F6\u015F\u00FC\w@.?()+"\/,:;*%!№$#=-]+/gi,"").replace(/\s+/g,""),message:document.querySelector("input[name=message]").value.replace(/[^\u0400-\u04FF\u00C7\u018F\u011E\u04D9\u0049\u0130\u00D6\u015E\u00DC\u00E7\u01DD\u0259\u04D8\u04D9\u1D4A\u2094\u011F\u0131\u0069\u00F6\u015F\u00FC\w@.?()+"\/,:;*%!№$#=-]+/gi,"").replace(/\s+/g,""),lang:localStorage.getItem("lang")||window.navigator.userLanguage||window.navigator.language},u=JSON.stringify(t),a=new XMLHttpRequest,s=form.getAttribute("action");a.open("POST",s,!0),a.setRequestHeader("Content-type","text/plain"),a.onload=function(){4==this.readyState&&200==this.status&&t.name.length<=50&&t.email.length>=5&&t.email.length<=50&&/\S+@\S+\.\S+/.test(t.email)&&t.subject.length<=50&&t.message.length>=5?(document.querySelector(".toast").classList.contains("toast--error")?(document.querySelector(".toast").classList.remove("toast--error"),document.querySelector(".toast").classList.add("toast--success")):document.querySelector(".toast").classList.add("toast--success"),document.getElementById("contact_form").reset(),document.querySelector("input[name=name]").hasAttribute("disabled")||document.querySelector("input[name=email]").hasAttribute("disabled")||document.querySelector("input[name=subject]").hasAttribute("disabled")||document.querySelector("input[name=message]").hasAttribute("disabled")||document.querySelector(".app-form-button").hasAttribute("disabled")||(document.querySelector("input[name=name]").disabled=!0,document.querySelector("input[name=email]").disabled=!0,document.querySelector("input[name=subject]").disabled=!0,document.querySelector("input[name=message]").disabled=!0,document.querySelector(".app-form-button").disabled=!0),document.querySelector(".toast").innerHTML=this.responseText):(document.querySelector(".toast").classList.contains("toast--success")?(document.querySelector(".toast").classList.remove("toast--success"),document.querySelector(".toast").classList.add("toast--error")):document.querySelector(".toast").classList.add("toast--error"),document.querySelector(".toast").innerHTML=this.responseText),document.querySelector(".toast").classList.add("toast--visible"),myTimer=setTimeout(function(){document.querySelector(".toast").classList.remove("toast--visible")},7500)},a.onerror=function(){document.querySelector(".toast").classList.contains("toast--success")?(document.querySelector(".toast").classList.remove("toast--success"),document.querySelector(".toast").classList.add("toast--error")):document.querySelector(".toast").classList.add("toast--error"),"az"==localStorage.getItem("lang")||"az"==window.navigator.userLanguage||"az"==window.navigator.language?document.querySelector(".toast").innerHTML="Server müvəqqəti olaraq əlçatmazdır. Zəhmət olmasa bir az sonra yenə cəhd edin!":"ru"==localStorage.getItem("lang")||"ru"==window.navigator.userLanguage||"ru"==window.navigator.language?document.querySelector(".toast").innerHTML="Сервер временно недоступен. Пожалуйста, повторите попытку позже!":document.querySelector(".toast").innerHTML="The server is temporarily unavailable. Please try again later!",document.querySelector(".toast").classList.add("toast--visible"),myTimer=setTimeout(function(){document.querySelector(".toast").classList.remove("toast--visible")},7500)},a.send(u)});

"use strict";
var myTimer,
    form = document.getElementById("contact_form");
form.addEventListener("submit", function (e) {
    e.preventDefault(), clearTimeout(myTimer);
    const isIE = /*@cc_on!@*/false || !!document.documentMode;
    var t = {
            name: document
                .querySelector("input[name=name]")
                .value.replace(/[^\u0400-\u04FF\u00C7\u018F\u011E\u04D9\u0049\u0130\u00D6\u015E\u00DC\u00E7\u01DD\u0259\u04D8\u04D9\u1D4A\u2094\u011F\u0131\u0069\u00F6\u015F\u00FC\w@.?()+"\/,:;*%!№$#=-]+/gi, "")
                .replace(/\s+/g, ""),
            email: document
                .querySelector("input[name=email]")
                .value.replace(/[^\w@._]+/g, "")
                .replace(/\s+/g, ""),
            subject: document
                .querySelector("input[name=subject]")
                .value.replace(/[^\u0400-\u04FF\u00C7\u018F\u011E\u04D9\u0049\u0130\u00D6\u015E\u00DC\u00E7\u01DD\u0259\u04D8\u04D9\u1D4A\u2094\u011F\u0131\u0069\u00F6\u015F\u00FC\w@.?()+"\/,:;*%!№$#=-]+/gi, "")
                .replace(/\s+/g, ""),
            message: document
                .querySelector("input[name=message]")
                .value.replace(/[^\u0400-\u04FF\u00C7\u018F\u011E\u04D9\u0049\u0130\u00D6\u015E\u00DC\u00E7\u01DD\u0259\u04D8\u04D9\u1D4A\u2094\u011F\u0131\u0069\u00F6\u015F\u00FC\w@.?()+"\/,:;*%!№$#=-]+/gi, "")
                .replace(/\s+/g, ""),
            lang: localStorage.getItem("lang") || window.navigator.userLanguage || window.navigator.language,
        },
        u = JSON.stringify(t),
        a = new XMLHttpRequest(),
        s = form.getAttribute("action");
        /*Loading effect*/
        if(t.lang === "en"){
            if(isIE){                
                document.querySelector('.app-form-button').style.width = "60px";
            }else{
                document.querySelector('.app-form-button').style.width = "55px";
            };
            document.querySelector(".app-form-button").style.backgroundColor = "transparent";
        }else if(t.lang === "az"){
            if(isIE){                
                document.querySelector('.app-form-button').style.width = "108px";
            }else{
                document.querySelector('.app-form-button').style.width = "96px";
            };
            document.querySelector(".app-form-button").style.backgroundColor = "transparent";
        }else if(t.lang === "ru"){
            if(isIE){                
                document.querySelector('.app-form-button').style.width = "104px";
            }else{
                document.querySelector('.app-form-button').style.width = "92px";
            };
            document.querySelector(".app-form-button").style.backgroundColor = "transparent";
        };
        document.querySelector('.btn-send-text').style.display = "none";
        document.querySelector('.btn-loading-gif').style.display = "inline";
        /**/
    a.open("POST", s, !0),
        a.setRequestHeader("Content-type", "text/plain"),
        (a.onload = function () {
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
                /**/
                document.querySelector('.btn-loading-gif').style.display = "none";
                document.querySelector('.app-form-button').style.width = "auto";
                document.querySelector(".app-form-button").onmouseover = function() {
                    this.style.color = "#000";
                    this.style.backgroundColor = "#35E6BA";
                };
                document.querySelector(".app-form-button").onmouseout= function() {
                    this.style.color = "#35E6BA";
                    this.style.backgroundColor = "transparent";
                };
                document.querySelector(".app-form-button").style.color = "#35E6BA";
                document.querySelector(".app-form-button").style.backgroundColor = "transparent";
                document.querySelector('.btn-send-text').style.display = "inline";
                /**/
        }),
        (a.onerror = function () {
            document.querySelector(".toast").classList.contains("toast--success")
                ? (document.querySelector(".toast").classList.remove("toast--success"), document.querySelector(".toast").classList.add("toast--error"))
                : document.querySelector(".toast").classList.add("toast--error"),
                "az" == localStorage.getItem("lang") || "az" == window.navigator.userLanguage || "az" == window.navigator.language
                    ? (document.querySelector(".toast").innerHTML = "Server müvəqqəti olaraq əlçatmazdır. Zəhmət olmasa bir az sonra yenə cəhd edin!")
                    : "ru" == localStorage.getItem("lang") || "ru" == window.navigator.userLanguage || "ru" == window.navigator.language
                    ? (document.querySelector(".toast").innerHTML = "Сервер временно недоступен. Пожалуйста, повторите попытку позже!")
                    : (document.querySelector(".toast").innerHTML = "The server is temporarily unavailable. Please try again later!"),
                document.querySelector(".toast").classList.add("toast--visible"),
                (myTimer = setTimeout(function () {
                    document.querySelector(".toast").classList.remove("toast--visible");
                }, 7500));
                /**/
                document.querySelector('.btn-loading-gif').style.display = "none";
                document.querySelector('.app-form-button').style.width = "auto";
                document.querySelector(".app-form-button").onmouseover = function() {
                    this.style.color = "#000";
                    this.style.backgroundColor = "#35E6BA";
                };
                document.querySelector(".app-form-button").onmouseout= function() {
                    this.style.color = "#35E6BA";
                    this.style.backgroundColor = "transparent";
                };
                document.querySelector('.btn-send-text').style.display = "inline";
                /**/
        }),
        a.send(u);
});