// const fs = require("fs");
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split("\n");
// const N = input*1;
// let numList = [];
// let count = 0;

// for(let i = 1; i <= N; i++){
//     numList.push(i);
//     while(numList.reduce((acc,cur)=> acc+cur) > N){
//         numList.shift();
//     }
//     if (numList.reduce((acc,cur)=> acc+cur) === N) {
//         count++;
//     }
// }

// console.log(count);


const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = input*1;
let numList = [];
let count = 0;
let sum = 0;

for(let i = 1; i <= N; i++){
    numList.push(i);
    sum += i;
    while(sum > N){
        sum -= numList.shift();
    }
    if (sum === N) {
        count++;
    }
}

console.log(count);
