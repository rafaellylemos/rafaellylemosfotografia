
var slideIndex = 0;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slideshow")[0].getElementsByTagName("img");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex-1].style.opacity = "1";

  var slideNavs = document.querySelectorAll('.slide-nav');
  slideNavs.forEach(function(slideNav) {
    var navIndex = slideNav.getAttribute('data-slide-index');
    if (navIndex == slideIndex) {
      slideNav.style.color = '#557A7D';
    } else {
      slideNav.style.color = 'gray';
    }
  });

  setTimeout(showSlides, 3000);
}

showSlides();

var slideNavs = document.querySelectorAll('.slide-nav');
slideNavs.forEach(function(slideNav) {
  slideNav.addEventListener('click', function() {
    var slideIndex = slideNav.getAttribute('data-slide-index');
    var slides = document.querySelectorAll('.slideshow img');
    slides.forEach(function(slide) {
      slide.style.opacity = '0';
    });
    slides[slideIndex - 1].style.opacity = '1';

    slideNavs.forEach(function(nav) {
      var navIndex = nav.getAttribute('data-slide-index');
      if (navIndex == slideIndex) {
        nav.style.color = '#557A7D';
      } else {
        nav.style.color = 'gray';
      }
    });
  });
});

const menuButton = document.querySelector('.button-menu');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});
