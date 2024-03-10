// bfs로 인구 이동이 가능한 모든 구역을 탐색
// 이 때, 이동 가능한 구역의 인구를 합산하고, 해당 구역의 수를 계산
// 탐색된 구역의 인구를 평균내어 각 구역에 재분배 (temp sum)

// 전체 맵에 대해서 인구 이동이 더 이상 일어나지 않을 때까지 위 과정을 반복 (moved)
// 인구 이동이 더 이상 가능하지 않을 때, 이동이 일어난 횟수를 출력


const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, l, r] = input[0].split(" ").map(Number);
let arr = [];
let visited;
let moves = 0;

for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(" ").map(Number));
}

let dx = [0, 0, -1, 1];
let dy = [-1, 1, 0, 0];

function bfs(x, y) {
  let queue = [];
  queue.push([x, y]);
  let temp = [];
  temp.push([x, y]);

  let sum = arr[x][y];
  let countries = 1;
  visited[x][y] = true;

  while (queue.length) {
    let [curX, curY] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nextX = curX + dx[i];
      let nextY = curY + dy[i];

      if (0 > nextX || nextX >= n || 0 > nextY || nextY >= n || visited[nextX][nextY]) continue;
      let diff = Math.abs(arr[curX][curY] - arr[nextX][nextY]);
      if (diff >= l && diff <= r) {
        visited[nextX][nextY] = true;
        queue.push([nextX, nextY]);
        temp.push([nextX, nextY]);
        sum += arr[nextX][nextY];
        countries++;
      }
    }
  }

  // 인구 재분배
  let value = parseInt(sum / countries);
  for (let i = 0; i < temp.length; i++) {
    let [x, y] = temp[i];
    arr[x][y] = value;
  }

  return countries > 1;
}

while (true) {
  let moved = false;
  visited = Array.from({ length: n }, () => Array(n).fill(false));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j]) {
        if (bfs(i, j)) moved = true;
      }
    }
  }

  if (!moved) break;
  moves++;
}

console.log(moves);
