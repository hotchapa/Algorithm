// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().trim().split("\n");
// const [N,K] = input[0].split(" ").map(Number);
// const jems = [];

// for(let i = 1; i<=N; i++){
//   let [x,y] = input[i].split(" ").map(Number);
//   jems.push([x,y])
// }

// const bags = [];
// for(let i=N+1; i<=N+K; i++){
//   bags.push(Number(input[i]));
// }
// jems.sort((a,b) => b[1]-a[1]);

// bags.sort((a,b) => a-b);
// let result = 0;

// while(bags.length > 0){
//   let start = bags.shift();
//   for (x of jems){
//     if(start >= x[0]){
//       result += x[1];
//       jems.shift();
//       break;
//     }
//   }
// }

// console.log(result)

// 시간 초과 나는 코드.





// (1 ≤ N, K ≤ 300,000)
// (0 ≤ Mi, Vi ≤ 1,000,000)
// (1 ≤ Ci ≤ 100,000,000)
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");

// const [N, K] = input[0].split(" ").map(Number);
// const jems = [];
// for (let i = 1; i <= N; i++) {
//     const [weight, value] = input[i].split(" ").map(Number);
//     jems.push([weight, value]);
// }

// const bags = input.slice(N + 1).map(Number);
// jems.sort((a, b) => b[1] - a[1]); // 가치가 큰 순서대로 정렬
// bags.sort((a, b) => a - b); // 용량이 작은 순서대로 정렬

// let result = 0;
// let jemIndex = 0;
// const availableJems = [];

// for (const bag of bags) {
//     while (jemIndex < N && jems[jemIndex][0] <= bag) {
//         availableJems.push(jems[jemIndex]);
//         jemIndex++;
//     }
//     if (availableJems.length > 0) {
//         availableJems.sort((a, b) => b[1] - a[1]); // 가치가 높은 순서대로 정렬
//         result += availableJems.shift()[1]; // 최대 가치의 보석을 선택하고 제거
//     }
// }

// console.log(result);

class PriorityQueue {
  constructor() {
      this.heap = [];
  }

  size() {
      return this.heap.length;
  }

  isEmpty() {
      return this.size() === 0;
  }

  insert(value) {
      this.heap.push(value);
      this.bubbleUp();
  }

  extractMax() {
      if (this.isEmpty()) {
          return undefined;
      }

      if (this.size() === 1) {
          return this.heap.shift();
      }

      const max = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.sinkDown();
      return max;
  }

  bubbleUp() {
      let index = this.size() - 1;
      while (index > 0) {
          const parentIndex = Math.floor((index - 1) / 2);
          if (this.heap[index][1] <= this.heap[parentIndex][1]) {
              break;
          }
          [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
          index = parentIndex;
      }
  }

  sinkDown() {
      let index = 0;
      const length = this.size();
      const element = this.heap[0];

      while (true) {
          let leftChildIndex = 2 * index + 1;
          let rightChildIndex = 2 * index + 2;
          let leftChild, rightChild;
          let swap = null;

          if (leftChildIndex < length) {
              leftChild = this.heap[leftChildIndex];
              if (leftChild[1] > element[1]) {
                  swap = leftChildIndex;
              }
          }

          if (rightChildIndex < length) {
              rightChild = this.heap[rightChildIndex];
              if ((swap === null && rightChild[1] > element[1]) ||
                  (swap !== null && rightChild[1] > leftChild[1])) {
                  swap = rightChildIndex;
              }
          }

          if (swap === null) {
              break;
          }

          [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
          index = swap;
      }
  }
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const jems = [];
for (let i = 1; i <= N; i++) {
  const [weight, value] = input[i].split(" ").map(Number);
  jems.push([weight, value]);
}

const bags = input.slice(N + 1).map(Number);

// 보석을 가치에 따라 내림차순으로 정렬
jems.sort((a, b) => b[1] - a[1]);

// 가방을 오름차순으로 정렬
bags.sort((a, b) => a - b);

let result = 0;
const pq = new PriorityQueue();

let jemIndex = 0;
for (const bag of bags) {
  // 가방에 넣을 수 있는 보석을 우선순위 큐에 삽입
  while (jemIndex < N && jems[jemIndex][0] <= bag) {
      pq.insert(jems[jemIndex]);
      jemIndex++;
  }

  // 우선순위 큐에서 가장 가치가 높은 보석을 선택하여 결과에 더함
  if (!pq.isEmpty()) {
      result += pq.extractMax()[1];
  }
}

console.log(result);


