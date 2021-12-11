// return statements

// const speak = function(name, time){
//   console.log(`good ${time}, ${name}!`);
// };

const calcArea = function(radius){
    let area = 3.14 * radius**2; // Esto tambien se puede escribir como return 3.14 * radius**2;
    return area;
  }
  
  const area = calcArea(5); // Aquí se trae al área global. Solo estamos almacenando el valor que obtenemos, independientemente de cómo se llame aquí dentro de este
  console.log('area is:', area);