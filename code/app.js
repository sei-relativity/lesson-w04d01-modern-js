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

//////////     Arrays     \\\\\\\\\\
const smallNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const nums = [
  37,
  826,
  209,
  419,
  309,
  48,
  738,
  709,
  728,
  607,
  9,
  863,
  976,
  588,
  611,
  164,
  383,
  261,
  14,
  525,
  479,
  169,
  755,
  574,
  330,
  736,
  541,
  838,
  577,
  957,
  179,
  436,
  333,
  206,
  295,
  744,
  926,
  799,
  691,
  259,
  401,
  104,
  630,
  645,
  722,
  607,
  587,
  714,
  446,
  356,
  18,
  16,
  14,
  5,
  13,
  13,
  17,
  5,
  5,
  18,
  12,
  5,
  18,
  11,
  2,
  2,
  9,
  8,
  4,
  5,
  18,
  15,
  18,
  0,
  6,
  11,
  18,
  14,
  2,
  19,
  -14,
  5,
  18,
  12,
  3,
  12,
  7,
  15,
  5,
  3,
  12,
  7,
  6,
  10,
  3,
  3,
  3,
  18,
  12,
  14
];

const panagram = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog"
];

const panagrams = [
  "The",
  "job",
  "requires",
  "extra",
  "pluck",
  "and",
  "zeal",
  "from",
  "every",
  "young",
  "wage",
  "earner",
  "Quick",
  "zephyrs",
  "blow,",
  "vexing",
  "daft",
  "Jim",
  "Two",
  "driven",
  "jocks",
  "help",
  "fax",
  "my",
  "big",
  "quiz",
  "Five",
  "quacking",
  "zephyrs",
  "jolt",
  "my",
  "wax",
  "bed",
  "The",
  "five",
  "boxing",
  "wizards",
  "jump",
  "quickly",
  "Pack",
  "my",
  "box",
  "with",
  "five",
  "dozen",
  "liquor",
  "jugs",
  "We",
  "promptly",
  "judged",
  "antique",
  "ivory",
  "buckles",
  "for",
  "the",
  "next",
  "prize",
  "Jaded",
  "zombies",
  "acted",
  "quaintly",
  "but",
  "kept",
  "driving",
  "their",
  "oxen",
  "forward"
];
//  Arrays
//  smallNums, nums, panagram, panagrams

//////////     Every     \\\\\\\\\\
let smallResE = smallNums.every(x => x >= 0);
console.log(smallResE);
let numResE = nums.every(x => x >= 0);
console.log(numResE);
let panResE = panagram.every(x => x.length < 8);
console.log(panResE);
let pansResE = panagrams.every(x => x.length < 8);
console.log(pansResE);

//////////     Filter     \\\\\\\\\\
let smallResFil = smallNums.filter(x => x < 100);
console.log(smallResFil);
let numResFil = nums.filter(x => x < 100);
console.log(numResFil);
let panResFil = panagram.filter(x => x.length % 2 == 0);
console.log(panResFil);
let pansResFil = panagrams.filter(x => x.length % 2 == 0);
console.log(pansResFil);

//////////     Find     \\\\\\\\\\
let smallResFnd = smallNums.find(x => x % 5 == 0);
console.log(smallResFnd);
let numResFnd = nums.find(x => x % 5 == 0);
console.log(numResFnd);
let panResFnd = panagram.find(x => x.length > 6);
console.log(panResFnd);
let pansResFnd = panagrams.find(x => x.length > 6);
console.log(pansResFnd);

//////////     Find     \\\\\\\\\\
let smallResFnd = smallNums.find(x => x % 5 == 0);
console.log(smallResFnd);
let numResFnd = nums.find(x => x % 5 == 0);
console.log(numResFnd);
let panResFnd = panagram.find(x => x.length > 6);
console.log(panResFnd);
let pansResFnd = panagrams.find(x => x.length > 6);
console.log(pansResFnd);

//////////     Find Index     \\\\\\\\\\
let smallResFndI = smallNums.findIndex(x => x % 3 == 0);
console.log(smallResFndI);
let numResFndI = nums.findIndex(x => x % 3 == 0);
console.log(numResFndI);
let panResFndI = panagram.findIndex(x => x.length < 2);
console.log(panResFndI);
let pansResFndI = panagrams.findIndex(x => x.length < 2);
console.log(pansResFndI);

//////////     ForEach     \\\\\\\\\\
let smallResfE = smallNums.forEach(x => console.log(x * 3));
let numResfE = nums.forEach(x => {
  console.log(x * 3);
});
let panResfE = panagram.forEach(x => {
  if (x.charAt(x.length - 1) == "!") console.log(x);
});
let pansResfE = panagrams.forEach(x => {
  if (x.charAt(x.length - 1) == "!") console.log(x);
});

//////////     Map     \\\\\\\\\\
let smallResMp = smallNums.map(x => x * 100);
console.log(smallResMp);
let numResMp = nums.map(x => x * 100);
console.log(numResMp);
let panResMp = panagram.map(x => x.toUpperCase());
console.log(panResMp);
let pansResMp = panagrams.map(x => x.toUpperCase());
console.log(pansResMp);

//////////     Reduce     \\\\\\\\\\
let smallResRed = smallNums.reduce((x, y) => x + y, 0);
console.log(smallResRed);
let numResRed = nums.reduce((x, y) => x + y, 0);
console.log(numResRed);
let panResRed = panagram.reduce((x, y) => x + " " + y);
console.log(panResRed);
let pansResRed = panagrams.reduce((x, y) => x + " " + y);
console.log(pansResRed);

//////////     Some     \\\\\\\\\\
let smallResSm = smallNums.some(x => x % 7 == 0);
console.log(smallResSm);
let numResSm = nums.every(x => x % 7 == 0);
console.log(numResSm);
let panResSm = panagram.every(x => x.includes("a"));
console.log(panResSm);
let pansResSm = panagrams.every(x => x.includes("a"));
console.log(pansResSm);

//////////     Sort     \\\\\\\\\\
//////////     Vanilla Sort     \\\\\\\\\\
let smallResVSrt = smallNums.sort();
console.log(smallResVSrt);
let numResVSrt = nums.sort();
console.log(numResVSrt);
let panResVSrt = panagram.sort();
console.log(panResVSrt);
let pansResVSrt = panagrams.sort();
console.log(pansResVSrt);
//////////     Ascending Sort     \\\\\\\\\\
let smallResASrt = smallNums.sort((a, b) => a - b);
console.log(smallResASrt);
let numResASrt = nums.sort((a, b) => a - b);
console.log(numResASrt);
let panResASrt = panagram.sort((a, b) => a - b);
console.log(panResASrt);
let pansResASrt = panagrams.sort((a, b) => a - b);
console.log(pansResASrt);
//////////     Descending Sort     \\\\\\\\\\
let smallResDSrt = smallNums.sort((a, b) => b - a);
console.log(smallResDSrt);
let numResDSrt = nums.sort((a, b) => b - a);
console.log(numResDSrt);
let panResDSrt = panagram.sort((a, b) => b - a);
console.log(panResDSrt);
let pansResDSrt = panagrams.sort((a, b) => b - a);
console.log(pansResDSrt);
