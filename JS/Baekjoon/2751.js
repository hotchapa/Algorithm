const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = input.shift()*1
input.sort((a,b)=> a - b)

let numList = []
for(let i = 0; i<N; i++){
  numList += input[i]+ "\n"
}
console.log(numList)
