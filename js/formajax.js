"use strict";

let myTimer;
let form = document.getElementById("contact_form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    clearTimeout(myTimer);

    let formData = {
        name: document.querySelector("input[name=name]").value.replace(/[^\u0400-\u04FF\u00C7\u018F\u011E\u04D9\u0049\u0130\u00D6\u015E\u00DC\u00E7\u01DD\u0259\u04D8\u04D9\u1D4A\u2094\u011F\u0131\u0069\u00F6\u015F\u00FC\w@.?()+"\/,:;*%!№$#=-]+/gi, "").replace(/\s+/g, ""),
        email: document.querySelector("input[name=email]").value.replace(/[^\w@._]+/g, "").replace(/\s+/g, ""),
        subject: document.querySelector("input[name=subject]").value.replace(/[^\u0400-\u04FF\u00C7\u018F\u011E\u04D9\u0049\u0130\u00D6\u015E\u00DC\u00E7\u01DD\u0259\u04D8\u04D9\u1D4A\u2094\u011F\u0131\u0069\u00F6\u015F\u00FC\w@.?()+"\/,:;*%!№$#=-]+/gi, "").replace(/\s+/g, ""),
        message: document.querySelector("input[name=message]").value.replace(/[^\u0400-\u04FF\u00C7\u018F\u011E\u04D9\u0049\u0130\u00D6\u015E\u00DC\u00E7\u01DD\u0259\u04D8\u04D9\u1D4A\u2094\u011F\u0131\u0069\u00F6\u015F\u00FC\w@.?()+"\/,:;*%!№$#=-]+/gi, "").replace(/\s+/g, ""),
        lang: localStorage.getItem("lang") || window.navigator.userLanguage || window.navigator.language,
    };

    let jsonData = JSON.stringify(formData);
    let xhr = new XMLHttpRequest();
    let action = form.getAttribute("action");

    xhr.open("POST", action, true);
    xhr.setRequestHeader("Content-type", "text/plain");

    xhr.onload = function () {
        if (this.readyState === 4 && this.status === 200 && formData.name.length <= 50 && formData.email.length >= 5 && formData.email.length <= 50 && /\S+@\S+\.\S+/.test(formData.email) && formData.subject.length <= 50 && formData.message.length >= 5) {
            let toast = document.querySelector(".toast");
            if (toast.classList.contains("toast--error")) {
                toast.classList.remove("toast--error");
                toast.classList.add("toast--success");
            } else {
                toast.classList.add("toast--success");
            }

            document.getElementById("contact_form").reset();

            let fields = ["name", "email", "subject", "message"];
            fields.forEach(field => {
                let input = document.querySelector(`input[name=${field}]`);
                if (!input.hasAttribute("disabled")) {
                    input.disabled = true;
                }
            });

            let button = document.querySelector(".app-form-button");
            if (!button.hasAttribute("disabled")) {
                button.disabled = true;
            }

            toast.innerHTML = this.responseText;
        } else {
            let toast = document.querySelector(".toast");
            if (toast.classList.contains("toast--success")) {
                toast.classList.remove("toast--success");
                toast.classList.add("toast--error");
            } else {
                toast.classList.add("toast--error");
            }

            toast.innerHTML = this.responseText;
        }

        document.querySelector(".toast").classList.add("toast--visible");

        myTimer = setTimeout(function () {
            document.querySelector(".toast").classList.remove("toast--visible");
        }, 7500);
    };

    xhr.onerror = function () {
        let toast = document.querySelector(".toast");
        if (toast.classList.contains("toast--success")) {
            toast.classList.remove("toast--success");
            toast.classList.add("toast--error");
        } else {
            toast.classList.add("toast--error");
        }

        let lang = localStorage.getItem("lang") || window.navigator.userLanguage || window.navigator.language;
        if (lang === "az") {
            toast.innerHTML = "Server müvəqqəti olaraq əlçatmazdır. Zəhmət olmasa bir az sonra yenə cəhd edin!";
        } else if (lang === "ru") {
            toast.innerHTML = "Сервер временно недоступен. Пожалуйста, повторите попытку позже!";
        } else {
            toast.innerHTML = "The server is temporarily unavailable. Please try again later!";
        }

        toast.classList.add("toast--visible");

        myTimer = setTimeout(function () {
            document.querySelector(".toast").classList.remove("toast--visible");
        }, 7500);
    };

    xhr.send(jsonData);
});
