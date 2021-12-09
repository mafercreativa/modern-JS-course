// arguments & parameters, estos nombres son lo mismo, es lo que va entre paréntesis de la función

const speak = function(name = 'luigi', time = 'night'){
    console.log(`good ${time}, ${name}!`);
  };
  
  // speak('mario', 'morning');
  // speak();
  speak('shaun');