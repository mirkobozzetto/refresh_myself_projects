//* 01. Create an array of integers and use a loop to find the sum of all the elements in the array.

const numbers = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum); // Output: 150
//^ In this example, we created an array of integers called numbers and initialized the variable sum to zero. We then used a for loop to go through all the elements of the array and add their values to the sum variable. Finally, we displayed the result of the sum using the console.log() method.
//&____________________________________________________________________________________________________________________________

const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // Output: 150
//^ In this example, we used the reduce() method to calculate the sum of all the elements in the numbers array. The reduce() method takes a callback function as an argument that takes two parameters: the accumulator (acc) and the current element (cur). The accumulator is initialized to zero by passing 0 as the second argument to the reduce() method. At each iteration of the loop, the callback function adds the current element to the accumulator. At the end of the loop, the reduce() method returns the final value of the accumulator.

//&____________________________________________________________________________________________________________________________
//* 02. Create an array of strings and use an array method to sort the elements alphabetically.

const fruits = ["orange", "apple", "banana", "kiwi", "cherry"];
const sortedFruits = fruits.sort();
console.log(sortedFruits); // Output: ["apple", "banana", "cherry", "kiwi", "orange"]
//^ In this example, we have created an array of strings called fruits and used the sort() method to sort the elements alphabetically.
//^ The sort() method directly modifies the original array and returns the sorted array.
//^ Finally, we displayed the sorted array using the console.log() method.

//&____________________________________________________________________________________________________________________________
//^ Here is a second example that uses the localeCompare() method to sort items alphabetically:

const sortedFruits = fruits.sort((a, b) => a.localeCompare(b));
console.log(sortedFruits); // Output: ["apple", "banana", "cherry", "kiwi", "orange"]
//^ In this example, we used the sort() method with a comparison function as an argument that uses the localeCompare() method to compare strings.
//^ The localeCompare() method returns a negative number if a is less than b, zero if the two strings are equal and a positive number if a is greater than b.
//^ The compare function is used by the sort() method to sort the elements of the array.
//^ Finally, we displayed the sorted array using the console.log() method.

//&____________________________________________________________________________________________________________________________
//* 03. Create an array of objects that have a name property and use an array method to sort the objects alphabetically based on their name property.

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
//&____________________________________________________________________________________________________________________________

const sortedPeople = people.sort((a, b) => (a.name < b.name ? -1 : 1));
console.log(sortedPeople);
//^ In this example, we used the sort() method with a comparison function as an argument that uses the < comparison operator to sort objects alphabetically based on their name property. The comparison function returns -1 if a.name is less than b.name, 1 if a.name is greater than b.name, and 0 if both are equal. Finally, we displayed the sorted array using the console.log() method. This method is simpler and easier to understand than the localeCompare() method.

//&____________________________________________________________________________________________________________________________
//* 04. Create an array of objects that have firstName and lastName properties and use an array method to create a new array that contains the full names (concatenation of firstName and lastName) of all objects.

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

//&____________________________________________________________________________________________________________________________
//* 05. Create an array of objects that have name and age properties and use an array method to create a new array that contains only objects where the age is greater than 30.

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

//&____________________________________________________________________________________________________________________________
//* 06. Create an array of objects that have name and age properties and use an array method to calculate the average age of all objects.

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
//&____________________________________________________________________________________________________________________________
//^ To calculate the average age with math, we could sum the ages of all the objects and divide by the number of objects. We could use a loop to go through all the objects and store the sum of the ages in a variable, then divide that sum by the number of objects to get the average. Here is an example:

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

//&____________________________________________________________________________________________________________________________
//* 07. Create an array of numbers and use an array method to sort the numbers in ascending order.
