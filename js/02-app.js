// 2. Acceder a los valores de un Array
const cosas = [10, 20, 30, 40, 50, [1, 2, 3]];
console.log(cosas);
// Mejor forma para ver el arreglo
console.table(cosas);

// Acceder al 30
console.log(cosas[2]);//30
console.log(cosas[0]);//10
console.log(cosas[20]);//undefined
console.log(cosas[5][2]);//3