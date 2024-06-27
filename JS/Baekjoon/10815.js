// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split("\n");
// const N = parseInt(input[0]);
// let checkList = input[1].split(" ").map(Number);
// const M = parseInt(input[2]);
// let numList = input[3].split(" ").map(Number);
// let result = [];

// function solve(){
//   for(let i =0; i<M; i++){
//     for(let j=0; j<N; j++){
//       if(numList[i] == checkList[j]){
//         result.push(1);
//         break;
//       }
//       if(j== N-1){
//         result.push(0);
//       }
//     }
//   }
// }

// solve();
// console.log(result)


const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = parseInt(input[0]);
let checkList = new Set(input[1].split(" ").map(Number));
const M = parseInt(input[2]);
let numList = input[3].split(" ").map(Number);
let result = [];

function solve() {
  for (let i = 0; i < M; i++) {
    if (checkList.has(numList[i])) {
      result.push(1);
    } else {
      result.push(0);
    }
  }
}

solve();
console.log(result.join(' '));
