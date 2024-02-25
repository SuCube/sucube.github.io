const themeToggle = document.querySelector('input[type="checkbox"]');
const body = document.querySelector('body');
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Проверяем, какая тема предпочтительна в системе
if (prefersDarkScheme.matches) {
  // Если предпочтительна темная тема, устанавливаем переключатель в положение "включено"
  themeToggle.checked = true;
  body.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1156125593549680652/1206961733093040168/stars1.svg?ex=65dde9b5&is=65cb74b5&hm=2742436f03e8cce42d137a50004d85f272e47a2bf73430b3e62e8272a63f4608&')";
  body.style.backgroundColor = "#000000";
}

themeToggle.addEventListener('change', function() {
  if (this.checked) {
    body.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1156125593549680652/1206961733093040168/stars1.svg?ex=65dde9b5&is=65cb74b5&hm=2742436f03e8cce42d137a50004d85f272e47a2bf73430b3e62e8272a63f4608&')";
    body.style.backgroundColor = "#000000";
    // Добавьте другие стили для темной темы
  } else {
    body.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1156125593549680652/1206961732229271654/stars.svg?ex=65dde9b5&is=65cb74b5&hm=0c15aafe1b2a2095ea28e82a7de2903a208417f8668bef24c6d395d90398f384&')";
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
