// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().trim().split("\n");
// const k = input[0]*1;
// const signs = input[1].split(" ");
// let visited = new Array(10).fill(false);
// let result = [];
// let current = "";
// let first = "";

// function dfs(depth){
//   if(depth == k+1){
//     let check = true;
//     for(let i = 0; i<k; i++){
//       if(signs[i] == "<"){
//         if(result[i] > result[i+1]){
//           check = false;
//         }
//       }
//       if(signs[i] == ">"){
//         if(result[i] < result[i+1]){
//           check = false;
//         }
//       }
//     }
//     if(check){
//       current = ""
//       for(let x of result){
//         current += x + ""
//       }
//       if(first === ""){
//         first = current;
//       }
//     return;
//     }
//   }

//   for(let i =0; i<10; i++){
//     if(visited[i]) continue;
//     visited[i] = true;
//     result.push(i)
//     dfs(depth+1);
//     visited[i] = false;
//     result.pop();
//     }
// }

// dfs(0);
// console.log(current + "\n" + first)



const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ?'/dev/stdin': "./input.txt").toString().split('\n');

// 입력 받기
const k = Number(input[0]);
const signs = input[1].split(' ');

let maxNum = "";
let minNum = "";

// 방문 여부 배열 생성 및 초기화
let visited = Array(10).fill(false);

function check(i, j, sign) {
    if (sign === '<') {
        if (i > j) return false;
    } else if (i < j) return false;
    return true;
}

function solve(cnt, str) {
    // 모든 자릿수에 대해 탐색 완료 시 최소/최대값 업데이트
    if (cnt === k + 1) {
        if (!minNum.length) minNum = str;
        else maxNum = str;
        return;
    }

    for(let i=0; i<=9; i++) {
        // 아직 사용하지 않은 숫자라면
        if (!visited[i]) {
            // 첫 번째 숫자거나 이전 숫자와의 부등호 관계가 성립한다면 
            if (
                str.length === 0 || 
                check(Number(str[str.length - 1]), i, signs[cnt - 1])
            ) { 
                visited[i] = true; // 방문 처리 후 재귀 호출
                solve(cnt + 1, str + String(i));
                visited[i] = false; 
                
            }
        }
    }
}

solve(0,"");
console.log(maxNum);
console.log(minNum);
