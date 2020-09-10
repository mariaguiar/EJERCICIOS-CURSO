// Reto 4: aficiones

class Persona
 {
    constructor (altura, peso, anyoNacimiento, aficiones) {

    this.altura= altura;
    this.peso = peso;
    this. anyoNacimiento = anyoNacimiento;
    
    this.aficiones = aficiones;
}


mostrarAficiones ()
{var af = this.aficiones;

console.log(this.aficiones)
}
 }

 persona1 = new Persona(1.7, 65, 1995, ["leer", "deportes"]);
persona1.mostrarAficiones();