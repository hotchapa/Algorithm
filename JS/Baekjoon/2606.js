// DFS를 활용해서 1번 노드에서부터 출발하여 그래프 탐색을 진행함
// 인접 리스트로 표현할 때, 인덱스 0은 빼고 사용하는 것에 유의



const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let computer = input[0]*1;
let n = input[1]*1

let graph = [];
for(let i = 1; i <= computer; i++) graph[i] = [];
for(let i = 2; i <=n+1; i++){
    let [x,y] = input[i].split(" ").map(x=>+x)
    graph[x].push(y)
    graph[y].push(x)
}

let cnt = 0;
let visited = new Array(computer+1).fill(false);

function dfs(x){
    visited[x] = true;
    cnt ++;
    for(y of graph[x]){
        if(!visited[y]) 
        dfs(y)
    }
}

dfs(1);
console.log(cnt -1);