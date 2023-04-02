// 1. Realizar un programa que dado 2 números imprima por consola si el primer numero es
// mayor que el segundo.


// function mayorOMenor (num1, num2){
//     if ( num1 > num2 ) {
//    return ("Es mayor")
// } else {
//     return("Es menor")
// }
// }
// console.log(mayorOMenor(10,11))

// 2. Realizar un programa que dado 2 números imprima por consola si los numeros son
// iguales o si son diferentes.

// function iguODif (num1,num2){
//     if (num1 == num2) {
//         return("Son iguales")
//     }else{
//         return("Son diferentes")
//     }
// }
// console.log(iguODif(10,15))

// 3. Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros
// es el mas grande o si son iguales.

// function compa (num1, num2){
//     if (num1 > num2){
//     return("Es mas grande el primer numero")
// } else if (num1 < num2){
//     return("Es mas grande el segundo numero")
// } else {
//     return("Son iguales")
// }
// }
// console.log(iguODif(10,10))

// 4. Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el mas
// chico

// function diferencias(num1,num2,num3){

// if (num1 < num2 && num1 < num3){
//     return("num1 es mas chico")
// } else if (num2 < num3) {
//     return("num2 es mas chico")
// }else {
//     return("num3 es mas chico")
// }
// }
// console.log(diferencias(11,12,10))

// 5. Realizar un programa que dado 2 objetos representando personas con las propiedades
// nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual
// es la de mayor edad

// let persona1={
//     nombre:"sebastian",
//     edad:30,
//     altura:1.85,
// }
// let persona2={
//     nombre:"carla",
//     edad:29,
//     altura:1.75,
// }
// function dife(){
//     if (persona1.altura > persona2.altura){
//         console.log("La persona mas alta es " + persona1.nombre);
//     } else if (persona2.altura > persona1.altura){
//         console.log("La persona mas alta es " + persona2.nombre);
//     } else{
//         console.log("Tienen la misma altura")
//     }

//     if (persona1.edad > persona2.edad){
//        console.log("la persona con mas edad es " + (persona1.nombre +" "+persona1.edad + " años"));
//     }else if (persona2.edad > persona1.edad){
//         console.log("la persona con mas edad es " + (persona2.nombre +" "+persona2.edad + " años"));
//     } else {
//         console.log("tienen la misma edad")
//     }
// }
// console.log(dife())

// 6. Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión
// y permita determinar si estas capacitado para conducir. La persona deberá cumplir con
// una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como
// mínimo.

// function persona (){
//     let nombre = prompt ("Cómo te llamas?");
//     let edad = prompt ("Edad?");
//     let altura = prompt("Altura?");
//     let vision = prompt("del 1 al 10 que tan bien ve?");

//     if (edad >=18 && altura >= 1.50 && vision >= 8 ){
//         console.log(nombre + (" Estas capacitada/o para conducir"))
//     } else {
//         console.log(nombre + (" No estas capacitada/o para conducir"))
//     }

// }
// persona()



// 7. Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase (vip o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean tu mismo nombre tienen ingreso libre así como también los que posean un pase vip,
// mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en caso afirmativo mostrar mismo mensaje de bienvenida. Y por ultimo de no tener el mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso afirmativo solicitar dinero disponible, si posee $1000 o mas, mostrar mensaje de venta de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en caso contrario a no querer comprar, mostrar mensaje de despedida.



// let nombre2 = prompt("Ingrese su nombre:");
// let pase = prompt("Ingrese su tipo de pase (vip o normal):");
// let tieneEntrada = prompt("¿Posee entrada? (si o no, s o n, true o false):");

