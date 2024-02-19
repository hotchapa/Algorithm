// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().trim().split("\n");

// // 테스트 케이스 개수
// const T = Number(input.shift());

// for (let t = 0; t < T; t++) {
//     const [M, N, K] = input.shift().split(" ").map((x) => +x);
//     let field = Array.from(Array(N), () => new Array(M).fill(false));
//     let visited = Array.from(Array(N), () => new Array(M).fill(false));
//     for (let i = 0; i < K; i++) {
//         const [x, y] = input.shift().split(" ").map((x) => +x);
//         field[y][x] = true;
//     }

//     let count = 0;

//     // DFS 함수 정의
//     function dfs(x, y) {
//         if (y < 0 || y >= N || x < 0 || x >= M || !field[y][x] || visited[y][x]) return;
        
//         visited[y][x] = true;

//         dfs(x - 1, y); // 왼쪽
//         dfs(x + 1, y); // 오른쪽
//         dfs(x, y - 1); // 위쪽
//         dfs(x, y + 1); // 아래쪽
//     }

//    for (let i=0;i<N;i++){
//        for(let j=0;j<M;j++){
//            if(field[i][j]==true && visited[i][j]==false){
//                dfs(j,i);
//                count++;
//            }
//        }
//    }

//     console.log(count);
// }


let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
function dfs(graph, n, m, x, y) { // 깊이 우선 탐색(DFS) 수행 // 주어진 범위를 벗어나는 경우에는 즉시 종료
    if (x <= -1 || x >= n || y <= -1 || y >= m)
    return false;
    // 현재 노드를 아직 처리하지 않았다면 
    if (graph[x][y] == 1) {
    // 해당 노드 방문 처리
    graph[x][y] = -1;
    // 상, 하, 좌, 우의 위치들도 모두 재귀적으로 호출 
    dfs(graph, n, m, x - 1, y);
    dfs(graph, n, m, x, y - 1);
    dfs(graph, n, m, x + 1, y);
    dfs(graph, n, m, x, y + 1);
    return true;
    }
return false;
}

let testCases = Number(input[0]); // 테스트 케이스의 수 
let line = 1;

while (testCases--) {
// 가로 길이(M), 세로 길이(N), 배추가 심어져 있는 위치의 개수(K)
let [m, n, k] = input[line].split(' ').map(Number); let graph = []; // 그래프 정보
for (let i = 0; i < n; i++) {
    graph[i] = new Array(m);
}
for (let i = 1; i <= k; i++) {
let [y, x] = input[line + i].split(' ').map(Number); graph[x][y] = 1;
}
let answer = 0; // 연결 요소(connected component)의 수 계산 
for (let i = 0; i < n; i++) {
for (let j = 0; j < m; j++) {
if (dfs(graph, n, m, i, j)) answer++; // 현재 위치에서 DFS 수행
} }
line += k + 1; // 다음 테스트 케이스로 이동
    console.log(answer);
}