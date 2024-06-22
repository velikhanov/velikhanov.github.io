"use strict";

document.getElementById("contact_form").onsubmit = function () {
    let emailInput = document.querySelector("input[name=email]");
    let emailValue = emailInput.value.replace(/[^\w@._]+/g, "").replace(/\s+/g, "");

    if (emailValue.length < 1) {
        if (!emailInput.classList.contains("error")) {
            emailInput.classList.add("error");
        }
    }

    let messageInput = document.querySelector("input[name=message]");
    let messageValue = messageInput.value.replace(/[^\u0400-\u04FF\u00C7\u018F\u011E\u04D9\u0049\u0130\u00D6\u015E\u00DC\u00E7\u01DD\u0259\u04D8\u04D9\u1D4A\u2094\u011F\u0131\u0069\u00F6\u015F\u00FC\w@.?()+"\/,:;*%!№$#=-]+/gi, "").replace(/\s+/g, "");

    if (messageValue.length < 1) {
        if (!messageInput.classList.contains("error")) {
            messageInput.classList.add("error");
        }
    }
};

document.querySelector("input[name=name]").oninput = function () {
    let nameInput = document.querySelector("input[name=name]");
    let nameValue = nameInput.value.replace(/[^\u0400-\u04FF\u00C7\u018F\u011E\u04D9\u0049\u0130\u00D6\u015E\u00DC\u00E7\u01DD\u0259\u04D8\u04D9\u1D4A\u2094\u011F\u0131\u0069\u00F6\u015F\u00FC\w@.?()+"\/,:;*%!№$#=-]+/gi, "").replace(/\s+/g, "");

    if (nameValue.length > 50) {
        if (!nameInput.classList.contains("error")) {
            nameInput.classList.add("error");
        }
    } else if (nameInput.classList.contains("error")) {
        nameInput.classList.remove("error");
    }
};

document.querySelector("input[name=email]").oninput = function () {
    let emailInput = document.querySelector("input[name=email]");
    let emailValue = emailInput.value.replace(/[^\w@._]+/g, "").replace(/\s+/g, "");

    if (emailValue.length < 5 || !/\S+@\S+\.\S+/.test(emailValue) || emailValue.length > 50) {
        if (!emailInput.classList.contains("error")) {
            emailInput.classList.add("error");
        }
    } else if (emailInput.classList.contains("error")) {
        emailInput.classList.remove("error");
    }
};

document.querySelector("input[name=subject]").oninput = function () {
    let subjectInput = document.querySelector("input[name=subject]");
    let subjectValue = subjectInput.value.replace(/[^\u0400-\u04FF\u00C7\u018F\u011E\u04D9\u0049\u0130\u00D6\u015E\u00DC\u00E7\u01DD\u0259\u04D8\u04D9\u1D4A\u2094\u011F\u0131\u0069\u00F6\u015F\u00FC\w@.?()+"\/,:;*%!№$#=-]+/gi, "").replace(/\s+/g, "");

    if (subjectValue.length > 50) {
        if (!subjectInput.classList.contains("error")) {
            subjectInput.classList.add("error");
        }
    } else if (subjectInput.classList.contains("error")) {
        subjectInput.classList.remove("error");
    }
};

document.querySelector("input[name=message]").oninput = function () {
    let messageInput = document.querySelector("input[name=message]");
    let messageValue = messageInput.value.replace(/[^\u0400-\u04FF\u00C7\u018F\u011E\u04D9\u0049\u0130\u00D6\u015E\u00DC\u00E7\u01DD\u0259\u04D8\u04D9\u1D4A\u2094\u011F\u0131\u0069\u00F6\u015F\u00FC\w@.?()+"\/,:;*%!№$#=-]+/gi, "").replace(/\s+/g, "");

    if (messageValue.length < 5) {
        if (!messageInput.classList.contains("error")) {
            messageInput.classList.add("error");
        }
    } else if (messageInput.classList.contains("error")) {
        messageInput.classList.remove("error");
    }
};
