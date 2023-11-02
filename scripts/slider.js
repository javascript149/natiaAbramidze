let indexOfSlide = 1;
let slideTimer; 

function moveSlides(number) {
  slidesShower((indexOfSlide += number));
}

function currentSlide(number) {
  slidesShower((indexOfSlide = number));
}

function autoSlide() {
  slidesShower((indexOfSlide += 1)); 
}

function slidesShower(number) {
  let i;
  let slides = document.getElementsByClassName("myPictures");
  let dots = document.getElementsByClassName("dot");

  if (number > slides.length) {
    indexOfSlide = 1;
  }

  if (number < 1) {
    indexOfSlide = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[indexOfSlide - 1].style.display = "block";
  dots[indexOfSlide - 1].className += " active";
}

slidesShower(1);

function startAutoSlide() {
  slideTimer = setInterval(autoSlide, 3000);
}

startAutoSlide();
