const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n")
const n = Number(input[0]);

let numList = input[1].split(" ").map(Number);
let operators = input[2].split(" ").map(Number);
let maxValue = -Infinity;
let minValue = Infinity;

// 3
// 3 4 5
// 1 0 1 0

// operators[0] = 더하기
// operators[1] = 빼기
// operators[2] = 곱하기
// operators[3] = 나누기

function dfs(depth,result,add,sub,mul,div){
  if(depth == n){
    maxValue = Math.max(maxValue,result);
    minValue = Math.min(minValue,result);
  }
  if(add > 0){
    dfs(depth+1,result+numList[depth],add-1,sub,mul,div);
  }
  if(sub > 0){
    dfs(depth+1,result-numList[depth],add,sub-1,mul,div);
  }
  if(mul > 0){
    dfs(depth+1,result*numList[depth],add,sub,mul-1,div);
  }
  if(div>0){
    dfs(depth+1,~~(result/numList[depth]) ,add ,sub,mul ,div-1 );
  }
}

dfs(1,numList[0],operators[0],operators[1],operators[2],operators[3]);

// 결과 출력 
console.log(maxValue); 
console.log(minValue);
