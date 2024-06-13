const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N,K] = input[0].split(" ").map(Number);
let numbers = input[1].split(" ").map(Number);
numbers.sort((a,b)=> b-a)
let result = numbers[K-1]
console.log(result)