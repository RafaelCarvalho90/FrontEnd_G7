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
