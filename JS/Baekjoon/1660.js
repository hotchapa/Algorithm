const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const N = Number(input[0]);

let dp = new Array(N+1).fill(Infinity); 
dp[0] = 0; 

let num = 0;
let index = 1;
let arr = [];

while(N > num){
    num += (index*(index+1)/2);
    arr.push(num);
    index++;
}

for (let i = 1; i <= N; i++) {
    for (const num of arr) {
        if (num === i) {
            dp[i] = 1;
            break;
        } else if (num > i) {
            break;
        }
        dp[i] = Math.min(dp[i], 1 + dp[i - num]);
    }
}

console.log(dp[N]);