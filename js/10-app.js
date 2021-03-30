// 10 .map para iterar un array, y sus diferencias con forEach

const multiples = [
    { nombre: 'monitor', precio: 53200 },
    { nombre: 'TV', precio: 32500 },
    { nombre: 'LCD', precio: 37500 },
    { nombre: 'LED', precio: 57800 },
    { nombre: 'Audifonos', precio: 59300 },
    { nombre: 'Parlantes', precio: 53200 },
    { nombre: 'celular', precio: 50380 },
];

// map y forEach son casi iguales en sintaxis

// ¿uso? crear un nuevo arreglo con los productos que cuesten mas de 50.000mil
multiples.map(element => {
    console.log( `${element.nombre} - Precio: ${element.precio}`); 
});

// forEach, se recomienda usar este metodo
multiples.forEach(element => {
    console.log( `${element.nombre} - Precio: ${element.precio}`); 
});


// La diferencia .map crea un arreglo nuevo.
const nuevosArreglos = multiples.map(element => {
    return `${element.nombre} - Precio: ${element.precio}`; 
} );

// y forEach no puede crear un arreglo nuevo. undefined
const nuevosArreglos2 = multiples.forEach(elemento => {
    return `plop ${elemento.nombre} - Precio: ${elemento.precio}`; 
});

console.table(nuevosArreglos);
console.log(nuevosArreglos2); // undefined