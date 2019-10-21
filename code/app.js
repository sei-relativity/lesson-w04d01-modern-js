'use strict';

console.log('It works!');

// Function Declaration
function sayHello() {
  console.log('Hello World!');
}

// Function Expression
const sayHello = function () {
  console.log('Hello World!');
}

// Arrow Function Expression
const sayHello = () => {
  console.log('Hello World!');
}

// Arrow Function Expression "Shorthand"
const sayHello = () => console.log('Hello World!');

// Passing Parameter to Arrow Function Expression "Shorthand" I
const greetWorld = (greeting) => console.log(greeting);

// Passing Parameter to Arrow Function Expression "Shorthand" II
const greetWorld = greeting => console.log(greeting);

// Passing Parameter to Arrow Function Expression "Shorthand" II
const greetWorld = greeting => `${greeting} World!`;
greetWorld('Hello');

//
const add = function(x, y) {
  return x + y;
}

const add = (x, y) => {
  return x + y;
}

// Arrow Function Expression "Shorthand" with implicit return III
const add = (x, y) => x + y;


/* Converted functions to arrow functions */

// 1
const addFive = (num) => {
  return 5 + num;
}

// 2
const divide = (num1, num2) => {
  return num1 / num2;
}

// 3
const whoIsTheBestStudent = () => {
  const studentName = 'Noura';
  console.log(studentName);
}


/* A function called fullName, fullName receives two parameters, first and last and returns the full name */

// Function Expression
const fullName = function(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// Arrow Function
const fullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
}

// Arrow Function with implicit return
const fullName = (firstName, lastName) => `${firstName} ${lastName}`;


/* Converted sayHello function into an arrow function */

// Arrow Function
const sayHello = (name = "World") => console.log(`Hello ${name}`);

sayHello();


/* forEach */

const instructors = ['Usman', 'Reem', 'Hazim', 'Mansour'];

instructors.forEach(function(element) {
  console.log(element);
});

instructors.forEach(function(element, index) {
  console.log(element, index);
});

// For loop to copy one array into another one
const instructorsCopy = [];

for (let i = 0; i < instructors.length; i++) {
  instructorsCopy.push(instructors[i]);
}

// ForEach to copy one array into another one
instructors.forEach((item) => {
  instructorsCopy.push(item);
});

////////////////////////////////////////////

/* Lab: (15 mins) */

/* Say Hi */
// For each friend in friends, print "Hi friendName!"
const friends = ["Aisha", "Abdulrahman", "Sumayah"];

friends.forEach((name) => {
  console.log(`Hi ${name}`);
});


/* Crazy Numbers */
// That's an array with crazy numbers we cant read 😯
// Sum all the numbers in nums and save the result in total
const nums = [103440, 3799.2663, 3.14159265359, 859494, 59439];
let total = 0;

nums.forEach((number) => {
  total += number;
});

console.log(total);

/* Crazy number again!! */
// These crazy numbers now are strings 😯 😯  !!
// Convert numbers from strings to numbers and
// sum all numbers under 4000 and store them
// in totalNumbersUnder4000
const stringNumbers = ["103440", "3799.2663", "3.14159265359", "859494", "59439"];
let totalNumbersUnder4000 = 0;

stringNumbers.forEach((number) => {
  (number < 4000) ? totalNumbersUnder4000 += parseFloat(parseInt(number)) : false;
});

console.log(totalNumbersUnder4000);

/////////////////////////////////////////////////

var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

/////////////////////////////////////////////////

/* Multiply by 100 */
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let times100 = [];

const times100 = nums.map(x => x * 100);
console.log(times100);

/* Capitalize Capitalize all the strings in the IA's array and store them in the array capitalizedIA. */
const iAS = ['alanoud', 'reem', 'hazim', 'mansour'];
let capitalizedIAs = [];

capitalizedIAs = iAS.map(lowerCaseName => lowerCaseName.toUpperCase());
console.log(capitalizedIAs);

/* Abbreviations */
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayAbbreviations = [];

dayAbbreviations = days.map(dayThreeLetters => dayThreeLetters.substring(0, 3));
console.log(dayAbbreviations);

// Find the abbreviation of all days and add them to dayAbbreviations array
// Write your solution here

/* century20 */
const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let century20 = [];

century20 = years.map((century20Year) => (century20Year < 2001) ? century20Year : false);

century20.forEach((century, index) => {
  (century === false) ? century20.splice(index, 1) : false;
});

console.log(century20);

// century20 should be: [1989, 2000, 1999, 1973]
// Write your solution here

/////////////////////////////////////////////////////////

// Only get the numbers that are divisible by 3

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = 0;

result = nums.filter((number) => (number % 3 === 0) ? number : false);

console.log(result);

// Create an array of names (maybe use 3 of your friends)
// Requirements:
// Use filter to return the names with the letter "a" in them
// Use Arrow function
// Use implicit return
const names = ["Lamees", "Nawal", "Mesfer"];
let result = [];

result = names.filter(name => name.includes('a'));

console.log(result);


// century20

const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let century20 = [];

// century20 should be: [1989, 2000, 1999, 1973]
// Write your solution here