$(function() {
    $("#data").datepicker();
  });

const menuButton = document.querySelector('.button-menu--contact');
const menu = document.getElementById('menu--contact');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('hidden--contact');
});