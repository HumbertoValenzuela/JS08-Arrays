// 5. Añadir nuevos elementos al fin o Inicio de un array
// Metodos push
const carnes = ['vacuno', 'cerdo', 'pollo'];

// se debe de conocer el índice del arreglo y agregarlo. no es dinámico
carnes[3] = 'pavo';

// Metodo push. Agregar al final del arreglo. Sin conocer el índice
// forma imperativa: modifica la variable original, sobre ella misma la modifica, trabaja.
carnes.push('equino');
carnes.push('conejo');

console.table(carnes);

// ejemplo carrito de compra
const carrito = [];

// Definir un producto
const tele = {
    modelo: "m1-34",
    marca: "AOC"
}
const monitor = {
    modelo: "a-21p",
    marca: "AOC" 
}


const teclado = {
    modelo: "1111p",
    marca: "Logitech" 
}

carrito.push(tele);
carrito.push(monitor);

// Agregar al principio del arreglo
carrito.unshift(teclado);

console.table(carrito);