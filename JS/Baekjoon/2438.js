const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n")

const T = Number(input[0]);
let answer = "";

for(i=1; i<= T; i++){
  let numlist = input[i].split(" ")
  answer += Number(numlist[0]) + Number(numlist[1]) +  "\n" 
}

console.log(answer)