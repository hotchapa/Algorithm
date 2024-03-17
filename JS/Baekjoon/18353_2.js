// 가장 긴 감소하는 부분 수열을 찾아내는 방식으로 접근해서 풀이!
// 각 병사를 순회하면서, 
// 해당 병사를 마지막으로 하는 가장 긴 감소하는 부분 수열의 길이를 계산하고, 
// 이를 저장하는 방식, DP로 문제를 해결

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = input[0] * 1
let arr = input[1].split(" ").map(x=> +x);

// DP 테이블 초기화
let dp = Array(n).fill(1);

// 가장 긴 감소하는 부분 수열 찾기
for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
        if (arr[j] > arr[i]) {
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
}

// 가장 긴 감소하는 부분 수열의 길이를 찾음
let maxLDS = Math.max(...dp);

// 제거해야 할 병사의 수를 계산
console.log(n - maxLDS);

