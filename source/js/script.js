'use strict';

window.addEventListener("load", function () {
  var menu = document.querySelector('.header__navigation');
  var menuToggle = document.querySelector('.header__menu-button');

  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      menuToggle.classList.toggle('header__menu-button--closed');
      menu.classList.toggle('header__navigation--close');
    });
  }
});
