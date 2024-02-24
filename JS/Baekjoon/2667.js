const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n');
let n = input[0]*1
let arr = [];
for(let i = 1; i < n+1; i++){
    arr.push(input[i].split("").map(x=>+x));
}

let visited = Array.from(Array(n), () => Array(n).fill(0));
let count = 0;
let answer = [];

function dfs(arr,x,y,visited){
    if(x < 0 || x >= n || y < 0 || y >= n || visited[x][y] === 1 || arr[x][y] == 0){
        return;
    }
    visited[x][y] = 1;
    count++;
    dfs(arr,x+1,y,visited)
    dfs(arr,x,y+1,visited)
    dfs(arr,x-1,y,visited)
    dfs(arr,x,y-1,visited)
}

for(let i = 0; i<n; i++){
    for(let j = 0; j<n; j++){
        if(arr[i][j] == 1 && visited[i][j] !== 1){
            count = 0;
            dfs(arr,i,j,visited)
            answer.push(count);
        }
    }
}

console.log(answer.length);
console.log(answer.sort((a, b) => a - b).join('\n'));

