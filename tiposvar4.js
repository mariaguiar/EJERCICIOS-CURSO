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
    
    
var personas = [persona1, persona2, persona3, persona4]


//Castanyos

if (personas[0].colorPelo === "castanyo"){
    console.log(personas[0].nombre);
    }
 if (personas[1].colorPelo === "castanyo"){
    console.log(personas[1].nombre);
    }
if (personas[2].colorPelo === "castanyo"){
    console.log(personas[2].nombre);
    }
if (personas[3].colorPelo === "castanyo"){
    console.log(personas[3].nombre);
    }


// Mayores de 30

if (personas[0].anyoNacimiento < 1990 ){
    console.log(2020 - personas[0].anyoNacimiento);
    }
if (personas[1].anyoNacimiento < 1990 ){
    console.log(2020 - personas[1].anyoNacimiento);
    }
if (personas[2].anyoNacimiento < 1990 ){
    console.log(2020 - personas[2].anyoNacimiento);
    }
if (personas[3].anyoNacimiento < 1990 ){
    console.log(2020 - personas[3].anyoNacimiento);
    }


// Morenos y dni caducado + Menores de 18 y aficionados a comer

if ((personas[0].colorPelo === "moreno" && personas[0].dni.anyoExpedicion < 2010) || 
(personas[0].anyoNacimiento > 2002 && (personas[0].aficiones === "comer"|| personas[0].aficiones==="dormir"))){
    console.log(personas[0].dni.lugarNacimiento);
    }
if ((personas[1].colorPelo === "moreno" && personas[1].dni.anyoExpedicion < 2010) ||
(personas[1].anyoNacimiento > 2002 && (personas[1].aficiones === "comer"||personas[1].aficiones==="dormir"))){
    console.log(personas[1].dni.lugarNacimiento);
}
if ((personas[2].colorPelo === "moreno" && personas[2].dni.anyoExpedicion < 2010) ||
 (personas[2].anyoNacimiento > 2002 && (personas[2].aficiones === "comer"||personas[2].aficiones==="dormir"))){
    console.log(personas[2].dni.lugarNacimiento);
}
if ((personas[3].colorPelo === "moreno" && personas[3].dni.anyoExpedicion < 2010) ||
 (personas[3].anyoNacimiento > 2002 && (personas[3].aficiones === "comer"|| personas[3].aficiones==="dormir"))){
    console.log(personas[3].dni.lugarNacimiento);
}

