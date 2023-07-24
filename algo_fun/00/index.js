// On importe le module 'prompt'
const prompt = require("prompt");

// On démarre 'prompt'
prompt.start();

// On demande un nombre à l'utilisateur. Quand il entre un nombre, on appelle une fonction de callback
prompt.get(["number"], (err, result) => {
  // Si y'a une erreur, on l'affiche et on se casse
  if (err) {
    return onErr(err);
  }
  // On convertit le résultat en nombre avec 'parseInt'
  const number = parseInt(result.number);

  // Si tout va bien, on appelle notre fonction 'printPattern' avec le nombre entré par l'utilisateur
  printPattern(number);
});

// Cette fonction sert juste à afficher une erreur si jamais y'en a une
const onErr = (err) => {
  console.log(err);
  return 1;
};

// Notre fonction 'printPattern' qui prend un nombre 'n' en paramètre
const printPattern = (n) => {
  // On définit notre pattern de base
  let pattern = ["A", "a"];

  // Si 'n' vaut 1, on affiche juste 'A' deux fois et on se casse
  if (n === 1) {
    console.log("A");
    console.log("A");
    return;
  }

  // On imprime la première partie de notre motif comme avant
  for (let i = n; i > 0; i--) {
    console.log(pattern.join("").repeat(i));
  }

  // On imprime la deuxième partie de notre motif comme avant
  for (let i = 1; i <= n; i++) {
    console.log(pattern.reverse().join("").repeat(i));
  }
};
