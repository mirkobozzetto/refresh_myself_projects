//* 01. Create an array of integers and use a loop to find the sum of all the elements in the array.
//*! 01. Créez un tableau d'entiers et utilisez une boucle pour trouver la somme de tous les éléments du tableau.

const numbers = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum); // Output: 150
//^ In this example, we created an array of integers called numbers and initialized the variable sum to zero. We then used a for loop to go through all the elements of the array and add their values to the sum variable. Finally, we displayed the result of the sum using the console.log() method.
//^? Dans cet exemple, nous avons créé un tableau d'entiers appelé nombres et initialisé la variable somme à zéro. Nous avons ensuite utilisé une boucle for pour parcourir tous les éléments du tableau et ajouter leurs valeurs à la variable sum. Enfin, nous avons affiché le résultat de la somme à l'aide de la méthode console.log().
//&_____________________________________________________________________________

const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // Output: 150
//^ In this example, we used the reduce() method to calculate the sum of all the elements in the numbers array. The reduce() method takes a callback function as an argument that takes two parameters: the accumulator (acc) and the current element (cur). The accumulator is initialized to zero by passing 0 as the second argument to the reduce() method. At each iteration of the loop, the callback function adds the current element to the accumulator. At the end of the loop, the reduce() method returns the final value of the accumulator.
//^? Dans cet exemple, nous avons utilisé la méthode reduce() pour calculer la somme de tous les éléments du tableau des nombres. La méthode reduce() prend en argument une fonction de rappel qui prend deux paramètres : l'accumulateur (acc) et l'élément courant (cur). L'accumulateur est initialisé à zéro en passant 0 comme second argument à la méthode reduce(). À chaque itération de la boucle, la fonction de rappel ajoute l'élément courant à l'accumulateur. À la fin de la boucle, la méthode reduce() renvoie la valeur finale de l'accumulateur.

//&_____________________________________________________________________________
//* 02. Create an array of strings and use an array method to sort the elements alphabetically.
//*! 02. Créez un tableau de chaînes de caractères et utilisez une méthode de tableau pour trier les éléments par ordre alphabétique.

const fruits = ["orange", "apple", "banana", "kiwi", "cherry"];
const sortedFruits = fruits.sort();
console.log(sortedFruits); // Output: ["apple", "banana", "cherry", "kiwi", "orange"]
//^ In this example, we have created an array of strings called fruits and used the sort() method to sort the elements alphabetically.
//^ The sort() method directly modifies the original array and returns the sorted array.
//^ Finally, we displayed the sorted array using the console.log() method.
//^? Dans cet exemple, nous avons créé un tableau de chaînes de caractères appelé fruits et utilisé la méthode sort() pour trier les éléments par ordre alphabétique.
//^? La méthode sort() modifie directement le tableau original et renvoie le tableau trié.
//^? Enfin, nous avons affiché le tableau trié à l'aide de la méthode console.log().

//&_____________________________________________________________________________
//^ Here is a second example that uses the localeCompare() method to sort items alphabetically:
//^? Voici un deuxième exemple qui utilise la méthode localeCompare() pour trier les éléments par ordre alphabétique :

const sortedFruits = fruits.sort((a, b) => a.localeCompare(b));
console.log(sortedFruits); // Output: ["apple", "banana", "cherry", "kiwi", "orange"]
//^ In this example, we used the sort() method with a comparison function as an argument that uses the localeCompare() method to compare strings.
//^ The localeCompare() method returns a negative number if a is less than b, zero if the two strings are equal and a positive number if a is greater than b.
//^ The compare function is used by the sort() method to sort the elements of the array.
//^ Finally, we displayed the sorted array using the console.log() method.
//^? Dans cet exemple, nous avons utilisé la méthode sort() avec une fonction de comparaison en argument qui utilise la méthode localeCompare() pour comparer les chaînes de caractères.
//? La méthode localeCompare() renvoie un nombre négatif si a est inférieur à b, zéro si les deux chaînes sont égales et un nombre positif si a est supérieur à b.
//? La fonction de comparaison est utilisée par la méthode sort() pour trier les éléments du tableau.
//^? Enfin, nous avons affiché le tableau trié à l'aide de la méthode console.log().

