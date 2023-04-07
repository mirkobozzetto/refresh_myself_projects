//* 01. Practice using the Object.keys() method to extract keys from an object.
//*! 01. Entraînez-vous à utiliser la méthode Object.keys() pour extraire les clés d'un objet.

const personne = {
  name: "John Doe",
  age: 25,
  gender: "male",
};
const keys = Object.keys(personne);
console.log(keys);
// Output: ["name", "age", "gender"]
//&_____________________________________________________________________________
//^ Here is a solution to get the keys of an object using a for...in loop:
//^? Voici une solution pour obtenir les clés d'un objet en utilisant une boucle for...in :

const personne = {
  name: "John Doe",
  age: 25,
  gender: "male",
};
const keys = [];
for (let key in personne) {
  keys.push(key);
}
console.log(keys);
// Output: ["name", "age", "gender"]
//^ This solution uses a for...in loop to iterate through all the properties of the object and add the corresponding keys to an array.
//^? Cette solution utilise une boucle for...in pour parcourir toutes les propriétés de l'objet et ajouter les clés correspondantes à un tableau.

//&_____________________________________________________________________________
//* 02. Create a function that takes an object as a parameter and returns an array containing the values ​​of all the properties of the object.
//*! 02. Créez une fonction qui prend un objet en paramètre et renvoie un tableau contenant les valeurs de toutes les propriétés de l'objet.

const personne = {
  name: "John Doe",
  age: 25,
  gender: "male",
};
const values = objectValues(personne);
console.log(values);
// Output: ["John Doe", 25, "male"]
//&_____________________________________________________________________________
//^ & with a loop:
//^? & avec une boucle :

function objectValues(obj) {
  const values = [];
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      values.push(obj[key]);
    }
  }
  return values;
}
//^ This function iterates through all the properties of the object using a for..in loop, then adds the value of each property into an array, which is then returned.
//^? Cette fonction parcourt toutes les propriétés de l'objet à l'aide d'une boucle for..in, puis ajoute la valeur de chaque propriété dans un tableau, qui est ensuite renvoyé.

//&_____________________________________________________________________________
//* 03. how to add a property to an object with the Object.assign() method:
//*! 03. comment ajouter une propriété à un objet avec la méthode Object.assign() :

const personne = {
  name: "John Doe",
  age: 25,
  gender: "male",
};
const newProp = {
  job: "developer",
  city: "Paris",
};
const updatedPersonne = Object.assign({}, personne, newProp);
console.log(updatedPersonne);
// Output: { name: 'John Doe', age: 25, gender: 'male', job: 'developer', city: 'Paris' }
//^ Here, we create a new empty object using the braces {}. Then we use the method Object.assign() to copy the properties of the person object and add the properties of the newProp object. We store the result in the updatedPerson variable. Finally, we display the result with console.log().
//^? Ici, nous créons un nouvel objet vide en utilisant les accolades {}. Nous utilisons ensuite la méthode Object.assign() pour copier les propriétés de l'objet person et ajouter les propriétés de l'objet newProp. Nous stockons le résultat dans la variable updatedPerson. Enfin, nous affichons le résultat avec console.log().
//&_____________________________________________________________________________
//^ It is also possible to achieve the same thing using a for..in loop:
//^? Il est également possible de réaliser la même chose en utilisant une boucle for..in :

const personne = {
  name: "John Doe",
  age: 25,
  gender: "male",
};
const newProp = {
  job: "developer",
  city: "Paris",
};
for (let prop in newProp) {
  personne[prop] = newProp[prop];
}
console.log(personne);
// Output: { name: 'John Doe', age: 25, gender: 'male', job: 'developer', city: 'Paris' }
//^ Here, we use a for..in loop to loop through the properties of the newProp object. We then use bracket notation [] to add each property and its value to the person object. We display the result with console.log().
//^? Ici, nous utilisons une boucle for..in pour parcourir les propriétés de l'objet newProp. Nous utilisons ensuite la notation entre crochets [] pour ajouter chaque propriété et sa valeur à l'objet person. Nous affichons le résultat avec console.log().

//&_____________________________________________________________________________
//* 04. Get values ​​from an object
//*! 04. Get values ​​from an object

const person = {
  name: "John Doe",
  age: 25,
  gender: "male",
};
//^ We want to obtain an array containing all the values ​​of this object, in the order in which they are defined in the object. One way to do this is to use the Object.values() method.
//^? Nous voulons obtenir un tableau contenant toutes les valeurs de cet objet, dans l'ordre dans lequel elles sont définies dans l'objet. Une façon d'y parvenir est d'utiliser la méthode Object.values().

