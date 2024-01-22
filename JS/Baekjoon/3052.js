const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const set = new Set();


for(i=0; i<input.length; i++){
  set.add(input[i] % 42)
}

console.log(set.size)