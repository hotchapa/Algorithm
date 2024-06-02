const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input[0]);
const arr = [];
let result = [];

for(let i =0; i<n; i++){
  arr.push("*")
}

for(let i =0; i<n; i++){
  result.push(arr.join(""));
  arr.pop();
  arr.unshift(" ");
}


for(let x of result){
  console.log(x);
}