const values = Object.values(person);
console.log(values); // Output: ["John Doe", 25, "male"]
//^ The Object.values() method returns an array containing the values ​​of all enumerable properties of an object in the same order as the object itself.
//^? La méthode Object.values() renvoie un tableau contenant les valeurs de toutes les propriétés énumérables d'un objet dans le même ordre que l'objet lui-même.
//&_____________________________________________________________________________
//^ It is also possible to get the values ​​by looping through the object with a for...in loop.
//^? Il est également possible d'obtenir les valeurs en parcourant l'objet à l'aide d'une boucle for...in.

const values = [];
for (const key in person) {
  values.push(person[key]);
}
console.log(values); // Output: ["John Doe", 25, "male"]
//^ In this loop, we browse each property of the object and add its value to the values array.Note that the order of the values in the array obtained by this method may not be identical to the order in which the properties are added to the object. If the order is important, it is better to use the Object.values() method.
//^? Dans cette boucle, nous parcourons chaque propriété de l'objet et ajoutons sa valeur au tableau values.//^ Notez que l'ordre des valeurs dans le tableau obtenu par cette méthode peut ne pas être identique à l'ordre dans lequel les propriétés sont ajoutées à l'objet. Si l'ordre est important, il est préférable d'utiliser la méthode Object.values().

//&_____________________________________________________________________________
//* 05. Create a function that takes an object as a parameter and returns the number of properties that this object has.
//*! 05. Créez une fonction qui prend un objet en paramètre et renvoie le nombre de propriétés que cet objet possède.

const person = {
  name: "John Doe",
  age: 25,
  gender: "male",
};
console.log(countProperties(person));
// Output: 3
//^ Solution :

const countProperties = (obj) => Object.keys(obj).length;
const person = {
  name: "John Doe",
  age: 25,
  gender: "male",
};
console.log(countProperties(person));
// Output: 3
//^ Explanation: "The countProperties function uses the Object.keys method to obtain an array containing the names of all the properties of the object passed in parameter. It then returns the length of this array, which corresponds to the number of properties of the object.This method is simple and efficient to count the number of properties of an object in JavaScript."
//^? Explication : "La fonction countProperties utilise la méthode Object.keys pour obtenir un tableau contenant les noms de toutes les propriétés de l'objet passé en paramètre. Elle renvoie ensuite la longueur de ce tableau, qui correspond au nombre de propriétés de l'objet. Cette méthode est simple et efficace pour compter le nombre de propriétés d'un objet en JavaScript."
//&_____________________________________________________________________________
//^ Here is a solution using a for loop to achieve the same result as the Object.values() method:
//^? Voici une solution utilisant une boucle for pour obtenir le même résultat que la méthode Object.values() :

const personne = {
  name: "John Doe",
  age: 25,
  gender: "male",
};
const values = [];
for (let key in personne) {
  values.push(personne[key]);
}
console.log(values);
// Output: ["John Doe", 25, "male"]
//^ Here, we use a for...in loop to go through the keys of the person object, then we use each key to access the corresponding value in the object. We then add this value to an array values. Finally, we display this array with console.log().
//^? Ici, nous utilisons une boucle for...in pour parcourir les clés de l'objet personne, puis nous utilisons chaque clé pour accéder à la valeur correspondante dans l'objet. Nous ajoutons ensuite cette valeur à un tableau values. Enfin, nous affichons ce tableau avec console.log().

//&_____________________________________________________________________________
//* 06. Create a mergeObjects function that takes two objects as arguments and returns a new object that combines the two. If a key exists in both objects, the value of the first should be replaced by the value of the second.
//*! 06. Créez une fonction mergeObjects qui prend deux objets en argument et renvoie un nouvel objet qui combine les deux. Si une clé existe dans les deux objets, la valeur du premier doit être remplacée par la valeur du second.

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { c: 4, d: 5 };
const merged = mergeObjects(obj1, obj2);
console.log(merged);
// Output: { a: 1, b: 2, c: 4, d: 5 }
//^ Solution:

