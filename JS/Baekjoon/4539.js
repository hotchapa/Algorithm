const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")    
    .map(x => +x);

const testCase = input.shift();

for(let i = 0; i < testCase; i++){
    let num = input[i];
    let tenPow = 10;
    while(num >= tenPow) {
        num = Math.round(num / tenPow) * tenPow;
        tenPow *= 10;
    }
    console.log(num);
}
