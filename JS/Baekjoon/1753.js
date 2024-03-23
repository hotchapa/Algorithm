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
