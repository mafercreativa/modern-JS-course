// for loops

// for(let i = 0; i < 5; i++){
//   console.log('loop: ', i);
// }

const names = ['shaun', 'mario', 'luigi'];

for(let i = 0; i < names.length; i++){
  // console.log(names[i]);  // Ciclo llamando cada nombre de array
  let html = `<div>${names[i]}</div>`; // Formato html entre comillas alrevés y llamando la variable con signo pesos y llaves
  console.log(html);
}