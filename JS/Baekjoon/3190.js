// // 시뮬레이션 문제



// // 씨름하다가 결국 gpt 도움을 받았다
// N x N 크기의 보드에 사과 K개가 놓여 있고, 길이가 1인 뱀이 오른쪽을 보고 시작합니다.
// 뱀은 다음과 같은 규칙으로 이동합니다.
// 매 초마다 한 칸씩 이동합니다.
// 이동하려는 칸에 사과가 있으면 사과를 먹고 몸 길이가 1칸 증가합니다.
// 이동하려는 칸에 사과가 없으면 몸 길이가 1칸 줄어들고, 꼬리가 있는 칸을 비웁니다.
// 이동하려는 칸이 벽이거나 뱀의 몸이 있는 칸이면 게임이 종료됩니다.
// L 또는 D 명령어가 주어지고, 각 명령어는 다음을 의미합니다.
// L: 뱀의 방향을 왼쪽으로 90도 회전합니다.
// D: 뱀의 방향을 오른쪽으로 90도 회전합니다.
// 뱀이 게임 종료될 때까지 지난 시간을 출력해야 합니다.
// 풀이 전략

// 2차원 배열 data를 사용하여 보드 정보를 저장합니다.
// 0: 빈 칸
// 1: 사과
// 2: 뱀
// 큐 q를 사용하여 뱀의 몸을 저장합니다. 큐의 앞쪽은 뱀의 머리, 뒷쪽은 뱀의 꼬리를 나타냅니다.
// 변수 direction을 사용하여 뱀의 방향을 저장합니다.
// 변수 time을 사용하여 지난 시간을 저장합니다.
// 변수 index를 사용하여 다음 방향 변환 정보의 인덱스를 저장합니다.
// 알고리즘

// 뱀의 초기 위치 (1, 1)을 큐 q에 추가하고, data[1][1]을 2로 변경합니다.
// while 루프를 통해 뱀이 게임 종료될 때까지 다음을 반복합니다.
// 뱀의 머리 위치를 계산합니다.
// 뱀의 머리 위치가 벽이거나 뱀의 몸이 있는 칸이면 게임 종료됩니다.
// 뱀의 머리 위치에 사과가 있으면 사과를 먹고 몸 길이를 1칸 증가합니다.
// 뱀의 머리 위치에 사과가 없으면 몸 길이를 1칸 줄이고 꼬리에 있는 칸을 비웁니다.
// 뱀의 방향을 계산합니다.
// 시간을 1 증가시킵니다.
// 다음 방향 변환 정보가 있으면 방향을 변환합니다.

// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().trim().split("\n");
// const n = input[0]*1; 
// let k = input[1]*1
// let arr = Array.from({length:n}, ()=> Array(n).fill(0))

// for(let i=2; i<k+2; i++){
//   let [x,y] = input[i].split(" ").map(Number)
//   arr[x][y] = 2;
// }

// const l = input[k+2]*1
// let dirInfo =[];

// for(let i= k+3; i < k+l+3; i++){
//   let [x,y] = input[i].split(" ")
//   dirInfo.push([x,y])
// }

// function solve(){
//   let dx = []
// }


const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]); // 보드 크기
const k = Number(input[1]); // 사과 개수

const data = Array.from(Array(n + 1), () => Array(n + 1).fill(0)); // 맵 정보
for (let i = 2; i <= k + 1; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  data[a][b] = 1; // 사과 위치 표시
}

const l = Number(input[k + 2]); // 방향 변환 횟수
const info = [];
for (let i = k + 3; i < k + 3 + l; i++) {
  const [x, c] = input[i].split(' ');
  info.push([Number(x), c]);
}

const dx = [0, 1, 0, -1]; // 동, 남, 서, 북 방향
const dy = [1, 0, -1, 0];

function turn(direction, c) {
  return c === 'L' ? (direction + 3) % 4 : (direction + 1) % 4;
}

let x = 1,
  y = 1,
  direction = 0,
  time = 0,
  index = 0,
  q = [];

q.push([x, y]);
data[x][y] = 2; // 뱀 위치 표시

while (true) {
  const nx = x + dx[direction];
  const ny = y + dy[direction];

  if (1 <= nx && nx <= n && 1 <= ny && ny <= n && data[nx][ny] !== 2) {
    if (data[nx][ny] === 0) {
      // 사과 없이 이동
      data[nx][ny] = 2;
      q.push([nx, ny]);
      const [px, py] = q.shift();
      data[px][py] = 0;
    } else {
      // 사과 먹고 이동
      data[nx][ny] = 2;
      q.push([nx, ny]);
    }
    x = nx;
    y = ny;
  } else {
    // 벽 또는 뱀 몸에 부딪힘
    time += 1;
    break;
  }

  time += 1;
  if (index < l && time === info[index][0]) {
    direction = turn(direction, info[index][1]);
    index += 1;
  }
}

console.log(time);
