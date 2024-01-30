const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = input.shift()*1
let numList = []
for(let i = 0; i<N; i++){
  numList.push(input[i])
}

numList.sort((a,b)=> a - b)

for(let j = 0; j<N; j++){
  console.log(numList[j])
}


