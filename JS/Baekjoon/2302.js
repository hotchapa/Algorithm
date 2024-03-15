// 테케1의 2,4,7 은 고정석을 뜻함
// 2,4,7을 제외하고 자리를 바꿀 수 있고, 그것의 가짓수를 구하면 됨
// 근데 점화식을 어떻게 도출하냐?

// for 순회
// 1의 자리를 바꿨을 때 나올 수 있는 가짓수를 싹 다 저장, 카운트도 증가
// 2의 자리를 바꿨을 때 나올 수 있는 가짓수를 저장하되, 중복된 건 제외하고 카운트도 증가안함
// 이건 고정석이 없을때나 가능하며 메모리도 엄청 잡아먹을것임
// 결국 규칙성을 찾아야 됨


// 각 테이블의 값이 피보나치 수열과 동일함
// 1,2,3,4,5,6,7,8,9 일때
// 고정석을 제외하면 아래 묶음끼리만 자리가 교체된다
// [1,2,3], [5,6], [8,9]
// 3개, 2개, 2개

// 경우의 수는 다 곱한 값인 12개
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input[0]); // 전체 좌석의 수
const m = parseInt(input[1]); // VIP 좌석의 수
const vipSeats = input.slice(2, 2 + m).map(Number); // VIP 좌석 번호 목록

let dp = Array(n + 1).fill(0);
dp[0] = 1; // 0개의 연속된 좌석에 대한 경우의 수
dp[1] = 1; // 1개의 연속된 좌석에 대한 경우의 수
for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]; // 피보나치 수열 계산
}

let answer = 1;
let prev = 0; // 이전 VIP 좌석 위치 (시작점)

for (let i = 0; i < m; i++) {
    let current = vipSeats[i] - prev - 1; // 현재 VIP 좌석과 이전 VIP 좌석 사이의 거리(연속된 좌석의 개수)
    answer *= dp[current]; // 해당 구간의 경우의 수를 곱함
    prev = vipSeats[i]; // 이전 VIP 좌석 위치 업데이트
}

answer *= dp[n - prev]; // 마지막 VIP 좌석과 극장 끝 사이의 연속된 좌석에 대한 경우의 수를 곱함

console.log(answer);
