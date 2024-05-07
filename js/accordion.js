(function() {
    'use strict';
    var accordion = document.querySelector('.accordion');
    accordion.addEventListener('click', function(event) {
      event.preventDefault();
      if (event.target.classList.contains('accordionTitle')) {
        var title = event.target;
        var content = event.target.parentNode.nextElementSibling;
        title.classList.toggle('accordionTitleActive');
        content.classList.toggle('accordionItemCollapsed');
  
        if (content.classList.contains('accordionItemCollapsed')) {
          setTimeout(function() {
            content.classList.remove('animateIn');
            content.classList.add('animateOut');
          }, 1);
        } else {
          setTimeout(function() {
            content.classList.remove('animateOut');
            content.classList.add('animateIn');
          }, 1);
        }
      }
    });
  })();
