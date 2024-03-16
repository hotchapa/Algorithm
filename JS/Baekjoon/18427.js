// 표로 정리해서 풀이
// DP는 그냥 암산으론 풀기가 너무 힘들다고 느낌
// 첫번째 학생이 첫번째 블록으로 쌓았을 때, 그리고 그 경우에서 다른 학생이 첫번째 블록으로 쌓았을 때 등을 표로 정리해보면
// 아래와 같은 점화식이 도출됨
// dp[i][j] = (dp[i][j] + dp[i-1][j-k])



const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M, H] = input[0].split(" ").map(Number); // n: 학생 수, M: 최대 블록 수, H: 탑 높이
const blocks = input.slice(1, N+1).map(line => line.split(" ").map(Number));

let dp = Array.from({length: N+1}, () => Array(H+1).fill(0));
dp[0][0] = 1; // 높이가 0인 탑을 만드는 경우의 수는 1

// DP를 이용한 문제 해결
for(let i = 1; i <= N; i++) {
    for(let j = 0; j <= H; j++) {
        dp[i][j] = dp[i-1][j]; // i번째 학생의 블록을 사용하지 않는 경우
        for(let k of blocks[i-1]) { // i번째 학생이 가진 모든 블록에 대해
            if(j >= k) {
                dp[i][j] = (dp[i][j] + dp[i-1][j-k]) % 10007; // i번째 학생의 블록을 사용하는 경우
            }
        }
    }
}

// 결과 출력
console.log(dp[N][H]);
