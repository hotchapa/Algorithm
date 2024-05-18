// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().trim().split("\n");
// const [M,N,P] = input.shift().split(" ").map(Number);
// let map = [];
// // let userInfo = new Set();
// let userInfo = [];
// let userDirInfo = [];
// let bossHp = Number(input[M+P]);
// let reachedUsers2 = [];
// for(let i = 0; i<M; i++){
//   map.push(input[i].split(""));
// }

// for(let i= M; i<M+P; i++){
//   userInfo.push(input[i].split(" "));
// }

// // for(let i= M; i<M+P; i++){
// //   userInfo.add(input[i].split(" "));
// // }

// let reachedUsers = [];
// // 보스 체력 다 깔때까지 반복
// // 모든 플레이어의 이동과 공격이 동시에 일어나야함
// // 플레이어들은 최단 경로로 보스가 있는 위치로 이동해야함



// // bfs로 플레이어를 보스 위치까지 최단 거리로 이동시킴
// function move(user,x,y,goal){
//   let dx = [1,-1,0,0];
//   let dy = [0,0,-1,1];
//   let [gx,gy] = goal;
//   let queue = [[x,y]];
//   let time = 0;
//   let visited = Array.from({length :N}, ()=> Array(M).fill(false));
//   visited[x][y] = true;
  
//   while(queue.length>0){
//     let [curX,curY] = queue.shift();
//     if(curX == gx && curY == gy){
//       reachedUsers.push(user);
//       reachedUsers2.push(user,time)
//       console.log("도착!!")
//       break;
//     }

//     // if([curX,curY] == goal){
//     //   reachedUsers.push(user);
//     //   console.log("도착!!")
//     //   break;
//     // }
    
//     for(let i = 0; i<4; i++){
//       let newX = curX + dx[i];
//       let newY = curY + dy[i];
//       if(newX >= 0 && newY >= 0 && newX < M && newY < N && map[newX][newY] != "X" && !visited[newX][newY]){
//         queue.push([newX,newY])
//         visited[newX][newY] = true;
//       }
//     }
//   }

// }

// // 유저 위치를 찾는 함수
// function finder(x){
//   for(let i =0; i<M; i++){
//     for(let j=0; j<N; j++){
//       if(map[i][j] == x){
//         return [i,j]
//       }
//     }
//   }
// }

// for(x of userInfo){
//   userDirInfo.push(finder(x[0]));
// }

// let bossDir = finder("B")


// function solve(){
//   while(bossHp > 0){
//     for(let i =0; i<reachedUsers.length; i++){
//       for(let j=0; j<userInfo.length; j++){
//         if(reachedUsers[i] == userInfo[j][0]){
//           bossHp -= userInfo[j][1];
//           console.log(reachedUsers[i],"가",userInfo[j][1],"만큼 깎았습니다.")
//         }
//       }
//     }
//     for(let k=0; k<userInfo.length; k++){
//       move(userInfo[k][0],userDirInfo[k][0],userDirInfo[k][1],bossDir)
//     }
//   }
// }

// solve();
// console.log(reachedUsers2)


// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().trim().split("\n");
// const [M, N, P] = input.shift().split(" ").map(Number);
// let map = [];
// let userInfo = [];
// let userDirInfo = [];
// let bossHp = Number(input[M + P]);
// let reachedUsers2 = [];
// for (let i = 0; i < M; i++) {
//   map.push(input[i].split(""));
// }

// for (let i = M; i < M + P; i++) {
//   userInfo.push(input[i].split(" "));
// }

// // BFS로 플레이어를 보스 위치까지 최단 거리로 이동시킴
// function move(user, x, y, goal) {
//   let dx = [1, -1, 0, 0];
//   let dy = [0, 0, -1, 1];
//   let [gx, gy] = goal;
//   let queue = [[x, y]];
//   let time = 0;
//   let visited = Array.from({ length: M }, () => Array(N).fill(false));
//   visited[x][y] = true;

