const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N,R,C] = input.shift().split(" ").map(x=>+x);
console.log(N,R,C)

function soluction(N){
  let count = 0;
  if(N <= 1){
    const arr = Array.from({length: 2}, () => Array(2).fill(0));
    for(let i=0; i<2; i++){
      for(let j=0; j<2; j++){
        arr[i][j] = count;
        count += 1;
      }
    }
    return arr;
  }else{
    const result = Array.from({length: 2**N}, () => Array(2**N).fill(0));
    for(let i=0; i<2**N; i+=2){
      for(let j=0; j<2**N; j+=2){
        let res = innerSolution(count);
        result[i][j] = res[0][0];
        result[i][j+1] = res[0][1];
        result[i+1][j] = res[1][0];
        result[i+1][j+1] = res[1][1];
        count+= 4;
      }
    }
    return result;
  }
}

function innerSolution(count){
  const arr = Array.from({length: 2}, () => Array(2).fill(0));
  for(let i=0; i<2; i++){
    for(let j=0; j<2; j++){
      arr[i][j] = count;
      count += 1;
    }
  }
  return arr;
}

const answer = soluction(N);
console.log(answer[R][C])




const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N,R,C] = input.shift().split(" ").map(x=>+x);

let result = 0;

function solve(n, x, y) {
  if (n === 0) return;
  let half = 1 << (n - 1);
  let quarter = half * half;

  if (R < x + half && C < y + half) {
    solve(n - 1, x, y);
  } else if (R < x + half && C >= y + half) {
    result += quarter;
    solve(n - 1, x, y + half);
  } else if (R >= x + half && C < y + half) {
    result += quarter * 2;
    solve(n - 1, x + half, y);
  } else {
    result += quarter * 3;
    solve(n - 1, x + half, y + half);
  }
}

solve(N, 0, 0);
console.log(result);
