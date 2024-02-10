// 더하기, 빼기, 공백
// N이 주어졌을 때 수식의 결과가 0이 되는 모든 수식을 찾아야 함
// 자연수 N의 최댓값은 9
// 3개의 연산 중에서 연속적으로 N번 선택하는 중복 순열 문제
// 3^8

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const testCase = input[0]*1;
let n = 0;
let arr = [];

for(let tc =1; tc <= testCase; tc++){
  n = input[tc] * 1
  arr = [];
  for(let i = 1; i<= n; i++){
    arr.push(i);
  }
  dfs([],0)
  console.log();
}

function dfs(result, depth){ 
  if (depth == n-1){ //중복순열
    let str = "" // 현재 수식 문자열
    for (let i = 0; i < n -1; i++){
      str += arr[i] + result[i]
    }
    str += arr[n-1] + "";
    current = eval(str.split(" ").join("")); // 공백 제거 후 수식 계싼
    if (current == 0) { // 수식이 0이 되는 경우 출력
      console.log(str)
    }
    return;
  }
  for(let x of [" ", "+", "-"]){ // 더하기 빼기 공백 붙이기
    result.push(x); // 재귀
    dfs(result,depth +1)
    result.pop();
  }
}