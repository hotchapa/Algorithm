# **오늘의 알고리즘**
### 2024-03-19 (화)
---

문제이름|알고리즘|난이도|링크|
|:---:|:---:|:---:|:---:|
|[녹색 옷 입은 애가 젤다지?](https://www.acmicpc.net/problem/4485)|<span style="color:red">**Dijkstra, BFS**</span>|골드4|[풀이](https://github.com/hotchapa/Algorithm/blob/0e264043cbb9786dce62005bd5f5d006cd0dfb9c/JS/Baekjoon/4485.js)|


## 문제 풀이 과정
젤다가 아니라, 링크가 동굴을 탈출하면서 잃게되는 금액의 최소값을 구하는 문제다.
최단 거리 알고리즘을 사용하면 되는 문제인데, 알고리즘 스포일러 이슈로 BFS로는 풀 수 없는 문제라는 걸 알고 있었지만, 얼마나 효율이 좋지 않은 지 직관적으로 알아보고 싶어서 BFS로도 먼저 풀이해보았다.

### 1) BFS
BFS는 모든 간선의 가중치가 동일할 때, 가장 효율적이다.
그러나 젤다 문제는 도둑루피의 값이 제각각이므로 BFS를 적용하기엔 적합하지 않다.

```
모든 간선의 가중치가 동일할 때
=> BFS (시간복잡도 : O(V+E))
모든 간선의 가중치가 동일하지 않을 때
=> 다익스트라 (시간복잡도 : O(NlogN))
```

그래도 일단 해보자.


```
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

```

??
잘 풀린다.....
메모리는 **15232KB**	시간은 **272ms**를 기록했다..


### 2) 다익스트라 
그래도 다익스트라로 풀면 효율이 더 좋을테니
다시 풀이해보자.


안타깝게도, JS는 직접 Heap을 구현해야한다. 
직접 구현하려면 문제 풀이 시간이 너무 길어질 것이 분명하다.
대신 간단하게 배열로 구현하는 방법도 있다. (shift,sort활용)

하지만 이번 기회에 힙 자료구조를 다시 공부하고, BFS와의 차이점도 체감하고, 직접 구현하는 성취도 느끼고자 JS로 풀이를 시작했다.



힙을 구현하기 위해선 아래를 숙지해야한다.
```
1. 왼쪽 자식 인덱스 = 부모 인덱스 * 2
2. 오른쪽 자식 인덱스 = 부모 인덱스 * 2 + 1
3. 부모 인덱스 = Math.floor(자식 인덱스 / 2)
```




```

힙 구현 
class PriorityQueue {
  constructor() {
      this.heap = [];
  }

  enqueue(item) {
      this.heap.push(item);
      this.bubbleUp();
  }

  bubbleUp() {
      let index = this.heap.length - 1;
      const element = this.heap[index];

      while (index > 0) {
          let parentIndex = Math.floor((index - 1) / 2);
          let parent = this.heap[parentIndex];

          if (element[0] >= parent[0]) break;

          this.heap[index] = parent;
          this.heap[parentIndex] = element;
          index = parentIndex;
      }
  }

  dequeue() {
      const min = this.heap[0];
      const end = this.heap.pop();
      if (this.heap.length > 0) {
          this.heap[0] = end;
          this.sinkDown();
      }
      return min;
  }

  sinkDown() {
      let index = 0;
      const length = this.heap.length;
      const element = this.heap[0];

      while (true) {
          let leftChildIndex = 2 * index + 1;
          let rightChildIndex = 2 * index + 2;
          let leftChild, rightChild;
          let swap = null;

          if (leftChildIndex < length) {
              leftChild = this.heap[leftChildIndex];
              if (leftChild[0] < element[0]) {
                  swap = leftChildIndex;
              }
          }

          if (rightChildIndex < length) {
              rightChild = this.heap[rightChildIndex];
              if (
                  (swap === null && rightChild[0] < element[0]) ||
                  (swap !== null && rightChild[0] < leftChild[0])
              ) {
                  swap = rightChildIndex;
              }
          }

          if (swap === null) break;

          this.heap[index] = this.heap[swap];
          this.heap[swap] = element;
          index = swap;
      }
  }

  isEmpty() {
      return this.heap.length === 0;
  }
}


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

    console.log(`Problem ${problemNumber}: ${dijkstra(grid)}`);
    problemNumber++;
}

function dijkstra(grid) {
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    const N = grid.length;
    const cost = Array.from(Array(N), () => Array(N).fill(Infinity));
    const pq = new PriorityQueue();

    cost[0][0] = grid[0][0];
    pq.enqueue([cost[0][0], 0, 0]); // [비용, x, y]

    while (!pq.isEmpty()) {
        const [currentCost, x, y] = pq.dequeue();

        if (x === N - 1 && y === N - 1) break; // 목표 도달

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
                const nextCost = currentCost + grid[nx][ny];
                if (nextCost < cost[nx][ny]) {
                    cost[nx][ny] = nextCost;
                    pq.enqueue([nextCost, nx, ny]);
                }
            }
        }
    }

    return cost[N - 1][N - 1];
}




```

17928KB	280ms
를 기록했다.. 
뭐지 왜 BFS보다 효율이 떨어질까..






```
class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(item) {
        this.queue.push(item);
        this.queue.sort((a, b) => a[0] - b[0]);
    }

    dequeue() {
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

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

    console.log(`Problem ${problemNumber}: ${dijkstra(grid)}`);
    problemNumber++;
}

function dijkstra(grid) {
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    const N = grid.length;
    const cost = Array.from(Array(N), () => Array(N).fill(Infinity));
    const pq = new PriorityQueue();

    cost[0][0] = grid[0][0];
    pq.enqueue([cost[0][0], 0, 0]); // [비용, x, y]

    while (!pq.isEmpty()) {
        const [currentCost, x, y] = pq.dequeue();

        if (x === N - 1 && y === N - 1) break; // 목표 도달

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
                const nextCost = currentCost + grid[nx][ny];
                if (nextCost < cost[nx][ny]) {
                    cost[nx][ny] = nextCost;
                    pq.enqueue([nextCost, nx, ny]);
                }
            }
        }
    }

    return cost[N - 1][N - 1];
}
```

배열로 구현한 우선순위큐로 풀이
메모리 **17212KB**	시간 **436ms** 기록



## 풀이 후 느낀점

왜 BFS의 효율이 더 좋게 나왔는지 물어보았다.

```
자료구조의 오버헤드: 다익스트라 알고리즘에서 우선순위 큐 (힙 구현)를 사용하는 경우, 힙에 요소를 추가하거나 제거할 때 발생하는 오버헤드가 상당할 수 있습니다. 특히, JavaScript에서는 힙 자료구조가 내장되어 있지 않아, 이를 직접 구현하게 되면 추가적인 계산 비용이 듭니다. 반면, BFS에서 사용되는 일반 큐는 배열을 사용하기 때문에, 이러한 오버헤드가 상대적으로 적습니다.

알고리즘의 특성상 발생하는 차이: BFS는 모든 간선의 가중치가 동일하다고 가정할 때 최단 경로를 찾는 데 최적화되어 있지만, 가중치가 다양한 경우에도 놀랍게도 잘 작동할 수 있습니다. 특히, 문제의 구조가 특정 방식으로 구성되어 있거나, 가중치의 분포가 특정 패턴을 따르는 경우가 그 예입니다. 반면, 다익스트라 알고리즘은 모든 경우의 가중치를 고려하여 최적의 경로를 찾으므로, 실제로는 더 많은 계산을 수행할 수 있습니다.

언어 및 환경에 따른 실행 시간 차이: 실행 시간은 사용하는 프로그래밍 언어와 그 환경에 따라 크게 달라질 수 있습니다. JavaScript의 경우, 배열 조작이 상대적으로 최적화되어 있어 BFS에서 사용하는 배열 기반의 큐가 빠르게 작동할 수 있습니다. 반면, 복잡한 힙 구조를 직접 구현하고 관리하는 것은 상대적으로 더 느릴 수 있습니다.

테스트 케이스의 특성: 문제의 특정 테스트 케이스에 따라 다익스트라 알고리즘과 BFS의 성능 차이가 달라질 수 있습니다. 예를 들어, 매우 밀집된 그래프에서는 다익스트라 알고리즘이 BFS보다 상대적으로 더 많은 계산을 수행할 필요가 있을 수 있습니다.

```


라고 하는데.. 아직 다익스트라 문제를 많이 풀어보지 못했기 때문에 직접 겪어가며 효율적인 방향을 찾아야겠다.

실제 코딩테스트 환경에서 힙을 직접 구현하기엔 시간이 좀 많이 소요될 것이니, 그때그때 판단을 잘 해서 배열로 구현하는 방법도 고려해야겠다. 