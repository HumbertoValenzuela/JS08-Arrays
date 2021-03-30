// 7. Eliminar elementos con Splice 

const carrito2 = [];

// Definir un producto
const tele2 = {
    modelo: "32p",
    marca: "AOC"
}
const monitor2 = {
    modelo: "14pul",
    marca: "AOC" 
}

const teclado2 = {
    modelo: "con ñ",
    marca: "Logitech" 
} 

const teclado3 = {
    modelo: "sin ñ",
    marca: "lenovo" 
} 

carrito2.push(tele2);
carrito2.push(monitor2);
carrito2.push(teclado3);

// Agregar al principio del arreglo
carrito2.unshift(teclado2);

console.table(carrito2);

// Eliminar último elemento de un arreglo
// carrito2.pop()
// console.table(carrito2);
// en los objeto es delete nombreObjeto.nombrePropiedad
// delete producto.nombre;

// Eliminar del Inicio del Arreglo
// carrito2.shift();

// Metodo Splice: Elimina en posición indicada
carrito2.splice(1, 1);// Elimina un elemento
//carrito2.splice(1, 2); // elimina dos elementos
console.table(carrito2);