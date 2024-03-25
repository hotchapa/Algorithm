// // 조건 체크
// // 여기서는 r,c (행렬)로 제공함
// // x,y축이 아니니 헷갈리지 말길

// // 미세먼지는 네방향 확산하고, 각 값은 원래 가진 값의 5를 나눈 몫이다.
// // 단, 칸이 없거나 공청기가 있는 곳으론 확산 하지 않는다 == 먼지가 있는 곳으로 합쳐질 수 있다
// // 원래 칸에 남는 양은 확산한 값만큼을 뺀 값이 된다.

// // 공청기 로직
// // 위쪽은 위에서 아래로 아래쪽은 아래에서 위로 도달하는 먼지를 빨아들인다 
// // 위쪽은 반시계방향으로 순환, 아래쪽은 시계 방향으로 순환시킨다.

// // r이 3 이하면 위쪽 공청기 로직
// // r이 3 초과면 아래쪽 공청기 로직

// function diffuse(r, c) {
//   // 확산된 미세먼지를 저장할 임시 배열 생성
//   let tempArr = Array.from(Array(r), () => Array(c).fill(0));

//   for (let i = 0; i < r; i++) {
//     for (let j = 0; j < c; j++) {
//       // 현재 칸이 공기청정기 위치이면 건너뜀
//       if (arr[i][j] === -1) continue;

//       let dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
//       let sumNum = Math.floor(arr[i][j] / 5);
//       let subNum = 0;

//       for (let x of dir) {
//         let nx = i + x[0];
//         let ny = j + x[1];

//         // 확산 가능 조건 체크
//         if (nx >= 0 && ny >= 0 && nx < r && ny < c && arr[nx][ny] !== -1) {
//           tempArr[nx][ny] += sumNum;
//           subNum++;
//         }
//       }
//       // 현재 칸에서 확산된 양만큼 차감
//       tempArr[i][j] += arr[i][j] - (subNum * sumNum);
//     }
//   }

//   // 원본 배열에 임시 배열의 값을 복사
//   for (let i = 0; i < r; i++) {
//     for (let j = 0; j < c; j++) {
//       arr[i][j] = tempArr[i][j];
//     }
//   }
// }

// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
// const input = fs.readFileSync(filePath).toString().split("\n");
// const [r,c,t] = input[0].split(" ").map(Number);

// let arr = [];
// for(let i = 1; i<=r; i++){
//   arr.push(input[i].split(" ").map(Number));
// }


// // 공청기가 설치된 곳은 -1,
// // 나머지는 미세먼지 값

// // 가장 윗행과 아랫 행에서 2칸 이상 떨어져있음
// // 공청기는 [2,0][3,0]에 위치 고정?

// // 공기청정기 위치 찾기
// let airCleaner = [];
// for(let i = 0; i < r; i++) {
//   if(arr[i][0] === -1) {
//     airCleaner.push(i);
//     airCleaner.push(i+1);
//     break;
//   }
// }

// // 공기청정기를 통한 공기 순환
// function circulateAir() {
//   let [upper, lower] = airCleaner;

//   // 윗부분 순환 (반시계방향)
//   // 아래로
//   for(let i = upper - 1; i > 0; i--) arr[i][0] = arr[i-1][0];
//   // 왼쪽으로
//   for(let i = 0; i < c - 1; i++) arr[0][i] = arr[0][i+1];
//   // 위로
//   for(let i = 0; i < upper; i++) arr[i][c-1] = arr[i+1][c-1];
//   // 오른쪽으로
//   for(let i = c - 1; i > 1; i--) arr[upper][i] = arr[upper][i-1];
//   arr[upper][1] = 0; // 공기청정기 바로 옆 칸은 먼지가 없음

//   // 아랫부분 순환 (시계방향)
//   // 위로
//   for(let i = lower + 1; i < r - 1; i++) arr[i][0] = arr[i+1][0];
//   // 왼쪽으로
//   for(let i = 0; i < c - 1; i++) arr[r-1][i] = arr[r-1][i+1];
//   // 아래로
//   for(let i = r - 1; i > lower; i--) arr[i][c-1] = arr[i-1][c-1];
//   // 오른쪽으로
//   for(let i = c - 1; i > 1; i--) arr[lower][i] = arr[lower][i-1];
//   arr[lower][1] = 0; // 공기청정기 바로 옆 칸은 먼지가 없음
// }

// // 시뮬레이션 실행
// for(let time = 0; time < t; time++) {
//   diffuse(r, c);
//   circulateAir();
// }

// let totalDust = 0;
//   for (let i = 0; i < r; i++) {
//     for (let j = 0; j < c; j++) {
//       if (arr[i][j] > 0) { // 미세먼지 값만 합산
//         totalDust += arr[i][j];
//       }
//     }
//   }

// console.log(totalDust);


const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const [R, C, T] = input[0].split(" ").map(Number);
let board = input.slice(1).map((el) => el.split(" ").map(Number));
const move = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];

// 공기 청정기 위치 찾기
let air_conditionar = [];
board.forEach((row, i) => {
  row.forEach((item, j) => {
    if (item === -1) air_conditionar.push([i, j]);
  });
});

// 먼지 확산 함수
function Spread(board) {
  let newBoard = JSON.parse(JSON.stringify(board)); // 깊은 복사
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      let cur = board[i][j];
      if (cur > 0) { // 공기청정기가 아닌 곳에서만 확산
        let spreadAmount = Math.floor(cur / 5);
        move.forEach(([dx, dy]) => {
          let nx = i + dx, ny = j + dy;
          if (nx >= 0 && nx < R && ny >= 0 && ny < C && board[nx][ny] !== -1) {
            newBoard[nx][ny] += spreadAmount;
            newBoard[i][j] -= spreadAmount;
          }
        });
      }
    }
  }
  return newBoard;
}

// 공기청정기 작동 함수
function AirConditionar(board) {
  let [[ax1, ay1], [ax2, ay2]] = air_conditionar;
  
  // 상단 공기청정기 순환
  for (let i = ax1 - 1; i > 0; i--) board[i][0] = board[i-1][0];
  for (let i = 0; i < C - 1; i++) board[0][i] = board[0][i + 1];
  for (let i = 0; i < ax1; i++) board[i][C-1] = board[i + 1][C-1];
  for (let i = C - 1; i > 1; i--) board[ax1][i] = board[ax1][i - 1];
  board[ax1][1] = 0;

  // 하단 공기청정기 순환
  for (let i = ax2 + 1; i < R - 1; i++) board[i][0] = board[i + 1][0];
  for (let i = 0; i < C - 1; i++) board[R-1][i] = board[R-1][i + 1];
  for (let i = R - 1; i > ax2; i--) board[i][C-1] = board[i - 1][C-1];
  for (let i = C - 1; i > 1; i--) board[ax2][i] = board[ax2][i - 1];
  board[ax2][1] = 0;

  return board;
}

// 시뮬레이션 실행
for (let time = 0; time < T; time++) {
  board = Spread(board);
  board = AirConditionar(board);
}

let totalDust = 0;
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (board[i][j] > 0) { // 미세먼지 값만 합산
        totalDust += board[i][j];
      }
    }
  }

  console.log(totalDust)