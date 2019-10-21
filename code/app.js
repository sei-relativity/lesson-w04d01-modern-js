'use strict';

console.log('its work');

// function Declaration

function sayHello() {
    console.log(' Hi there');
}

// function expression
const sayHello = function(){
    console.log('Hello me');
}


// Arrow function expression  بدل function() = (  ()  => ) 
const sayHello = () => {
    console.log('Hello world');
}

// اختصارها because one line function  ( compact)
const sayHello = () => console.log('Hello world');

// arrow function with argument ( greeting , name)
const greatWorld = (greeting , name ) => console.log('Q');

// arrow function with  one argument ( greeting) 
const greatWorld = greeting  => console.log('Q');
// in console log in chrom 
const greatWorld = greeting  => console.log( greeting + 'world ');
 /* answer 
 greatWorld(hi);
 hi world */


 const add = function (x,y) {
     return x+y 
 }

 const add = (x,y) => {
     return x+y;
 }

// arrow function expression with implicit return 
 const add = (x,y) => x+y ;
/*  in console chrom 
add(4,6)
10 
*/

function addFive(num) {
    return 5 + num;
  }
// answer
const addFive = num => 5 + num ;


  
  function divide(num1, num2) {
    return num1 / num2;
  }
 // answer 
const divide = ( num1, num2) => num1/num2;


  function whoIsTheBestStudent() {
    const studentName = 'Noura';
    console.log(studentName);
  }
// answer
  const whoIsTheBestStudent = () => {
    const studentName = 'Noura';
    console.log(studentName);
  }


  const fullName = function( first , last){
     return first+last;
  }
// answer
  const fullName = (first,last) => {
    return first + last;
} 
// answer
const fullName = (first,last) => first + last ;


function sayHello(name = "World") {
    console.log("Hello " + name);
  }
  
  sayHello();

// answer
  const sayHello = (name = "World") => console.log("Hello " + name);
  



const whatsTheword = ( word) => word + 'is the word'; 

  /*in console chrom 
  whatsTheword('Bird');*/

const whatsTheword = ( word) => `${word} is the word`;

const whatsTheword = ( word, newword) => `${word} ${newword} is the word`;


//forEach

const instructors =['Usman','Reem','Hazim','Mansour'];

instructors.forEach(function(element){
console.log(element);
});
/* answer in console chrom 
Usman
Reem
Hazim
Mansour
*/
instructors.forEach(function(element,index){
  console.log(element,index);
  });
  /* answer in console chrom 
Usman 0
Reem 1
Hazim 2
Mansour 3
*/

const instructors =['Usman','Reem','Hazim','Mansour'];
const instructorsCopy=[];

// for loop to vopy one array into another
for (i=0;i<instructors.length;i++){
  instructorsCopy.push(instructors[i]);
}

/* answer in console chrom 
 instructorsCopy
['Usman','Reem','Hazim','Mansour']
*/


// forEach loop to do the same thing with arrow function
instructors.forEach((item) => {// item variable i can choose any name 
instructorsCopy.push(item);
});

/* answer in console chrom 
 instructorsCopy
['Usman','Reem','Hazim','Mansour']
*/




