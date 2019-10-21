const instructions = ['Mesfer', 'Nasser','fahhad', 'AlQahtani'];
instructions.forEach(function(elemant){
    console.log(elemant);
});


// for loop to copy one array into another.
const instructionsCopy = [];
for (let i = 0; i < instructions.length; i++) {
    instructionsCopy.push(instructions[i]); 
    
}


const instructions2 = ['Mesfer1', 'Nasser1','fahhad1', 'AlQahtani1'];


//foreach loop to do the same thing
const instructionsCopy2 = [];
instructions2.forEach((item) => {
    instructionsCopy2.push(item);
});