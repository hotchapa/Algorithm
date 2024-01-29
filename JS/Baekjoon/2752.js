const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let numList = input.shift().split(" ").map(x=>+x)
numList.sort((a,b)=> a - b)
let answer = ""

for(let i = 0; i<numList.length; i++){
  answer += numList[i] + " "
}

console.log(answer)