const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const N = Number(input[0]);
const numList = input[1].split(" ").map(Number);
const v = Number(input[2]);
let count = 0;
for(let i=0; i<N; i++){
  if(numList[i]==v){
    count += 1;
  }
}
console.log(count);