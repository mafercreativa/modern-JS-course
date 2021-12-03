// arrays

let ninjas = ['shaun', 'ryu', 'chun-li'];

// ninjas[1] = 'ken'; // Cambiando un elemento del array
// console.log(ninjas[1]);

// let ages = [20, 25, 30, 35];
// console.log(ages[2]);

// let random = ['shaun', 'crystal', 30, 20];

// array length
// console.log(ninjas.length); // Cantidad de elementos

// array methods // Métodos de los array

// let result = ninjas.join(','); // Adiciona división entre los contenidos del array, se muestra el contenido interno del array, no altera el valor original del array
// let result = ninjas.indexOf('chun-li'); // Numero de celda del objeto chun-li, en este caso sería 2
// let result = ninjas.concat(['ken', 'crystal']); // Adiciona al final los valores dados entre corchetes, no altera el valor original del array 
let result = ninjas.push('ken'); // Inserta un nuevo valor en la matriz, retorna la cantidad de elementos del nuevo array, es un método destrutivo, sí altera
let result = ninjas.pop(); // Quita el ultimo valos del array y retorna el valor que quita

console.log(result);
console.log(ninjas);