//   while (queue.length > 0) {
//     let size = queue.length;
//     for (let i = 0; i < size; i++) {
//       let [curX, curY] = queue.shift();
//       if (curX == gx && curY == gy) {
//         reachedUsers2.push([user, time]);
//         return;
//       }

//       for (let j = 0; j < 4; j++) {
//         let newX = curX + dx[j];
//         let newY = curY + dy[j];
//         if (
//           newX >= 0 &&
//           newY >= 0 &&
//           newX < M &&
//           newY < N &&
//           map[newX][newY] != "X" &&
//           !visited[newX][newY]
//         ) {
//           queue.push([newX, newY]);
//           visited[newX][newY] = true;
//         }
//       }
//     }
//     time++;
//   }
// }

// // 유저 위치를 찾는 함수
// function finder(x) {
//   for (let i = 0; i < M; i++) {
//     for (let j = 0; j < N; j++) {
//       if (map[i][j] == x) {
//         return [i, j];
//       }
//     }
//   }
// }

// for (let x of userInfo) {
//   let [i, j] = finder(x[0]);
//   move(x[0], i, j, finder("B"));
// }

// function solve() {
//   let timeElapsed = 0;
//   let attackers = new Set();
  
//   while (bossHp > 0) {
//     let currentAttackers = reachedUsers2.filter(([_, time]) => time <= timeElapsed);
//     for (let [user, _] of currentAttackers) {
//       if (!attackers.has(user)) {
//         attackers.add(user);
//       }
//       let attackPower = Number(userInfo.find(([u, _]) => u === user)[1]);
//       bossHp -= attackPower;
//       if (bossHp <= 0) {
//         console.log(attackers.size);
//         return;
//       }
//     }
//     timeElapsed++;
//   }
// }

// solve();
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [M, N, P] = input.shift().split(" ").map(Number);
let map = [];
let players = [];
let bossHp = Number(input[M + P]);

for (let i = 0; i < M; i++) {
  map.push(input[i].split(""));
}

let playerInfo = {};
for (let i = M; i < M + P; i++) {
  let [id, dps] = input[i].split(" ");
  players.push(id);
  playerInfo[id] = { dps: parseInt(dps) };
}

let bossLocation;
let playerLocations = {};
for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 'B') {
      bossLocation = [i, j];
    } else if (/[a-z]/.test(map[i][j])) {
      playerLocations[map[i][j]] = [i, j];
    }
  }
}

function bfs(start) {
  let [bx, by] = start;
  let queue = [[bx, by]];
  let distances = Array.from(Array(M), () => Array(N).fill(Infinity));
  distances[bx][by] = 0;
  let playerDistances = {};

  while (queue.length > 0) {
    let [x, y] = queue.shift();

    for (let [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      let nx = x + dx, ny = y + dy;
      if (nx >= 0 && nx < M && ny >= 0 && ny < N && map[nx][ny] !== 'X' && distances[nx][ny] === Infinity) {
        distances[nx][ny] = distances[x][y] + 1;
        queue.push([nx, ny]);
        if (map[nx][ny] !== '.' && map[nx][ny] !== 'B') {
          playerDistances[map[nx][ny]] = distances[nx][ny];
        }
      }
    }
  }

  return playerDistances;
}

const arrivalTimes = bfs(bossLocation);

let events = [];
for (const [player, time] of Object.entries(arrivalTimes)) {
  events.push({ time, type: 'arrive', player });
}
events.sort((a, b) => a.time - b.time);

let activePlayers = new Set();
let currentTime = 0;
let lastTime = 0;

for (let event of events) {
  if (bossHp <= 0) break;
  let timePassed = event.time - lastTime;
  let damage = Array.from(activePlayers).reduce((acc, player) => acc + playerInfo[player].dps, 0);
  bossHp -= damage * timePassed;

  if (bossHp <= 0) {
    console.log(activePlayers.size);
    return;
  }

  if (event.type === 'arrive') {
    activePlayers.add(event.player);
  }

  lastTime = event.time;
}

console.log(activePlayers.size);
