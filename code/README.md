**Convert the following functions to arrow functions.**

function addFive(num) {
  return 5 + num;
}

function divide(num1, num2) {
  return num1 / num2;
}

function whoIsTheBestStudent() {
  const studentName = 'Noura';
  console.log(studentName);
}


1. function addFive = num =>  5+num;

2. function divide = (num1, num2)=> num1 / num2;
 

 3. function whoIsTheBestStudent = ()=> {
    const studentNmae = 'Noura';
    console.log(studentNmae);

 }

**function Expression**
const fullNmae = function(fName, lastName){
 console.log(fName + " " + lastName)
}

**function Arrow**

const fullNmae = (fName, lastName)=>  console.log(fName + " " + lastName);

**implicit return**
const fullNmae = (fName, lastName)=>  (fName + " " + lastName);


**Say Hi**
const friends = ["Aisha", "Abdulrahman", "Sumayah"];

// For each friend in friends, print "Hi friendName!"
// Write your solution here
<!-- <!-- const friendsCopy = [];
friends.forEach((item) =>{
console.log(' hi ' + item);  -->


 const friendsCopy = [];
friends.forEach((item) =>{
console.log( `Hi ${item}`)
}); 

});


**Crazy Numbers**
// That's an array with crazy numbers we cant read 😯
const nums = [103440, 3799.2663, 3.14159265359, 859494, 59439];
let total = 0;

// Sum all the numbers in nums and save the result in total
// Write your solution here

const nums = [103440, 3799.2663, 3.14159265359, 859494, 59439];
let total = 0;

nums.forEach((item) =>{
return total += item;

});


**Crazy number again!!**
// These crazy numbers now are strings 😯 😯  !!  
const stringNumbers = ["103440", "3799.2663", "3.14159265359", "859494", "59439"];
let totalNumbersUnder4000 = 0;

// Convert numbers from strings to numbers and 
// sum all numbers under 4000 and store them 
// in totalNumbersUnder4000
//
// Write your solution here

const stringNumbers = ["103440", "3799.2663", "3.14159265359", "859494", "59439"];
let stringNumberCopy = [];
let sum =0;
let totalNumbersUnder4000 = [];

 stringNumbers.forEach((item) =>{
    stringNumberCopy.push(parseInt(item));
	stringNumberCopy.forEach((item) =>{
	if(item <= 4000){
	totalNumbersUnder4000.push(item);
}
});
	
});





##work Group##
**Multiply by 100**

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let times100 = [];

times100 = nums.map(item => item *100); 

-----------------------------------

**Capitalize Capitalize all the strings in the IA's array and store them in the array capitalizedIA.**

const iAS = ['alanoud', 'reem', 'hazim', 'mansour'];
let capitalizedIAs = [];

capitalizedIAs.map

-------------------------
const iAS = ['alanoud', 'reem', 'hazim', 'mansour'];
let capitalizedIAs = [];
capitalizedIAs = iAS.map(item => item.toUpperCase());
--------------------------

**Abbreviations**

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let dayAbbreviations = [];

// Find the abbreviation of all days and add them to dayAbbreviations array
// Write your solution here

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let dayAbbreviations = [];

dayAbbreviations = days.map(item => item.substring(0,3));
--------------------------------

century20

const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let century20 =  []; 

// century20 should be: [1989, 2000, 1999, 1973]
// Write your solution here



const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let century20 =  []; 
century20 = years.filter(x =>  x >= 1900 && x <= 2000);
(4) [1989, 2000, 1999, 1973]



or

const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let century20 =  []; 

// century20 should be: [1989, 2000, 1999, 1973]
// Write your solution here

century20 = years.map((x)=> { 

if(x >= 1900 && x <= 2000){
	return x;	
}
});

-----------------------------------
**Team Study (30 mins)**

1. Only get the numbers that are divisible by 3

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Write your solution here


const result = nums.filter( x => {
    if (x % 3 === 0) {
        return x
    }

});


result
(3) [3, 6, 9]

-----------------------------------------


2. Create an array of names (maybe use 3 of your friends)

Requirements:

Use filter to return the names with the letter "a" in them
Use Arrow function
Use implicit return
const names = ["Lamees", "Nawal", "Mesfer"];
// Write your solution here


const nameA = names.filter(x => x.includes('a'));

--------------------------------------------

3. century20

const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let century20 = []; 

// century20 should be: [1989, 2000, 1999, 1973]
// Write your solution here


century20 = years.filter(item =>  item >= 1900 && item <= 2000);

**Reduce:**

1. Sum
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum;

// Write your solution here

console.log(sum);


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let sum = nums.reduce((accumulator, currentValue) => {return accumulator + currentValue;});


2. Crazy Numbers
// Thats an array with crazy numbers we cant read 😯
const nums = [103440, 3799.2663, 3.14159265359, 859494, 59439];
let total = 0;

// Sum all the numbers in nums and save the result in total
// Write your solution here

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


3. Crazy number again!!
// These crazy numbers now are strings 😯 😯  !!  
const stringNumbers = ["103440", "3799.2663", "3.14159265359", "859494", "59439"];
let totalNumbersUnder4000 = 0;

// Convert numbers from strings to numbers and 
// sum all numbers under 4000 and store them 
// in totalNumbersUnder4000
//
// Write your solution here

const stringNumbers = [
 "103440",
 "3799.2663",
 "3.14159265359",
 "859494",
 "59439"
];

let stringNumberCopy = stringNumbers.map(function(item){return parseInt(item,10);}); 
let totalNumbersUnder4000 = stringNumberCopy.reduce(
 (accumulator, currentValue) => {
   if (Number(currentValue) < 4000) {
     return Number(accumulator) + Number(currentValue);
   } else return Number(accumulator);
 },
 0
);
console.log(totalNumbersUnder4000);