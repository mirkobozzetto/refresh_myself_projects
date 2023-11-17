//! 1. push()
//* This method adds one or more elements to the end of an array and returns the new array length.
//! Cette méthode permet d'ajouter un ou plusieurs éléments à la fin d'un tableau et renvoie la nouvelle longueur du tableau.

const fruits1 = ["pomme", "banane", "mangue"];
const newLength1 = fruits1.push("orange");
console.log(fruits1); // Output: ['pomme', 'banane', 'mangue', 'orange']
console.log(newLength1); // Output: 4

// We reproduce this with a while loop, without using any array method.
// On reproduit ça avec une boucle while, sans utiliser aucune méthode de tableau.
const fruits2 = ["pomme", "banane", "mangue"];
let i = 0;
let newLength2 = fruits2.length;
while (i < newLength2) {
  i++;
}
fruits2[newLength2] = "orange"; // On ajoute l'orange à la fin du tableau
console.log(fruits2); // Output: ['pomme', 'banane', 'mangue', 'orange']

//^ The push() method is generally used when you want to add elements to the end of an array. For example, if you're working on an instant messaging application and you want to add a new message to the end of the message list, you could use push(). Or you might have an array representing a shopping cart and want to add a new item to the end of the array. In this case, the push() method would also be a good choice. It's a great tool for keeping things organized, especially when you've got a ton of data to manipulate.
//? La méthode push() est généralement utilisée lorsque tu veux ajouter des éléments à la fin d'un tableau. Par exemple, si tu bosses sur une appli de messagerie instantanée et que tu veux ajouter un nouveau message à la fin de la liste des messages, tu pourrais utiliser push(). Aussi, tu pourrais avoir un tableau qui représente un panier d'achats et tu veux ajouter un nouvel article à la fin du tableau. Dans ce cas, la méthode push() serait aussi un bon choix. C'est un outil super utile pour garder les choses organisées, surtout quand t'as une tonne de données à manipuler.

//&_____________________________________________________________________________

//! 2. filter()
//* This method creates a new array with all the elements that pass the test implemented by the supplied function.
//! Cette méthode crée un nouveau tableau avec tous les éléments qui passent le test implémenté par la fonction fournie.

const nombres1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nombresPairs1 = nombres1.filter((num) => num % 2 === 0);
console.log(nombresPairs1); // Output: [2, 4, 6, 8, 10]

// On reproduit ça avec une boucle for, sans utiliser aucune méthode de tableau.
const nombres2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nombresPairs2 = [];
for (let i = 0; i < nombres2.length; i++) {
  if (nombres2[i] % 2 === 0) {
    nombresPairs2.push(nombres2[i]);
  }
}
console.log(nombresPairs2); // Output: [2, 4, 6, 8, 10]

//^ La méthode filter() est vraiment pratique quand tu veux créer un nouveau tableau à partir d'un tableau existant, mais seulement avec certains éléments qui passent un certain test. Par exemple, disons que tu bosses sur une appli de gestion de projets et que tu veux filtrer tous les projets qui sont en retard. Tu pourrais utiliser filter() pour créer un nouveau tableau avec seulement les projets en retard. Ou peut-être que tu veux afficher seulement les utilisateurs qui sont actuellement en ligne dans ton appli de chat. Encore une fois, filter() serait un bon choix. En gros, c'est une méthode vraiment puissante pour travailler avec des données en JS.

//? La méthode filter() est vraiment pratique quand tu veux créer un nouveau tableau à partir d'un tableau existant, mais seulement avec certains éléments qui passent un certain test. Par exemple, disons que tu bosses sur une appli de gestion de projets et que tu veux filtrer tous les projets qui sont en retard. Tu pourrais utiliser filter() pour créer un nouveau tableau avec seulement les projets en retard. Ou peut-être que tu veux afficher seulement les utilisateurs qui sont actuellement en ligne dans ton appli de chat. Encore une fois, filter() serait un bon choix. En gros, c'est une méthode vraiment puissante pour travailler avec des données en JS.

//&_____________________________________________________________________________

//! 3. reduce()
//* This method applies a function that is a "reducer" to the elements of each array element, from left to right, so as to reduce the array to a single value.
//! Cette méthode applique une fonction qui est un "réducteur" aux éléments de chaque élément du tableau, de gauche à droite, de manière à réduire le tableau à une seule valeur.

const nombres1 = [1, 2, 3, 4, 5];
const somme1 = nombres1.reduce((acc, num) => acc + num, 0);
console.log(somme1); // Output: 15

