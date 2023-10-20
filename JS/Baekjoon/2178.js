const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

// 인풋 데이터에서 N, M 추출
const [N, M] = input.shift().split(' ').map(x => +x);
// 미로 배열 초기화
const maze = input.map(x => x.split('').map(y => +y));

// 상하좌우 방향 설정
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// 미로에서 최소 칸 수 계산
function bfs() {
  // 큐를 초기화하고 시작 위치를 추가
  let queue = [[0, 0]];

  // 큐에 원소가 남아있는 동안 실행
  while (queue.length) {
    // 큐에서 현재 위치를 가져옴
    const [x, y] = queue.shift();

    // 상하좌우로 이동할 수 있는 위치 확인
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 미로 범위를 벗어나거나 벽이 있는 경우 건너뜀
      if (nx < 0 || ny < 0 || nx >= N || ny >= M || maze[nx][ny] === 0) continue;

      // 새 위치가 가능한 이동 경로인 경우
      if (maze[nx][ny] === 1) {
        // 이전 위치 값에 1을 더해 이동 횟수를 갱신하고 큐에 새 위치를 추가
        maze[nx][ny] = maze[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
  // 목적지까지 이동한 최소 칸 수 반환
  return maze[N - 1][M - 1];
}

// 정답 출력
console.log(bfs());
