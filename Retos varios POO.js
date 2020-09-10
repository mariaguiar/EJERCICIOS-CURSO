// Reto 1: IMC Persona

class Persona
 {
    constructor (altura, peso) {

    this.altura= altura;
    this.peso = peso;
}

imc (persona)
{
var p = this.peso;
 var a = this.altura;
    return (p/(a*a));
}

 }

persona1 = new Persona(1.7, 65);
console.log(persona1.imc(new Persona));


