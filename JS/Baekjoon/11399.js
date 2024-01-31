const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let N = input.shift()* 1;
let P = input.shift().split(" ").map(x=>+x)
P.sort((a,b)=> a-b)
let answer = 0;

for(let i=0; i<N; i++){
  for(let j=0; j<i+1; j++){
    answer += P[j]
  }
}

console.log(answer)



// let info = Array(N).fill(0);

// for(let i = 0; i<N; i++){
//   info[i] = [i+1,...P[i]]
// }

// console.log(info)

// function()..