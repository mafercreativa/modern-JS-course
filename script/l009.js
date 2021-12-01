// strings
console.log('hello, world');

let email = 'mario@thenetninja.co.uk';
console.log(email);

// string concatenation
let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName; // Recordar para dejar el espacio

console.log(fullName);

// getting individual characters
console.log(fullName[2]);

// string length
console.log(fullName.length); // Cantidad de caracteres

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLocaleLowerCase();
console.log(result);

let index = email.indexOf('@'); // El número de celda del parámetro
console.log('index of the @ sign:', index);