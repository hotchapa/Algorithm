const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [f,s] = input[0].split(" ")
let newF = ""
let newS = ""

for(let i = f.length; i >= 0; i --){
  newF += f.charAt(i)
  newS += s.charAt(i)
}

console.log(Math.max(newF,newS))
