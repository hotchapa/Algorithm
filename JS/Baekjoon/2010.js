const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(x=>+x)
const N = input[0];
let plug = 1;
for(i=1; i <= N; i++){
  if(plug){
    plug -= 1;
    plug += input[i]
  }
}
console.log(plug);