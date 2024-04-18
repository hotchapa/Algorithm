const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = parseInt(input[0], 10);
let cycle = 0;

let num = (N < 10) ? [0, N] : N.toString().split("").map(Number);

function solve(n) {
  let first = n[1];  
  let sum = n.reduce((a, b) => a + b, 0);  
  let newN = [first, sum % 10];  

  cycle++;  
  if (parseInt(newN.join(''), 10) !== N) {
    solve(newN); 

  }
}

solve(num);
console.log(cycle);  
