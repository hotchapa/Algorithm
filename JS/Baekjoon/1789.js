const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split("\n")
const n = input[0]*1
let sum = 0;
let i = 0;

while(sum <= n){
  i++;
  sum += i;
}

console.log(i-1)
