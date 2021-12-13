// arrow functions

// regular function
// const calcArea = function(radius){
//   return 3.14 * radius**2;
// }

// arrow function
const calcArea = radius => 3.14 * radius**2; // Sin paréntesis el parámetro pues es uno solamente
// Después de la flecha se supone un return que no va escrito pues es implícito
const area = calcArea(5);
console.log('area is:', area);

// practise arrow functions

// const greet = function(){
//   return 'hello, world';
// }

const greet = () => 'hello, world';

// const bill = function(products, tax){
//   let total = 0;
//   for(let i = 0; i < products.length; i++){
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// }

const bill = (products, tax) => { // Al ser dos los parámetros si es obligatorio el paréntesis
  let total = 0;
  for(let i = 0; i < products.length; i++){
    total += products[i]  + products[i] * tax;
  }
  return total;
}

console.log(greet());
console.log(bill([10,15,30], 0.2));