const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const t = Number(input[0]);
let answer = [];
for(let i=t; i>=1; i--){
    answer.push(i)
}

console.log(answer.join("\n"))