const form = document.getElementById('contact_form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const send = {
    name: document.querySelector('input[name=name]').value,
    email: document.querySelector('input[name=email]').value,
    subject: document.querySelector('input[name=subject]').value,
    message: document.querySelector('input[name=message]').value
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
          if((send['name'].length >= 2) && (send['name'].length <= 50) && (send['email'].length >= 5) && (send['email'].length <= 50) && (!send['subject'] || send['subject'].length >= 2) && (send['message'].length >= 5)){
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
         setTimeout(function(){
           document.querySelector('.toast').classList.remove('toast--visible');
         }, 3000);
    };
  xhr.send(jsonString);
});
