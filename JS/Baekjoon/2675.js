const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let answer = ""

for(i=0; i<input.length; i++){
  let [R,S] = input[i].split(" ")
  Number(R)
  if(S){
    answer = S.split("").map(x=> x.repeat(R)).join("")
    console.log(answer)
  }
}