// We reproduce this with a while loop, without using any array method.
// On reproduit ça avec une boucle while, sans utiliser aucune méthode de tableau.
const nombres2 = [1, 2, 3, 4, 5];
let somme2 = 0;
let i = 0;
while (i < nombres2.length) {
  somme2 += nombres2[i];
  i++;
}
console.log(somme2); // Output: 15

//^ The reduce() method is really useful when you want to reduce an array to a single value. For example, if you want to calculate the sum of all the numbers in an array, or maybe you want to find the product of all the numbers. You could also use it to flatten an array of arrays into a single array. In short, it's a really powerful and versatile way of working with arrays in JS.

//^? La méthode reduce() est vraiment utile quand tu veux réduire un tableau à une seule valeur. Par exemple, si tu veux calculer la somme de tous les nombres d'un tableau ou peut-être que tu veux trouver le produit de tous les nombres. Tu pourrais aussi l'utiliser pour aplatir un tableau de tableaux en un seul tableau. Bref, c'est une méthode vraiment puissante et polyvalente pour travailler avec des tableaux en JS.

//&_____________________________________________________________________________

//! 5. find()
// Cette méthode renvoie la première valeur d'un tableau qui passe un test (fourni en tant que fonction).

const nombres1 = [1, 2, 3, 4, 5];
const premierNombreSup3 = nombres1.find((num) => num > 3);
console.log(premierNombreSup3); // Output: 4

// On reproduit ça avec une boucle for, sans utiliser aucune méthode de tableau.
const nombres2 = [1, 2, 3, 4, 5];
let premierNombreSup32;
for (let i = 0; i < nombres2.length; i++) {
  if (nombres2[i] > 3) {
    premierNombreSup32 = nombres2[i];
    break;
  }
}
console.log(premierNombreSup32); // Output: 4

//^? La méthode find() est vraiment pratique quand tu veux trouver le premier élément d'un tableau qui répond à certains critères. Par exemple, tu pourrais l'utiliser pour trouver le premier nombre supérieur à un certain nombre dans un tableau de nombres. Ou tu pourrais l'utiliser pour trouver le premier objet dans un tableau d'objets qui a une certaine propriété. Bref, chaque fois que tu as besoin de trouver le premier élément d'un tableau qui répond à certains critères, pense à utiliser find().

//&_____________________________________________________________________________

//! 6. some()
// Cette méthode teste si au moins un élément dans le tableau passe le test implémenté par la fonction fournie.

const nombres1 = [1, 2, 3, 4, 5];
const aUnNombreSup3 = nombres1.some((num) => num > 3);
console.log(aUnNombreSup3); // Output: true

// On reproduit ça avec une boucle while, sans utiliser aucune méthode de tableau.
const nombres2 = [1, 2, 3, 4, 5];
let aUnNombreSup32 = false;
let i = 0;
while (i < nombres2.length && !aUnNombreSup32) {
  if (nombres2[i] > 3) {
    aUnNombreSup32 = true;
  }
  i++;
}
console.log(aUnNombreSup32); // Output: true

//^? La méthode some() est super utile quand tu veux vérifier si au moins un élément d'un tableau répond à certains critères. Par exemple, tu pourrais l'utiliser pour vérifier si au moins un nombre dans un tableau de nombres est supérieur à un certain nombre. Ou tu pourrais l'utiliser pour vérifier si au moins un objet dans un tableau d'objets a une certaine propriété. Bref, chaque fois que tu as besoin de savoir si au moins un élément d'un tableau répond à certains critères, pense à utiliser some().

//&_____________________________________________________________________________

//! 7. every()
// Cette méthode teste si tous les éléments du tableau passent le test implémenté par la fonction fournie.

const nombres1 = [1, 2, 3, 4, 5];
const tousLesNombresSup0 = nombres1.every((num) => num > 0);
console.log(tousLesNombresSup0); // Output: true

// On reproduit ça avec une boucle for, sans utiliser aucune méthode de tableau.
const nombres2 = [1, 2, 3, 4, 5];
let tousLesNombresSup02 = true;
for (let i = 0; i < nombres2.length; i++) {
  if (nombres2[i] <= 0) {
    tousLesNombresSup02 = false;
    break;
  }
}
console.log(tousLesNombresSup02); // Output: true

//^? La méthode every() c'est le grand frère de la méthode some(). Alors que some() vérifie si au moins un élément du tableau respecte une certaine condition, every() vérifie que TOUS les éléments la respectent. Donc chaque fois que tu veux vérifier que tous les éléments d'un tableau répondent à certains critères, pense à utiliser every().

//&_____________________________________________________________________________