Traduit avec www.DeepL.com/Translator (version gratuite)

//&_____________________________________________________________________________
//* 03. Create an array of objects that have a name property and use an array method to sort the objects alphabetically based on their name property.
//*! 03. Créer un tableau d'objets ayant une propriété name et utiliser une méthode array pour trier les objets par ordre alphabétique en fonction de leur propriété name.

const people = [
  { name: "John", age: 35 },
  { name: "Alice", age: 28 },
  { name: "Bob", age: 42 },
  { name: "Jane", age: 20 },
];
const sortedPeople = people.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedPeople);
// Output: [
//   { name: 'Alice', age: 28 },
//   { name: 'Bob', age: 42 },
//   { name: 'Jane', age: 20 },
//   { name: 'John', age: 35 }
// ]
//^ In this example, we created an array of people objects that have a name property.
//^ We then used the sort() method with a compare function as an argument that uses the localeCompare() method to sort the objects alphabetically based on their name property. Finally, we displayed the sorted array using the console.log() method.
//^? Dans cet exemple, nous avons créé un tableau d'objets "people" ayant une propriété "name".
//^? Nous avons ensuite utilisé la méthode sort() avec une fonction de comparaison en argument qui utilise la méthode localeCompare() pour trier les objets par ordre alphabétique sur la base de leur propriété name. Enfin, nous avons affiché le tableau trié à l'aide de la méthode console.log().
//&_____________________________________________________________________________

const sortedPeople = people.sort((a, b) => (a.name < b.name ? -1 : 1));
console.log(sortedPeople);
//^ In this example, we used the sort() method with a comparison function as an argument that uses the < comparison operator to sort objects alphabetically based on their name property. The comparison function returns -1 if a.name is less than b.name, 1 if a.name is greater than b.name, and 0 if both are equal. Finally, we displayed the sorted array using the console.log() method. This method is simpler and easier to understand than the localeCompare() method.
//^? Dans cet exemple, nous avons utilisé la méthode sort() avec une fonction de comparaison comme argument qui utilise l'opérateur de comparaison < pour trier les objets par ordre alphabétique sur la base de leur propriété name. La fonction de comparaison renvoie -1 si a.name est inférieur à b.name, 1 si a.name est supérieur à b.name et 0 si les deux sont égaux. Enfin, nous avons affiché le tableau trié à l'aide de la méthode console.log(). Cette méthode est plus simple et plus facile à comprendre que la méthode localeCompare().

//&_____________________________________________________________________________
//* 04. Create an array of objects that have firstName and lastName properties and use an array method to create a new array that contains the full names (concatenation of firstName and lastName) of all objects.
//*! 04. Créer un tableau d'objets ayant les propriétés firstName et lastName et utiliser une méthode array pour créer un nouveau tableau contenant les noms complets (concaténation de firstName et lastName) de tous les objets.

const people = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Alice", lastName: "Smith" },
  { firstName: "Bob", lastName: "Johnson" },
  { firstName: "Jane", lastName: "Brown" },
];
const fullNameList = people.map(
  (person) => `${person.firstName} ${person.lastName}`
);
console.log(fullNameList);
// Output: ['John Doe', 'Alice Smith', 'Bob Johnson', 'Jane Brown']
//^ In this example, we've created an array of people objects that have firstName and lastName properties. We then used the map() method to create a new fullNameList array that contains the full names of all objects by concatenating the firstName and lastName properties. The map() method creates a new array by applying a function to each element of the original array. Finally, we displayed the table of full names using the console.log() method.
//^? Dans cet exemple, nous avons créé un tableau d'objets "people" possédant les propriétés "firstName" et "lastName". Nous avons ensuite utilisé la méthode map() pour créer un nouveau tableau fullNameList qui contient les noms complets de tous les objets en concaténant les propriétés firstName et lastName. La méthode map() crée un nouveau tableau en appliquant une fonction à chaque élément du tableau d'origine. Enfin, nous avons affiché le tableau des noms complets à l'aide de la méthode console.log().

