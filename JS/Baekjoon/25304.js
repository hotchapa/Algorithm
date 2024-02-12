const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n")
let total = input[0] * 1
let n = input[1] * 1
let numList = []
for(let i =2; i<=n + 1; i++){
  numList.push(input[i].split(" ").map(x=>+x))
}

let result = 0;
for(let i =0; i<numList.length; i++){
  result += numList[i][0] * numList[i][1]
}

if(result == total){
  console.log("Yes")
}else{
  console.log("No")
}