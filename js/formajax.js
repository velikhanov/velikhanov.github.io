"use strict";
let myTimer;
const form = document.getElementById("contact_form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Clear any existing timer
    clearTimeout(myTimer);

    const lang = localStorage.getItem("lang") || window.navigator.userLanguage || window.navigator.language;
    document.querySelector(".app-form-button").classList.add("loading");;
    document.querySelector('.btn-send-text').style.display = "none";
    document.querySelector('.btn-loading').style.display = "block";
    
    (function(){
        emailjs.init({publicKey: "_GCxj9wp4lONoUvJG"});
    })();

    const formData = {
        name: document.querySelector("input[name=name]").value.replace(/[^\u0400-\u04FF\u00C7\u018F\u011E\u04D9\u0049\u0130\u00D6\u015E\u00DC\u00E7\u01DD\u0259\u04D8\u04D9\u1D4A\u2094\u011F\u0131\u0069\u00F6\u015F\u00FC\w@.?()+"\/,:;*%!№$#=-]+/gi, "").replace(/\s+/g, ""),
        email: document.querySelector("input[name=email]").value.replace(/[^\w@._]+/g, "").replace(/\s+/g, ""),
        subject: document.querySelector("input[name=subject]").value.replace(/[^\u0400-\u04FF\u00C7\u018F\u011E\u04D9\u0049\u0130\u00D6\u015E\u00DC\u00E7\u01DD\u0259\u04D8\u04D9\u1D4A\u2094\u011F\u0131\u0069\u00F6\u015F\u00FC\w@.?()+"\/,:;*%!№$#=-]+/gi, "").replace(/\s+/g, ""),
        message: document.querySelector("input[name=message]").value.replace(/[^\u0400-\u04FF\u00C7\u018F\u011E\u04D9\u0049\u0130\u00D6\u015E\u00DC\u00E7\u01DD\u0259\u04D8\u04D9\u1D4A\u2094\u011F\u0131\u0069\u00F6\u015F\u00FC\w@.?()+"\/,:;*%!№$#=-]+/gi, "").replace(/\s+/g, "")
    };    

    const toast = document.querySelector(".toast");
    if (formData.name.length <= 50 && formData.email.length >= 5 && formData.email.length <= 50 && /\S+@\S+\.\S+/.test(formData.email) && formData.subject.length <= 50 && formData.message.length >= 1) {
        emailjs.send("service_mmm1wzr", "template_04r4zio", formData).then(
            function(_) {
                if (toast.classList.contains("toast--error")) {
                    toast.classList.remove("toast--error");
                    toast.classList.add("toast--success");
                } else {
                    toast.classList.add("toast--success");
                }
        
                document.getElementById("contact_form").reset();
        
                const fields = ["name", "email", "subject", "message"];
                fields.forEach(field => {
                    const input = document.querySelector(`input[name=${field}]`);
                    if (!input.hasAttribute("disabled")) {
                        input.disabled = true;
                    }
                });
        
                const button = document.querySelector(".app-form-button");
                if (!button.hasAttribute("disabled")) {
                    button.disabled = true;
                }

                if (lang === "az") {
                    toast.innerHTML = "Müraciət uğurla göndərildi!";
                } else if (lang === "ru") {
                    toast.innerHTML = "Заявка успешно отправлена!";
                } else {
                    toast.innerHTML = "The request has been successfully sent!";
                }

                toast.classList.add("toast--visible");

                myTimer = setTimeout(function () {
                    toast.classList.remove("toast--visible");
                }, 2000);
            },
            function(_) {
                if (toast.classList.contains("toast--success")) {
                    toast.classList.remove("toast--success");
                    toast.classList.add("toast--error");
                } else {
                    toast.classList.add("toast--error");
                }

                if (lang === "az") {
                    toast.innerHTML = "Server müvəqqəti olaraq əlçatmazdır. Zəhmət olmasa bir az sonra yenə cəhd edin!";
                } else if (lang === "ru") {
                    toast.innerHTML = "Сервер временно недоступен. Пожалуйста, повторите попытку позже!";
                } else {
                    toast.innerHTML = "The server is temporarily unavailable. Please try again later!";
                }

                toast.classList.add("toast--visible");

                myTimer = setTimeout(function () {
                    toast.classList.remove("toast--visible");
                }, 2000);
            }
        ).then(function() {
            // Reset loading effect
            resetLoadingEffect();
        });
    } else {
        if (toast.classList.contains("toast--success")) {
            toast.classList.remove("toast--success");
            toast.classList.add("toast--error");
        } else {
            toast.classList.add("toast--error");
        }

        if (lang === "az") {
            toast.innerHTML = "Daxil etdiyiniz məlumatların düzgünlüyünü yoxlayın!";
        } else if (lang === "ru") {
            toast.innerHTML = "Проверьте корректность введенных вами данных!";
        } else {
            toast.innerHTML = "Check the correctness of the data you entered!";
        }

        toast.classList.add("toast--visible");

        // Reset loading effect
        resetLoadingEffect();

        myTimer = setTimeout(function () {
            toast.classList.remove("toast--visible");
        }, 2000);
    }
});

function resetLoadingEffect() {
    document.querySelector('.btn-loading').style.display = "none";
    const appFormButton = document.querySelector(".app-form-button");
    appFormButton.classList.remove("loading", "disabled");
    // Ensure the hover effect is restored by removing the 'clicked' class
    appFormButton.classList.remove("clicked");
    document.querySelector('.btn-send-text').style.display = "inline";
}
