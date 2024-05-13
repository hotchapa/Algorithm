const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n")
const N = Number(input.shift());


for(let i=0; i<N; i++){
  let [x,y] = input[i].split(" ").map(Number);
  
}



