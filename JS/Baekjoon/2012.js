const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = input.shift()*1;
const numlist = input.map(Number);
const sortedNumlist = numlist.sort((a,b)=> a - b)
const temp = Array(N).fill(0);

for(i=1;i<=N;i++){
    temp[i-1]= i
  }

let count = 0;

for(i=0; i<N; i++){
  if(numlist[i] === temp[i]){
    continue;
  }
  if(numlist[i] < temp[i]){
    count += Math.abs(temp[i] -numlist[i]);
  }
  if(numlist[i] > temp[i]){
    count += Math.abs(temp[i] -numlist[i]);
  }
  }

console.log(count)
