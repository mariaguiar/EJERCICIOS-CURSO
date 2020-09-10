// FACTORIAL

//for
var dato = n; // n= numero del que queramos saber el factorial
var resultado = dato;

for(var i= 1; i<dato; i++){
resultado= resultado*i;
}

console.log(resultado);


//while

var dato = n;
var resultado = dato;
var i = 1;

while (i< dato){
resultado= resultado*i;
i++;
}

console.log(resultado);


// MULTIPLOS DE 2 EN ARRAY: While 

var numeros = [1, 2, 3, 4, 5, 6, 7, 8];
var multiplo;
var i = 0;

while (i < numeros.length){
        
if (numeros[i] % 2 == 0){
multiplo = numeros[i];

console.log(multiplo);
 }
 i ++; 
}

// Suma 100 primeros numeros

var contador= 0;
for (i=0; i<=100; i++){
  contador = contador + i;
   }
      console.log(contador);


// Índice de "Pepe"

// con IndexOf
var nombres = ['Ana', 'Jose', 'Pepe', 'Carolina'];
var posicion= [];
var elemento = 'Pepe';
var i = nombres.indexOf(elemento);

while (i != -1) {
  posicion.push(i);
  i = nombres.indexOf(elemento, i + 1);
}
console.log(posicion);

// Sin indexOf
var nombres = ['Ana', 'Jose', 'Pepe', 'Carolina'];

for (var i = 0; i< nombres.length; i++) {
 if (nombres[i]==="Pepe") {
   console.log(i)
 }

}



// Vectores de 100 numeros aleatorios 0-20

var vector1 = [];
var vectorMax = 100;
var vector1 = [];

for (var i = 0; i < vectorMax; i++) {
     vector1.push(Math.floor(Math.random()*(20-0)));
}
console.log(vector1);


var vector2 = [];

for (var i = 0; i < vectorMax; i++) {
     vector2.push(Math.floor(Math.random()*(20-0)));
}
console.log(vector2);


//Suma vectores anteriores
{var suma = [];
    for(var i = 0; i < 100; i++)
    {
    suma[i] = vector1[i] + vector2[i];
    }
    console.log(suma.toString());
    }
