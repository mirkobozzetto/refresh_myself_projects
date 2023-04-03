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
//* 02.
