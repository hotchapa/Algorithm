const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input[0]);
let numList = input.slice(1).map(Number);
let dpTable = Array(n).fill(0);

dpTable[0] = numList[0];
dpTable[1] = numList[0]+ numList[1];
dpTable[2] = Math.max(numList[0]+numList[1],numList[0]+numList[2],numList[1]+numList[2]);

for(let i =3; i<n; i++){
  // 반복문으로 갱신해가며 최적해 갱신!!
  dpTable[i] = dpTable[i-1]; // i번째 포도주를 안먹는 경우
  dpTable[i] = Math.max(dpTable[i],numList[i]+numList[i-1]+dpTable[i-3]); // i번째 포도주와 바로 전 포도주와 전전전 포도주를 먹는 경우
  dpTable[i] = Math.max(dpTable[i],numList[i]+dpTable[i-2]); // i번째 포도주와 i-2번째 포도주를 먹는 경우
}

console.log(dpTable[n-1])
