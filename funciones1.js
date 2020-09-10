
// Calculadora:

var tipoOperacion = "String"
var operador1 = Number();
var operador2 = Number();
var resultado = Number();



function calculadora (operador1, tipoOperacion,  operador2) {

    if (tipoOperacion==="+") {resultado = operador1 + operador2;}
    else if (tipoOperacion==="-") {resultado = operador1- operador2;}
    else if (tipoOperacion==="*") {resultado = operador1*operador2;}
    else if (tipoOperacion==="/") {resultado = operador1/ operador2;}
    
    return resultado;
    }
    
    var answer = calculadora(10, "+", 5);
    
    console.log (answer);
    