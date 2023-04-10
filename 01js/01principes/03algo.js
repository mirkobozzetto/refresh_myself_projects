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

//&_____________________________________________________________________________

const grouperParPropriete = (array, propriete) =>
  array.reduce((acc, item) => {
    const cle = item[propriete];
    if (!acc[cle]) {
      acc[cle] = [];
    }
    acc[cle].push(item);
    return acc;
  }, {});

/* 
Dans cet exemple, nous avons une fonction grouperParPropriete qui prend un tableau et une propriété en entrée et renvoie un objet contenant des groupes d'éléments en fonction de cette propriété. Nous avons utilisé la fonction fléchée pour définir la fonction et avons également utilisé la fonction Array.prototype.reduce() pour créer l'objet groupé.
*/

const transactions = [
  { id: 1, montant: 100, categorie: "Nourriture" },
  { id: 2, montant: 200, categorie: "Voyage" },
  { id: 3, montant: 50, categorie: "Nourriture" },
  { id: 4, montant: 400, categorie: "Voyage" },
];
const transactionsGroupees = grouperParPropriete(transactions, "categorie");
console.log(transactionsGroupees);

//&_____________________________________________________________________________

class Person {
  constructor(nom, dateNaissance) {
    this.nom = nom;
    this.dateNaissance = new Date(dateNaissance);
  }

  calculerAge() {
    const aujourdHui = new Date();
    const diff = aujourdHui - this.dateNaissance;
    const age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  }
}

const personne = new Person("Alice", "1990-01-01");

console.log(`${personne.nom} a ${personne.calculerAge()} ans.`);

/* 
Dans cet exemple, nous avons créé une classe Person avec un constructeur qui prend nom et dateNaissance comme arguments. La méthode calculerAge() est ajoutée à la classe pour calculer l'âge d'une personne en fonction de sa date de naissance.

Voici une explication détaillée de cette classe et de la méthode calculerAge() :

class Person { ... } : Ceci est la déclaration de la classe Person. Une classe est un modèle pour créer des objets en JavaScript. Les classes ont des méthodes et des propriétés.

constructor(nom, dateNaissance) { ... } : Ceci est le constructeur de la classe Person, qui est appelé lorsqu'un nouvel objet Person est créé. Le constructeur prend deux arguments, nom et dateNaissance, et initialise les propriétés de l'objet avec ces valeurs.

calculerAge() { ... } : Ceci est une méthode de la classe Person qui calcule l'âge d'une personne en fonction de sa date de naissance. La méthode soustrait la date de naissance de la date actuelle pour obtenir la différence en millisecondes, puis convertit cette différence en années.

const personne = new Person("Alice", "1990-01-01"); : Ceci crée un nouvel objet Person avec le nom "Alice" et la date de naissance "1990-01-01".

console.log(${personne.nom} a ${personne.calculerAge()} ans.); : Ceci appelle la méthode calculerAge() sur l'objet personne et affiche l'âge calculé dans la console.
*/

//&_____________________________________________________________________________

class CompteBancaire {
  constructor(numero, solde = 0) {
    this.numero = numero;
    this.solde = solde;
  }
  deposer(montant) {
    this.solde += montant;
  }
  retirer(montant) {
    if (montant > this.solde) {
      console.log("Fonds insuffisants !");
      return;
    }
    this.solde -= montant;
  }
  afficherSolde() {
    console.log(`Le solde du compte ${this.numero} est de ${this.solde}€.`);
  }
}
class Banque {
  constructor() {
    this.comptes = [];
  }
  ajouterCompte(compte) {
    this.comptes.push(compte);
  }
  transferer(srcNumero, destNumero, montant) {
    const srcCompte = this.comptes.find(
      (compte) => compte.numero === srcNumero
    );
    const destCompte = this.comptes.find(
      (compte) => compte.numero === destNumero
    );
    if (!srcCompte || !destCompte) {
      console.log("Compte introuvable !");
      return;
    }
    srcCompte.retirer(montant);
    destCompte.deposer(montant);
  }
}
const banque = new Banque();
const compte1 = new CompteBancaire("001", 1000);
const compte2 = new CompteBancaire("002", 500);
banque.ajouterCompte(compte1);
banque.ajouterCompte(compte2);
banque.transferer("001", "002", 200);
compte1.afficherSolde();
compte2.afficherSolde();

/* 
Dans cet exemple, nous avons deux classes, CompteBancaire et Banque. La classe CompteBancaire représente un compte bancaire individuel avec des méthodes pour déposer, retirer et afficher le solde. La classe Banque gère un ensemble de comptes bancaires et fournit une méthode pour effectuer des transferts entre les comptes.
*/

//&_____________________________________________________________________________

class Tache {
  constructor(description, dateLimite) {
    this.description = description;
    this.dateLimite = new Date(dateLimite);
    this.terminee = false;
  }
  marquerCommeTerminee() {
    this.terminee = true;
  }
}
class GestionnaireTaches {
  constructor() {
    this.taches = [];
  }
  ajouterTache(tache) {
    this.taches.push(tache);
  }
  supprimerTache(description) {
    this.taches = this.taches.filter(
      (tache) => tache.description !== description
    );
  }
  afficherTaches() {
    this.taches.forEach((tache) => {
      console.log(
        `${
          tache.description
        } - Date limite : ${tache.dateLimite.toLocaleDateString()} - ${
          tache.terminee ? "Terminée" : "En cours"
        }`
      );
    });
  }
}
const gestionnaire = new GestionnaireTaches();
const tache1 = new Tache("Acheter du lait", "2023-04-15");
const tache2 = new Tache("Payer les factures", "2023-04-20");
gestionnaire.ajouterTache(tache1);
gestionnaire.ajouterTache(tache2);
gestionnaire.afficherTaches();
tache1.marquerCommeTerminee();
console.log("\nAprès avoir marqué la première tâche comme terminée :\n");
gestionnaire.afficherTaches();

/*
    Dans cet exemple, nous avons deux classes, Tache et GestionnaireTaches. La classe Tache représente une tâche individuelle avec une description, une date limite et un état (terminée ou non). La classe GestionnaireTaches gère un ensemble de tâches et fournit des méthodes pour ajouter, supprimer et afficher les tâches.
    */
//&_____________________________________________________________________________

const calculerNombreDeJours = (date1, date2) => {
  const msParJour = 1000 * 60 * 60 * 24;
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  const diffMs = Math.abs(d1 - d2);
  const diffJours = Math.round(diffMs / msParJour);

  return diffJours;
};
const date1 = "2023-04-10";
const date2 = "2023-05-01";
const nombreDeJours = calculerNombreDeJours(date1, date2);
console.log(`Il y a ${nombreDeJours} jours entre le ${date1} et le ${date2}.`);

/*
Dans cet exemple, nous avons une fonction calculerNombreDeJours qui prend deux dates en entrée et renvoie le nombre de jours entre ces deux dates. Cette fonction peut être utile dans un contexte de développement front-end pour manipuler et afficher des informations basées sur des dates.
*/
