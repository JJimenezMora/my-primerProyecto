'use stric'

var edad= 18
var imprimir= "";
switch (edad) {
    case 18:
        imprimir= "acabas de cumplir la mayoria de edad"
        break;
    
        case 25:
        imprimir ="ya eres adulto"
        break;
        case 40:
        imprimir = "crisis de los de los cuarenta"
        case 70: 
        imprimir = "ya eres un anciano"


    default:
     imprimir = "tu edad es nula"
        break;
}
console.log(imprimir)