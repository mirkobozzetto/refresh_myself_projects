//* 01. Practice using the Object.keys() method to extract keys from an object.

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

//&_____________________________________________________________________________
//* 02. Create a function that takes an object as a parameter and returns an array containing the values ​​of all the properties of the object.

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

//&_____________________________________________________________________________
//* 03. how to add a property to an object with the Object.assign() method:

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
//&_____________________________________________________________________________
//^ It is also possible to achieve the same thing using a for..in loop:

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

//&_____________________________________________________________________________
//* 04. Get values ​​from an object

const person = {
  name: "John Doe",
  age: 25,
  gender: "male",
};
//^ We want to obtain an array containing all the values ​​of this object, in the order in which they are defined in the object. One way to do this is to use the Object.values() method.

const values = Object.values(person);
console.log(values); // Output: ["John Doe", 25, "male"]
//^ The Object.values() method returns an array containing the values ​​of all enumerable properties of an object in the same order as the object itself.
//&_____________________________________________________________________________
//^ It is also possible to get the values ​​by looping through the object with a for...in loop.

const values = [];
for (const key in person) {
  values.push(person[key]);
}
console.log(values); // Output: ["John Doe", 25, "male"]
//^ In this loop, we browse each property of the object and add its value to the values array.Note that the order of the values in the array obtained by this method may not be identical to the order in which the properties are added to the object. If the order is important, it is better to use the Object.values() method.

//&_____________________________________________________________________________
//* 05. Create a function that takes an object as a parameter and returns the number of properties that this object has.

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
//&_____________________________________________________________________________
//^ Here is a solution using a for loop to achieve the same result as the Object.values() method:

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

//&_____________________________________________________________________________
//* 06. Create a mergeObjects function that takes two objects as arguments and returns a new object that combines the two. If a key exists in both objects, the value of the first should be replaced by the value of the second.

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
//&_____________________________________________________________________________
//^ Here is a solution with a for-in loop:

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

//&_____________________________________________________________________________
//* 07. Copy an object in JavaScript

//? Objectives:
//^ Understand how to copy an object in JavaScript
//^ To know the different methods to copy an object
//^ Exercise description:
//^ Create an object with several properties and values. Then use different methods to copy this object. Compare the results and explain the differences between each method.
//^ Sample Solution:

const myObj = { a: 1, b: 2, c: 3 };
// Method 1 : Spread operator
const copyObj1 = { ...myObj };
// Method 2 : Object.assign()
const copyObj2 = Object.assign({}, myObj);
// Method 3 : JSON.parse() & JSON.stringify()
const copyObj3 = JSON.parse(JSON.stringify(myObj));

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

//&_____________________________________________________________________________
//* 08. Statement: You have an object that contains information about a student. Create a function that takes this object as input and returns the student's full name as "FirstName LastName".
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

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };
const mergedObj = Object.assign({}, obj1, obj2, obj3);
console.log(mergedObj);
// Output: {a: 1, b: 2, c: 3}
//^ In this example, we create three objects with one property each. We then use the Object.assign() method to merge these three objects into one object. We store the result of the merge in a variable called mergedObj and display the result with console.log(). The displayed result is an object with the three properties of our original objects.
//&_____________________________________________________________________________
//^ Variant with a loop:

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

//&_____________________________________________________________________________
//* 10. Create an object with duplicate values

//^ You have an object with properties and values, you need to create a new object with the same properties but the values ​​need to be doubled.

const obj = { a: 1, b: 2, c: 3 };
// Output: {a: 2, b: 4, c: 6}
//^ One way to solve this exercise is to use a for..in loop to loop through the properties of the object and store the new values ​​in a new object.
//^ Here is a possible implementation:

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

//^ To do this, we can use the Object.entries() method to get an array containing the key-value pairs of the object. Then we can use a for...of loop to go through each key-value pair and add an isMajor property to the object with the value true or false depending on the age.

//~ The code would look like this:

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
