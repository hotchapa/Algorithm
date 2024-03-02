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
      count[curX*2] = count[curX];
    }
  }
}

console.log(bfs(visited, count, n, k))

