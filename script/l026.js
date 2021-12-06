// break & continue
const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scores.length; i++){

  if(scores[i] === 0){
    continue;  // Ignora lo siguiente y regresa al top donde está el for
  }

  console.log('your score:', scores[i]);

  if(scores[i] === 100){  // puntuación para salir del ciclo
    console.log('congrats, you got the top score!');
    break;
  }

}