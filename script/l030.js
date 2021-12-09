
// Pueden comportarte estas dos funciones de la misma manera, Pero hay una diferencia sutil cuando se trata de algo llamado elevación en JavaScript.  
  // function expression, estas son las mejores, pues hay que declararlas antes de usarlas
  const speak = function(){ // Entonces, esta es una expresión de función cuando almacenamos la función dentro de una variable y esta es una declaración de función
    // pero no se pueden llamar antes de las funciones declaradas pues es un error
    console.log('good day!');
  };
  
  greet(); // Esto sigue funcionando, aunque la función viene después de donde la llamamos
 
  
  speak();

  // function declaration
  function greet(){ 
    console.log('hello there');
  }