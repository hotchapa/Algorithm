const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const [M,N,K] = input.shift().split(" ").map(Number);
const board = input.map((e)=> e.split(" ").map(Number));
const arr = Array.from({length:M},()=>Array(N).fill(0));

for(let x of board){
  let [a,b,c,d] = [x[0],x[1],x[2],x[3]];
  for(let i = b; i<d; i++){
    for(let j= a; j<c; j++){
      arr[i][j] = 1;
    }
  }
}
const visited = Array.from({length:M},()=>Array(N).fill(0));

function bfs(x,y){
  let queue = [[x,y]];
  visited[x][y] = 1;
  const dirX = [0, -1, 0, 1];
  const dirY = [-1, 0, 1, 0];
  let size = 1;
  while(queue.length){
    let [x,y] = queue.shift();
    for(let i = 0; i<4; i++){
      if(0 <= x+dirX[i] && M > x+dirX[i] && 0 <= y+dirY[i] && N > y+dirY[i]){
        if(arr[x+dirX[i]][y+dirY[i]] == 0 && visited[x+dirX[i]][y+dirY[i]] === 0){
          visited[x+dirX[i]][y+dirY[i]] = 1;
          queue.push([x+dirX[i],y+dirY[i]])
          size++;
        }
      }
    } 
    }
    return size
  }

let result = [];

for(let i =0; i<M; i++){
  for(let j =0; j<N; j++){    
    if (arr[i][j] === 0 && !visited[i][j]) {
      result.push(bfs(i,j));
    }
    
  }
}
console.log(result.length);
console.log(result.sort((a,b)=> a-b).join(" "));