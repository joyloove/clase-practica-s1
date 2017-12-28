var score= {
  abril: 0,
  joy: 0,
  paty: 0,
  anais: 0,
  karla: 0,

}
  function actualizarScore(nombre,puntos) {
  score[nombre]= puntos
}
actualizarScore('karla', 2500);
console.log(score);
