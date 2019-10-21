'use strict';

// undefined=NaN;
// // false=true;
// // true=false;




// funcation declaration

function sayHello(){
    console.log("good bye");
    
}

//funcation expression

const sayHello = function(){

}


//Arrow funcation Expression 
//call it in math lemda 

const sayHello=() =>{
    console.log("HelloWorld ");
    
}

//Arrow funcation Expression (compact)
const sayHello=() => console.log("HelloWorld ");
    

const test = arg => console.log(arg);

//error occurred since it is auto return the value  spatially with  one line funcation 
const test = arg => return console.log(arg);

//Convert the following functions to arrow functions.
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

  const addFive = (num) => 5+num ;
  const divide =(num1,num2)=>num1/num2;
  
  const whoIsTheBestStudent=()=>{
    const studentName = 'Noura';
    console.log(studentName);
  }

  function sayHello(name = "World") {
    console.log("Hello " + name);
  }
  
  
  const sayHello=(name "World")=>console.log("Hello",name);
  
  sayHello();



  const fullName =(first,last)=>first+" "+last ;