//&_____________________________________________________________________________
//* 05. Create an array of objects that have name and age properties and use an array method to create a new array that contains only objects where the age is greater than 30.
//*! 05. Créez un tableau d'objets ayant les propriétés name et age et utilisez une méthode array pour créer un nouveau tableau contenant uniquement les objets dont l'âge est supérieur à 30.

const people = [
  { name: "John", age: 35 },
  { name: "Alice", age: 28 },
  { name: "Bob", age: 42 },
  { name: "Jane", age: 20 },
];
const over30List = people.filter((person) => person.age > 30);
console.log(over30List);
// Output: [
//   { name: 'John', age: 35 },
//   { name: 'Bob', age: 42 }
// ]
//^ In this example, we have created an array of people objects that have name and age properties. We then used the filter() method to create a new array over30List which contains only objects where the age is greater than 30. The filter() method creates a new array keeping only those elements that meet a given condition by a test function. Finally, we displayed the array of objects where the age is greater than 30 using the console.log() method.
//^? Dans cet exemple, nous avons créé un tableau d'objets "people" ayant des propriétés "name" et "age". Nous avons ensuite utilisé la méthode filter() pour créer un nouveau tableau over30List qui contient uniquement les objets dont l'âge est supérieur à 30 ans. La méthode filter() crée un nouveau tableau qui ne contient que les éléments qui répondent à une condition donnée par une fonction de test. Enfin, nous avons affiché le tableau des objets dont l'âge est supérieur à 30 en utilisant la méthode console.log().


//&_____________________________________________________________________________
//* 06. Create an array of objects that have name and age properties and use an array method to calculate the average age of all objects.
//*! 06. Créez un tableau d'objets possédant les propriétés name et age et utilisez une méthode de tableau pour calculer l'âge moyen de tous les objets.

const people = [
  { name: "John", age: 35 },
  { name: "Alice", age: 28 },
  { name: "Bob", age: 42 },
  { name: "Jane", age: 20 },
];
const ageSum = people.reduce((acc, person) => acc + person.age, 0);
const avgAge = ageSum / people.length;
console.log(avgAge);
// Output: 31.25
//^In this example, we have created an array of people objects that have name and age properties. We then used the reduce() method to calculate the sum of the ages of all the objects and store the result in an ageSum variable. The reduce() method creates a single value by applying a function to each element of the original array, storing the intermediate result in an accumulator. Then we divided the sum of the ages by the number of objects in the array to calculate the average age and store the result in a variable avgAge. Finally, we displayed the average age using the console.log() method.
//^?Dans cet exemple, nous avons créé un tableau d'objets "personnes" ayant des propriétés "nom" et "âge". Nous avons ensuite utilisé la méthode reduce() pour calculer la somme des âges de tous les objets et stocker le résultat dans une variable ageSum. La méthode reduce() crée une valeur unique en appliquant une fonction à chaque élément du tableau d'origine et en stockant le résultat intermédiaire dans un accumulateur. Nous avons ensuite divisé la somme des âges par le nombre d'objets dans le tableau pour calculer l'âge moyen et stocker le résultat dans une variable avgAge. Enfin, nous avons affiché l'âge moyen à l'aide de la méthode console.log().

Traduit avec www.DeepL.com/Translator (version gratuite)
//&_____________________________________________________________________________
//^ To calculate the average age with math, we could sum the ages of all the objects and divide by the number of objects. We could use a loop to go through all the objects and store the sum of the ages in a variable, then divide that sum by the number of objects to get the average. Here is an example:
//^? Pour calculer l'âge moyen à l'aide des mathématiques, nous pourrions additionner les âges de tous les objets et les diviser par le nombre d'objets. Nous pourrions utiliser une boucle pour parcourir tous les objets et stocker la somme des âges dans une variable, puis diviser cette somme par le nombre d'objets pour obtenir la moyenne. Voici un exemple :

