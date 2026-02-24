//let: Define variables con alcance de bloque y valor reasignable.
//const: Define constantes de solo lectura 
//var: ya no se usa


//let le dice al interprete que esto es una variable
let nombre = "mi nombre"

let saludo = "hola"

//esto es una variable constante, no cambia
const pi = 3.141516


//este console.log manda al navegador lo que le pasemos
console.log("hola mundo!")

//tipos de datos
//esto es texto
let texto = "esto es un string"

//tipo de dato number
let numeros = 1231425262

//tipo de dato booleano
//representa si es verdadero o falso
let verdadero = true
let falso = false

//concatenacion
let nombre1 = "Karen"
let nombre2 = "Rayen"
let edad = 35

console.log ("hola me llamo " + nombre1 + " " + nombre2 + " " + "y tengo" + " " + edad + "años");

//operadores matemáticos
let a = 1
let b = 2

//suma
console.log (a + b);
//resta
console.log (a - b);
//multiplicación
console.log (a * b);
//división
console.log (a / b);
//modulo
console.log (a % b);

let pepito = document.getElementById ("pepito");

pepito.addEventListener ("mouseover", function(){
    pepito.style.color = "green"
});




//operadores de comparación
console.log (5<3) // simbolo de menor que <
console.log (3>5) // simbolo de mayor que >
console.log (5==5) // simbolo de igualdad ==



// Condicionales

let nota = 7;
//condicion
if (nota >= 4) {
    console.log ("aprobado")
} else {
    console.log ("repitió");
}

//funciones
function saludar (nombre) {
    console.log ("Hola" + nombre)
}

saludar ("Galleta")
saludar ("Sopita")
saludar ("Niñita")
saludar ("Cabrita")
saludar ("Carlos")

function esMayor (edad) {
    if (edad >= 18 ) {
        console.log ("puede ver el contenido")
    } else {
        console.log ("menor de edad no puedes ver el contenido")
    }
};

Mayor (23);

