'use strict'

/**
 * programa que pida dos numeros y
 * que diga cual es el mayor, el menor y si son iguales
 */
var numero1=parseInt(prompt('ingrece el primer numero',0))
var numero2=parseInt(prompt('ingrece el segundo numero',0))

while ( numero2<=0 || isNaN(numero2)) {
    numero2=parseInt(prompt('ingrece el segundo numero',0))
    
}

while (numero1<=0 || isNaN(numero1)) {
    
    numero1=parseInt(prompt('ingrece el primer numero',0))
}


if (numero1==numero2) {

    console.log("son igualtes")
  
} else if (numero1>=numero2){
    console.log(numero1 , numero2)
    alert("el numero mayor es "+ numero1)
    alert("el numero menor es "+ numero2)
}  else if(numero1<=numero2){
    console.log(numero1 , numero2)
    alert("el numero mayor es "+ numero2)
    alert("el numero menor es "+ numero1)

}else {console.log("ingrese un numero correcto")}