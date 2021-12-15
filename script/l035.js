// callbacks & forEach
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {  // El index literalmente muestra el index del array, la posición
  console.log(`${index} - hello ${person}`);
}

// people.forEach(person => { // Este es un método que recorre un array y al poner como parámetro
// una función puede ejecutar por cada item esa función
//   console.log(`hello ${person}`);
// });

people.forEach(logPerson);

// Callback es pasar una función como argumento

const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
}
/* myFunc(function(value){
    console.log(value);
}); */
myFunc(value => {
    console.log(value);
});