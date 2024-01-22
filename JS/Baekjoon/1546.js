const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = input.shift()*1;
const numlist = input.shift().split(" ").map(x=> +x)
let Maxnum = 0
let answer = []

for(i = 0; i<N; i++){
  if(numlist[i] > Maxnum){
    Maxnum = numlist[i]
  }
}


for(j = 0; j<N; j++){
  answer.push(numlist[j]/Maxnum * 100)
}


let result = answer.reduce((acc, cur) => {
  return acc+ cur
})

console.log(result/N)