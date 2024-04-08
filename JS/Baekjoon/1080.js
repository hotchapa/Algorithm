const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const arr = [];
const goal = [];

for (let i = 1; i <= N; i++) {
  arr.push(input[i].split("").map(Number));
}
for (let i = N + 1; i <= N * 2; i++) {
  goal.push(input[i].split("").map(Number));
}

// 3x3 크기를 뒤집는 함수, 실제 뒤집는 범위는 x,y부터 x+2, y+2까지
function flip(x, y) {
  for (let i = x; i <= x + 2; i++) {
    for (let j = y; j <= y + 2; j++) {
      arr[i][j] = 1 - arr[i][j]; 
    }
  }
}

// arr과 goal이 같은지 확인하는 함수
function isSame() {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] !== goal[i][j]) {
        return false;
      }
    }
  }
  return true;
}

let count = 0;
for (let i = 0; i <= N - 3; i++) {
  for (let j = 0; j <= M - 3; j++) {
    // arr[i][j]와 goal[i][j]가 다르면 3x3 부분 행렬 뒤집기
    if (arr[i][j] !== goal[i][j]) {
      flip(i, j);
      count++;
    }
  }
}

// 최종적으로 arr와 goal이 같은지 확인
if (isSame()) {
  console.log(count); // 같다면 연산 횟수 출력
} else {
  console.log(-1); // 다르면 -1 출력
}
