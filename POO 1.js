// edad

class Persona
 {
    constructor (altura, peso, anyoNacimiento) {

    this.altura= altura;
    this.peso = peso;
    this. anyoNacimiento = anyoNacimiento;
}


edad (persona)
{
  var n = this.anyoNacimiento;
  var anyoActual = 2020;
    return (anyoActual-n);
}

 }

 persona1 = new Persona(1.7, 65, 1995);
console.log(persona1.edad(new Persona));
