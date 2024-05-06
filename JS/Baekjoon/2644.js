const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n');
const N = Number(input[0]);
const [start,goal] = input[1].split(" ").map(Number);
const M = Number(input[2]);
const relations = Array.from({length: N+1}, ()=> []);

for(let i = 3; i < M+3; i++){
  const [x,y] = input[i].split(" ").map(Number);
  relations[x].push(y);
  relations[y].push(x);
}

function bfs(start, goal){
  const visited = Array(N+1).fill(false);
  const queue = [[start,0]] // 촌수 계산해야됨

  while(queue.length){
    const [node, chonsoo] = queue.shift();
    
    if(node == goal){
      return chonsoo;
    }

    for (let next of relations[node]){
      if(!visited[next]){
        visited[next] = true;
        queue.push([next,chonsoo+1]);
      }
    }
  }

  return -1;
}

const result = bfs(start,goal);
console.log(result);