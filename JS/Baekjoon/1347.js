const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const n = Number(input[0]);
const str = input[1];

let curL = [0, 0];
let arr = [[0, 0]];
let dir = [[-1, 0], [0, 1], [1, 0], [0, -1]]; // 상, 우, 하, 좌
let curD = 2; // 시작 방향을 하(Down)으로 설정

for (let i = 0; i < n; i++) {
  if (str[i] === "R") {
    curD = (curD + 1) % 4;
  } else if (str[i] === "L") {
    curD = (curD + 3) % 4;
  } else if (str[i] === "F") {
    let [dx, dy] = dir[curD];
    curL[0] += dx;
    curL[1] += dy;
    arr.push([...curL]);
  }
}

// x, y 최소 및 최대값 구하기
const xValues = arr.map(point => point[0]);
const yValues = arr.map(point => point[1]);
const minX = Math.min(...xValues);
const maxX = Math.max(...xValues);
const minY = Math.min(...yValues);
const maxY = Math.max(...yValues);

// 미로의 전체 크기를 결정하고 초기화
const rows = maxX - minX + 1;
const cols = maxY - minY + 1;
let map = Array.from({ length: rows }, () => Array(cols).fill("#"));

// 미로 그리기 (모든 좌표를 양의 영역으로 매핑)
arr.forEach(([x, y]) => {
  const row = x - minX;
  const col = y - minY;
  map[row][col] = ".";
});

// 미로 뒤집기 (선택적)
// map.reverse();

// 미로 출력
let answer = map.map(row => row.join("")).join("\n");
console.log(answer);
