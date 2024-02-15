
const fs =require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n,k] = input[0].split(" ").map(x=>+x)
const numList = input[1].split(" ").map(x=>+x)
let answer = []
for(let i = 0; i<n; i++){
  if(numList[i]<k){
    answer += numList[i] + " "
  }
}

console.log(answer)