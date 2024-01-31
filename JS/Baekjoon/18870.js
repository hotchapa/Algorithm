// const fs = require("fs");
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split("\n");
// const N = input.shift() * 1

// let arr = input.shift().split(" ").map(x=> +x)
// let answer = ""
// let count = 0;

// for(let j =0; j<N; j++){
//   for(let i=0; i< N; i++){
//     curIndex = j;
//     if(arr[curIndex] > arr[i]){
//       count += 1;
//     }
//   }
//   if(j != N-1){
//     answer += count + " "
//   }else{
//     answer += count
//   }
//   count = 0;

// }

// console.log(answer)

const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = input[0] * 1
let arr = input[1].split(" ").map(x=> +x)

let uniqueArr = [...new Set(arr)];
uniqueArr.sort((a,b)=> a-b);

let dict = new Map();
for(let i =0; i<uniqueArr.length; i++){
  dict.set(uniqueArr[i],i)
}

answer = ""
for (j of arr){
  answer += dict.get(j) + " "
}
console.log(answer)