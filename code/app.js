"use strict";

// lab 2
const addFive = (num) => 5+num;

const devide = (num1, num2) => num1/num2;

const whoIsTheBestStudent = () => {
    const studentName = "Noura";
    console.log(studentName);
}


const fullName = (first , last) => first + " " + last;

const sayHello = (name = "world") => "hello " + name;

// forEach
const instructors = ['Usman', 'Reem', 'Hazim', 'Mansour'];
const instructorCopy= []

// using a for loop to copy array into another array
for (let i = 0; i< instructors.length; i++) {
    instructorCopy.push(instructors[i]);
    }

// using a forEach loop
instructors.forEach(element => {
    instructorCopy.push(element);
});

// lab3
const friends = ["Aisha", "Abdulrahman", "Sumayah"];
friends.forEach(friendName => {
    console.log(`Hi ${friendName}!`);
});

// 2 crazy numbers
const nums = [103440, 3799.2663, 3.14159265359, 859494, 59439];
let total = 0;
nums.forEach(number => {
    total += number;
})
console.log(total);

// 3 crazy numbers again
const stringNumbers = ["103440", "3799.2663", "3.14159265359", "859494", "59439"];
let totalNumbersUnder4000 = 0;

stringNumbers.forEach(crazyNumber => {
    let intNumber = parseFloat(crazyNumber);
    if (intNumber < 4000) {
        totalNumbersUnder4000 += intNumber;
    }
});
console.log(totalNumbersUnder4000);

// map lab
// 1 multiple by 100
const arrayfor100 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let times100 = [];

times100 = arrayfor100.map(number => number *100)
console.log(times100);

// 2  Capitalize all the strings in the IA's array and store them in the array capitalizedIA.

const iAS = ['alanoud', 'reem', 'hazim', 'mansour'];
let capitalizedIAs = [];

capitalizedIAs = iAS.map(name => name.toUpperCase())
console.log(capitalizedIAs);

// 3 abbreviations
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let dayAbbreviations = [];

dayAbbreviations = days.map(days => days.substring(0,3))
console.log(dayAbbreviations);

// 4 century20
const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let century20 =  []; 

century20 = years.filter(year => year <= 2000 )
console.log(century20);

// filter lab
// 1 Only get the numbers that are divisible by 3
const numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = [];

result = numsArr.filter(number => number % 3 == 0)
console.log(result);

// 2 Create an array of names (maybe use 3 of your friends)
const names = ["Lamees", "Nawal", "Mesfer"];
let withA = [];

withA = names.filter(name => name.includes('a'))
console.log(withA);

// 3 century20
const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let century20 = []; 

century20 = years.filter(year => year <= 2000 )
console.log(century20);

// reduce lab
// 1 sum
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum;

// // Write your solution here
sum = nums.reduce( (accumulator, currentValue) => accumulator + currentValue);

console.log(sum);

// 2 crazy numbers
const nums = [103440, 3799.2663, 3.14159265359, 859494, 59439];
let total = 0;

total = nums.reduce( (accumulator, currentValue) => accumulator + currentValue);

console.log(total);


// 3 crazy numbers again
const stringNumbers = ["103440", "3799.2663", "3.14159265359", "859494", "59439"];
let totalNumbersUnder4000 = 0;

let newString = [];
let newNewString = [];
stringNumbers.forEach(crazyNumber => {
    let intNumber = parseFloat(crazyNumber);
    newString.push(intNumber);
    });
    newNewString = newString.filter(number => number < 4000)
    totalNumbersUnder4000 = newNewString.reduce( (accumulator, currentValue) => accumulator + (currentValue));
console.log(totalNumbersUnder4000);


// extra practise
// map

const products = [
    {name: 'flower vase', price: 75},
    {name: 'lamp', price: 85},
    {name: 'jar of honey', price: 95},
    {name: 'coil', price: 65},
    {name: 'lumber', price: 55}
  ];
  
  // Write your solution here
  let discountProducts=[];

  discountProducts = products.map(item => {item.price = item.price/2
  return item})
  
  console.log(discountProducts);


