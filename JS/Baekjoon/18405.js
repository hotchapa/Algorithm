// 바이러스 오름차순 순번 순으로 bfs 진행
// 바이러스가 이미 존재한 곳에 다른 바이러스가 들어올 순 없음
// 바이러스 숫자 정보와 위치 정보를 동시에 queue에 삽입해서 풀이

// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n")
// let [n,k] = input[0].split(" ").map(Number);
// let arr = [];
// visited = Array.from({length: n}, ()=> Array(n).fill(false));

// for(let i=1; i<=n; i++){
//   arr.push(input[i].split(" ").map(Number));
// }


// let [s,x,y] = input[n+1].split(" ").map(Number);

// for(let x = 0; x<s; x++){
//   let queue = [];

//   for(let i=0; i<n; i++){
//     for(let j=0; j<n; j++){
//       if(!visited[i][j]){
//         if(arr[i][j] != 0){
//           queue.push([i,j])
//         }
//       }
//     }
//   }

//   bfs(queue,x+1,arr)
// }




// function bfs(queue,num,arr){
//   let dx = [1,-1,0,0];
//   let dy = [0,0,-1,1];

//   while(queue.length){
//     let [curX,curY] = queue.shift();
//     visited[curX][curY] = true;

//     for(let i = 0; i<4; i++){
//       let nextX = curX+dx[i]
//       let nextY = curY+dy[i]
//       if(nextX < 0 || nextX >= n || nextY < 0 || nextY >= n) continue;
//       if(arr[nextX][nextY] != 0 && !visited[nextX][nextY]){
//         arr[nextX][nextY] = num;
//         visited[nextX][nextY]= true;
//       }
//     }
//     }
//   }



const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let [n,k] = input[0].split(" ").map(Number);
let arr = [];
let [s,x,y] = input[n+1].split(" ").map(Number);
let queue = [];

for(let i=1; i<=n; i++){
  arr.push(input[i].split(" ").map(Number));
}

for(let i=0; i<n; i++){
  for(let j=0; j<n; j++){
    if(arr[i][j] != 0){
      queue.push([0, arr[i][j], i, j]) // 시간, 바이러스 번호와 함께 좌표를 큐에 넣음
    }
  }
}

queue.sort((a, b) => a[1] - b[1]); // 바이러스 번호로 오름차순 정렬

while(queue.length){
  let [time, num, curX, curY] = queue.shift();
  
  if(time == s) break; // 시간이 s가 되면 break
  
  let dx = [1,-1,0,0];
  let dy = [0,0,-1,1];

  for(let i = 0; i<4; i++){
    let nextX = curX+dx[i]
    let nextY = curY+dy[i]
    if(nextX < 0 || nextX >= n || nextY < 0 || nextY >= n) continue;
    if(arr[nextX][nextY] == 0){
      arr[nextX][nextY] = num;
      queue.push([time + 1, num, nextX, nextY]); // 시간, 바이러스 번호와 함께 좌표를 큐에 넣음
    }
  }
}

console.log(arr[x-1][y-1])

