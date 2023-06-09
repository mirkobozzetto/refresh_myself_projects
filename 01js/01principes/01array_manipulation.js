//! 1. push()
// Cette méthode permet d'ajouter un ou plusieurs éléments à la fin d'un tableau et renvoie la nouvelle longueur du tableau.

const fruits1 = ["pomme", "banane", "mangue"];
const newLength1 = fruits1.push("orange");
console.log(fruits1); // Output: ['pomme', 'banane', 'mangue', 'orange']
console.log(newLength1); // Output: 4

// On reproduit ça avec une boucle while, sans utiliser aucune méthode de tableau.
const fruits2 = ["pomme", "banane", "mangue"];
let i = 0;
let newLength2 = fruits2.length;
while (i < newLength2) {
  i++;
}
fruits2[newLength2] = "orange"; // On ajoute l'orange à la fin du tableau
console.log(fruits2); // Output: ['pomme', 'banane', 'mangue', 'orange']

//^? La méthode push() est généralement utilisée lorsque tu veux ajouter des éléments à la fin d'un tableau. Par exemple, si tu bosses sur une appli de messagerie instantanée et que tu veux ajouter un nouveau message à la fin de la liste des messages, tu pourrais utiliser push(). Aussi, tu pourrais avoir un tableau qui représente un panier d'achats et tu veux ajouter un nouvel article à la fin du tableau. Dans ce cas, la méthode push() serait aussi un bon choix. C'est un outil super utile pour garder les choses organisées, surtout quand t'as une tonne de données à manipuler.

//&_____________________________________________________________________________
