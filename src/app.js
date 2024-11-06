

//funcion para generar la frase random
function fraseRandom() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  //0           1            2             3
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  const randomFrase = `${who[Math.floor(Math.random() * who.length)]} ` +
    `${action[Math.floor(Math.random() * action.length)]} ` +
    `${what[Math.floor(Math.random() * what.length)]} ` +
    `${when[Math.floor(Math.random() * when.length)]};`;


  //hace que donde esta el id en el html aparezca la frase random
  document.getElementById("excuse").innerHTML = randomFrase;

}
//cuando los elementos de la pagina esten cargados
//ejecuta la funcion fraseRandom
window.onload = function () {
  fraseRandom();


};
