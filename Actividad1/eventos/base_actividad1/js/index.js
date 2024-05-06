/*
-Para MOVER la nave
document.querySelector(".nave").style.bottom="__px";

-Para poder SUSTITUIR una imagen por otra
document.querySelector(".nave").src="img/nave2.png";
*/
// Escucha los eventos de teclado al presionar y soltar teclas
window.addEventListener("keydown", teclado);
window.addEventListener("keyup", teclado);

// Selecciona el elemento HTML con la clase "nave" y lo almacena en la constante NAVE
const NAVE = document.querySelector(".nave");

// Inicializa la variable "empezar" como falsa y la variable "y" como 0
let empezar = false;
let y = 0;

// Función que se ejecuta al presionar o soltar una tecla
function teclado(e) {
    // Obtiene la tecla presionada
    const TECLA = e.key;

    // Si la tecla presionada es "Enter" y es un evento de presionar tecla
    // activa la función "combustion", de lo contrario, establece la imagen de la nave como "nave1.png"
    (TECLA === "Enter") && (e.type === "keydown")
    ? combustion()
    : NAVE.src = "img/nave1.png";

    // Si la tecla presionada es "ArrowUp" y el juego ha empezado
    // mueve la nave hacia arriba incrementando su posición vertical
    (TECLA === "ArrowUp" && empezar) && (NAVE.style.bottom = `${y += 10}px`);
}

// Función que activa la combustión de la nave al presionar "Enter"
function combustion() {
    // Cambia la imagen de la nave por "nave2.png"
    NAVE.src = "img/nave2.png";
    // Establece que el juego ha empezado
    empezar = true;
}
