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
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [a, b] = input[0].split(" ").map(Number);
const startNum = Number(input[1]);

let graph = Array.from(Array(a + 1), () => []);
let INF = 1e9;
let distances = Array(a + 1).fill(INF);

for (let i = 2; i < 2 + b; i++) {
    const [u, v, w] = input[i].split(" ").map(Number);
    graph[u].push([v, w]);
}

function dijkstra(start) {
    const pq = new PriorityQueue();
    pq.enqueue([0, start]); 
    distances[start] = 0;

    while (!pq.isEmpty()) {
        const [currentDistance, currentNode] = pq.dequeue();

        if (distances[currentNode] < currentDistance) continue;

        graph[currentNode].forEach(([nextNode, nextDistance]) => {
            const distance = currentDistance + nextDistance;
            if (distance < distances[nextNode]) {
                distances[nextNode] = distance;
                pq.enqueue([distance, nextNode]);
            }
        });
    }
}

dijkstra(startNum);

let result = "";
for (let i = 1; i <= a; i++) {
    result += distances[i] === INF ? "INF\n" : distances[i] + "\n";
}
console.log(result.trim());
