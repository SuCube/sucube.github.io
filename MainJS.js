const themeToggle = document.querySelector('input[type="checkbox"]');
const body = document.querySelector('body');
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Проверяем, какая тема предпочтительна в системе
if (prefersDarkScheme.matches) {
  // Если предпочтительна темная тема, устанавливаем переключатель в положение "включено"
  themeToggle.checked = true;
  body.style.backgroundImage = "url('https://drive.google.com/thumbnail?sz=w1920&id=10MzQXYPzJaUeukK58XjrM6WLicZ1wu2H')";
  body.style.backgroundColor = "#000000";
} 

themeToggle.addEventListener('change', function() {
  if (this.checked) {
    body.style.backgroundImage = "url('https://drive.google.com/thumbnail?sz=w1920&id=10MzQXYPzJaUeukK58XjrM6WLicZ1wu2H')";
    body.style.backgroundColor = "#000000";
    // Добавьте другие стили для темной темы
  } else {
    body.style.backgroundImage = "url('https://drive.google.com/thumbnail?sz=w1920&id=1bGd61OkRfKUJ3GkovNsZJQc3GmO06MlO')";
    body.style.backgroundColor = "#ffffff";
    // Добавьте другие стили для светлой темы
  }
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
