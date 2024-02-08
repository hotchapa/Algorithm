// 정렬 이후 K번째 수를 구하는 것이 목표
// [1,2,2,3,3,4,4,4,6,6,8,8,9,12,12,16]
// 이분탐색으로 mid를 찾을 때, mid가 k번째 수가 되려면?
// 현재 mid보다 작거나 같은 데이터 수가 K개 이상이 되는 조건을 만족하는
// mid값 중에서 가장 작은 값을 구한다


const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = input[0] * 1
let k = input[1] * 1
let start = 1; // 배열에 존재할 수 있는 가장 작은 값
let end = 10 ** 10; // 배열에 존재할 수 있는 가장 큰 값

let result  = 0;
while(start <= end){
  let mid = parseInt((start +end) /2);
  let total = 0;
  for (let i = 1; i<=n; i++){
    total += Math.min(parseInt(mid/ i),n);
  }
  if (total >= k){
    result = mid; 
    end = mid -1;
  }
  else{
    start = mid +1;
  }
}

console.log(result);