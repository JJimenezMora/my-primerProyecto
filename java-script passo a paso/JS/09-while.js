'use strict'

alert("hola")


//while
var year =2018

while (year!=1991) {

    //Ejecuta esto
    console.log("este ano es "+year)    
    year--
   
}


//Do while
var year=30
do {
    alert("solo se ejecutara si es igual a " + year);
    year--;
} while (year >= 25);

//while con break
console.log(25+30)//sol es para ocserbar en consola

var year =2018

while (year!=1991) {

    //Ejecuta esto
    console.log("este ano es "+year)    
    year--
    // IF BREAK sirbe para detener el bucle en un punto enespesifico
    if(year<=2006)
    {  break   }
   
}
