
//Reto 2

function Paieses(pais){
    let Europa=["España","Francia","Suiza","Andorra","Alemania"];
    let America=["America","Mexico","CAnada","Groenlandia","Bermudas"];
    let  Asia=["China","Japon","Tailandia","Mongolia","India"];
    let Africa=["Marruecos","Congo","Botwana","SudAfria","Somalia"];
    let Oceania=["Australia","Nueva Zelanda","Samoa","Fiyi","Tonga"];
    let Continentes=[Europa,America,Asia,Africa,Oceania];
    let Cont=["Europa","America","Asia","Africa","Oceania"];
    for(let i = 0;i<Continentes.length;i++){

        for(let a = 0;a<Continentes[i].length;a++){

            if(Continentes[i][a]==pais){
                
                console.log(Cont[i]);
            }

        }
    }


}

//Reto 4

function delreves(cambiar){
    let tamano = cambiar.length;
    let letra = new Array(tamano);

   for (let i = 0; i < tamano; i++) {
       letra[i]= cambiar[tamano - i - 1];



   }
   return letra;
}

//Reto 5

function arcoiris(array)
{
        for (let i = 0; i<array.length; i++)
    {
        if (array[i] === "verde" || array[i] === "azul" || array[i] === "amarillo"|| array[i] === "rojo"
        || array[i] === "naranja"|| array[i] === "morado")
        {console.log("Si esta en el arcoiris");}
        else {console.log("No esta en el arcoiris");}
    }


}


arcoiris(["verde", "amarillo"]);

//Reto 6 

function  Par(Array){
    let Resultado=false;
    
    for(let i=0;i<Array.length;i++){
        if(Array[i]%2==0){
            Resultado= true;
        }
    }
    return Resultado;
}


// Reto 7

function nombres(array)
{
   for(var i=0; i<array.length; i++) 
   {
      for(var j=0; j<array[i].length; j++) 
      {
      if (array[i][0]=== "M"){}
      }
      console.log(array[i],": Verdadero");
   }
}

nombres(["Maria", "Marta"]);

//Reto 8

function SumaCar(Array){
    let Resultado=0;
    for(let i=0;i<Array.length;i++){
        for(let a=0;a<Array[i].length;a++){

            ++Resultado;
        }
        
        
    }
    return Resultado;
}