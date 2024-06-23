
const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);
let arr = Array(N*2).fill(" ")
let arr2 = [];
for(let i=0; i<N; i++){
  arr[i] = "*"
  arr[2*N-i-1] = "*"
  console.log(arr.join(""))
  arr2.push(arr.join(""))
}

arr2.reverse();
for(let i = 1; i<N; i++){
  console.log(arr2[i])
}