const people = [
  { name: "John", age: 35 },
  { name: "Alice", age: 28 },
  { name: "Bob", age: 42 },
  { name: "Jane", age: 20 },
];
let ageSum = 0;
for (let i = 0; i < people.length; i++) {
  ageSum += people[i].age;
}
const avgAge = ageSum / people.length;
console.log(avgAge);
// Output: 31.25
//^ In this example, we used a for loop to iterate over all the objects in the people array and store the sum of ages in an ageSum variable. Then we divided the sum of the ages by the number of objects in the array to get the average age and store the result in a variable avgAge. Finally, we displayed the average age using the console.log() method.
//^? Dans cet exemple, nous avons utilisé une boucle for pour itérer sur tous les objets du tableau people et stocker la somme des âges dans une variable ageSum. Ensuite, nous avons divisé la somme des âges par le nombre d'objets dans le tableau pour obtenir l'âge moyen et stocker le résultat dans une variable avgAge. Enfin, nous avons affiché l'âge moyen à l'aide de la méthode console.log().

//&_____________________________________________________________________________
//* 07. Create an array of numbers and use an array method to sort the numbers in ascending order.
//*! 07. Créez un tableau de nombres et utilisez une méthode de tableau pour trier les nombres par ordre croissant.

const numbers = [5, 1, 7, 3, 9, 2];
numbers.sort((a, b) => a - b);
console.log(numbers);
// Output: [1, 2, 3, 5, 7, 9]
//^ In this example, we created an array of numbers numbers. We then used the sort() method to sort the numbers in ascending order. The sort() method modifies the original array by sorting it according to a comparison function. In our example, we used an arrow function to define our comparison function. The compare function compares two array elements and returns a negative number if the first element should rank before the second, a positive number if the first element should rank after the second, or zero if the two elements are equal. Finally, we displayed the sorted array using the console.log() method.
//^? Dans cet exemple, nous avons créé un tableau de nombres. Nous avons ensuite utilisé la méthode sort() pour trier les nombres par ordre croissant. La méthode sort() modifie le tableau original en le triant selon une fonction de comparaison. Dans notre exemple, nous avons utilisé une fonction arrow pour définir notre fonction de comparaison. La fonction de comparaison compare deux éléments du tableau et renvoie un nombre négatif si le premier élément doit être classé avant le second, un nombre positif si le premier élément doit être classé après le second, ou zéro si les deux éléments sont égaux. Enfin, nous avons affiché le tableau trié à l'aide de la méthode console.log().

//&_____________________________________________________________________________
//^ Yes, we can also sort an array of numbers using a for loop. Here is an example :
//^? Oui, nous pouvons également trier un tableau de nombres à l'aide d'une boucle for. En voici un exemple :

const numbers = [5, 1, 7, 3, 9, 2];
for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[i] > numbers[j]) {
      const temp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = temp;
    }
  }
}
console.log(numbers);
// Output: [1, 2, 3, 5, 7, 9]
//^ In this example, we used two nested for loops to compare all the elements of the numbers array to each other and sort them in ascending order. On each iteration of the outer loop, we compared the current element with all subsequent elements and swapped their position if necessary. We used a temporary variable temp to store the value of the current element and swap its position with that of the next element. Finally, we displayed the sorted array using the console.log() method.
//^? Dans cet exemple, nous avons utilisé deux boucles for imbriquées pour comparer tous les éléments du tableau des nombres et les trier par ordre croissant. À chaque itération de la boucle extérieure, nous avons comparé l'élément courant avec tous les éléments suivants et échangé leur position si nécessaire. Nous avons utilisé une variable temporaire temp pour stocker la valeur de l'élément courant et échanger sa position avec celle de l'élément suivant. Enfin, nous avons affiché le tableau trié à l'aide de la méthode console.log().

