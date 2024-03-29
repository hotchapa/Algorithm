const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [R, C] = input[0].split(" ").map(Number);
const arr = input.slice(1).map(row => row.split(""));

const visited = Array.from({length: R}, () => Array(C).fill(false));

function dfs(x, y) {
  if(x < 0 || y < 0 || x >= R || y >= C || visited[x][y] || arr[x][y] === "#") return {sheep: 0, wolf: 0};

  visited[x][y] = true;
  let count = { sheep: arr[x][y] === 'o' ? 1 : 0, wolf: arr[x][y] === 'v' ? 1 : 0 };

  const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  for (let [dx, dy] of dir) {
    const nextCount = dfs(x + dx, y + dy);
    count.sheep += nextCount.sheep;
    count.wolf += nextCount.wolf;
  }
  
  return count;
}

let totalSheep = 0;
let totalWolf = 0;

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (!visited[i][j] && arr[i][j] !== "#") {
      const { sheep, wolf } = dfs(i, j);
      if (sheep > wolf) {
        totalSheep += sheep;
      } else {
        totalWolf += wolf;
      }
    }
  }
}

console.log(totalSheep, totalWolf);
