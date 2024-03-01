
// 전형적인 BFS 문제
// 풀이를 2개 준비함

// 첫 번째 풀이는 13560kb 528ms 걸림
// 두 번째 풀이는 20764kb 3248ms 걸림

// 첫 번째
// 두 번째에 비해 효율적이지만 가독성이 좋지 않음
// 각 위치에 도달하는 데 걸린 시간을 별도의 배열에 저장하는 방식으로 품

// 두 번째
// 큐에 시간 정보를 함께 저장함
// 가독성에 큰 강점이 보임

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n")
let [n,k] = input[0].split(" ").map(Number);
let visited = Array(100001).fill(false);
let count = Array(100001).fill(0);

function bfs(visited, count, start, goal){
  let queue = [];
  queue.push(start);
  visited[start] = true;

  while(queue.length){
    let curX = queue.shift();
    if(curX == goal){
      return count[curX];
    }

    if(curX-1 >= 0 && !visited[curX-1]){
      queue.push(curX-1);
      visited[curX-1] = true;
      count[curX-1] = count[curX] + 1;
    }

    if(curX+1 < 100001 && !visited[curX+1]){
      queue.push(curX+1);
      visited[curX+1] = true;
      count[curX+1] = count[curX] + 1;
    }

    if(curX*2 < 100001 && !visited[curX*2]){
      queue.push(curX*2);
      visited[curX*2] = true;
      count[curX*2] = count[curX] + 1;
    }
  }
}

console.log(bfs(visited, count, n, k))



// const sol = (input) => {
//   const [N, K] = input.split(" ").map(Number);
//   const visit = Array.from({ length: 100100 }, () => 0);
  
//   function bfs(N) {
//   const queue = [];
//   queue.push([N, 0]);
//   visit[N] = 1;
//   while (queue.length) {
//   const [cur, time] = queue.shift();
//   if (cur === K) return time;
//   for (next of [cur - 1, cur + 1, cur * 2]) {
//   if (!visit[next] && next >= 0 && next <= 100000) {
//   visit[next] = 1;
//   queue.push([next, time + 1]);
//   }
//   }
//   }
//   }
//   return bfs(N);
//   };
  
//   require("readline")
//   .createInterface(process.stdin, process.stdout)
//   .on("line", (line) => {
//   console.log(sol(line));
//   })
//   .on("close", () => {
//   process.exit();
//   });