//&_____________________________________________________________________________
//* 08. Create an array of numbers and use an array method to find the sum of all even numbers.
//*! 08. Créez un tableau de nombres et utilisez une méthode de tableau pour trouver la somme de tous les nombres pairs.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = numbers
  .filter((num) => num % 2 === 0)
  .reduce((acc, curr) => acc + curr, 0);
console.log(sum);
// Output: 20
//^ In this example, we created an array of numbers numbers. We then used the filter() method to filter out even numbers from the array. The filter() method returns a new array containing all the elements of the original array that satisfy a condition specified in a test function. In our example, we used an arrow function to define our test function that checks if the number is even. Next, we used the reduce() method to reduce the filtered array to a single value that represents the sum of all even numbers. The reduce() method takes a callback function that calculates the reduced value on each iteration and eventually returns the reduced value. In our example, we used an arrow function to define our callback function which adds the current element to the accumulator and returns the accumulated result. Finally, we displayed the sum using the console.log() method.
//^? Dans cet exemple, nous avons créé un tableau de nombres. Nous avons ensuite utilisé la méthode filter() pour filtrer les nombres pairs du tableau. La méthode filter() renvoie un nouveau tableau contenant tous les éléments du tableau original qui satisfont à une condition spécifiée dans une fonction de test. Dans notre exemple, nous avons utilisé une fonction arrow pour définir notre fonction de test qui vérifie si le nombre est pair. Ensuite, nous avons utilisé la méthode reduce() pour réduire le tableau filtré à une valeur unique représentant la somme de tous les nombres pairs. La méthode reduce() utilise une fonction de rappel qui calcule la valeur réduite à chaque itération et renvoie finalement la valeur réduite. Dans notre exemple, nous avons utilisé une fonction fléchée pour définir notre fonction de rappel qui ajoute l'élément courant à l'accumulateur et renvoie le résultat accumulé. Enfin, nous avons affiché la somme à l'aide de la méthode console.log().

//&_____________________________________________________________________________

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    sum += numbers[i];
  }
}
console.log(sum);
// Output: 20
//^ In this example, we created a numbers array of numbers. We then initialized a sum variable to 0. We used a for loop to loop through all the elements in the numbers array. At each iteration, we checked if the current element is even using the modulo operator (%). If the current item is even, we added its value to the sum variable. Finally, we displayed the sum using the console.log() method.
//^? Dans cet exemple, nous avons créé un tableau de nombres. Nous avons ensuite initialisé une variable sum à 0. Nous avons utilisé une boucle for pour parcourir tous les éléments du tableau numbers. À chaque itération, nous vérifions si l'élément courant est pair à l'aide de l'opérateur modulo (%). Si l'élément courant est pair, nous avons ajouté sa valeur à la variable sum. Enfin, nous avons affiché la somme à l'aide de la méthode console.log().

//&_____________________________________________________________________________
//* 09. Create an array of numbers and use an array method to find the maximum value.
//*! 09. Créez un tableau de nombres et utilisez une méthode de tableau pour trouver la valeur maximale.

const numbers = [2, 6, 1, 8, 4, 9];
const max = Math.max(...numbers);
console.log(max);
// Output: 9
//^ In this example, we created a numbers array of numbers. We then used the Math.max() method with the spread operator to find the maximum value of the array. The Math.max() method returns the largest number among the arguments passed as parameters. Finally, we displayed the maximum value using the console.log() method.
//^? Dans cet exemple, nous avons créé un tableau de nombres. Nous avons ensuite utilisé la méthode Math.max() avec l'opérateur spread pour trouver la valeur maximale du tableau. La méthode Math.max() renvoie le plus grand nombre parmi les arguments passés en paramètre. Enfin, nous avons affiché la valeur maximale à l'aide de la méthode console.log().
//&_____________________________________________________________________________
//^ It is possible to get the maximum value from an array of numbers using a for loop. Here is an example :
//^? Il est possible d'obtenir la valeur maximale d'un tableau de nombres en utilisant une boucle for. En voici un exemple :

