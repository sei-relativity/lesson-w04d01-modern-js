'use strict';

// mistypeVariable = 17; 

// var undefined = 5; // throws a TypeError
// var Infinity = 5; // throws a TypeError
// var NaN = 5; // throws a TypeError

const addFive=(num)=> {
    return 5 + num;
  }
  
  const divide=(num1, num2) => num1 / num2;
 
  
  const whoIsTheBestStudent=() =>{
    const studentName = 'Noura';
    console.log(studentName);
  }
  function sayHello(name = "World") {
    console.log("Hello " + name);
  }
  
  sayHello();

  const fullName = (frist , last) =>{
      return frist + ' ' + last;
  }
  fullName();
// lap 1.Say Hi
const friends = ["Aisha", "Abdulrahman", "Sumayah"];
friends.forEach((name)=>{
	console.log('hi '+ name)
});

  //lap 2.Crazy Numbers
  const nums = [103440, 3799.2663, 3.14159265359, 859494, 59439];
let total = 0;
undefined

nums.forEach((num)=>{
	 total=+num
});
total;

