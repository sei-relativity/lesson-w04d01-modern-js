'use strict';

//Declariation function
function sayHello(){
    console.log('GoodBye!');
}

// function Expression
const sayHello = function(){
    console.log('Hello World');
}
// Arrow function expression
const sayHello = () => {
console.log('Hello World');
};

// Arrow function expression( compact)
const sayHello = () =>console.log('Hello World');


const greatWorld = (greating) =>console.log('Q');

const add = function(x,y){
    return x+y ;
}

const add = (x,y)=>{
return x+y;
}

//Arrow function experssion with implicit return

const add = (x,y) => x+y ;

// practice

const addFive = num => 5+num;
undefined
addFive(6);
11
const divide = (num1 ,num2) => num1 / num2 ;
undefined
divide(15 , 3);
5

const sayHello = name => "Hello "+ name;
const fullname = (firstName , lastName) => firstName+''+lastName ;
const whoIsTheBestStudent = studentName => 'Noura'; 
const whoIsTheBestStudent = studentName => 'studentName';

//forEach

const instructors = ['Usman', 'Reem','Mansour','Hazim'];
undefined
instructors.forEach(function(element) {
    console.log(element);
});
 Usman
 Reem
 Mansour
 Hazim
 instructors.forEach(function(element,index) {
    console.log(element,index);
});
 Usman 0
 Reem 1
 Mansour 2
 Hazim 3

 const instructors = ['Usman', 'Reem','Mansour','Hazim'];
 const instructorsCopy = [];
 
 //forEach looo to do the same thing push(array)

 instructors.forEach((iteam) => {
     instructorsCopy.push(iteam);
 });
 //Map
 const map = nums.map( x => x*100 );
undefined
console.log(map);


const days2 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const map4 = days.map(day => day.substr(0,3));
console.log(map4);

const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
const map5 = years.map (years => years <= 2000 );

const names = ["Lamees", "Nawal", "Mesfer"];
let withA = [];
withA = names.filter(name => name.includes('a'))
console.log(withA);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = nums.reduce((acc, val) => {
 return acc + val;
});
console.log(sum);
const nums = [103440, 3799.2663, 3.14159265359, 859494, 59439];
let total = nums.reduce((acc, val) => {
return acc + val;
});
console.log(total);