const setinha = document.getElementById("setinha");
const cabeca = document.getElementById("cabeca");
const iconescabeca = document.getElementsByClassName("iconescabeca");
const turistecimg = document.getElementById("turistecimg");

function inicio() {
  setTimeout(function () {
    cabeca.style.height = "100px";
    turistecimg.style.height = "100px";
    
    }, 2000);

  setTimeout(function () {
    
    Array.from(iconescabeca).forEach(function (elemento) {
        elemento.style.transform = "translate(0px, 0)";
    });
  }, 3500);
}

setinha.addEventListener("click", (event) => {
  window.scrollBy(0, 692);
});

//Carrossel meio da pagina
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

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const hotel = { lat: -22.5268304, lng: -43.2124645 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: hotel,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: hotel,
    map: map,
  });
}

window.initMap = initMap;