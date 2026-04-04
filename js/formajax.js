"use strict";
let myTimer;
const form = document.getElementById("contact_form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Clear any existing timer
        clearTimeout(myTimer);

        const lang = localStorage.getItem("lang") || window.navigator.language;
        const submitBtn = document.querySelector(".submit-btn");
        const btnText = document.querySelector('.btn-send-text');
        
        submitBtn.classList.add("loading");
        submitBtn.disabled = true;
        
        (function(){
            emailjs.init({publicKey: "_GCxj9wp4lONoUvJG"});
        })();

        const formData = {
            name: document.querySelector("input[name=name]").value,
            email: document.querySelector("input[name=email]").value,
            subject: document.querySelector("input[name=subject]").value,
            message: document.querySelector("input[name=message]").value
        };    

        const toast = document.querySelector(".toast");
        if (formData.name.length <= 50 && formData.email.length >= 5 && formData.email.length <= 50 && /\S+@\S+\.\S+/.test(formData.email) && formData.subject.length <= 50 && formData.message.length >= 1) {
            emailjs.send("service_mmm1wzr", "template_04r4zio", formData).then(
                function(_) {
                    toast.classList.remove("toast--error");
                    toast.classList.add("toast--success");
            
                    document.getElementById("contact_form").reset();
            
                    const fields = ["name", "email", "subject", "message"];
                    fields.forEach(field => {
                        const input = document.querySelector(`input[name=${field}]`);
                        if (input) input.disabled = true;
                    });
            
                    submitBtn.disabled = true;

                    if (lang.startsWith("az")) {
                        toast.innerHTML = "Müraciət uğurla göndərildi!";
                    } else if (lang.startsWith("ru")) {
                        toast.innerHTML = "Заявка успешно отправлена!";
                    } else {
                        toast.innerHTML = "The request has been successfully sent!";
                    }

                    toast.classList.add("toast--visible");

                    myTimer = setTimeout(function () {
                        toast.classList.remove("toast--visible");
                    }, 3000);
                },
                function(_) {
                    toast.classList.remove("toast--success");
                    toast.classList.add("toast--error");

                    if (lang.startsWith("az")) {
                        toast.innerHTML = "Xəta baş verdi. Zəhmət olmasa bir az sonra yenə cəhd edin!";
                    } else if (lang.startsWith("ru")) {
                        toast.innerHTML = "Произошла ошибка. Пожалуйста, повторите попытку позже!";
                    } else {
                        toast.innerHTML = "An error occurred. Please try again later!";
                    }

                    toast.classList.add("toast--visible");

                    myTimer = setTimeout(function () {
                        toast.classList.remove("toast--visible");
                    }, 3000);
                }
            ).finally(function() {
                resetLoadingEffect();
            });
        } else {
            toast.classList.remove("toast--success");
            toast.classList.add("toast--error");

            if (lang.startsWith("az")) {
                toast.innerHTML = "Daxil etdiyiniz məlumatların düzgünlüyünü yoxlayın!";
            } else if (lang.startsWith("ru")) {
                toast.innerHTML = "Проверьте корректность введенных вами данных!";
            } else {
                toast.innerHTML = "Check the correctness of the data you entered!";
            }

            toast.classList.add("toast--visible");
            resetLoadingEffect();

            myTimer = setTimeout(function () {
                toast.classList.remove("toast--visible");
            }, 3000);
        }
    });
}

function resetLoadingEffect() {
    const submitBtn = document.querySelector(".submit-btn");
    if (submitBtn) {
        submitBtn.classList.remove("loading");
        // If not success, we might want to re-enable button. 
        // But the original code disabled it on success.
        // Let's check if toast has success class.
        const toast = document.querySelector(".toast");
        if (!toast.classList.contains("toast--success")) {
            submitBtn.disabled = false;
        }
    }
}
