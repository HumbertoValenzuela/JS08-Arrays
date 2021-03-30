// 6. Crear un nuevo arreglo con el spread operator

// Agregar al Inicio o al Final del arreglo utilizando el spread operator (propagar operador).

// forma imperativa: modifica la variable original, sobre ella misma la modifica, trabaja.
// carnes.push('equino');
// carrito.unshift(teclado);

// ECMAScript6. Forma declarativa: es un paradigma que expresa la lógica, sin describir tanto el flujo de control
// Forma declarativa: No modifica la variable, sino que crea una nueva

const agregarAlCarrito = [];

// definir productos 
const yogurt = {
tipoLacteo: 'yogurt',   
    marca: 'soprole'
}
// definir productos
const leche = {
    tipoLacteo: 'crema',
    marca: 'nestle'
}
// definir productos
const mantequilla = {
    tipoLacteo: 'trozo',
    marca: 'Calo'
}

// spread operator
let alCarrito;
// realiza una copia de agregarAlCarrito y le coloca el yogurt al final
alCarrito = [...agregarAlCarrito, yogurt];
// agrega alCarrito una copia de alCarrito y agrega el objeto leche
alCarrito = [...alCarrito, leche];//agrega al final
// donde coloques el objeto mantequilla es donde se agregará(Inicio o final)
alCarrito = [mantequilla, ...alCarrito]; //agrega al Inicio

console.table(agregarAlCarrito);// vacio. porque ya no se modifica
console.table(alCarrito);