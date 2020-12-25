'use strict';

// mistypeVariable = 17; 

// var undefined = 5; // throws a TypeError
// var Infinity = 5; // throws a TypeError
// var NaN = 5; // throws a TypeError

const addFive = (num) => {
  return 5 + num;
}

const divide = (num1, num2) => num1 / num2;


const whoIsTheBestStudent = () => {
  const studentName = 'Noura';
  console.log(studentName);
}
function sayHello(name = "World") {
  console.log("Hello " + name);
}

sayHello();

const fullName = (frist, last) => {
  return frist + ' ' + last;
}
fullName();
// lap 1.Say Hi
const friends = ["Aisha", "Abdulrahman", "Sumayah"];
friends.forEach((name) => {
  console.log('hi ' + name)
});

//lap 2.Crazy Numbers
const nums = [103440, 3799.2663, 3.14159265359, 859494, 59439];
let total = 0;
undefined

nums.forEach((num) => {
  total = +num
});
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
totalNumbersUnder4000 = newNewString.reduce((accumulator, currentValue) => accumulator + (currentValue));
console.log(totalNumbersUnder4000);



// map

const products = [
  { name: 'flower vase', price: 75 },
  { name: 'lamp', price: 85 },
  { name: 'jar of honey', price: 95 },
  { name: 'coil', price: 65 },
  { name: 'lumber', price: 55 }
];

// Write your solution here
let discountProducts = [];

discountProducts = products.map(item => {
  item.price = item.price / 2
  return item
})

console.log(discountProducts);


//   filter
const products = [
  { name: 'flower vase', price: 75 },
  { name: 'lamp', price: 85 },
  { name: 'jar of honey', price: 95 },
  { name: 'seashell frame', price: 65 },
  { name: 'lumber', price: 55 }
];

// Write your solution here
let cheapProducts = [];
cheapProducts = products.filter(item => item.price < 70)

console.log(cheapProducts);



//   reduce
const products = [
  { name: 'flower vase', price: 75 },
  { name: 'lamp', price: 85 },
  { name: 'jar of honey', price: 95 },
  { name: 'coil', price: 65 },
  { name: 'lumber', price: 55 }
];

// Write your solution here
let totalPrice = 0;
let priceArray = [];

priceArray = products.map(item => item.price)
totalPrice = priceArray.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(totalPrice);

