const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const [N,M] = input[0].split(" ").map(Number);
let arr = Array(N).fill(0);

for(let el = 1; el<=M; el++){
  let [i,j,k] = input[el].split(" ").map(Number);
  for(; i<=j; i++){
    arr[i-1] = k;
  }
}

console.log(arr.join(" "))
