
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(filePath).toString().split("\n");
// const T = Number(input[0]);
// let index = 1;

// for(let tc = 0; tc<T; tc++){
//   const [N,K] = input[index++].split(" ").map(Number);
//   const time =  input[index++].split(" ").map(Number);
//   let graph = Array(K+1).fill(null).map(() => Array());  const info = [];

//   for(let j=0; j<N; j++){
//     let [x,y] = input[index++].split(" ").map(Number)
//     graph[x].push(y)
//     graph[y].push(x)
//   }

//   const goal = Number(input[index++]);
//   let queue = [graph[goal]];
//   let count = 0;
  
//   // 깊이를 기준으로 dp를 만들고 싶은데..
//   // 목표 건물까지의 깊이를 어떻게 구할까?
//   // 깊이가 1일때,
  
// }


// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(filePath).toString().split("\n");
// let index = 0;
// const T = Number(input[index++]);

// function solve() {
//     let results = [];
//     for(let tc = 0; tc < T; tc++) {
//         const [N, K] = input[index++].split(" ").map(Number);
//         const time = input[index++].split(" ").map(Number);
//         let graph = Array.from({length: N + 1}, () => []);
//         let indegree = new Array(N + 1).fill(0);
//         let dp = new Array(N + 1).fill(0);

//         for(let j = 0; j < K; j++) {
//             let [x, y] = input[index++].split(" ").map(Number);
//             graph[x].push(y);
//             indegree[y]++;
//         }

//         const goal = Number(input[index++]);
//         let queue = [];

//         // 진입 차수가 0인 노드를 큐에 추가
//         for (let i = 1; i <= N; i++) {
//             dp[i] = time[i - 1];
//             if (indegree[i] === 0) {
//                 queue.push(i);
//             }
//         }

//         // 위상 정렬 실행
//         while(queue.length) {
//             let curr = queue.shift();

//             for(let next of graph[curr]) {
//                 dp[next] = Math.max(dp[next], dp[curr] + time[next - 1]);
//                 indegree[next]--;
//                 if(indegree[next] === 0) {
//                     queue.push(next);
//                 }
//             }
//         }

//         // 목표 건물까지의 최소 시간 출력
//         results.push(dp[goal]);
//     }
//     return results;
// }

// console.log(solve().join('\n'));


const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
let index = 0;
const T = Number(input[index++]);

function dfs(node, graph, time, dp) {
    if (dp[node] !== -1) return dp[node];  // 이미 계산된 경우
    let maxTime = 0;

    for (let next of graph[node]) {
        maxTime = Math.max(maxTime, dfs(next, graph, time, dp));
    }

    dp[node] = time[node - 1] + maxTime;  // 현재 노드를 건설하는데 필요한 시간 추가
    return dp[node];
}

function solve() {
    let results = [];
    for (let tc = 0; tc < T; tc++) {
        const [N, K] = input[index++].split(" ").map(Number);
        const time = input[index++].split(" ").map(Number);
        let graph = Array.from({length: N + 1}, () => []);
        let dp = new Array(N + 1).fill(-1);

        for (let j = 0; j < K; j++) {
            let [x, y] = input[index++].split(" ").map(Number);
            graph[y].push(x);  // y를 짓기 위해 x가 필요함을 나타냄
        }

        const goal = Number(input[index++]);

        // 목표 건물에 대한 DFS 실행
        results.push(dfs(goal, graph, time, dp));
    }
    return results;
}

console.log(solve().join('\n'));
