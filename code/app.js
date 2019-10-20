// 'use strict';
// //Question1-a:
function addFive(num) {
    return 5 + num;
  }

//   //First Conversion
  const addFive = function (num) {
     return (5 + num); 
}

//   //Second Conversion
  const addFive = (num) => 5+ num;
  



    //Question1-b:
  function divide(num1,num2){
      return num1/num2;
  }

     //First Conversion
  const divide = function( num1,num2){
      return num1/num2;
  }
  //Second Conversion
  const divide = (num1,num2) => num1/num2;

// //Question1-c:
function whoIsTheBestStudent() {
    const studentName = 'Noura';
    console.log(studentName);
  }

//   //First Conversion
  const whoIsTheBestStudent = function(){
const studentname ='Noura'; 
console.log(studentName);
  }

//   //Second Conversion
  const whoIsTheBestStudent = () => { const studentname ='Noura'; 
  console.log(studentname); }

  

  //Question2
  function fullName(first,last ) {
     return (first + last) 
  }

  //First
  const fullName = function(first,last) {
    return (first + last);
  }

  //Second 
  const fullName = (first,last) => first + last;

//   //Question3

  function sayHello(name = "World") {
    console.log( "Hello" + name);
  }
  
  sayHello();
  const sayHello = function(name){
      console.log("hello" + name); 
  }

  sayHello = name => `hello ${name}`


//   //for each function
const friends =["aisha", "zeze", "monie"];
friends.forEach((item) => {console.log( "hi "+item)});

//   //Crazy Numbers
const nums = [103440, 3799.2663, 3.14159265359, 859494, 59439];
let total = 0;
nums.forEach((item) =>{
   total += item
  });


// //Crazy number AGAIN!
const stringNumbers = ["103440", "3799.2663", "3.14159265359", "859494", "59439"];
let totalNumbersUnder4000 = 0;
stringNumbers.forEach(item => totalNumbersUnder4000 += parseFloat(item));
console.log(totalNumbersUnder4000);

//Map
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let times100 = nums.map(function(num){
  return num * 100;
});
console.log(times100)


//Crazy Numbers
const nums = [103440, 3799.2663, 3.14159265359, 859494, 59439];
let total = nums.map(function(num){
return  total += num;
});

//Capitialize
// returns the same length
// if i return the parameter it will act as a copy function
const iAS = ['alanoud', 'reem', 'hazim', 'mansour'];
let capitalizedIAs = iAS.map(function(name){
  return name.toUpperCase();
});

console.log(capitalizedIAs);

//Abbreviation
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let dayAbbreviations = days.map(function(day){
   return day.substring(0,3);
});
console.log(dayAbbreviations);

//Century20
const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let century20 = years.map(function(year){
  if (year <= 2000){
    return year;
  }
});
console.log(century20);
century20.forEach((year)=>{

  if(year === undefined){
    century20.splice(century20.indexOf(year),1)

  }return year;
});
console.log(century20);


//sum
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Write your solution here
const result = nums.filter((num) =>{
  if (num %3 ===0){
    return num;
  }
});
 console.log(result);

//Names with letter a
const names = ["Lamees", "Nawal", "Mesfer"];

const nameWithA = names.filter((name) =>{
if (name.includes("a") === true){
  return name;
}
});
console.log(nameWithA);

//Century20 
const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let century20 = years.filter((year) => {
if (year>= 2000){
  return year;
}
});

//Century20 <shorten>
const names = ["Lamees", "Nawal", "Mesfer"];
let result = [];
​
result = names.filter(name => name.includes('a'));
​
console.log(result);


console.log(century20);


//reduce
//sum1
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//2 important parameter in reduce
let sum = ((accumulator, currentValue) => 
{accumulator + currentValue;
}
, 0);
console.log(nums.reduce(sum));

//crazy number
const nums = [103440, 3799.2663, 3.14159265359, 859494, 59439];
const total = nums.reduce((accumulator, currentValue) => 
{ 
  return accumulator + currentValue;
}
, 0);
console.log((total));

// //crazy number again!!
const stringNumbers = ["103440", "3799.2663", "3.14159265359", "859494", "59439"];
let totalNumbersUnder4000 = stringNumbers.reduce((accumulator,currentValue) =>
{
  if (Number(currentValue) <= 4000 )
  return Number(accumulator)+ Number(currentValue)
  else{
    return Number(accumulator);
  }
},0)
console.log(totalNumbersUnder4000);


// //Map=
const products = [
  {name: 'flower vase', price: 75},
  {name: 'lamp', price: 85},
  {name: 'jar of honey', price: 95},
  {name: 'coil', price: 65},
  {name: 'lumber', price: 55}
];

// const discountProducts = products.map( Element => 
  {
    Element.price = Element.price/2
    return Element;
    });

    console.log(discountProducts);

//Filtrer practice 
    const products = [
      { name: 'flower vase',   price: 75 },
      { name: 'lamp',  price: 85 },
      { name: 'jar of honey',   price: 95 },
      { name: 'seashell frame', price: 65 },
      { name: 'lumber',  price: 55 }
    ];
    const cheapProducts = products.filter( Element => 
        
      Element.price <= 70
  
        );
        console.log(cheapProducts);

