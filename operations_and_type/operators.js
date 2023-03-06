let a=30;
console.log(a);

//Arithmetic
const num = 10;
const num2 = 30;
console.log(num+num2); //Addition
console.log(num-num2); //Subtraction
console.log(num/num2); //Division
console.log(num*num2); //Multiplication
console.log(num%num2); //Modulus

let age = 39;
age++; //Increment
console.log({age});
age--;//Decrement
console.log("age", age);
age+=5;
console.log(age);

let powerNum = num ** num2; //raise to power of
console.log(powerNum);

//Comparison Operators
let b = 10;
let c = "10";
let compare = b==c;
console.log({compare}); //Loosely equal to
let notEqual = b!=c;
console.log({notEqual}); //Loosely not equal to

let strictly = b===c;
console.log({strictly}); //Strictly equal to
let strictlyNot = b!==c;
console.log({strictlyNot}); //Strictly not equal to

//Logical Operators
const age1 = 25;
const age2 = 38;
if (age1>age2 && num>num2){
    console.log(true)
}
else{
    console.log(false)
}

if (age1>age2 || num>num2){
    console.log(true)
}
else{
    console.log(false)
}














