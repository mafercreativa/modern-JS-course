// variables & block scope
let age = 30;

if(true){

  // age = 40;
  let age = 40;   // se está redefiniendo como si fuese otra variable
  let name = 'shaun';
  console.log('inside 1st code block:', age, name);

  if(true){

    let age = 50; // Local scope, comportamiento de la variable dentro del ambiente, se está redefiniendo

    console.log('inside 2nd code block:', age, name);
    // el alcance del valor es el más inmediato fuera de este bloque de código
  }

}

console.log('outside code block:', age, name);