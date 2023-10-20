const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input.shift());
const numList = input
  .shift()
  .split(" ")
  .map((x) => parseInt(x));

const operators = input
  .shift()
  .split(" ")
  .map((x) => parseInt(x));

let maxResult = -Infinity;
let minResult = Infinity;

// DFS 함수 정의
function dfs(idx, result, add, sub, mul, div) {
    if (idx === N) {
        // 모든 숫자에 대한 연산이 완료된 경우
        maxResult = Math.max(maxResult, result);
        minResult = Math.min(minResult, result);
        return;
    }

    // 덧셈이 남아있는 경우
    if (add > 0) {
        dfs(idx + 1, result + numList[idx], add - 1, sub, mul, div);
    }
    
     // 뺄셈이 남아있는 경우
     if (sub >0){
        dfs(idx+1,result-numList[idx],add ,sub-1,mul ,div );
     }
     
     // 곱셈이 남아있는 경우
     if(mul>0){
        dfs(idx+1,result*numList[idx],add ,sub,mul-1 ,div );
     }
     
     // 나눗셈이 남아있는 경우 
     if(div>0){
         let temp;
         if(result<0){
             temp=-(-result/numList[idx]);
         }else{
             temp=result/numList[idx];
         }
         dfs(idx+1,temp|0 ,add ,sub,mul ,div-1 );
      }
}

dfs(1,numList[0],operators[0],operators[1],operators[2],operators[3]);

// 결과 출력 
console.log(maxResult); 
console.log(minResult);
