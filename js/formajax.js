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
         alert(xhr.responseText);
       }else{
         alert(xhr.responseText);
       };
    };
  xhr.send(jsonString);
});
