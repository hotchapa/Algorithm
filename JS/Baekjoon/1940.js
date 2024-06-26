// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split("\n");
// const N = parseInt(input[0]);
// const M = parseInt(input[1]);
// let numList = input[2].split(" ").map(Number);
// let visited = Array(N).fill(false);
// let result = 0;

// function dfs(index, count, sum) {
//   if (count === 2) {
//     if (sum === M) {
//       result++;
//     }
//     return;
//   }

//   for (let i = index; i < N; i++) {
//     if (!visited[i]) {
//       visited[i] = true;
//       dfs(i + 1, count + 1, sum + numList[i]);
//       visited[i] = false;
//     }
//   }
// }

// dfs(0, 0, 0);

// console.log(result);


const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = parseInt(input[0]);
const M = parseInt(input[1]);
let numList = input[2].split(" ").map(Number);
let result = 0;

for (let i = 0; i < N - 1; i++) {
  for (let j = i + 1; j < N; j++) {
    if (numList[i] + numList[j] === M) {
      result++;
    }
  }
}

console.log(result);
