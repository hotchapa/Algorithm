// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().split('\n');
// const N = Number(input[0]);
// const boxes = input[1].split(" ").map(Number);

// const dp = Array(N).fill(1); // 각 상자를 하나만 사용할 경우의 길이는 1

// for (let i = 1; i < N; i++) {
//     for (let j = 0; j < i; j++) {
//         if (boxes[j] < boxes[i]) {
//             dp[i] = Math.max(dp[i], dp[j] + 1);
//         }
//     }
// }

// console.log(Math.max(...dp)); // 최대값을 찾아 출력
const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n');
const N = Number(input[0]);
const boxes = input[1].split(" ").map(Number);

// 동적 프로그래밍을 위한 배열 초기화
const dp = Array(N).fill(0);

function dfs(currentIndex) {
    // 이미 계산된 값이 있다면 그 값을 반환
    if (dp[currentIndex] !== 0) {
        return dp[currentIndex];
    }

    // 최소 길이는 자기 자신만 포함하는 경우 1
    let maxLen = 1;

    // 다음 상자를 탐색
    for (let nextIndex = currentIndex + 1; nextIndex < N; nextIndex++) {
        if (boxes[currentIndex] < boxes[nextIndex]) {
            maxLen = Math.max(maxLen, 1 + dfs(nextIndex));
        }
    }

    // 계산된 최대 길이를 저장
    dp[currentIndex] = maxLen;
    return dp[currentIndex];
}

let result = 0;
for (let i = 0; i < N; i++) {
    result = Math.max(result, dfs(i)); // 모든 상자를 시작점으로 설정
}

console.log(result);
