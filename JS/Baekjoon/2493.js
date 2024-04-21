// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(filePath).toString().split("\n");
// const N = Number(input[0]);
// const tower = input[1].split(" ").map(Number);
// let answer = [];

// for(let i= N-1; i>0; i--){
//   for(let j= i; j>0; j--){
//     if(j==1){
//       answer.push(0);
//     }
//     if(tower[i] <= tower[j-1]){
//       answer.push(j)
//       break;
//     }
//     else if(tower[i] > tower[j-1]){
//       continue;
//     }
//   }
// }
// answer.push(0);
// answer.reverse();
// console.log(answer.join())

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const N = Number(input[0]);
const towers = input[1].split(" ").map(Number);
let answer = new Array(N).fill(0);
let stack = [];

for (let i = 0; i < N; i++) {
    while (stack.length > 0 && towers[stack[stack.length - 1]] < towers[i]) {
        stack.pop();
    }
    if (stack.length > 0) {
        answer[i] = stack[stack.length - 1] + 1;
    }
    stack.push(i);
}

console.log(answer.join(" "));
