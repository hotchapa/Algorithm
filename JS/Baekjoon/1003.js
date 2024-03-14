const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const t = parseInt(input[0]);
let numList = input.slice(1).map(Number);

// DP 테이블 초기화 및 기본값 설정
let dpTable = Array(Math.max(...numList) + 1).fill(0);
dpTable[0] = [1, 0]; // 0을 호출했을 때 0이 호출되는 횟수: 1, 1이 호출되는 횟수: 0
dpTable[1] = [0, 1]; // 1을 호출했을 때 0이 호출되는 횟수: 0, 1이 호출되는 횟수: 1

// DP를 사용해 피보나치 함수의 0과 1 호출 횟수 계산
for (let i = 2; i < dpTable.length; i++) {
    dpTable[i] = [dpTable[i-1][0] + dpTable[i-2][0], dpTable[i-1][1] + dpTable[i-2][1]];
}

// 각 숫자에 대해 계산된 호출 횟수 출력
numList.forEach(num => {
    console.log(dpTable[num].join(' '));
});
