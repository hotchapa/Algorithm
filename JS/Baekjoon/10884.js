const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();
const N = Number(input);

const dp = Array.from(Array(N + 1), () => Array(10).fill(0));

// 초기 조건 설정
for (let i = 1; i <= 9; i++) {
    dp[1][i] = 1;
}

// 점화식을 이용한 DP 테이블 채우기
for (let n = 2; n <= N; n++) {
    for (let l = 0; l <= 9; l++) {
        if (l === 0) {
            dp[n][l] = dp[n - 1][1];
        } else if (l === 9) {
            dp[n][l] = dp[n - 1][8];
        } else {
            dp[n][l] = (dp[n - 1][l - 1] + dp[n - 1][l + 1]) % 1000000000;
        }
    }
}

// 길이가 N인 계단 수의 총 개수 계산
const answer = dp[N].reduce((acc, cur) => (acc + cur) % 1000000000, 0);
console.log(answer);
