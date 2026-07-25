# Proyecto: Aplicación de consola — Módulo 4

Aplicación en JavaScript que se ejecuta en la **consola del navegador**. 
Pide el nombre del usuario y dos números, y con ellos aplica los conceptos vistos en las 5 lecciones del módulo: variables, condicionales, bucles, funciones y objetos.

## ¿Cómo se ejecuta?

1. Vincular el archivo a un HTML con:
   ```html
   <script src="script.js"></script>
   ```
   (se agrega archivo HTML ya configurado.)

2. Abrir la página en el navegador. Aparecerán ventanas de `alert` y `prompt` pidiendo tu nombre y dos números.
3. Abrir la consola (F12 - pestaña "Console") para ver el resto de los resultados con `console.log()`.

> `prompt()` y `alert()` solo funcionan en el navegador, no en Node.js.

## Funcionalidades por lección

**Lección 1 — Introducción al lenguaje**
- Da la bienvenida con `alert()` y pide el nombre del usuario con `prompt()`.

**Lección 2 — Variables y condicionales**
- Pide dos números con un bucle `while (true)`, que no deja avanzar hasta que ambos sean válidos (usando la función `sonNumerosValidos`).
- Calcula suma, resta y multiplicación.
- Usa `if / else` para la división, evitando dividir por 0.
- Incluye un `switch` que evalúa una variable de operación (`orden`).

**Lección 3 — Arreglos y ciclos**
- Arreglo `tareasEstudio` con una lista de tareas.
- Recorrido con `for` para mostrar cada tarea numerada.
- Función `NombresLargos()` que usa `filter()` para quedarse solo con las tareas de más de 15 caracteres.
- Recorrido adicional con `while` a modo de recordatorio diario.

**Lección 4 — Funciones**
- Las operaciones matemáticas (`suma`, `resta`, `multiplica`, `divide`) se reescriben como funciones reutilizables.
- Ejemplo de función que llama a otra función dentro (`saludoAprendizaje` y `saludoMotivador` usan `aprendoFunciones`).

**Lección 5 — Objetos**
- Objeto `estudiante` con propiedades (`nombre`, `modulo`, `progreso`) y un método propio, `mostrarInfo()`.
- Arreglo de objetos `estudiantes`, cada uno con `nombre` y `nota`.
- Recorrido con `forEach()` para imprimir las notas.
- Función `obtenerMensajesDeNotas()` que usa `map()` para generar un nuevo arreglo con un mensaje por estudiante.

## Estructura del código

El archivo está dividido en 5 secciones, una por cada lección del módulo, en el mismo orden en que se piden los conceptos en la consigna.
