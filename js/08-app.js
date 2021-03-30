// 8. Destructuring de Arrays


// objeto muebleria
const muebleria = {
    nombre: 'Mueble de cocina',
    precio: '$170.000',
    disponible: 'true'
}
// Destructuring - Sacar de la Estructura
const {nombre, precio, disponible } = muebleria;

// Destructuring con Arreglos 
const diezEnDiez = [10, 20, 30, 40, 50];


// const [primero,segundo,tercero,cuarto,quinto] = diezEnDiez; 
// se crea la variable segundo y quinto. los demas no se crean, solo se indica con una coma
const [,segundo,,,quinto] = diezEnDiez; // 
console.log(segundo, quinto); // 20 y 50

// rest operator, tercero tendra un arreglo de 30, 40 y 50. Extrae valores de un array, de otro lugar
const [primero,, ...tercero] = diezEnDiez;// 10 (3) [30, 40, 50]
console.log(primero, tercero);