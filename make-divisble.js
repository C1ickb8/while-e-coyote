const prompt = require('prompt-sync') ({sigint: true});

let num1 = Number(prompt("Enter the value of x: "));
let num2 = Number(prompt("Enter the value of y: "));
let num3 = Number();

console.log("You have chosen " + num1 ,"and " + num2);

num3 = num1 % num2;

if(num3 != 0){
num1++; 
console.log(num1);
//num3 = num1 % num2;
}
console.log(num1 + " is divisible by " + num2)

