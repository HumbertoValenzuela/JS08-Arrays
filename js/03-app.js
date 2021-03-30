// 3. Recorrer un Array
const frutas = ['Manzana', 'Pera', 'Naranja', 'Frutilla', 'Durazno', 'Guinda'];

console.table(frutas);

// Cuanto mide el Arreglo
console.log(frutas.length);//6

for (let index = 0; index < frutas.length; index++) {
    const element = frutas[index];
    console.log(element);
}