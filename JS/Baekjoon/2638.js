// 외곽 치즈만 먼저 녹이는 방법이 뭐가 있을까?

// 0,0 부터 BFS를 진행
// 큐에서 원소를 꺼내 상하좌우를 살핌
// 카운트가 2 이상인 치즈만 녹인다

// 맵에서 치즈는 원래 1부터 시작이므로
// 3 이상일 때 녹이면 된다
// 라는 방법을 강의에서 설명했으나 구현이 쉽지 않았다.


// 그래서 아래와 같은 방법으로 풀이했다


// 방문한 좌표가 치즈라면 치즈를 녹이고, 빈 공간이라면 큐에 추가하여 다음에 방문할 수 있도록 했다
// BFS를 통해 모든 외곽 치즈를 녹인 후, 아직 녹지 않은 치즈가 있는지 재확인한다
// 녹지 않은 치즈가 있다면 그 치즈의 개수를 저장하고, 시간을 증가시킨 후 다시 BFS를 실행하여 외곽 치즈를 녹인다

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [row,col] = input[0].split(" ").map(Number); // 맵 크기 받아오기

let visited = Array.from({length : row}, ()=> Array(col).fill(false)) 
let arr =[];

for (let i=1; i<=row; i++){
  arr.push(input[i].split(" ").map(Number))
}

const dx = [0, 0, -1, 1]; // 상하좌우 탐색을 위한 배열
const dy = [-1, 1, 0, 0];

let queue = [];
let lastCheese = 0; // 마지막 치즈의 개수를 저장할 변수
let time = 0; // 시간을 저장할 변수

const bfs = () => {
  queue = [['0', '0']]; // BFS를 시작할 좌표 설정
  visited = Array.from({length: row}, () => Array(col).fill(false)); // 방문 배열 재설정
  visited[0][0] = true;

  while (queue.length !== 0) {
    const [x, y] = queue.shift();
    
    for (let i = 0; i < 4; i++) {
      const nx = Number(x) + dx[i];
      const ny = Number(y) + dy[i];

      if (nx >= 0 && nx < row && ny >= 0 && ny < col) { // 맵의 범위를 벗어나지 않는지 확인
        if (!visited[nx][ny]) {
          visited[nx][ny] = true;
          if (arr[nx][ny] === 1) { // 치즈를 만나면
            arr[nx][ny] = 0; // 치즈를 녹임
          } else if (arr[nx][ny] === 0) { // 빈 공간을 만나면
            queue.push([nx.toString(),ny.toString()]); // 큐에 좌표를 추가
          }
        }
      }
    }
  }
};

while (true) {
  let cheese = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (arr[i][j] === 1) {
        cheese++;
      }
    }
  }

  if (cheese === 0) { // 모든 치즈가 녹았다면
    break; // while문 종료
  } else { // 아직 녹지 않은 치즈가 있다면
    lastCheese = cheese; // 마지막 치즈의 개수 저장
    bfs(); // BFS 실행
    time++; // 시간 증가
  }
}

console.log(time);
console.log(lastCheese);

