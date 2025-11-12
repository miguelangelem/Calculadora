/* Crear constantes*/
const display= document.querySelector("#display");
const buttons = document.querySelectorAll("button");

/* Funcion click, condicion y mostrar resultado*/
buttons.forEach((btn) => {
    btn.addEventListener("click", () =>{
        if(btn.id === "resultado"){
            display.value = eval(display.value)
        } else if ( btn.id === "limpiar") {
            display.value = ""
        } else if (btn.id =="eliminar") {
            display.value = display.value.slice(0, -1)
        } else {
            display.value += btn.id
        }
    } )
} )