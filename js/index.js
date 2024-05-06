// window.addEventListener("keyup",teclado)
window.addEventListener("keypress",teclado)
// // window.addEventListener("keyup",teclado)
// window.addEventListener("keyup",teclado)

function teclado(e){
    console.log(">>"+e.keyCode)
    (e.key==="ArrowUp")
    && (e.type==="keydown")
    ? document.querySelector(".campo").style.backgroundColor="red"
    : document.querySelector(".campo").style.backgroundColor=null;


}