const numbers = [2, 6, 1, 8, 4, 9];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(max);
// Output: 9
//^ In this example, we created a numbers array of numbers. We initialized a max variable to the first value in the array. We used a for loop to loop through all the elements of the numbers array, starting at index 1 (since the first value is already stored in the max variable). At each iteration, we compared the current item with the value stored in the max variable. If the current element is larger, we updated the max variable. Finally, we displayed the maximum value using the console.log() method.
//^? Dans cet exemple, nous avons créé un tableau de nombres. Nous avons initialisé une variable max à la première valeur du tableau. Nous avons utilisé une boucle for pour parcourir tous les éléments du tableau de nombres, en commençant par l'index 1 (puisque la première valeur est déjà stockée dans la variable max). À chaque itération, nous avons comparé l'élément courant à la valeur stockée dans la variable max. Si l'élément courant est plus grand, nous mettons à jour la variable max. Enfin, nous affichons la valeur maximale à l'aide de la méthode console.log().

//&_____________________________________________________________________________
//* 10. Create an array of numbers and use an array method to find the minimum value.
//*! 10. Créez un tableau de nombres et utilisez une méthode de tableau pour trouver la valeur minimale.

const numbers = [2, 6, 1, 8, 4, 9];
const min = Math.min(...numbers);
console.log(min);
// Output: 1
//^ In this example, we created a numbers array of numbers. We then used the Math.min() method with the spread operator to find the minimum value of the array. The Math.min() method returns the smallest number among the arguments passed as parameters. Finally, we displayed the minimum value using the console.log() method.
//^? Dans cet exemple, nous avons créé un tableau de nombres. Nous avons ensuite utilisé la méthode Math.min() avec l'opérateur spread pour trouver la valeur minimale du tableau. La méthode Math.min() renvoie le plus petit nombre parmi les arguments passés en paramètre. Enfin, nous avons affiché la valeur minimale à l'aide de la méthode console.log().
//&_____________________________________________________________________________
//^ It is possible to find the minimum value of an array of numbers using a for loop. Here is an example :
//^? Il est possible de trouver la valeur minimale d'un tableau de nombres en utilisant une boucle for. En voici un exemple :

const numbers = [2, 6, 1, 8, 4, 9];
let min = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
}
console.log(min);
// Output: 1
//^ In this example, we created a numbers array of numbers. We initialized a min variable to the first value in the array. We used a for loop to loop through all elements of the numbers array, starting at index 1 (since the first value is already stored in the min variable). At each iteration, we compared the current item with the value stored in the min variable. If the current element is smaller, we updated the min variable. Finally, we displayed the minimum value using the console.log() method.
//^? Dans cet exemple, nous avons créé un tableau de nombres. Nous avons initialisé une variable min à la première valeur du tableau. Nous avons utilisé une boucle for pour parcourir tous les éléments du tableau de nombres, en commençant par l'index 1 (puisque la première valeur est déjà stockée dans la variable min). À chaque itération, nous avons comparé l'élément courant à la valeur stockée dans la variable min. Si l'élément courant est plus petit, nous mettons à jour la variable min. Enfin, nous affichons la valeur minimale à l'aide de la méthode console.log().

//&_____________________________________________________________________________
//* 11. Create an array of objects representing books, with information such as title, author, and number of pages. Use an array method to filter out books with a page count greater than 300, then sort the remaining books alphabetically by title.
//*! 11. Créez un tableau d'objets représentant des livres, avec des informations telles que le titre, l'auteur et le nombre de pages. Utilisez une méthode de tableau pour filtrer les livres dont le nombre de pages est supérieur à 300, puis triez les livres restants par ordre alphabétique de titre.

