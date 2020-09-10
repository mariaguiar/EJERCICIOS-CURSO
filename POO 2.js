
class Persona
{
   constructor (altura, peso, anyoNacimiento) {

   this.altura= altura;
   this.peso = peso;
   this. anyoNacimiento = anyoNacimiento;
}


mostrarTodos ()
{
 console.log("altura: "+ this.altura +", " + "peso: " + this.peso + ", " + "Año nacimiento: " + this.anyoNacimiento)  
};
    
}

persona1 = new Persona(1.7, 65, 1995);
persona1.mostrarTodos();
