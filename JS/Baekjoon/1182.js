const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, S] = input.shift().split(" ").map((x) => +x);
const numList = input
  .shift()
  .split(" ")
  .map((x) => parseInt(x));

let count = 0; // 합이 S가 되는 경우의 수를 저장할 변수

// 백트래킹
const findSubset = (i, sum)=>{
  // 배열의 마지막 값까지 탐색하면 함수를 종료
  if (i === N) 
  return;

  // 현재 i에 해당하는 값을 sum에 더한 결과가 S와 같다면 count 증가
  if (sum + numList[i] === S) count++;

  // 현재 i의 값을 포함하는 경우
  findSubset(i + 1, sum + numList[i]);
  
  // 현재 i의 값을 포함하지 않는 경우
  findSubset(i + 1, sum);
}

findSubset(0, 0);
console.log(count); 
