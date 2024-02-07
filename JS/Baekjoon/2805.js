// 사용 알고리즘 : 파라메트릭 서치
// 문제 풀이
// 예제 1 기준
// 가져갈 값인 7이 될때까지
// 상한값을 찾아본다
// 상한값인 mid만큼 각 나무를 잘랐을때 얻어지는 목재의 총 길이가
// 값인 7에 만족할 때까지 작업을 반복한다.
// (1 ≤ N ≤ 1,000,000, 1 ≤ M ≤ 2,000,000,000))

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n,m] = input[0].split(" ").map(x=>+x);
let numList = input[1].split(" ").map(x=> +x);
let start = 1;
let end = numList.reduce((a,b)=> Math.max(a,b));
let result = 0;

while(start <= end){
  let mid = parseInt((start+end) / 2);
  let total = 0;

  for(let x of numList){
    if(x > mid) total += x - mid;
  }

  if(total >= m){
    result = mid;
    start = mid + 1;
  }
  else{
    end = mid - 1;
  }
}

console.log(result);