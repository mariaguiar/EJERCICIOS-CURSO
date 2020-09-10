
//RETO 1: Variables y tipos de datos


var a = "Lorem ipsum dolor sit amet,"

var b = " consectetur adipiscing elit.<br> Phasellus mattis vehicula consequat."

var c = "Proin dapibus nunc <br> quam, nec dictum erat feugiat vitae.<br>"

var d = "<br> Curabitur dignissim nisi a est vulputate tristique."

var e =" Curabitur <br> maximus erat leo, sit amet facilisis est egestas sed.<br>"

var f = "<br>Morbi aliquam, ipsum eget volutpat blandit, lectus odio <br> condimentum dui, eget dictum quam ipsum sit amet <br> nulla."

document.write(a.bold() + b + c.italics() + d.strike() + e + f.bold());


// RETO 2: Precio bruto (Condicionales)

var precioNeto = Number()
var precioBrutoEspanya1 = precioNeto + (precioNeto*0.16)
var precioBrutoFuera1= precioBrutoEspanya1 + (precioNeto*0.1)
var precioBrutoEspanya2 = precioNeto + (precioNeto*0.1)
var precioBrutoFuera2= precioBrutoEspanya2 + (precioNeto*0.1)
var procedencia = ""



if (precioNeto>= 2000 && procedencia == "España"){
  console.log("El precio bruto es de " + precioBrutoEspanya1 + "€");
} else if (precioNeto < 2000 && procedencia == "España"){
  console.log("El precio bruto es de " + precioBrutoEspanya2 + "€");
} else if (precioNeto>= 2000 && procedencia != "España"){
  console.log("El precio bruto es de " +precioBrutoFuera1 + "€");
} else if (precioNeto < 2000 && procedencia != "España"){
  console.log("El precio bruto es de " +precioBrutoFuera2 + "€");
}


// RETO 3: Sumas cuadrados del 0 al 100 (Bucles)


var resultado = 0

for (var i=0; i<=100; i++){
  resultado += Math.pow(i, 2);
  
  }
  
    console.log(resultado);



  // RETO final 1 : Libros

  var libro1 = "Ready Player One";
  var libro2 = "El nombre del viento";
  var libro3 = "El temor de un nombre sabio";
  var libro4 = "Cien años de soledad";
  var libro5 = "Origen";
 
  document.write((libro1 + " "+ "["+ libro1.length + "]" + "<br>") + (libro2 + " " + "["+ libro2.length + "]") + 
  ("<br>"+ libro3 + " "+ "["+ libro3.length + "]").bold() + ("<br>"+ libro4 + " "+ "["+ libro4.length + "]") + 
  ("<br>"+ libro5 + " "+ "["+ libro1.length + "]"))


  // RETO final 2: Matrices
 
  // matriz 10x10 numeros aleat del 0-50
var nuevoArray = new Array(10);


for(var i=0; i<10; i++) {
    nuevoArray[i] = new Array(10);
    for(var j=0; j<10; j++) {
      nuevoArray[i][j]=(Math.floor(Math.random()*(50-0)))
    }
}
    console.log(nuevoArray);


    var nuevoArray2 = new Array(10);


    for(var i=0; i<10; i++) {
        nuevoArray2[i] = new Array(10);
        for(var j=0; j<10; j++) {
          nuevoArray2[i][j]=(Math.floor(Math.random()*(50-0)))
        }
    }
        console.log(nuevoArray2);

  // Suma matrices

  var arraySuma = new Array (10);

  for(var i = 0; i < 10; i++) {
     arraySuma[i] = new Array(10);
     for(var j=0; j<10; j++) {
       arraySuma[i][j] = (nuevoArray[i][j] + nuevoArray2[i][j]);
 }
  }

console.log(arraySuma);


//Multiplicación matriz  por número aleat

var numAleat =  (Math.floor(Math.random()*(Number(10)-1)));
var arrayMult = new Array (10);

for (var i =0; i<10; i++) {
  arrayMult[i]= new Array (10);
  for(var j=0; j<10; j++) {
    arrayMult[i][j] = (numAleat* arraySuma[i][j]);
}
}

console.log(arrayMult);