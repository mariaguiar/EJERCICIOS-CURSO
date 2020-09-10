var persona1 = {
    "nombre": "Andrea",
    "apelido": "Lopez",
    "anyoNacimiento": 1999,
    "aficiones": ["dormir", "leer", "dibujar"],
    "dni": {"anyoExpedicion": 2010,
    "lugarNacimiento": "Valladolid"},
    "colorPelo" : "castanyo"
    }
    
var persona2 = {
    "nombre": "Lucia",
    "apellido": "Perez",
    "anyoNacimiento": 2010,
    "aficiones": ["deporte", "moda", "fiesta"],
    "dni":{"anyoExpedicion": 2000,
    "lugarNacimiento": "Segovia"},
    "colorPelo": "rubio"
    }
    
var persona3 = {
    "nombre": "Borja",
    "apellido": "Sanz",
    "anyoNacimiento": 1995,
    "aficiones": ["videojuegos", "comer", "viajar"],
    "dni": {"anyoExpedicion": 2015,
    "lugarNacimiento": "Madrid"},
    "colorPelo" : "moreno"
    }
    
var persona4 = {
    "nombre": "Pablo",
    "apellido": "Gutierrez",
    "anyoNacimiento": 1970,
    "aficiones": ["comer", "fiesta", "cine"],
    "dni": {"anyoExpedicion": 2003,
    "lugarNacimiento": "Madrid"},
    "colorPelo": "pelirrojo"
    }
    
    
var persona = [persona1, persona2, persona3, persona4]

//Mostrar elementos
for (var i= 0; i<personas.length; i++){
    console.log(personas);
  }

  var i= 0;
while (i <personas.length) {
  console.log(personas);
  i++;}

//Año entre 1978 y 2000

//FOR
for (var i= 0; i<personas.length; i++){

    if ((personas[0].anyoNacimiento >= 1978)&&(personas[0].anyoNacimiento <= 2000)){
      console.log(personas[0]);
    }
    if ((personas[1].anyoNacimiento >= 1978)&&(personas[1].anyoNacimiento <= 2000)){
      console.log(personas[1]);
    }
    if ((personas[2].anyoNacimiento >= 1978)&&(personas[2].anyoNacimiento <= 2000)){
      console.log(personas[2]);
    }
    if ((personas[3].anyoNacimiento >= 1978)&&(personas[3].anyoNacimiento <= 2000)){
      console.log(personas[3]);
      }
    }

//WHILE
var i= 0;
while (i<personas.length) {
    i++;
    if ((personas[0].anyoNacimiento >= 1978)&&(personas[0].anyoNacimiento <= 2000)){
  console.log(personas[0]);
}
if ((personas[1].anyoNacimiento >= 1978)&&(personas[1].anyoNacimiento <= 2000)){
  console.log(personas[1]);
}
if ((personas[2].anyoNacimiento >= 1978)&&(personas[2].anyoNacimiento <= 2000)){
  console.log(personas[2]);
}
if ((personas[3].anyoNacimiento >= 1978)&&(personas[3].anyoNacimiento <= 2000)){
  console.log(personas[3]);
  }
}

//Mensajes 20- 40 años

//FOR
for (var i= 0; i<personas.length; i++){

    if (personas[i].anyoNacimiento > 1980 &&  personas[i].anyoNacimiento < 2000){
  console.log("Tu edad esta entre 20 y 40 años");}
  else {console.log("Tu edad es menor de 20");}
}



//WHILE 

var i= 0;
while (i<personas.length) {
    i++;
  if (personas[i].anyoNacimiento > 1980 &&  personas[i].anyoNacimiento < 2000){
  console.log("Tu edad esta entre 20 y 40 años");}
  else {console.log("Tu edad es menor de 20");}
}

// Jugar a la play

for (var i= 0; i<persona.length; i++){
    persona[i].aficiones.push("jugar a la play");
    console.log(persona)}