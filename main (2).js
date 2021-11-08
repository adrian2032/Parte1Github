var expresion = '';

$(document).ready(function() {
    // se implementa la funcion Jquery para document. llama al documento html, se carga una vez este listo el interprete, con function implementa todo lo que querramos hacer con la libre Jquery
    $('button').click(function(){
        //Todos los elementos seleccionados(clickeados) desde el documento que pertenezcan a la clase button se le aplicara la siguiente funcion 
        var caracter = $(this).text();
        //declaramos la variable "caracter" que sera igual al metodo: text () (establece o devuelve el contenido de texto de los elementos seleccionados),  cuando se utiliza este método para devolver contenido, devuelve el contenido de texto de todos los elementos coincidentes
        if(caracter === '='){
            expresion = eval(expresion);
            $('#pantalla').text(expresion)
            // si se cumple la condicion aplica eval, que "evalua" el contenido de la variable expresion arrojando un resultado y la muestra por pantalla utilizando JQUERY

        }
        else if(caracter =='c'){
            expresion = ""
            $('#pantalla').text(expresion)
            //si se cumple la condicion genera que expresion sea una cadena vacia y la muestra por pantalla utilizando JQUERY
        }
        else {
            expresion += caracter;
        $('#pantalla').text(expresion);

        //caso contrario agrega el contenido del elemento "caracter" a la variable "expresion", la cual a su vez es una cadena
        }
    });
});

$(document).keypress(function(e){
    // se implementa la funcion Jquery para el documento html. llama al documento html y toma todo lo que ingrese por teclado y function implementa todo lo que querramos hacer con la libreria Jquery
    var codigo = e.charCode;    
    //declara la variable "codigo" que es igual a charCode(), este método devuelve un número indicando el valor Unicode del carácter en el índice proporcionado
    console.log(codigo)
    var caracter = String.fromCharCode(codigo);
    // creando la variable caracter hacemos lo siguiente: tomamos el numero de unicode proveniente de la variable "codigo", lo convertimos en cadena implementando el metodo string.fromCharCode y lo guardamos en la variable caracter
    var posibles_caracteres = ['1', '2', '3', '4','5','6','7','8','9','0','+','-','*','/']
    console.log(caracter)
    if (posibles_caracteres.includes(caracter)){
        expresion += caracter;
    }else {
        if(caracter === 'c'){
            expresion = '';
        }
        else if(codigo === 13){
            expresion = eval(expresion);
        }
    }
    $('#pantalla').text(expresion);
    //muestra el contenido de "expresion" por pantalla
});



