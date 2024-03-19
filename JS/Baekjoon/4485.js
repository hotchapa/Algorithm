// BFS로 풀이
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let index = 0;
let problemNumber = 1;

while (true) {
    let n = parseInt(input[index++], 10);
    if (n === 0) break;

    let grid = [];
    for (let i = 0; i < n; i++) {
        grid.push(input[index++].split(" ").map(Number));
    }

    console.log(`Problem ${problemNumber}: ${bfs(grid, n)}`);
    problemNumber++;
}

function bfs(grid, N) {
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    const visited = Array.from(Array(N), () => Array(N).fill(-1));
    visited[0][0] = grid[0][0];

    const queue = [[0, 0]];

    while (queue.length > 0) {
        const [x, y] = queue.shift();

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
                // 첫 방문이거나, 더 적은 비용으로 도달할 수 있는 경우
                if (visited[nx][ny] == -1 || visited[nx][ny] > visited[x][y] + grid[nx][ny]) {
                    visited[nx][ny] = visited[x][y] + grid[nx][ny];
                    queue.push([nx, ny]);
                }
            }
        }
    }

    return visited[N - 1][N - 1];
}


// 우선순위 큐로 풀이
// 배열로 구현
// class PriorityQueue {
//   constructor() {
//       this.queue = [];
//   }

//   enqueue(item) {
//       this.queue.push(item);
//       this.queue.sort((a, b) => a[0] - b[0]);
//   }

//   dequeue() {
//       return this.queue.shift();
//   }

//   isEmpty() {
//       return this.queue.length === 0;
//   }
// }

// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().trim().split("\n");

// let index = 0;
// let problemNumber = 1;

// while (true) {
//   let n = parseInt(input[index++], 10);
//   if (n === 0) break;

//   let grid = [];
//   for (let i = 0; i < n; i++) {
//       grid.push(input[index++].split(" ").map(Number));
//   }

//   console.log(`Problem ${problemNumber}: ${dijkstra(grid)}`);
//   problemNumber++;
// }

// function dijkstra(grid) {
//   const dx = [1, -1, 0, 0];
//   const dy = [0, 0, 1, -1];
//   const N = grid.length;
//   const cost = Array.from(Array(N), () => Array(N).fill(Infinity));
//   const pq = new PriorityQueue();

//   cost[0][0] = grid[0][0];
//   pq.enqueue([cost[0][0], 0, 0]); // [비용, x, y]

//   while (!pq.isEmpty()) {
//       const [currentCost, x, y] = pq.dequeue();

//       if (x === N - 1 && y === N - 1) break; // 목표 도달

//       for (let i = 0; i < 4; i++) {
//           const nx = x + dx[i];
//           const ny = y + dy[i];

//           if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
//               const nextCost = currentCost + grid[nx][ny];
//               if (nextCost < cost[nx][ny]) {
//                   cost[nx][ny] = nextCost;
//                   pq.enqueue([nextCost, nx, ny]);
//               }
//           }
//       }
//   }

//   return cost[N - 1][N - 1];
// }




// 힙 구현 
// class PriorityQueue {
//   constructor() {
//       this.heap = [];
//   }

//   enqueue(item) {
//       this.heap.push(item);
//       this.bubbleUp();
//   }

//   bubbleUp() {
//       let index = this.heap.length - 1;
//       const element = this.heap[index];

//       while (index > 0) {
//           let parentIndex = Math.floor((index - 1) / 2);
//           let parent = this.heap[parentIndex];

//           if (element[0] >= parent[0]) break;

//           this.heap[index] = parent;
//           this.heap[parentIndex] = element;
//           index = parentIndex;
//       }
//   }

//   dequeue() {
//       const min = this.heap[0];
//       const end = this.heap.pop();
//       if (this.heap.length > 0) {
//           this.heap[0] = end;
//           this.sinkDown();
//       }
//       return min;
//   }

//   sinkDown() {
//       let index = 0;
//       const length = this.heap.length;
//       const element = this.heap[0];

//       while (true) {
//           let leftChildIndex = 2 * index + 1;
//           let rightChildIndex = 2 * index + 2;
//           let leftChild, rightChild;
//           let swap = null;

//           if (leftChildIndex < length) {
//               leftChild = this.heap[leftChildIndex];
//               if (leftChild[0] < element[0]) {
//                   swap = leftChildIndex;
//               }
//           }

//           if (rightChildIndex < length) {
//               rightChild = this.heap[rightChildIndex];
//               if (
//                   (swap === null && rightChild[0] < element[0]) ||
//                   (swap !== null && rightChild[0] < leftChild[0])
//               ) {
//                   swap = rightChildIndex;
//               }
//           }

//           if (swap === null) break;

//           this.heap[index] = this.heap[swap];
//           this.heap[swap] = element;
//           index = swap;
//       }
//   }

//   isEmpty() {
//       return this.heap.length === 0;
//   }
// }


// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().trim().split("\n");

// let index = 0;
// let problemNumber = 1;

// while (true) {
//     let n = parseInt(input[index++], 10);
//     if (n === 0) break;

//     let grid = [];
//     for (let i = 0; i < n; i++) {
//         grid.push(input[index++].split(" ").map(Number));
//     }

//     console.log(`Problem ${problemNumber}: ${dijkstra(grid)}`);
//     problemNumber++;
// }

// function dijkstra(grid) {
//     const dx = [1, -1, 0, 0];
//     const dy = [0, 0, 1, -1];
//     const N = grid.length;
//     const cost = Array.from(Array(N), () => Array(N).fill(Infinity));
//     const pq = new PriorityQueue();

//     cost[0][0] = grid[0][0];
//     pq.enqueue([cost[0][0], 0, 0]); // [비용, x, y]

//     while (!pq.isEmpty()) {
//         const [currentCost, x, y] = pq.dequeue();

//         if (x === N - 1 && y === N - 1) break; // 목표 도달

//         for (let i = 0; i < 4; i++) {
//             const nx = x + dx[i];
//             const ny = y + dy[i];

//             if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
//                 const nextCost = currentCost + grid[nx][ny];
//                 if (nextCost < cost[nx][ny]) {
//                     cost[nx][ny] = nextCost;
//                     pq.enqueue([nextCost, nx, ny]);
//                 }
//             }
//         }
//     }

//     return cost[N - 1][N - 1];
// }