const mergeObjects = (obj1, obj2) => {
  const merged = { ...obj1 };
  for (const key in obj2) {
    merged[key] = obj2[key];
  }
  return merged;
};
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { c: 4, d: 5 };
const merged = mergeObjects(obj1, obj2);
console.log(merged);
// Output: { a: 1, b: 2, c: 4, d: 5 }
//^ In this exercise, we have a person object that has properties such as name, age, gender, etc. We want to add a new occupation property to this object using the Object.assign() method. The Object.assign() method takes two arguments - the first is the destination object (in this case, person), and the second is one or more source objects (in this case, { occupation: 'developer' }). This method copies all the properties of the source objects into the destination object. In our example, it adds the occupation property to the person object. We use the console.log() method to display the updated person object with the new occupation property.
//^? Dans cet exercice, nous avons un objet personne qui possède des propriétés telles que le nom, l'âge, le sexe, etc. Nous voulons ajouter une nouvelle propriété occupation à cet objet en utilisant la méthode Object.assign(). La méthode Object.assign() prend deux arguments - le premier est l'objet de destination (dans ce cas, person), et le second est un ou plusieurs objets sources (dans ce cas, { occupation : 'developer' }). Cette méthode copie toutes les propriétés des objets sources dans l'objet de destination. Dans notre exemple, elle ajoute la propriété occupation à l'objet person. Nous utilisons la méthode console.log() pour afficher l'objet personne mis à jour avec la nouvelle propriété occupation.
//&_____________________________________________________________________________
//^ Here is a solution with a for-in loop:
//^? Voici une solution avec une boucle for-in :

const personne = {
  name: "John Doe",
  age: 25,
  gender: "male",
};
const values = [];
for (const key in personne) {
  if (personne.hasOwnProperty(key)) {
    values.push(personne[key]);
  }
}
console.log(values);
// Output: ["John Doe", 25, "male"]
//^ This solution loops through the properties of the person object with a for-in loop, verifies that the property belongs to the object itself (and not its prototype), then adds the value of the property to the values ​​array.
//^? Cette solution parcourt les propriétés de l'objet personne avec une boucle for-in, vérifie que la propriété appartient à l'objet lui-même (et non à son prototype), puis ajoute la valeur de la propriété au tableau values.

//&_____________________________________________________________________________
//* 07. Copy an object in JavaScript
//*! 07. Copier un objet en JavaScript

//? Objectives:
//^ Understand how to copy an object in JavaScript
//^ To know the different methods to copy an object
//^~ Exercise description:
//^ Create an object with several properties and values. Then use different methods to copy this object. Compare the results and explain the differences between each method.
//^ Sample Solution:
//?~ Objectifs :
//^? Comprendre comment copier un objet en JavaScript
//^? Connaître les différentes méthodes pour copier un objet
//~ Description de l'exercice :
//^? Créez un objet avec plusieurs propriétés et valeurs. Utilisez ensuite différentes méthodes pour copier cet objet. Comparez les résultats et expliquez les différences entre chaque méthode.
//^? Exemple de solution :

const myObj = { a: 1, b: 2, c: 3 };
// Method 1 : Spread operator
const copyObj1 = { ...myObj };
// Method 2 : Object.assign()
const copyObj2 = Object.assign({}, myObj);
// Method 3 : JSON.parse() & JSON.stringify()
const copyObj3 = JSON.parse(JSON.stringify(myObj));

// Comparison of copied objects
// Comparaison des objets copiés
console.log(myObj); // Output: {a: 1, b: 2, c: 3}
console.log(copyObj1); // Output: {a: 1, b: 2, c: 3}
console.log(copyObj2); // Output: {a: 1, b: 2, c: 3}
console.log(copyObj3); // Output: {a: 1, b: 2, c: 3}

// Modification of the "a" property of the initial object
myObj.a = 4;

// Comparison of objects after modification
console.log(myObj); // Output: {a: 4, b: 2, c: 3}
console.log(copyObj1); // Output: {a: 1, b: 2, c: 3}
console.log(copyObj2); // Output: {a: 1, b: 2, c: 3}
console.log(copyObj3); // Output: {a: 1, b: 2, c: 3}
//? explanation:
//^ This exercise aims to show different methods to copy an object in JavaScript. The three most common methods are the spread operator, Object.assign() and JSON.parse() and JSON.stringify(). The spread operator and Object.assign() create a shallow copy of the object, while JSON.parse() and JSON.stringify() create a deep copy of the object. This means that the properties of the copied object can be changed without affecting the original object in the case of the first two methods, while the latter method creates an independent copy of the original object.By using the spread operator method, a new object is created with all the properties and values of the original object. With the Object.assign() method, we also create a new object, but copying every property of the initial object into the new object. Finally, with the JSON.parse() and JSON.stringify() methods, we transform the initial object into a JSON string, then we transform this string into a new object.
//^ It is important to note that if the initial object contains nested properties or methods, the JSON.parse() and JSON.stringify() method will not copy those properties or methods. Also, this method will not work if the object contains circular references.
//?~ explication :
//^? Cet exercice a pour but de montrer différentes méthodes pour copier un objet en JavaScript. Les trois méthodes les plus courantes sont l'opérateur de propagation, Object.assign() et JSON.parse() et JSON.stringify(). L'opérateur de propagation et Object.assign() créent une copie superficielle de l'objet, tandis que JSON.parse() et JSON.stringify() créent une copie profonde de l'objet. Cela signifie que les propriétés de l'objet copié peuvent être modifiées sans affecter l'objet original dans le cas des deux premières méthodes, tandis que la dernière méthode crée une copie indépendante de l'objet original.En utilisant la méthode de l'opérateur de propagation, un nouvel objet est créé avec toutes les propriétés et valeurs de l'objet original. Avec la méthode Object.assign(), nous créons également un nouvel objet, mais en copiant toutes les propriétés de l'objet initial dans le nouvel objet. Enfin, avec les méthodes JSON.parse() et JSON.stringify(), nous transformons l'objet initial en une chaîne JSON, puis nous transformons cette chaîne en un nouvel objet.
//^? Il est important de noter que si l'objet initial contient des propriétés ou des méthodes imbriquées, les méthodes JSON.parse() et JSON.stringify() ne copieront pas ces propriétés ou méthodes. De même, cette méthode ne fonctionnera pas si l'objet contient des références circulaires.

