const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = input[0]*1;
let distance = input[1].split(" ").map(x=>+x);
let cost = input[2].split(" ").map(x=>+x);


// 주유 비용의 배열을 비오름차순으로 전환
// [5,2,4,3,4] => [5,2,2,2,2]
let minCost = cost[0];

for(let i =0; i<n; i++){
  minCost = Math.min(minCost,cost[i]);
  cost[i] = minCost
}

let answer = BigInt(0);
for (let j = 0; j < n-1; j++){
  answer += BigInt(distance[j]) * BigInt(cost[j])
}

console.log(String(answer))

