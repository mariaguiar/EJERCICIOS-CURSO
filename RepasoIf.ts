

// Reto 1

function algoritmo(dia, mes)
{
 
    if((dia>=21&&mes==3)||(dia<=20&&mes==4))
        {console.log('Aries');}
    if((dia>=24&&mes==9)||(dia<=23&&mes==10))
        {console.log('Libra');}
    if((dia>=21&&mes==4)||(dia<=21&&mes==5))
        {console.log('Tauro');}
    if((dia>=24&&mes==10)||(dia<=22&&mes==11))
        {console.log('Escorpio');}
    if((dia>=22&&mes==5)||(dia<=21&&mes==6))
        {console.log('Geminis');}
    if((dia>=23&&mes==11)||(dia<=21&&mes==12))
        {console.log('Sagitario');}
    if((dia>=21&&mes==6)||(dia<=23&&mes==7))
        {console.log('Cancer');}
    if((dia>=22&&mes==12)||(dia<=20&&mes==1))
        {console.log('Capricornio');}
    if((dia>=24&&mes==7)||(dia<=23&&mes==8))
        {console.log('Leo');}
    if((dia>=21&&mes==1)||(dia<=19&&mes==2))
        {console.log('Acuario');}
    if((dia>=24&&mes==8)||(dia<=23&&mes==9))
        {console.log('Virgo');}
    if((dia>=20&&mes==2)||(dia<=20&&mes==3))
        {console.log('Piscis');}

}

algoritmo(12, 3);


// Reto 9

function parimpar (num)

{
if (num%2==0)
{
    console.log("El numero es par");
}
else {console.log("El numero es impar");}
}

parimpar(5);

//Reto 10

function EvenOdd(numero){
    if (numero%2==0){
        console.log("Es par");

    }
    else{
        console.log("Es Impar");
        
    }
}
function SumaCar(Array){
    let Resultado=0;
    for(let i=0;i<Array.length;i++){
        for(let a=0;a<Array[i].length;a++){

            ++Resultado;
        }
        
        
    }
    return Resultado;
}
 let numero1=SumaCar(["Casa", "Coche", "Ciudad", "Cesta"]);
 let numero2=SumaCar(["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"]);
 let numero3=SumaCar(["Venezuela", "Veneno", "Voltaje"]);
 EvenOdd(numero1);
 EvenOdd(numero2);
 EvenOdd(numero3);