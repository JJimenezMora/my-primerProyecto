'use strict'

//condicion IF
var edad1=32
var nombre="jelsy"
/**
 if (edad1>edad2) {
    console.log("la edad menor es edad2" +" "+edad2)
} else {
    console.log("la edad meneor es edad1"+" "+edad1)    
} 

*/

/**
 * //operaciones relacionada
 * 
 * mayor:>
 * meneor:<
 * mayor o igual:>=
 * meneor o igual:<=
 * igual:==
 * distinto:!=
 * 
 */
if (edad1>=18) {
    //es mayor de edad
    console.log(nombre+" tiene "+edad1+ " es mayor de edad")
    if(edad1==30){
        console.log("aun eres joven")
    }
    else{
        console.log("ya no eres joven")
    }
} else {
    //es meneor de edad
    console.log(nombre+" tiene "+edad1+" es menor de edad")
    
}


/**
 * operadores logico
 * 
 * AND(Y):      && 
 * OR(O):       ||
 * NEGACION:    ! 
 *  
 * */
var year=2019
if (year!=2017) {

    console.log("el ano no es 2017, es el "+ year)
    
} 