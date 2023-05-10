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
  setTimeout(showSlides, 3000);
}

showSlides();