//! 8. includes()
// Cette méthode détermine si un tableau contient une certaine valeur parmi ses entrées, en renvoyant true ou false selon le cas.

const fruits1 = ["pomme", "banane", "mangue", "orange"];
const contientOrange1 = fruits1.includes("orange");
console.log(contientOrange1); // Output: true

// On reproduit ça avec une boucle while, sans utiliser aucune méthode de tableau.
const fruits2 = ["pomme", "banane", "mangue", "orange"];
let contientOrange2 = false;
let i = 0;
while (i < fruits2.length && !contientOrange2) {
  if (fruits2[i] === "orange") {
    contientOrange2 = true;
  }
  i++;
}
console.log(contientOrange2); // Output: true

//^? La méthode includes() est vraiment cool quand tu veux vérifier si une certaine valeur est présente dans ton tableau. Pas besoin de te prendre la tête à faire une boucle et à comparer chaque valeur une par une, tu lâches un petit includes() et le tour est joué ! Trop facile, frérot !

//&_____________________________________________________________________________

//! 9. findIndex()
// Cette méthode renvoie l'indice du premier élément du tableau qui satisfait la fonction de test fournie. Sinon, elle renvoie -1.

const nombres1 = [1, 2, 3, 4, 5];
const indexPremierNombreSup3 = nombres1.findIndex((num) => num > 3);
console.log(indexPremierNombreSup3); // Output: 3

// On reproduit ça avec une boucle for, sans utiliser aucune méthode de tableau.
const nombres2 = [1, 2, 3, 4, 5];
let indexPremierNombreSup32 = -1;
for (let i = 0; i < nombres2.length; i++) {
  if (nombres2[i] > 3) {
    indexPremierNombreSup32 = i;
    break;
  }
}
console.log(indexPremierNombreSup32); // Output: 3

//^? La méthode findIndex() est super pratique quand tu cherches l'index du premier élément qui remplit une certaine condition. Ça t'évite de faire une boucle et de vérifier toi-même chaque élément un par un. Alors la prochaine fois que tu cherches un index, pense à findIndex() !

//&_____________________________________________________________________________

//! 10. concat()
// Cette méthode fusionne deux ou plusieurs tableaux en renvoyant un nouveau tableau.

const fruits1 = ["pomme", "banane"];
const legumes1 = ["carotte", "brocoli"];
const fruitsEtLegumes1 = fruits1.concat(legumes1);
console.log(fruitsEtLegumes1); // Output: ['pomme', 'banane', 'carotte', 'brocoli']

// On reproduit ça avec une boucle for, sans utiliser aucune méthode de tableau.
const fruits2 = ["pomme", "banane"];
const legumes2 = ["carotte", "brocoli"];
let fruitsEtLegumes2 = [];
for (let i = 0; i < fruits2.length; i++) {
  fruitsEtLegumes2[i] = fruits2[i];
}
for (let i = 0; i < legumes2.length; i++) {
  fruitsEtLegumes2.push(legumes2[i]);
}
console.log(fruitsEtLegumes2); // Output: ['pomme', 'banane', 'carotte', 'brocoli']

//^? La méthode concat() est super pratique quand tu veux fusionner des tableaux en un seul tableau. Tu peux l'utiliser pour combiner plusieurs tableaux ou ajouter de nouveaux éléments à un tableau existant. C'est vraiment utile quand tu veux manipuler des ensembles de données et les regrouper ensemble. Alors pense à utiliser concat() pour tes besoins de fusion de tableaux, frérot !

//&_____________________________________________________________________________

//! 11. slice()
// Cette méthode renvoie une copie superficielle d'une portion du tableau dans un nouvel objet tableau.

const fruits1 = ["pomme", "banane", "orange", "mangue", "kiwi"];
const fruitsCopie1 = fruits1.slice(1, 4);
console.log(fruitsCopie1); // Output: ['banane', 'orange', 'mangue']

// On reproduit ça avec une boucle for, sans utiliser aucune méthode de tableau.
const fruits2 = ["pomme", "banane", "orange", "mangue", "kiwi"];
let fruitsCopie2 = [];
for (let i = 1; i < 4; i++) {
  fruitsCopie2.push(fruits2[i]);
}
console.log(fruitsCopie2); // Output: ['banane', 'orange', 'mangue']

//^? La méthode slice() est vraiment pratique quand tu veux récupérer une portion spécifique d'un tableau. Tu peux spécifier les index de début et de fin pour définir la portion que tu veux extraire. Cela te permet de travailler avec des sous-ensembles de données et de créer des copies indépendantes sans modifier le tableau d'origine. C'est vraiment pratique, frérot !

//&_____________________________________________________________________________
