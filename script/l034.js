const nome = 'shaun';
// Funciones vs Métodos. En ambos casos, todavía usamos paréntesis y en ambos casos podemos pasarles argumentos
// function

const greet = () => {
  return 'hello';
};

let resultOne = greet();
console.log(resultOne);

// method, métodos. Lo que distingue a los métodos es la forma en que los invocamos y dónde se definen.

let resultTwo = nome.toUpperCase(); // Llamamos a un método en la parte posterior de algo
console.log(resultTwo);

// Entonces, los métodos son funciones, pero son funciones que están asociadas con un objeto o tipo de datos