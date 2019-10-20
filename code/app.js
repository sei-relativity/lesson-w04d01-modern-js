"use strict";

//////////     Arrow functions     \\\\\\\\\\
const addFive = num => 5 + num;

const divide = (num1, num2) => num1 / num2;

const whoIsTheBestStudent = () => {
  const studentName = "Noura";
  console.log(studentName);
};

const fullName = (first, last) => first + " " + last;

const sayHello = (name = "World") => console.log("Hello " + name);

//////////     forEach     \\\\\\\\\\
const friends = ["Aisha", "Abdulrahman", "Sumayah"];
friends.forEach(function(element) {
  console.log("Hi " + element);
});

const nums = [103440, 3799.2663, 3.14159265359, 859494, 59439];
let total = 0;
nums.forEach(function(element) {
  total += element;
});

const stringNumbers = [
  "103440",
  "3799.2663",
  "3.14159265359",
  "859494",
  "59439"
];
let totalNumbersUnder4000 = 0;
stringNumbers.forEach(function(element) {
  if (Number(element) < 4000) totalNumbersUnder4000 += Number(element);
});

//////////     Map     \\\\\\\\\\
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let times100 = nums.map(x => x * 100);
console.log(times100);

const iAS = ["alanoud", "reem", "hazim", "mansour"];
let capitalizedIAs = iAS.map(x => x.toUpperCase());
console.log(capitalizedIAs);

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let dayAbbreviations = days.map(x => x.substring(0, 3).toUpperCase());
console.log(dayAbbreviations);

const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let century20 = years.map(x => {
  if (x > 1900 && x <= 2000) {
    return x;
  }
});
console.log(century20);

//////////     Filter     \\\\\\\\\\
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = nums.filter(val => {
  return val % 3 === 0;
});
console.log(result);

const names = ["Lamees", "Nawal", "Mesfer"];
let result = names.filter(val => {
  return val.includes("a");
});
console.log(result);

const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let century20 = years.filter(val => {
  return val > 1900 && val <= 2000;
});

//////////     Reduce     \\\\\\\\\\
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = nums.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum);

const nums = [103440, 3799.2663, 3.14159265359, 859494, 59439];
let total = nums.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(total);

const stringNumbers = [
  "103440",
  "3799.2663",
  "3.14159265359",
  "859494",
  "59439"
];
let totalNumbersUnder4000 = stringNumbers.reduce(
  (accumulator, currentValue) => {
    if (Number(currentValue) < 4000) {
      return Number(accumulator) + Number(currentValue);
    } else return Number(accumulator);
  },
  0
);
console.log(totalNumbersUnder4000);

//////////     Practice     \\\\\\\\\\
//////////     Map     \\\\\\\\\\
const products = [
  { name: "flower vase", price: 75 },
  { name: "lamp", price: 85 },
  { name: "jar of honey", price: 95 },
  { name: "coil", price: 65 },
  { name: "lumber", price: 55 }
];
const discountProducts = products.map(x => ({
  text: x.name,
  value: x.price * 0.5
}));
console.log(discountProducts);

//////////     Filter     \\\\\\\\\\

const products = [
  { name: "flower vase", price: 75 },
  { name: "lamp", price: 85 },
  { name: "jar of honey", price: 95 },
  { name: "seashell frame", price: 65 },
  { name: "lumber", price: 55 }
];

const cheapProducts = products.filter(x => {
  return x.price < 70;
});
console.log(cheapProducts);

//////////     Reduce     \\\\\\\\\\
const products = [
  { name: "flower vase", price: 75 },
  { name: "lamp", price: 85 },
  { name: "jar of honey", price: 95 },
  { name: "coil", price: 65 },
  { name: "lumber", price: 55 }
];

const totalPrice = products.reduce(
  (accumulator, currentValue) => accumulator + currentValue.price,
  0
);

console.log(totalPrice);
