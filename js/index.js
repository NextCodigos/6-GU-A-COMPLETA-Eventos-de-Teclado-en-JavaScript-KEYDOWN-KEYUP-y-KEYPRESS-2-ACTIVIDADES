window.addEventListener("keydown",teclado)
// window.addEventListener("keyup",teclado)

function teclado(e){
    // console.log(e.key)
    (e.key==="ArrowUp")
    && (e.type==="keydown")
    ? document.querySelector(".campo").style.backgroundColor="red"
    : document.querySelector(".campo").style.backgroundColor=null;


}