//&_____________________________________________________________________________
//* 08. Statement: You have an object that contains information about a student. Create a function that takes this object as input and returns the student's full name as "FirstName LastName".
//*! 08. Déclaration : Vous disposez d'un objet qui contient des informations sur un étudiant. Créez une fonction qui prend cet objet en entrée et renvoie le nom complet de l'étudiant sous la forme "Prénom Nom".
//^ Exemple :

const etudiant = {
  prenom: "Jean",
  nom: "Dupont",
  age: 22,
  niveau: "Licence",
};
console.log(nomComplet(etudiant));
// Output: "Jean Dupont"
//^ Here is a possible solution with an arrow function:
//^? Voici une solution possible avec une fonction de flèche :

const nomComplet = (etudiant) => `${etudiant.prenom} ${etudiant.nom}`;
const etudiant = {
  prenom: "Jean",
  nom: "Dupont",
  age: 22,
  niveau: "Licence",
};
console.log(nomComplet(etudiant));
// Output: "Jean Dupont"

//&_____________________________________________________________________________
//^ & with a loop
//^? & avec une boucle

const personne = {
  name: "John Doe",
  age: 25,
  gender: "male",
};
const values = [];
for (let key in personne) {
  values.push(personne[key]);
}
console.log(values);
// Output: ["John Doe", 25, "male"]
//^ We use a for..in loop to browse the keys of the object, and at each iteration, we retrieve the corresponding value and add it to the values ​​array.

//&_____________________________________________________________________________
//* 09. Merge multiple objects

//? Objective: Merge multiple objects into one single object.
//^ Instructions:
//^ Create several objects with different properties.
//^ Use the method Object.assign() to merge the objects into one object.
//^ Store the result of the merge in a variable.
//^ Display the result with console.log().
//^ Example:

//*! 09. Fusionner plusieurs objets
//?~ Objectif : Fusionner plusieurs objets en un seul.
//^? Créez plusieurs objets avec des propriétés différentes.
//^? Utilisez la méthode Object.assign() pour fusionner les objets en un seul objet.
//^? Stockez le résultat de la fusion dans une variable.
//^? Affichez le résultat avec console.log().
//^? Exemple :

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };
const mergedObj = Object.assign({}, obj1, obj2, obj3);
console.log(mergedObj);
// Output: {a: 1, b: 2, c: 3}
//^ In this example, we create three objects with one property each. We then use the Object.assign() method to merge these three objects into one object. We store the result of the merge in a variable called mergedObj and display the result with console.log(). The displayed result is an object with the three properties of our original objects.
//^? Dans cet exemple, nous créons trois objets avec une propriété chacun. Nous utilisons ensuite la méthode Object.assign() pour fusionner ces trois objets en un seul. Nous stockons le résultat de la fusion dans une variable appelée mergedObj et affichons le résultat avec console.log(). Le résultat affiché est un objet possédant les trois propriétés de nos objets d'origine.
//&_____________________________________________________________________________
//^ Variant with a loop:
//^? Variante avec une boucle :

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };
const obj4 = { d: 4 };
const obj5 = { e: 5 };
const objs = [obj1, obj2, obj3, obj4, obj5];
const mergedObj = objs.reduce((acc, curr) => Object.assign(acc, curr), {});
console.log(mergedObj);
// Output: {a: 1, b: 2, c: 3, d: 4, e: 5}
//^ In this variant, we create a list of objects that we want to merge into a single object. We use the reduce() method to iterate over the list of objects and use the Object.assign() method to merge each object into an empty object. The final result is stored in the mergedObj variable and displayed with console.log(). The displayed result is an object with all the properties of our original objects merged into one object.
//^? Dans cette variante, nous créons une liste d'objets que nous voulons fusionner en un seul objet. Nous utilisons la méthode reduce() pour itérer sur la liste d'objets et utilisons la méthode Object.assign() pour fusionner chaque objet en un objet vide. Le résultat final est stocké dans la variable mergedObj et affiché avec console.log(). Le résultat affiché est un objet avec toutes les propriétés de nos objets originaux fusionnés en un seul objet.

