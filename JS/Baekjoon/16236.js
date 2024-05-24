const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());
const arr = input.map(line => line.split(' ').map(Number));

const directions = [
  [-1, 0], [0, -1], [0, 1], [1, 0]
];

let shark = {
  size: 2,
  eatCount: 0,
  x: 0,
  y: 0
};

// 아기 상어의 초기 위치 찾기 => 9를 0으로
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (arr[i][j] === 9) {
      shark.x = i;
      shark.y = j;
      arr[i][j] = 0;
      break;
    }
  }
}

const isInBounds = (x, y) => x >= 0 && y >= 0 && x < N && y < N;

const bfs = (startX, startY, size) => {
  const queue = [[startX, startY, 0]];
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  visited[startX][startY] = true;
  const fish = [];

  while (queue.length) {
    const [x, y, dist] = queue.shift();

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (isInBounds(nx, ny) && !visited[nx][ny] && arr[nx][ny] <= size) {
        visited[nx][ny] = true;
        queue.push([nx, ny, dist + 1]);

        if (arr[nx][ny] > 0 && arr[nx][ny] < size) {
          fish.push([nx, ny, dist + 1]);
        }
      }
    }
  }

  // 거리가 가까운 순, 가장 위에 있는 순, 가장 왼쪽에 있는 순으로 정렬
  fish.sort((a, b) => a[2] - b[2] || a[0] - b[0] || a[1] - b[1]);
  return fish.length ? fish[0] : null;
};

let totalTime = 0;

while (true) {
  const fish = bfs(shark.x, shark.y, shark.size);

  if (!fish) break;

  const [fx, fy, dist] = fish;

  // 상어를 이동
  shark.x = fx;
  shark.y = fy;
  totalTime += dist;
  shark.eatCount += 1;
  arr[fx][fy] = 0;

  // 상어의 크기를 업데이트
  if (shark.eatCount === shark.size) {
    shark.size += 1;
    shark.eatCount = 0;
  }
}

console.log(totalTime);
