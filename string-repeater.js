const prompt = require('prompt-sync') ({sigint: true});

let input = String(prompt("Input your string: "));
let output = String()

while (output.length <= 10){
    output = output + input
    console.log(output);
}
