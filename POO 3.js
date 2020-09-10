

class Persona
{
    constructor (altura, peso, anyoNacimiento, aficiones) 
    {
      this.altura= altura;
      this.peso = peso;
      this. anyoNacimiento = anyoNacimiento;
      this.aficiones = aficiones;
    }

    imc ()
    {
      var p = this.peso;
      var a = this.altura;
      return (p/(a*a));
    }


    edad ()
    {
       var n = this.anyoNacimiento;
       var anyoActual = 2020;
       return (anyoActual-n);
    }

    
    mostrarTodos ()
    {
       console.log("altura: "+ this.altura + ", " + "peso: " + this.peso + ", " + "Año nacimiento: " + this.anyoNacimiento)

    }

    
    mostrarAficiones ()
    {
       console.log(this.aficiones)
    }
}

persona1 = new Persona(1.7, 65);
console.log(persona1.imc(new Persona));

persona1 = new Persona(1.7, 65, 1995);
console.log(persona1.edad(new Persona));

persona1 = new Persona(1.7, 65, 1995);
persona1.mostrarTodos();

persona1 = new Persona(1.7, 65, 1995, ["leer", "deportes"]);
persona1.mostrarAficiones();




var p1 = new Persona(1.7, 65, 1995);
var p2 = new Persona(1.5, 50, 1980);
var p3 = new Persona (1.8, 75, 2000);


class Agenda
{
    constructor (contactos) 
    {
    this.contactos = contactos;
    }
 
    printPersonas ()
    {
        for (var i=0; i< this.contactos.length; i++){
        console.log(this.contactos[i].mostrarTodos());}
    }
}
 
var agenda1 = new Agenda([p1, p2, p3]);
agenda1.printPersonas();

