//&_____________________________________________________________________________
//* 10. Create an object with duplicate values
//*! 10. Créer un objet avec des valeurs dupliquées

//^ You have an object with properties and values, you need to create a new object with the same properties but the values ​​need to be doubled.
//^? Vous avez un objet avec des propriétés et des valeurs, vous devez créer un nouvel objet avec les mêmes propriétés mais les valeurs doivent être doublées.

const obj = { a: 1, b: 2, c: 3 };
// Output: {a: 2, b: 4, c: 6}
//^ One way to solve this exercise is to use a for..in loop to loop through the properties of the object and store the new values ​​in a new object.
//^ Here is a possible implementation:
//^? Une façon de résoudre cet exercice est d'utiliser une boucle for..in pour parcourir les propriétés de l'objet et stocker les nouvelles valeurs dans un nouvel objet.
//^? Voici une implémentation possible :

const obj = { a: 1, b: 2, c: 3 };
const doubleObj = {};
for (let prop in obj) {
  doubleObj[prop] = obj[prop] * 2;
}
console.log(doubleObj);
// Output: {a: 2, b: 4, c: 6}
//^ This solution uses a for..in loop to loop through all the properties of the original object and store the new duplicated values ​​in a new object.

//&_____________________________________________________________________________
//* 11. Write a function that takes an object as input and returns a new object that contains only properties that have number type values.

//^ Example :

const obj = {
  name: "John Doe",
  age: 25,
  gender: "male",
  height: 1.8,
  weight: 70,
};
const filteredObj = filterNumberProperties(obj);
console.log(filteredObj);
// Output: {age: 25, height: 1.8, weight: 70}
//^ In this exercise, we have an object that contains names of people and their respective ages. We want to create a new property in the object that indicates whether each person is of age or not based on their age (of age if the age is 18 or older).
//^? Dans cet exercice, nous avons un objet qui contient des noms de personnes et leurs âges respectifs. Nous voulons créer une nouvelle propriété dans l'objet qui indique si chaque personne est majeure ou non en fonction de son âge (majeure si l'âge est de 18 ans ou plus).

//^ To do this, we can use the Object.entries() method to get an array containing the key-value pairs of the object. Then we can use a for...of loop to go through each key-value pair and add an isMajor property to the object with the value true or false depending on the age.

//~ The code would look like this:

//^? Pour ce faire, nous pouvons utiliser la méthode Object.entries() pour obtenir un tableau contenant les paires clé-valeur de l'objet. Ensuite, nous pouvons utiliser une boucle for...of pour parcourir chaque paire clé-valeur et ajouter une propriété isMajor à l'objet avec la valeur true ou false en fonction de l'âge.

//~ Le code ressemblerait à ceci :

const personnes = {
  John: 25,
  Jane: 17,
  Bob: 30,
  Alice: 12,
};
for (const [nom, age] of Object.entries(personnes)) {
  personnes[nom].isMajor = age >= 18;
}
console.log(personnes);
/*
Output:
{
  John: { age: 25, isMajor: true },
  Jane: { age: 17, isMajor: false },
  Bob: { age: 30, isMajor: true },
  Alice: { age: 12, isMajor: false }
}
*/

//^ We used Object.entries() to obtain an array of key-value pairs from the people object. Next, we used a for...of loop to traverse each key-value pair, using the [name, age] syntax to extract the key and value of each pair. We then used object notation to add a new isMajor property to the people object, assigning it a boolean value based on the age of each person. Finally, we printed the updated people object in the console.
//^? Nous avons utilisé Object.entries() pour obtenir un tableau de paires clé-valeur à partir de l'objet people. Ensuite, nous avons utilisé une boucle for...of pour parcourir chaque paire clé-valeur, en utilisant la syntaxe [name, age] pour extraire la clé et la valeur de chaque paire. Nous avons ensuite utilisé la notation d'objet pour ajouter une nouvelle propriété isMajor à l'objet people, en lui attribuant une valeur booléenne basée sur l'âge de chaque personne. Enfin, nous avons imprimé l'objet people mis à jour dans la console.
