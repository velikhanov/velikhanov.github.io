const form = document.getElementById('contact_form');
var myTimer;
form.addEventListener('submit', function(e) {
  e.preventDefault();
  clearTimeout(myTimer);
  const send = {
    name: document.querySelector('input[name=name]').value,
    email: document.querySelector('input[name=email]').value,
    subject: document.querySelector('input[name=subject]').value,
    message: document.querySelector('input[name=message]').value,
    lang: (localStorage.getItem("lang")) || (window.navigator.userLanguage) || (window.navigator.language)
    // token: document.querySelector('input[name=token]').value
  };
  const jsonString = JSON.stringify(send);
  // const isIE = /*@cc_on!@*/false || !!document.documentMode;
  const xhr = new XMLHttpRequest();
  const action = form.getAttribute('action');
  xhr.open('POST', action, true);
  xhr.setRequestHeader('Content-type', 'text/plain');
  xhr.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
          if((send['name'].length <= 50) && (send['email'].length >= 5) && (send['email'].length <= 50) && (/\S+@\S+\.\S+/.test(send['email'])) && (send['subject'].length <= 50) && (send['message'].length >= 5)){
             if(document.querySelector(".toast").classList.contains('toast--error')){
                document.querySelector(".toast").classList.remove('toast--error');
                document.querySelector(".toast").classList.add('toast--success');
             }else{
               document.querySelector(".toast").classList.add('toast--success');
             };
             ///
             document.getElementById('contact_form').reset();
             if(!document.querySelector('input[name=name]').hasAttribute('disabled') && !document.querySelector('input[name=email]').hasAttribute('disabled') && !document.querySelector('input[name=subject]').hasAttribute('disabled') && !document.querySelector('input[name=message]').hasAttribute('disabled') && !document.querySelector('.app-form-button').hasAttribute('disabled')){
               document.querySelector('input[name=name]').disabled = true;
               document.querySelector('input[name=email]').disabled = true;
               document.querySelector('input[name=subject]').disabled = true;
               document.querySelector('input[name=message]').disabled = true;
               document.querySelector('.app-form-button').disabled = true;
             };
             ///
             document.querySelector(".toast").innerHTML = this.responseText;
          }else{
            if(document.querySelector(".toast").classList.contains('toast--success')){
               document.querySelector(".toast").classList.remove('toast--success');
               document.querySelector(".toast").classList.add('toast--error');
            }else{
              document.querySelector(".toast").classList.add('toast--error');
            };
            document.querySelector(".toast").innerHTML = this.responseText;
          };
       }else{
         if(document.querySelector(".toast").classList.contains('toast--success')){
            document.querySelector(".toast").classList.remove('toast--success');
            document.querySelector(".toast").classList.add('toast--error');
         }else{
           document.querySelector(".toast").classList.add('toast--error');
         };
             document.querySelector(".toast").innerHTML = this.responseText;
         };
         document.querySelector('.toast').classList.add('toast--visible');
         myTimer = setTimeout(function(){
           document.querySelector('.toast').classList.remove('toast--visible');
         }, 7500);
    };
    xhr.onerror = function() {
        if(document.querySelector(".toast").classList.contains('toast--success')){
           document.querySelector(".toast").classList.remove('toast--success');
           document.querySelector(".toast").classList.add('toast--error');
        }else{
          document.querySelector(".toast").classList.add('toast--error');
        };
        if((localStorage.getItem("lang") == "az") || (window.navigator.userLanguage == "az") || (window.navigator.language) == "az"){
            document.querySelector(".toast").innerHTML = "Bir səhv baş verdi. Server, yəqin ki, müvəqqəti olaraq əlçatan deyil, xahiş edirəm daha sonra yenidən cəhd edin!";
        }else if((localStorage.getItem("lang") == "ru") || (window.navigator.userLanguage == "ru") || (window.navigator.language) == "ru"){
            document.querySelector(".toast").innerHTML = "Произошла ошибка. Вероятно, сервер временно недоступен, повторите попытку позже!";
        }else{
            document.querySelector(".toast").innerHTML = "An error has occurred. The server is probably temporarily unavailable, please try again later!";
        };
        document.querySelector('.toast').classList.add('toast--visible');
        myTimer = setTimeout(function(){
          document.querySelector('.toast').classList.remove('toast--visible');
        }, 7500);
    };
  xhr.send(jsonString);
});
