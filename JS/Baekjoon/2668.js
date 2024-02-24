// 세로 두 줄, 가로로 N개의 칸으로 이루어진 표
// 각 칸에는 1이상 N이하인 정수
// 트리가 아닌것 , 싸이클인 것

// visited: 방문 여부를 저장하는 배열 
// checked: 이미 방문했던 노드를 다시 만났는지 확인하는 배열 
// answer: 숫자 고르기 결과를 저장하는 배열

// dfs : 현재 노드에서 시작하여 재귀적으로 DFS를 수행하며, 다음 노드는 둘째 줄에 있는 값으로 이동
// 이미 방문했던 노드를 다시 만나면 순환(싸이클)을 찾았다고 판단하고, 순환 경로에 속한 모든 노드를 결과에 추가

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const n = input[0] * 1;
let arr = [0];
let visited = new Array(n + 1).fill(false);
let checked = new Array(n + 1).fill(false);

for (let i = 1; i < n + 1; i++) {
  arr.push(input[i] * 1);
}

let answer = [];

function dfs(j, arr, visited,answer,checked) {
  visited[j] = true; // 방문 처리
  let k = arr[j]; // 다음에 탐색할 노드
  if (!visited[k]) {
    dfs(k, arr, visited, answer,checked);
  } else if (!checked[k]) {
    // 방문한 적이 있다면???
    // 안됐으면 싸이클 처리 로직 (answer에다가 값 push)
    // 순환이 되고 있는 노드 값을 넣어주면 되는데...
    while (k != j) {
      answer.push(k);
      k = arr[k];
    }
    answer.push(j)
  }
  checked[j] = true;
}

for (let j = 1; j < n + 1; j++) {
  if (!visited[j]) {
    dfs(j, arr, visited, answer,checked);
  }
}

console.log(answer.length);
answer.sort((a, b) => a - b);
for (let l of answer) {
  console.log(l);
}
