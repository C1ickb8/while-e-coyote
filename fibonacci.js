const prompt = require('prompt-sync') ({sigint: true});

let input = Number(prompt("Enter your number: "));
let num1 = 0;
let num2 = 1;
let num3 = Number();
let num4 = 0;

while(num4 < input){
    if (num4 === 0){
        console.log(0);
    } else if (num4 === 1){
        console.log(1);
    } else {
        num3 = num1 + num2;
        console.log(num1 + num2);
        num1 = num2;
        num2 = num3;
    }
num4++;
}