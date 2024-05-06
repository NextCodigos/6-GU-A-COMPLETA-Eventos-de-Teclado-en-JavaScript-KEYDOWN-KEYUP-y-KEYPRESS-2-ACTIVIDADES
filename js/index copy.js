document.querySelector(".campo").addEventListener("keydown",teclado)
document.querySelector(".campo").addEventListener("keyup",teclado)

function teclado(e){
    // console.log(e)
    (e.key==="Enter")
    ? alert("Has pilsado la tecla enter")
    :e.preventDefault()

}