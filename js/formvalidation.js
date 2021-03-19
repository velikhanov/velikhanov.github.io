// Begin name validation
document.querySelector("input[name=name]").onchange = function() {
  if((document.querySelector("input[name=name]").value.length > 50)){
    if(!document.querySelector("input[name=name]").classList.contains("error")){
      document.querySelector("input[name=name]").classList.add("error");
    };
  }else{
    if(document.querySelector("input[name=name]").classList.contains("error")){
      document.querySelector("input[name=name]").classList.remove("error");
    };
  };
};
// End name validation
// Begin email validation
document.querySelector("input[name=email]").onchange = function() {
  if((document.querySelector("input[name=email]").value.length < 7) || (/\S+@\S+\.\S+/.test(document.querySelector("input[name=email]").value) == 0) || (document.querySelector("input[name=email]").value.length > 50)){
    if(!document.querySelector("input[name=email]").classList.contains("error")){
      document.querySelector("input[name=email]").classList.add("error");
    };
  }else{
    if(document.querySelector("input[name=email]").classList.contains("error")){
      document.querySelector("input[name=email]").classList.remove("error");
    };
  };
};
// End email validation
// Begin email validation
document.querySelector("input[name=subject]").onchange = function() {
  if((document.querySelector("input[name=subject]").value.length > 50)){
    if(!document.querySelector("input[name=subject]").classList.contains("error")){
      document.querySelector("input[name=subject]").classList.add("error");
    };
  }else{
    if(document.querySelector("input[name=subject]").classList.contains("error")){
      document.querySelector("input[name=subject]").classList.remove("error");
    };
  };
};
// End email validation
// Begin email validation
document.querySelector("input[name=message]").onchange = function() {
  if((document.querySelector("input[name=message]").value.length < 5)){
    if(!document.querySelector("input[name=message]").classList.contains("error")){
      document.querySelector("input[name=message]").classList.add("error");
    };
  }else{
    if(document.querySelector("input[name=message]").classList.contains("error")){
      document.querySelector("input[name=message]").classList.remove("error");
    };
  };
};
// End email validation
