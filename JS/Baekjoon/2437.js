const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 우리는 최소값만 구하면 된다.
// 1,1,2,3,6,7,30
// 21
// 20 19 18 .... 

// 1 2 3 4 5 6 7 8 9 10 
// 1 3 5 7 9 10 11 12 13 400
// 경우의 수 중 가장 큰 값과 바로 전 값에서 +1을 한 값이 최소값인가?
// 그럴리가. 위 예제는 2가 최소값이다.

// 아기고래 게임처럼
// 처음 못 만드는 무게를 1(현재 무게)로 잡고 시작해서,
// 오름차순 정렬된 무게추들중에 1보다 큰 값이 있으면 게임 오버, 즉 그때의 현재무게가 답이 될 것!! (1)
// 반대로 1보다 크지 않다면, 그 값을 더한 다음 다시 다음 무게추와 크기를 비교하면 풀릴듯

const N = Number(input[0]);
const weights = input[1].split(" ").map(Number);
weights.sort((a, b) => a - b);

let currentWeight = 1;
console.log(weights)
for (let i = 0; i < N; i++) {
  if (weights[i] > currentWeight) {
    break;
  }
  currentWeight += weights[i];
}

console.log(currentWeight);