const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 218 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 324 },
  { title: "1984", author: "George Orwell", pages: 328 },
  { title: "Pride and Prejudice", author: "Jane Austen", pages: 432 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", pages: 234 },
  { title: "Moby-Dick", author: "Herman Melville", pages: 544 },
];
const filteredBooks = books.filter((book) => book.pages > 300);
const sortedBooks = filteredBooks.sort((a, b) =>
  a.title.localeCompare(b.title)
);
console.log(sortedBooks);
// Output:
// [
//   { title: '1984', author: 'George Orwell', pages: 328 },
//   { title: 'Pride and Prejudice', author: 'Jane Austen', pages: 432 },
//   { title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 324 },
// ]
//^ In this example, we created an array books of objects representing books, with information such as title, author and number of pages. We used the filter() method to filter out books with a page count greater than 300, and then the sort() method with a compare function to sort the remaining books alphabetically by title. The compare function uses the localeCompare() method to compare the title strings, so that special characters and uppercase/lowercase are taken into account in the sorting. Finally, we displayed the sorted table using the console.log() method.
//^? Dans cet exemple, nous avons créé un tableau books d'objets représentant des livres, avec des informations telles que le titre, l'auteur et le nombre de pages. Nous avons utilisé la méthode filter() pour filtrer les livres dont le nombre de pages est supérieur à 300, puis la méthode sort() avec une fonction de comparaison pour trier les livres restants par ordre alphabétique de titre. La fonction de comparaison utilise la méthode localeCompare() pour comparer les chaînes de titres, de sorte que les caractères spéciaux et les majuscules/minuscules soient pris en compte dans le tri. Enfin, nous avons affiché le tableau trié à l'aide de la méthode console.log().
//&_____________________________________________________________________________
//^ Here's how to achieve the same result with a loop:
//^? Voici comment obtenir le même résultat avec une boucle :

const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 218 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 324 },
  { title: "1984", author: "George Orwell", pages: 328 },
  { title: "Pride and Prejudice", author: "Jane Austen", pages: 432 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", pages: 234 },
  { title: "Moby-Dick", author: "Herman Melville", pages: 544 },
];
const filteredBooks = [];
for (let i = 0; i < books.length; i++) {
  if (books[i].pages > 300) {
    filteredBooks.push(books[i]);
  }
}
const sortedBooks = [];
while (filteredBooks.length > 0) {
  let minIndex = 0;
  for (let i = 1; i < filteredBooks.length; i++) {
    if (filteredBooks[i].title < filteredBooks[minIndex].title) {
      minIndex = i;
    }
  }
  sortedBooks.push(filteredBooks[minIndex]);
  filteredBooks.splice(minIndex, 1);
}
console.log(sortedBooks);
// Output:
// [
//   { title: '1984', author: 'George Orwell', pages: 328 },
//   { title: 'Pride and Prejudice', author: 'Jane Austen', pages: 432 },
//   { title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 324 },
// ]
//^ In this example, we used a for loop to filter out books with a page count greater than 300, adding the filtered books to a filteredBooks array. Then we used a while loop to sort the remaining books alphabetically by title. In this loop, we used a for loop to find the index of the book with the smallest title, and we used the splice() method to remove it from the filteredBooks array and add it to the sortedBooks array. Finally, we displayed the sorted array using the console.log() method.
//^? Dans cet exemple, nous avons utilisé une boucle for pour filtrer les livres dont le nombre de pages est supérieur à 300, en ajoutant les livres filtrés à un tableau filteredBooks. Nous avons ensuite utilisé une boucle while pour trier les livres restants par ordre alphabétique de titre. Dans cette boucle, nous avons utilisé une boucle for pour trouver l'index du livre ayant le plus petit titre, et nous avons utilisé la méthode splice() pour le retirer du tableau filteredBooks et l'ajouter au tableau sortedBooks. Enfin, nous avons affiché le tableau trié à l'aide de la méthode console.log().