// function boleteria(nombre2, pase, tieneEntrada) {
//   if (nombre2 === "Sebastian" || pase === "vip") {
//     alert("¡Bienvenido " + nombre2 + "!");
//     if (tieneEntrada === "si" || tieneEntrada === "s" || tieneEntrada === "true") {
//       let usarEntrada = confirm("¿Desea utilizar su entrada?");
//       if (usarEntrada) {
//         alert("¡Su entrada ha sido utilizada! ¡Bienvenido " + nombre2 + "!");
//       } else {
//         alert("¡Bienvenido de todas formas " + nombre2 + "! " + "Puede utilizar su entrada en otro momento.");
//       }
//     }
//   } else {
//     if (tieneEntrada === "si" || tieneEntrada === "s" || tieneEntrada === "true") {
//       let usarEntrada = confirm("¿Desea utilizar su entrada?");
//       if (usarEntrada) {
//         alert("¡Su entrada ha sido utilizada! ¡Bienvenido " + nombre2 + "!");
//       }
//     } else {
//       let comprarEntrada = confirm("¿Desea comprar una entrada?");
//       if (comprarEntrada) {
//         let dineroDisponible = parseInt(prompt("Ingrese su dinero disponible:"));
//         if (dineroDisponible >= 1000) {
//           alert("¡Venta de entrada exitosa! ¡Bienvenido " + nombre2 + "!");
//         } else {
//           alert("Lo siento, no tiene suficiente dinero para comprar una entrada.");
//         }
//       } else {
//         alert("¡Hasta luego " + nombre2 + "!");
//       }
//     }
//   }
// }

// boleteria(nombre2, pase, tieneEntrada);

// 8. Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable llamada numeroIncognita y que permita en 3 intentos adivinar el numero. El usuario deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá guardar en una variable llamada numeroIngresado, y en cada intento deberás mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de adivinar, un mensaje que diga: “Ganaste, haz adivinado el numero.” No te preocupes si usas mucho código repetido, mas adelante veraz como realizar este juego de manera mas eficiente.

let numeroIncognita = Math.floor(Math.random() * 11);
let intentos = 3;

function adivinaNumero(numeroIncognita, intentos) {
  let numeroIngresado = parseInt(prompt("Adivina el número (entre 1 y 10)"));
  if (numeroIngresado === numeroIncognita) {
    alert("¡Ganaste! Has adivinado el número.");
  } else if (numeroIngresado < numeroIncognita) {
    alert("El número ingresado es menor. Vuelve a intentarlo.");
    if (intentos > 1) {
      adivinaNumero(numeroIncognita, intentos - 1);
    } else {
      alert(
        "Lo siento, no has adivinado el número. El número era " +
          numeroIncognita
      );
    }
  } else if (numeroIngresado > numeroIncognita) {
    alert("El número ingresado es mayor. Vuelve a intentarlo.");
    if (intentos > 1) {
      adivinaNumero(numeroIncognita, intentos - 1);
    } else {
      alert(
        "Lo siento, no has adivinado el número. El número era " +
          numeroIncognita
      );
    }
  }
}
adivinaNumero(numeroIncognita, intentos);
  
// 9. Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 años), adolescente(13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de 45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje preguntando si en realidad tiene esa edad.

function rango(){
    let edad = parseInt(prompt("Ingrese su edad"));
    if (edad >= 0 && edad <= 12) {
        alert("Es un infante");
    } else if (edad >= 13 && edad <= 18) {
        alert("Es un adolescente");
    } else if (edad >= 19 && edad <= 45) {
        alert("Es un joven");
    } else if (edad >= 46 && edad <= 100) {
        alert("Es un anciano");
    } else if (edad >= 100) {
        let confirmacion = confirm("¿En realidad tiene esa edad?");
        if (!confirmacion) {
            rango();
        } else {
            alert("Es un centenario");
        }
    }
}

rango();

// 10. Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2 jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho trampa.

let jugador1 = prompt("Jugador 1, elija PIEDRA, PAPEL o TIJERAS:").toUpperCase();
let jugador2 = prompt("Jugador 2, elija PIEDRA, PAPEL o TIJERAS:").toUpperCase();

