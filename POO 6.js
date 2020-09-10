// Reto FINAL: 

class Agenda

{
    constructor (contactos) {

this.contactos = contactos;
    }


printPersonas ()
{
for (var i=0; i< this.contactos.length; i++){
console.log(this.personas[i].mostrarTodos());}
}
 }

contactos = new Agenda([1.7, 65, 1995, ["leer", "deportes"]], [1.5, 50, 1980, ["videojuegos", "cine"]],
[1.8, 75, 2000, ["fiesta", "guitarra"]] );

contactos.printPersonas()