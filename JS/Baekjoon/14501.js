// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");
// const N = Number(input[0]);
// const arr = [];
// for (let i = 1; i <= N; i++) {
//   let [t, p] = input[i].split(" ").map(Number);
//   arr.push([t, p]);
// }
// const dp = Array(N + 1).fill(0);

// for (let i = 0; i < N; i++) {
//   const [t, p] = arr[i];
//   if (i + t <= N) { // 상담이 퇴사 전에 끝날 수 있는지 체크
//     dp[i + t] = Math.max(dp[i + t], dp[i] + p); // i+t날에 받을 수 있는 최대 이익 갱신
//   }
//   dp[i + 1] = Math.max(dp[i + 1], dp[i]); // 다음날 이익은 오늘 이익과 최대값이어야 함
// }

// console.log(dp[N]); // 퇴사일에 최대 이익 출력


const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);
const arr = [];
for (let i = 1; i <= N; i++) {
  let [t, p] = input[i].split(" ").map(Number);
  arr.push([t, p]);
}

let maxProfit = 0;

function dfs(day, profit) {
  if (day === N) { // 퇴사일에 도달했을 때
    maxProfit = Math.max(maxProfit, profit);
    return;
  }
  if (day > N) { // 퇴사일을 넘어서는 경우 무시
    return;
  }
  // 현재 상담을 선택하는 경우
  if (day + arr[day][0] <= N) {
    dfs(day + arr[day][0], profit + arr[day][1]);
  }
  // 현재 상담을 선택하지 않고 다음 날로 넘어가는 경우
  dfs(day + 1, profit);
}

dfs(0, 0); // 첫 날부터 시작하며, 초기 이익은 0

console.log(maxProfit);
