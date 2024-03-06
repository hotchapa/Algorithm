// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().trim().split("\n");
// const [n,k] = input[0].split(" ").map(Number); // 입력값 받아오기
// let numList = input[1].split(" ").map(Number);
// maxNum = -1e9

// for(let i=0; i<n+1-k; i++){ 
//   let answer = 0;
//   for(let j = i; j<i+k; j++){
//     answer += numList[j]
//   }

//   if(maxNum < answer){
//     maxNum = answer
//   }

// }

// console.log(maxNum)


// 슬라이딩 윈도우를 사용하면 훨씬 빠르게 (약 10배) 풀이가 가능
// 배열의 처음부터 연속된 k개의 요소에 대한 합을 계산한 후, 윈도우를 오른쪽으로 한 칸씩 이동하면서 합을 업데이트함
// 윈도우가 이동할 때마다 윈도우의 첫 번째 요소를 합에서 빼고, 새로운 요소를 합에 더하면 됨

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs
  .readFileSync(filePath).toString().trim().split("\n").map((line) => line.replace("\r", ""));

const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let tmp = arr.slice(0, k).reduce((a, b) => (a += b), 0);
let mx = tmp;

for (let i = k; i < n; i++) {
  tmp -= arr[i - k];
  tmp += arr[i];
  console.log(tmp)

  mx = Math.max(mx, tmp);
}

console.log(mx);