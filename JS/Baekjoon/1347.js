// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(filePath).toString().split("\n");

// const n = Number(input[0]);
// const str = input[1];

// let curL = [0,0];
// let arr = [[0,0]];
// let dir = [[1,0],[0,1],[-1,0],[0,-1]];
// let curD = 2;

// for(let i = 0; i<n; i++){
//   if(str[i] == "R"){
//     curD = (curD+1)%4;
//   }
//   if(str[i] == "L"){
//     curD = (curD+3)%4;
//   }
//   if(str[i] == "F"){
//     let [x,y] = dir[curD]
//     curL[0] += x;
//     curL[1] += y;
//     arr.push([curL[0],curL[1]]);
//   }

// }
// // x값의 최대값 구하기
// const maxX = arr.reduce((max, current) => current[0] > max ? current[0] : max, arr[0][0]);

// // y값의 최대값 구하기
// const maxY = arr.reduce((max, current) => current[1] > max ? current[1] : max, arr[0][1]);


// console.log(maxX,maxY, "맥스")

// let map = Array.from({length: maxX+1}, ()=> Array(maxY+1).fill("#"));

// for(let i =0; i < arr.length; i++){
//   let [row,col] = arr[i];
//   map[row][col] = "."
// }

// map.reverse();
// let answer = "";
// for(let i = 0; i<map.length; i++){
//   if(i == map.length -1){
//     answer += map[i].join("");
//     break
//   } 
//   answer += map[i].join("");
//   answer += "\n"


// }

// console.log(answer)

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