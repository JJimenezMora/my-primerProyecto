'use strict'

/**
 * utilizando un bucle mostrar la media y la suma de los numeros intoducido hasta
 * introduccir un numero negativo y ahi mostrar el resultado
 *  
 */

var suma=0
var contador=0
 

do { 
    var numero = parseInt(prompt('Introdusca numeros, hasta ingresar uno negativo'))

    if (isNaN(numero)) {
        numero=0
        
    }
    else if (numero>=0) {
        suma=suma+numero
        //suma+=numero      //son las mismas
        contador++
        console.log(suma)

    }

    
} 
while (numero>=0);
alert("la suma es " +suma)
alert("la media es " +(suma/contador) )
