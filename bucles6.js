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

if (personas[i].colorPelo === "castanyo"){
    console.log(personas[i].nombre);
    }


// Mayores de 30

if (personas[i].anyoNacimiento < 1990 ){
    console.log(2020 - personas[i].anyoNacimiento);
    }


// Morenos y dni caducado + Menores de 18 y aficionados a comer o dormir

if ((personas[i].colorPelo === "moreno" && personas[i].dni.anyoExpedicion < 2010) || 
(personas[i].anyoNacimiento > 2002 && (personas[i].aficiones === "comer"|| personas[i].aficiones==="dormir"))){
    console.log(personas[i].dni.lugarNacimiento);
    }