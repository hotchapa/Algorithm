const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [H,M] = input.shift().split(" ").map(x => +x);

if(H == 0){
  H = 24
}

let time = (H*60) + M - 45;
let newH = Math.abs(parseInt(time/60))

if (newH== 24){
  newH = 0
}

const newM = Math.abs(time%60)

console.log(newH,newM)