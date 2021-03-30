// 1. Crear Arrays en JavaScript
// sirve para agrupar elementos del mismo tipo
// mientras que un objeto va a ser una variable que va agrupar la información de un elemento de un objeto. Un arreglo puede tener multiples elementos que sean iguales

// si ves {} es un objeto
// si ves [] es un arreglo
const numeros = [10, 20, 30];

// otra forma de crear un Array
// Utilizando un constructor nuevo, como si fuera una función
const meses = new Array('Enero', 'Febrero', 'Marzo');

// para identificar un elemento se utilizan los Indices
console.log(numeros);// Array(3)0: 10 1: 20 2: 30
console.log(meses); // 0: "Enero" 1: "Febrero" 2: "Marzo"

// Un arreglo que contiene datos de todo tipo
const deTodo = ['Hola', 10, true, null, {nombre:'hrbto', job:'Programador'}];
console.log(deTodo);