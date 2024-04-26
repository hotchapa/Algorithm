const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = Number(input[0]);
let arr = [];
for(let i = 1; i<=n; i++){
  arr.push(i);
}

console.log(arr.join("\n"))
