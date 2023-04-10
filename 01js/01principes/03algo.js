const filtrerArticlesParCategorie = (articles, categorie) =>
  articles.filter((article) => article.categorie === categorie);

/* 
Voici une explication détaillée de cette fonction :

const filtrerArticlesParCategorie = (articles, categorie) => ... : Ceci est la déclaration de la fonction fléchée filtrerArticlesParCategorie, qui prend deux arguments, articles et categorie. La fonction utilise ces arguments pour filtrer le tableau d'objets articles en fonction de la categorie spécifiée.

articles.filter((article) => article.categorie === categorie) : La méthode Array.prototype.filter() est appelée sur le tableau articles. La fonction filter() crée un nouveau tableau avec tous les éléments du tableau d'origine qui passent le test implémenté par la fonction fournie. Dans cet exemple, nous fournissons une fonction fléchée en tant que fonction de test.

(article) => article.categorie === categorie : Ceci est la fonction de test que nous fournissons à la méthode filter(). Cette fonction prend un élément du tableau articles, qui est un objet représentant un article, et vérifie si la propriété categorie de cet article est égale à la categorie spécifiée en argument. Si la condition est vraie, la fonction retourne true, et l'article est inclus dans le nouveau tableau filtré. Si la condition est fausse, la fonction retourne false, et l'article n'est pas inclus dans le nouveau tableau filtré.

En résumé, la fonction filtrerArticlesParCategorie filtre un tableau d'objets articles en fonction de la categorie spécifiée en utilisant la méthode filter() et une fonction de test personnalisée. La fonction de test vérifie si la propriété categorie de chaque article est égale à la categorie spécifiée, et inclut uniquement les articles correspondants dans le nouveau tableau filtré.
*/

const articles = [
  { id: 1, titre: "Article 1", categorie: "Technologie" },
  { id: 2, titre: "Article 2", categorie: "Science" },
  { id: 3, titre: "Article 3", categorie: "Technologie" },
  { id: 4, titre: "Article 4", categorie: "Voyage" },
];
const articlesTechnologie = filtrerArticlesParCategorie(
  articles,
  "Technologie"
);
console.log(articlesTechnologie);

//&_____________________________________________________________________________

const trierParPropriete = (array, propriete) => {
  return array.sort((a, b) => {
    if (a[propriete] < b[propriete]) {
      return -1;
    }
    if (a[propriete] > b[propriete]) {
      return 1;
    }
    return 0;
  });
};

/*
Voici une explication détaillée de chaque partie de cette fonction :

(array, propriete) => { ... } : Ceci est la déclaration de la fonction fléchée trierParPropriete, qui prend deux arguments, array et propriete. La fonction utilise ces arguments pour trier le tableau d'objets en fonction de la propriété spécifiée.

return array.sort((a, b) => { ... }); : La fonction sort() est appelée sur le tableau array. La méthode Array.prototype.sort() trie les éléments d'un tableau en place et renvoie le tableau trié. La fonction sort() prend en option une fonction de comparaison en tant qu'argument, qui est utilisée pour déterminer l'ordre des éléments. Dans cet exemple, nous fournissons une fonction fléchée comme fonction de comparaison.

(a, b) => { ... } : Ceci est la fonction de comparaison que nous fournissons à la méthode sort(). Cette fonction prend deux éléments du tableau, a et b, et retourne un nombre négatif, positif ou zéro en fonction de la relation entre a[propriete] et b[propriete].

if (a[propriete] < b[propriete]) { ... } : Si la valeur de la propriété de a est inférieure à celle de la propriété de b, la fonction de comparaison retourne -1. Cela indique à la méthode sort() que l'élément a doit être placé avant l'élément b dans le tableau trié.

if (a[propriete] > b[propriete]) { ... } : Si la valeur de la propriété de a est supérieure à celle de la propriété de b, la fonction de comparaison retourne 1. Cela indique à la méthode sort() que l'élément a doit être placé après l'élément b dans le tableau trié.

return 0; : Si la valeur de la propriété de a est égale à celle de la propriété de b, la fonction de comparaison retourne 0. Cela indique à la méthode sort() que l'ordre des éléments a et b n'a pas d'importance, car leurs valeurs de propriété sont égales.

En résumé, la fonction trierParPropriete trie un tableau d'objets en fonction d'une propriété spécifique en utilisant la méthode sort() et une fonction de comparaison personnalisée. La fonction de comparaison utilise la valeur de la propriété spécifiée pour déterminer l'ordre des éléments dans le tableau trié.
*/

const personnes = [
  { id: 1, nom: "Alice", age: 30 },
  { id: 2, nom: "Bob", age: 25 },
  { id: 3, nom: "Charlie", age: 35 },
  { id: 4, nom: "Diana", age: 28 },
];
const personnesTrieParAge = trierParPropriete(personnes, "age");
const personnesTrieParNom = trierParPropriete(personnes, "nom");
console.log("Personnes triées par âge :");
console.log(personnesTrieParAge);
console.log("Personnes triées par nom :");
console.log(personnesTrieParNom);
