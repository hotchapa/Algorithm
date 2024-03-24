// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");
// const n = Number(input[0]);
// let arr = input[1].split(" ").map(Number);
// const delNum = Number(input[2]);
// let graph = Array(n).fill().map(() => []);

// for (let i = 0; i < n; i++) {
//   if (arr[i] !== -1 && i !== delNum) {
//     graph[arr[i]].push(i);
//   }
// }

// // 삭제할 노드를 포함하여 모든 자식 노드 삭제
// function deleteNodeAndChildren(node) {
//   graph[node] = []; // 해당 노드의 모든 자식 노드를 삭제
//   for (let i = 0; i < n; i++) {
//     graph[i] = graph[i].filter(child => child !== node);
//   }
// }

// deleteNodeAndChildren(delNum);

// function countLeafNodes() {
//   let count = 0;
//   for (let i = 0; i < n; i++) {
//     if (i !== delNum && graph[i].length === 0) { // 삭제된 노드를 제외하고, 자식이 없는 노드를 센다
//       count++;
//     } else if (graph[i].includes(delNum) && graph[i].length === 1) { // 삭제할 노드가 유일한 자식인 경우
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countLeafNodes());
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input.shift(); // 첫 번째 입력값(노드의 개수)는 처리에 필요 없으므로 제거합니다.
const parentInfo = input.shift().split(' ').map(Number);
const eraseNode = +input.shift();

let tree = [];
let cnt = 0;
let rootNode;

// 부모 노드 정보를 바탕으로 트리 구성
parentInfo.forEach((parentNode, idx) => {
    if (parentNode === -1) {
        rootNode = idx; // 루트 노드 설정
        return;
    }
    if (!tree[parentNode]) tree[parentNode] = [];
    tree[parentNode].push(idx);
});

// DFS를 활용한 탐색과 리프 노드 카운트
const dfs = (node) => {
    // 삭제할 노드가 루트 노드인 경우, 트리는 비어있음
    if (node === eraseNode) return;

    // 자식 노드가 없거나, 모든 자식 노드가 삭제될 노드인 경우 현재 노드는 리프 노드임
    if (!tree[node] || tree[node].every(child => child === eraseNode)) {
        cnt++;
        return;
    }

    // 현재 노드의 자식 노드들에 대해 DFS 수행
    tree[node].forEach((child) => {
        if (child !== eraseNode) {
            dfs(child);
        }
    });
};

// 루트 노드부터 탐색 시작
dfs(rootNode);

console.log(cnt); // 리프 노드의 개수 출력
