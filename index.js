const setinha = document.getElementsByClassName("setinha");
const cabeca = document.getElementById("cabeca");
const iconescabeca = document.getElementsByClassName("iconescabeca");
const turistecimg = document.getElementById("turistecimg");
const lugares = document.getElementsByClassName("lugares");
const setaesquerda = document.getElementsByClassName("setaesquerda");
const setadireita = document.getElementsByClassName("setadireita");
const caixas = document.getElementsByClassName("caixas");

let movspd = 310;
let dir = 0;

function inicio() {
  setTimeout(function () {
    cabeca.style.height = "50px";
    turistecimg.style.height = "50px";
    document.body.style.overflowY = "visible";

    Array.from(caixas).forEach(function (elemento) {
      elemento.pos = 0;
    });

    Array.from(setaesquerda).forEach(function (elemento) {
      elemento.addEventListener("click", (event) => {
        rolarparaesquerda(
          elemento.parentElement.parentElement.getElementsByClassName(
            "lugares"
          ),
          elemento.parentElement.parentElement
        );
      });
    });

    Array.from(setadireita).forEach(function (elemento) {
      elemento.addEventListener("click", (event) => {
        rolarparadireita(
          elemento.parentElement.parentElement.getElementsByClassName(
            "lugares"
          ),
          elemento.parentElement.parentElement
        );
      });
    });
  }, 2000);

  setTimeout(function () {
    Array.from(iconescabeca).forEach(function (elemento) {
      elemento.style.transform = "translate(0px, 0)";
    });
  }, 3500);
}

Array.from(setinha).forEach(function (elemento) {
  elemento.addEventListener("click", (event) => {
    window.scrollTo(0, 792);
  });
});

function rolarparadireita(lug, da) {
  if (da.pos > -movspd * (20 - 5)) {
    da.pos = da.pos - movspd;
    Array.from(lug).forEach(function (elemento) {
      elemento.style.transform = "translateX(" + da.pos + "px)";
    });
  }
}

function rolarparaesquerda(lug, da) {
  if (da.pos != 0) {
    da.pos = da.pos + movspd;
    Array.from(lug).forEach(function (elemento) {
      elemento.style.transform = "translateX(" + da.pos + "px)";
    });
  }
}

//Carrossel meio da pagina
document.addEventListener("DOMContentLoaded", function () {
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