const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = input.shift()*1;
const numlist = input.shift().split("").map(x=> +x)

let answer = numlist.reduce((a,c)=>{
  return a + c
})

console.log(answer)

