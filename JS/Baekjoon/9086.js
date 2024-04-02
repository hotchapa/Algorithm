const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const tc = input[0]*1;

for(let i =1; i<=tc; i++){
  let str = input[i];
  console.log(str[0]+str[str.length-1])
}
