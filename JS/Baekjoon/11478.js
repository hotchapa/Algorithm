const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let str = input[0];

const answer = new Set();

// 모든 가능한 부분 문자열을 탐색하여 Set에 추가
for (let i = 0; i < str.length; i++) {
  for (let j = i + 1; j <= str.length; j++) {
    const substring = str.substring(i, j);
    answer.add(substring);
  }
}

console.log(answer.size); // 부분 문자열의 고유 개수 출력
