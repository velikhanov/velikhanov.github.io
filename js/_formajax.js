"use strict";

// Initialize timer variable
var myTimer;

// Get the form element
var form = document.getElementById("contact_form");

// Add submit event listener to the form
form.addEventListener("submit", function (e) {
    // Prevent the default form submission
    e.preventDefault();

    // Clear any existing timer
    clearTimeout(myTimer);

    // Check if the browser is Internet Explorer
    const isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Collect form data with sanitization
    var formData = {
        name: document
            .querySelector("input[name=name]")
            .value
            .replace(/[^\u0400-\u04FF\u00C7\u018F\u011E\u04D9\u0049\u0130\u00D6\u015E\u00DC\u00E7\u01DD\u0259\u04D8\u04D9\u1D4A\u2094\u011F\u0131\u0069\u00F6\u015F\u00FC\w@.?()+"\/,:;*%!№$#=-]+/gi, "")
            .replace(/\s+/g, ""),
        email: document
            .querySelector("input[name=email]")
            .value
            .replace(/[^\w@._]+/g, "")
            .replace(/\s+/g, ""),
        subject: document
            .querySelector("input[name=subject]")
            .value
            .replace(/[^\u0400-\u04FF\u00C7\u018F\u011E\u04D9\u0049\u0130\u00D6\u015E\u00DC\u00E7\u01DD\u0259\u04D8\u04D9\u1D4A\u2094\u011F\u0131\u0069\u00F6\u015F\u00FC\w@.?()+"\/,:;*%!№$#=-]+/gi, "")
            .replace(/\s+/g, ""),
        message: document
            .querySelector("input[name=message]")
            .value
            .replace(/[^\u0400-\u04FF\u00C7\u018F\u011E\u04D9\u0049\u0130\u00D6\u015E\u00DC\u00E7\u01DD\u0259\u04D8\u04D9\u1D4A\u2094\u011F\u0131\u0069\u00F6\u015F\u00FC\w@.?()+"\/,:;*%!№$#=-]+/gi, "")
            .replace(/\s+/g, ""),
        lang: localStorage.getItem("lang") || window.navigator.userLanguage || window.navigator.language,
    };

    // Convert form data to JSON string
    var formDataJson = JSON.stringify(formData);

    // Create a new XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Get form action URL
    var actionUrl = form.getAttribute("action");

    // Apply loading effect based on language
    if (formData.lang === "en") {
        document.querySelector('.app-form-button').style.width = isIE ? "60px" : "55px";
    } else if (formData.lang === "az") {
        document.querySelector('.app-form-button').style.width = isIE ? "108px" : "96px";
    } else if (formData.lang === "ru") {
        document.querySelector('.app-form-button').style.width = isIE ? "104px" : "92px";
    }
    document.querySelector(".app-form-button").style.backgroundColor = "transparent";
    document.querySelector('.btn-send-text').style.display = "none";
    document.querySelector('.btn-loading-gif').style.display = "inline";

    // Configure and send XMLHttpRequest
    xhr.open("POST", actionUrl, true);
    xhr.setRequestHeader("Content-type", "application/json");

    xhr.onload = function () {
        if (this.readyState == 4 && this.status == 200 && formData.name.length <= 50 && formData.email.length >= 5 && formData.email.length <= 50 && /\S+@\S+\.\S+/.test(formData.email) && formData.subject.length <= 50 && formData.message.length >= 5) {
            var toastElement = document.querySelector(".toast");
            if (toastElement.classList.contains("toast--error")) {
                toastElement.classList.remove("toast--error");
                toastElement.classList.add("toast--success");
            } else {
                toastElement.classList.add("toast--success");
            }
            document.getElementById("contact_form").reset();
            ["name", "email", "subject", "message"].forEach(function (fieldName) {
                var inputElement = document.querySelector(`input[name=${fieldName}]`);
                if (!inputElement.hasAttribute("disabled")) {
                    inputElement.disabled = true;
                }
            });
            document.querySelector(".app-form-button").disabled = true;
            toastElement.innerHTML = this.responseText;
        } else {
            var toastElement = document.querySelector(".toast");
            if (toastElement.classList.contains("toast--success")) {
                toastElement.classList.remove("toast--success");
                toastElement.classList.add("toast--error");
            } else {
                toastElement.classList.add("toast--error");
            }
            toastElement.innerHTML = this.responseText;
        }
        document.querySelector(".toast").classList.add("toast--visible");
        myTimer = setTimeout(function () {
            document.querySelector(".toast").classList.remove("toast--visible");
        }, 7500);

        // Reset loading effect
        resetLoadingEffect();
    };

    xhr.onerror = function () {
        var toastElement = document.querySelector(".toast");
        toastElement.classList.remove("toast--success");
        toastElement.classList.add("toast--error");
        var errorMessage = "The server is temporarily unavailable. Please try again later!";
        if (localStorage.getItem("lang") === "az" || window.navigator.userLanguage === "az" || window.navigator.language === "az") {
            errorMessage = "Server müvəqqəti olaraq əlçatmazdır. Zəhmət olmasa bir az sonra yenə cəhd edin!";
        } else if (localStorage.getItem("lang") === "ru" || window.navigator.userLanguage === "ru" || window.navigator.language === "ru") {
            errorMessage = "Сервер временно недоступен. Пожалуйста, повторите попытку позже!";
        }
        toastElement.innerHTML = errorMessage;
        toastElement.classList.add("toast--visible");
        myTimer = setTimeout(function () {
            document.querySelector(".toast").classList.remove("toast--visible");
        }, 7500);

        // Reset loading effect
        resetLoadingEffect();
    };

    xhr.send(formDataJson);
});

function resetLoadingEffect() {
    document.querySelector('.btn-loading-gif').style.display = "none";
    document.querySelector('.app-form-button').style.width = "auto";
    var appFormButton = document.querySelector(".app-form-button");
    appFormButton.onmouseover = function () {
        this.style.color = "#000";
        this.style.backgroundColor = "#35E6BA";
    };
    appFormButton.onmouseout = function () {
        this.style.color = "#35E6BA";
        this.style.backgroundColor = "transparent";
    };
    appFormButton.style.color = "#35E6BA";
    appFormButton.style.backgroundColor = "transparent";
    document.querySelector('.btn-send-text').style.display = "inline";
}
