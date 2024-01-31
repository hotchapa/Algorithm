const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [N,K] = input.shift().split(" ").map(x=> +x)
let count = 0;

for(let i = N-1; i>=0; i--){
  if(Number(input[i]) <= K){
    count +=  parseInt(K / Number(input[i]))
    K = parseInt(K % Number(input[i]))
  }
}

console.log(count)
