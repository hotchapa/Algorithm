const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [N,M] = input[0].split(" ").map(Number);
let graph = Array.from({length: N+1}, () => []);

for(let i =1; i<=M; i++){
  let [x,y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

let visited = Array(N+1).fill(false);
let count = 0;

function dfs(node){
  visited[node] = true;

  for(let x of graph[node]){
      if(!visited[x]){
      dfs(x)
    }    
  }

  return true;
}


for(let i=1; i<=N; i++){
  if(!visited[i]){
    if(dfs(i)){
      count+=1;
    }
  }
}

console.log(count)