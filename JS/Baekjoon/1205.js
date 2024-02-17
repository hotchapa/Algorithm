const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, newScore, p] = input[0].split(" ").map(Number);

let numList = input[1] ? input[1].split(" ").map(Number) : [];

// 새로운 점수가 점수 리스트의 마지막 요소보다 크거나 같고, 리스트의 길이가 p와 같다면,
// 새로운 점수를 추가할 수 없으므로 -1을 출력
if (newScore <= numList[n-1] && n === p) {
  console.log(-1);
} else {
  numList.push(newScore); // 새로운 점수를 추가
  numList.sort((a, b) => b - a); // 점수를 내림차순으로 정렬
  
  let rank = numList.indexOf(newScore) + 1; // 새로운 점수의 순위를 찾음
  console.log(rank);
}
