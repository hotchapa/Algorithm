const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [H,M] = input[0].split(" ").map(x => +x);
let needTime = Number(input[1])
let newM = needTime+M
let newH = H%24

if(newM> 59){
  if(H < 24){
    H += (Math.abs(newM/60))
    newH = parseInt(H%24)
    newM = Math.abs(newM%60);

  }else{
    H = (Math.abs(newM%60))
    newH = parseInt(H%24)
    newM = Math.abs(newM%60);
  }

  }

console.log(newH,newM)



