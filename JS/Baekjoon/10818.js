const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n")

const T = Number(input[0]);
const numlist = input[1].split(" ").map(x=> +x)

let minNum = 1000000
let maxNum = -1000000

for(i=0; i < T; i++){
  if(numlist[i] > maxNum){
    maxNum = numlist[i]
  }
  if(numlist[i] < minNum){
    minNum = numlist[i]
  }
  
}

console.log(minNum,maxNum)