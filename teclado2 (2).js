//Esta funcion se encarga de declarar variables que van a tomar los botones del html y ejecutar distintas acciones dependiendo del tipo de cada uno
function init(){
    let button = document.querySelectorAll("button");
    var pantalla = document.getElementById('pantalla');
    for(let i = 0; i < button.length; i++){
        button[i].addEventListener("click", function(){
            if(button[i].textContent === '='){
                let resultado = eval(pantalla.textContent);
                // crea la variable resultado y evalua lo que hay en la lista y devuelve un resultado que sera mostrado en pantalla
                pantalla.textContent = resultado;
            }
            else if(button[i].textContent === "c") {
                pantalla.textContent = "" 

            }
            else {
                pantalla.textContent += button[i].textContent; 
                // suma el elemento button i en la lista de botones del html
            }
        });
    }
}

function desdeTeclado(e){
    let codigo = e.charCode;
    let caracter = String.fromCharCode(codigo);
    let posibles_caracteres = ["9", "8", "7","6","5","4","3","2","1","=","+","*","/","-","0","c"];
    console.log(codigo)
    if(posibles_caracteres.includes(caracter)){
        if(caracter == "c"){  pantalla.textContent = ""}
        else{
            pantalla.textContent += caracter
        }
    }
    else if (codigo == 13){
        let resultado = eval(pantalla.textContent);
        pantalla.textContent = resultado;
    }
}

document.onkeypress = desdeTeclado;