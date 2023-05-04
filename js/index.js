document.addEventListener("DOMContentLoaded", function() {
  var slides = document.querySelectorAll(".carousel-item");
  var currentSlide = 0;

  function showSlide(n) {
    slides[currentSlide].classList.remove("active");
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  setInterval(nextSlide, 8000); // Transição a cada 3 segundos

  showSlide(currentSlide);
});