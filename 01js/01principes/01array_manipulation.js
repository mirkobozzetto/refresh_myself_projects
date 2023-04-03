//* 01. Create an array of integers and use a loop to find the sum of all the elements in the array.

const numbers = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum); // Output: 150
//^ In this example, we created an array of integers called numbers and initialized the variable sum to zero. We then used a for loop to go through all the elements of the array and add their values to the sum variable. Finally, we displayed the result of the sum using the console.log() method.
//&_____________________________________________________________________________

const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // Output: 150
//^ In this example, we used the reduce() method to calculate the sum of all the elements in the numbers array. The reduce() method takes a callback function as an argument that takes two parameters: the accumulator (acc) and the current element (cur). The accumulator is initialized to zero by passing 0 as the second argument to the reduce() method. At each iteration of the loop, the callback function adds the current element to the accumulator. At the end of the loop, the reduce() method returns the final value of the accumulator.

//&_____________________________________________________________________________
//* 02. Create an array of strings and use an array method to sort the elements alphabetically.

const fruits = ["orange", "apple", "banana", "kiwi", "cherry"];
const sortedFruits = fruits.sort();
console.log(sortedFruits); // Output: ["apple", "banana", "cherry", "kiwi", "orange"]
//^ In this example, we have created an array of strings called fruits and used the sort() method to sort the elements alphabetically.
//^ The sort() method directly modifies the original array and returns the sorted array.
//^ Finally, we displayed the sorted array using the console.log() method.

//&_____________________________________________________________________________
//^ Here is a second example that uses the localeCompare() method to sort items alphabetically:

const sortedFruits = fruits.sort((a, b) => a.localeCompare(b));
console.log(sortedFruits); // Output: ["apple", "banana", "cherry", "kiwi", "orange"]
//^ In this example, we used the sort() method with a comparison function as an argument that uses the localeCompare() method to compare strings.
//^ The localeCompare() method returns a negative number if a is less than b, zero if the two strings are equal and a positive number if a is greater than b.
//^ The compare function is used by the sort() method to sort the elements of the array.
//^ Finally, we displayed the sorted array using the console.log() method.

//&_____________________________________________________________________________
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
//&_____________________________________________________________________________

const sortedPeople = people.sort((a, b) => (a.name < b.name ? -1 : 1));
console.log(sortedPeople);
//^ In this example, we used the sort() method with a comparison function as an argument that uses the < comparison operator to sort objects alphabetically based on their name property. The comparison function returns -1 if a.name is less than b.name, 1 if a.name is greater than b.name, and 0 if both are equal. Finally, we displayed the sorted array using the console.log() method. This method is simpler and easier to understand than the localeCompare() method.

//&_____________________________________________________________________________
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

//&_____________________________________________________________________________
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

//&_____________________________________________________________________________
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
//&_____________________________________________________________________________
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

//&_____________________________________________________________________________
//* 07. Create an array of numbers and use an array method to sort the numbers in ascending order.

const numbers = [5, 1, 7, 3, 9, 2];
numbers.sort((a, b) => a - b);
console.log(numbers);
// Output: [1, 2, 3, 5, 7, 9]
//^ In this example, we created an array of numbers numbers. We then used the sort() method to sort the numbers in ascending order. The sort() method modifies the original array by sorting it according to a comparison function. In our example, we used an arrow function to define our comparison function. The compare function compares two array elements and returns a negative number if the first element should rank before the second, a positive number if the first element should rank after the second, or zero if the two elements are equal. Finally, we displayed the sorted array using the console.log() method.
//&_____________________________________________________________________________
//^ Yes, we can also sort an array of numbers using a for loop. Here is an example :

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

//&_____________________________________________________________________________
//* 08. Create an array of numbers and use an array method to find the sum of all even numbers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = numbers
  .filter((num) => num % 2 === 0)
  .reduce((acc, curr) => acc + curr, 0);
console.log(sum);
// Output: 20
//^ In this example, we created an array of numbers numbers. We then used the filter() method to filter out even numbers from the array. The filter() method returns a new array containing all the elements of the original array that satisfy a condition specified in a test function. In our example, we used an arrow function to define our test function that checks if the number is even. Next, we used the reduce() method to reduce the filtered array to a single value that represents the sum of all even numbers. The reduce() method takes a callback function that calculates the reduced value on each iteration and eventually returns the reduced value. In our example, we used an arrow function to define our callback function which adds the current element to the accumulator and returns the accumulated result. Finally, we displayed the sum using the console.log() method.
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

//&_____________________________________________________________________________
//* 09. Create an array of numbers and use an array method to find the maximum value.

const numbers = [2, 6, 1, 8, 4, 9];
const max = Math.max(...numbers);
console.log(max);
// Output: 9
//^ In this example, we created a numbers array of numbers. We then used the Math.max() method with the spread operator to find the maximum value of the array. The Math.max() method returns the largest number among the arguments passed as parameters. Finally, we displayed the maximum value using the console.log() method.
//&_____________________________________________________________________________
//^ It is possible to get the maximum value from an array of numbers using a for loop. Here is an example :

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

//&_____________________________________________________________________________
//* 10. Create an array of numbers and use an array method to find the minimum value.

const numbers = [2, 6, 1, 8, 4, 9];
const min = Math.min(...numbers);
console.log(min);
// Output: 1
//^ In this example, we created a numbers array of numbers. We then used the Math.min() method with the spread operator to find the minimum value of the array. The Math.min() method returns the smallest number among the arguments passed as parameters. Finally, we displayed the minimum value using the console.log() method.
//&_____________________________________________________________________________
//^ It is possible to find the minimum value of an array of numbers using a for loop. Here is an example :

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

//&_____________________________________________________________________________
//* 11. Create an array of objects representing books, with information such as title, author, and number of pages. Use an array method to filter out books with a page count greater than 300, then sort the remaining books alphabetically by title.

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
//&_____________________________________________________________________________
//^ Here's how to achieve the same result with a loop:

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
