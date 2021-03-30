// 9. .forEach para iterar un array
// Metodo de JavaScript para recorrer un Array
const multi = [
    { nombre: 'monitor', precio: 53200 },
    { nombre: 'TV', precio: 32500 },
    { nombre: 'LCD', precio: 37500 },
    { nombre: 'LED', precio: 57800 },
    { nombre: 'Audifonos', precio: 59300 },
    { nombre: 'Parlantes', precio: 53200 },
    { nombre: 'celular', precio: 50380 },
];

// Diferencia entre for loop y forEach
for (let index = 0; index < multi.length; index++) {   
    console.log( `${multi[index].nombre} - Precio: ${multi[index].precio}` );    
}

// forEach, se recomienda usar este metodo
multi.forEach(element => {
    console.log( `${element.nombre} - Precio: ${element.precio}`); 
});
