window.addEventListener("keydown",teclado)
window.addEventListener("keyup",teclado)

function teclado(e){
    // console.log(e)
    (e.key==="Enter")
    && (e.type==="keydown")
    ? document.querySelector(".campo").style.backgroundColor="red"
    : document.querySelector(".campo").style.backgroundColor=null;


}