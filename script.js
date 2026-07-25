/*
--------------------------------------------------------------------
PROYECTO: Aplicación de consola
Módulo 4: Fundamentos de programación en JavaScript
--------------------------------------------------------------------
Esta app permite:
    1. Realizar operaciones matemáticas básicas.
    2. Usar condicionales y bucles.
    3. Modularizar el código con funciones.
    4. Trabajar con arreglos y objetos.

Cómo probarla:
    - Abrir este archivo en el navegador (consola de Chrome/Edge/Firefox)
      o vincularlo a un HTML con <script src="script.js"></script>.
--------------------------------------------------------------------
*/



// --------------------------------------------------------------------
// 1. Introducción al lenguaje Javascript (Lección #1)
// --------------------------------------------------------------------

alert("Plataforma de educación interactiva - Bienvenido a Javascript")
console.log("Bienvenido a la programación con Javascript.")
let nombre = prompt("Ingresa tu nombre:");
alert(nombre + ", explora JavaScript, el alma de la web moderna.");
console.log(nombre + ", aplicaremos los conceptos fundamentales del lenguaje, desarrollando habilidades a tráves de la práctica.");




// --------------------------------------------------------------------
// 2. Variables, expresiones y sentencias condicionales (Lección #2)
// --------------------------------------------------------------------

// Pedimos dos números a elección al usuario. Number convierte el texto que devuelve prompt() en un número real.
// En caso de que no sea ingresado un número, devuelve en bucle al alert.

const person = (nombre);
alert("Necesito que selecciones 2 números para continuar.");

let numero1, numero2;
let a, b;

function sonNumerosValidos(a, b) {
    return !isNaN(a) && !isNaN(b);
}

while (true) {
    numero1 = Number(prompt(person + " ingresa el primer número: (el número que quieras.)"));
    numero2 = Number(prompt(person + " ingresa el segundo número: (el número que quieras.)"));

    a = numero1;
    b = numero2;

    if (sonNumerosValidos(a, b)) {
        alert("Tus números son válidos, ya podemos comenzar.");
        break; // Rompe el bucle y permite continuar el código
    } else {
        alert("Uno de tus números no es válido. Ingresa valores numéricos.");
        // No hay break, por lo que el bucle se repite y vuelve a pedir los números
    }
}
alert("Ahora revisa la consola de tu navegador presionando la tecla F12, Windows+R o CMD+Enter.");
console.log("Los números que seleccionaste son " + numero1 + " y " + numero2 + ". Usaremos estos números para realizar varios ejercicios de aplicación en la consola.");

// ----- Operaciones matemáticas. -----

console.log("----- Operaciones matemáticas -----");

let sumar = a + b;
console.log("La suma de ambos es " + sumar);

let restar = a - b;
console.log("La resta de ambos es " + restar);

let multiplicar = a * b;
console.log("La multiplicación de ambos es " + multiplicar);


// ----- Uso de "if" y "else" por si un número es 0. -----
//En la división, usamos estructuras condicionales para evaluar ambos números.

if (a ===0, b === 0) {
    console.log("Error, no se puede dividir por 0 (vacío)")
} else {
    let dividir = a / b;
    console.log("La división de ambos es " + dividir);
}


// ----- Uso de "switch". -----

let orden = "multiplicar"; // La variable que el switch va a evaluar

switch (orden) {
    case "sumar":
        break; 
    case "restar":
        break;

    case "multiplicar":
        break; // Frena el código para que no pase al default

    default:
        console.log("Operación desconocida"); // Se ejecuta solo si la orden no es ninguna de las anteriores
}

if (orden === "multiplicar") {
    console.log("El selector switch es encontrado en " + orden + " y da como resultado " + multiplicar);
}




// --------------------------------------------------------------------
// 3. Arreglos y ciclos (Lección #3)
// --------------------------------------------------------------------

console.log("----- Arreglos y ciclos -----");

let tareasEstudio = ["Practicar variables", "Practicar funciones", "Estudiar arreglos", "Estudiar objetos", "Toma un descanso"];

// ----- Uso de "for" -----

for (let i = 0; i < tareasEstudio.length; i++) {
    console.log((i + 1) + ". " + tareasEstudio[i]);
}

// ----- Uso de "filter" -----

function NombresLargos(lista) {
    return lista.filter(function (tarea) {
        return tarea.length > 17;
    });
}
console.log("Tareas con nombre largo:", NombresLargos(tareasEstudio));

// ----- uso de "while" -----

let recordatorio = 0;
while (recordatorio < tareasEstudio.length) {
    console.log("Recuerda a diario: " + tareasEstudio[recordatorio]);
    recordatorio++;
}




// --------------------------------------------------------------------
// 4. Funciones en Javascript (Lección #4)
// --------------------------------------------------------------------

console.log("----- Funciones en Javascript -----");

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplica(a, b) {
    return a * b;
}

function divide(a, b) {
    // Validación extra: no se puede dividir por 0
    if (b === 0) {
        console.log("Error: no se puede dividir por 0.");
        return null;
    }
    return a / b;
}

console.log(`Aplicando la función suma da como total ${suma(a, b)}`);
console.log(`Aplicando la función resta da como diferencia ${resta(a, b)}`);
console.log(`Aplicando la función multiplicación da como producto ${multiplica(a, b)}`);
console.log(`Aplicando la función división da como cociente ${divide(a, b)}`);

// ----- función y retorno + funciones dentro de otras funciones -----

function aprendoFunciones(nombre, mensaje) {
    return `${mensaje}, ${nombre}!`;
}


function saludoAprendizaje(nombre) {
    return aprendoFunciones(nombre, "Con esto aprendemos mucho sobre funciones");
}

console.log(saludoAprendizaje(nombre));

function saludoMotivador(nombre) {
    return aprendoFunciones(nombre, "Con todo");
}

console.log(saludoMotivador(nombre));





// --------------------------------------------------------------------
// 5. Conceptos básicos de objetos en Javascript (Lección #5)
// --------------------------------------------------------------------

console.log("----- Conceptos básicos de objetos en Javascript -----" )

const estudiante = {
    nombre: nombre,
    modulo: 4,
    progreso: 50,
    mostrarInfo: function () {
        return this.nombre + " está en el módulo " + this.modulo +
            " con " + this.progreso + "% de avance.";
    }
};
console.log(estudiante.mostrarInfo());


const estudiantes = [
    { nombre: "Amaro", nota: 6.9 },
    { nombre: "Carlos", nota: 7.0 },
    { nombre: "Renato", nota: 6.9 },
    { nombre: nombre, nota: 7.0 }
];

console.log("----- Notas de estudiantes -----");
estudiantes.forEach(function (estudiante) {
    console.log(estudiante.nombre + " obtuvo un " + estudiante.nota + " en la evaluación.");
});


function obtenerMensajesDeNotas(listaEstudiantes) {
    return listaEstudiantes.map(function (e) {
        return `${e.nombre} obtuvo un ${e.nota} en la evaluación.`;
    });
}

console.log("----- Notas de estudiantes (con .map()) -----"); 

// Guardamos el nuevo arreglo generado por .map()
const listaDeMensajes = obtenerMensajesDeNotas(estudiantes);

// Imprimimos el nuevo arreglo modificado
console.log(listaDeMensajes);


