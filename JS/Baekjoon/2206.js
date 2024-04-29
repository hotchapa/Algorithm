const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [n,m] = input[0].split(" ").map(Number);
let arr = [];
for(let i = 1; i<=n; i++){
  arr.push(input[i].split("").map(Number));
}

const dx = [-1,1,0,0];
const dy = [0,0,-1,1]

// 최단거리니까 bfs
// 근데 벽을 부수네

// function bfs(){
//   let visited = Array.from({length: n}, ()=> Array(m).fill(false));
//   let broken = Array.from({length: n}, ()=> Array(m).fill(false));
//   // 시작점에는 x,y값과 거리 정보
//   // 시작하는 칸과 끝나는 칸도 셈
//   let start = [0,0,1,false];
//   let queue = [start];
//   visited[0][0] = true;

//   while(queue){
//     let [x,y,dir,isBroken] = queue.shift();
    
//     if(x == n-1 && y == m-1){ // 끝점에 도달하면 반환
//       return dir;
//     }

//     for(let i=0; i<4; i++){
//       let nx = x + dx[i];
//       let ny = y + dy[i];

//       if(nx >= 0 && ny >= 0 && nx < n && ny < m){
//         if(arr[nx][ny] == 0 && !visited[nx][ny]){
//           visited[nx][ny] = true;
//           queue.push([nx,ny,dir+1,isBroken]); 
//         }
//         else if(arr[nx][ny] == 1 && !isBroken && !broken[nx][ny]){
//           broken[nx][ny] = true;
//           queue.push([nx,ny,dir+1,true]);
//         }
//       }
//     }    
//   }
//   return -1;
// }
// function bfs() {
//   // 3차원 visited 배열: [n][m][2] - 0은 벽 안 부숨, 1은 벽 부숨
//   let visited = Array.from({length: n}, () => Array.from({length: m}, () => Array(2).fill(false)));
//   let queue = [[0, 0, 1, 0]]; // x, y, distance, wallBroken (0: no, 1: yes)
//   visited[0][0][0] = true;

//   while (queue.length > 0) {
//     let [x, y, dist, wallBroken] = queue.shift();
    
//     if (x === n - 1 && y === m - 1) {
//       return dist;
//     }

//     for (let i = 0; i < 4; i++) {
//       let nx = x + dx[i];
//       let ny = y + dy[i];

//       if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
//         if (arr[nx][ny] === 0 && !visited[nx][ny][wallBroken]) {
//           visited[nx][ny][wallBroken] = true;
//           queue.push([nx, ny, dist + 1, wallBroken]);
//         } else if (arr[nx][ny] === 1 && wallBroken === 0 && !visited[nx][ny][1]) {
//           visited[nx][ny][1] = true;
//           queue.push([nx, ny, dist + 1, 1]);
//         }
//       }
//     }
//   }
//   return -1;
// }

function bfs() {
  // 3차원 visited 배열: [n][m][2] - 0은 벽 안 부숨, 1은 벽 부숨
  const visited = Array.from({length: n}, () => Array.from({length: m}, () => Array(2).fill(false)));
  const queue = [];
  let front = 0;  // 큐의 시작 인덱스
  queue.push([0, 0, 1, 0]);  // x, y, distance, wallBroken (0: no, 1: yes)
  visited[0][0][0] = true;

  while (front < queue.length) {
    const [x, y, dist, wallBroken] = queue[front++];
    
    if (x === n - 1 && y === m - 1) {
      return dist;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
        if (arr[nx][ny] === 0 && !visited[nx][ny][wallBroken]) {
          visited[nx][ny][wallBroken] = true;
          queue.push([nx, ny, dist + 1, wallBroken]);
        } else if (arr[nx][ny] === 1 && wallBroken === 0 && !visited[nx][ny][1]) {
          visited[nx][ny][1] = true;
          queue.push([nx, ny, dist + 1, 1]);
        }
      }
    }
  }
  return -1;
}



console.log(bfs());