function encontrarGanador(jugador1, jugador2) {
  if (jugador1 === jugador2) {
    alert("Empate");
  } else if (jugador1 === "PIEDRA") {
    if (jugador2 === "PAPEL") {
      alert("Jugador 2 gana");
    } else {
      alert("Jugador 1 gana");
    }
  } else if (jugador1 === "PAPEL") {
    if (jugador2 === "TIJERAS") {
      alert("Jugador 2 gana");
    } else {
      alert("Jugador 1 gana");
    }
  } else if (jugador1 === "TIJERAS") {
    if (jugador2 === "PIEDRA") {
      alert("Jugador 2 gana");
    } else {
      alert("Jugador 1 gana");
    }
  } else {
    alert("Algo salió mal");
  }
  
  let jugadasValidas = ["PIEDRA", "PAPEL", "TIJERAS"];
  if (
    jugadasValidas.indexOf(jugador1) === -1 ||
    jugadasValidas.indexOf(jugador2) === -1
  ) {
    alert("¡Uno de los jugadores ha hecho trampa!");
  } 
}
  
encontrarGanador(jugador1, jugador2);

// 11. Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar por pantalla los siguientes mensajes según las opciones: Blanco o Negro: Falta de color, Verde: El color de la naturaleza, Azul: El color del agua, Amarillo: El color del sol, Rojo: El color del fuego, Marrón: el color de la tierra, y para cualquier otro valor: Excelente elección, no lo teníamos pensado.


let color = prompt("Ingrese un color:").toUpperCase();

switch (color) {
    case "BLANCO":
        console.log("Falta de color");
        break;
    case "NEGRO":
        console.log("Falta de color");
        break;
    case "VERDE":
        console.log("El color de la naturaleza");
        break;
    case "AZUL":
        console.log("El color del agua");
        break;
    case "AMARILLO":
        console.log("El color del sol");
        break;
    case "ROJO":
        console.log("El color del fuego");
        break;
    case "MARRON":
        console.log("El color de la tierra");
        break;
    default:
        console.log(" Excelente elección, no lo teníamos pensado.");
        break;
}


// 12. Realizar un programa que permita el ingreso de 2 valores numéricos y una operación. Según sea la operación ingresada (suma, resta, multiplicación, división) el programa deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber elegido división realizar la operación siempre que sea posible o mostrar un mensaje de ERROR si el divisor ingresado fue 0.


let numero1 = parseInt(prompt("Ingrese un número:"));
let numero2 = parseInt(prompt("Ingrese otro número:"));
let operacion = prompt("Ingrese una operación: (suma, resta, multiplicacion, division)").toUpperCase();

switch (operacion) {
    case "SUMA":
        console.log("El resultado de la suma es " + (numero1 + numero2));
        break;
    case "RESTA":
        console.log("El resultado de la resta es " + (numero1 - numero2));
        break;
    case "MULTIPLICACION":
        console.log("El resultado de la multiplicación es " + (numero1 * numero2));
        break;
    case "DIVISION":
        if (numero2 !== 0) {
            console.log("El resultado de la división es " + (numero1 / numero2));
        } else {
            console.log("El divisor debe ser distinto de 0");
        }
        break;
    default:
        console.log("Algo salió mal");
}

// 13. Crear un programa que permita ingresar todos los datos de tu documento nacional de identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado dni con todos los datos ingresados y mostrarlos por consola con console.table() mas un mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos, mostrar un mensaje que diga: vuelva a intentarlo en 1 mes.

function ingresoDatos() {
    let nombre = prompt("Ingrese nombre:")
    let apellido = prompt("Ingrese apellido:")
    let identidad = parseInt(prompt("Ingrese identidad:"))
    let edad = parseInt(prompt("Ingrese edad:"))
    let sexo = prompt("Ingrese sexo:")

    console.log("Estos son los datos que ingresaste:");
    console.log("nombre: "+ nombre);
    console.log("apellido: "+ apellido);
    console.log("identidad: "+ identidad);
    console.log("edad: "+ edad);
    console.log("sexo: "+ sexo);
    confirmacion = confirm("¿Los datos ingresados son correctos?");

    if (confirmacion) {
        let dni = {
            nombre,
            apellido,
            identidad,
            edad,
            sexo
        }
        console.log("Registro exitoso. Estos son los datos de tu DNI:");
        console.table(dni);
    } else {
        console.log("Vuelve a intentarlo en 1 mes.");
    }
}


ingresoDatos();


