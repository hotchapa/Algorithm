const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let line = input[0];
let line2 = input[1];
let numbers = line2.split("");


console.log(line * numbers[2]);
console.log(line * numbers[1]);
console.log(line * numbers[0]);
console.log(line * line2);



// let fs = require('fs');
// let input = fs.readFileSync('dev/stdin').toString().split('\n');
// let line = input[0]
// let line2 = input[1]
// let numbers = input[1].split("");

// console.log(a*);
// console.log(a-b);
// console.log(a*b);
// console.log(Number(a/b));
// console.log(a%b);