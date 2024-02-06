// 적절한 상한금액을 찾는 것이 문제의 목표
// 예를 들어, 전체 국가예산이 485이고 
// 4개 지방의 예산요청이 각각 120, 110, 140, 150이라고 하자. 

// 이 경우, 상한액을 127로 잡으면, 
// 위의 요청들에 대해서 각각 120, 110, 127, 127을 배정하고 
// 그 합이 484로 가능한 최대가 된다. 
// 이때, 배정된 예산들 중 최댓값인 정수를 출력 (127)

// N(지방의 수)은 3 이상 10,000 이하
// 예산 요청값은 1 이상 100,000 이하
// M(총 예산)은 N 이상 1,000,000,000 이하


// 문제 풀이
// 사용 알고리즘 : 이진탐색, 파라메트릭 서치
// 상한금액을 찾는 것이 목표이므로, 상한 금액을 이진탐색에서의 mid 라고 생각하고 풀이
// 배정된 총 예산이 조건을 만족하면 상한 금액을 증가(최대화)시키고, 아닌 경우엔 감소시킨다.


const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = input[0]*1;
let numList = input[1].split(" ").map(x=> +x);
let m = input[2]*1;

numList.sort((a,b) => a-b);

let start = 1; // 시작점
let end = numList.reduce((a,b)=> Math.max(a,b)); // 끝점

let result = 0;
while(start <= end){ // 이진탐색 수행
  let mid = parseInt((start+end)/2); //현재의 중간점 (상한액)
  let total = 0; // 배정된 예산의 총 예산
  for(x of numList){ // 각 지방에서 요청한 예산을 하나씩 확인
    total += Math.min(mid,x) // 예산 배정
  }
  if(total <= m){ // 조건을 만족한다면, 상한액 증가시키기
    result = mid;
    start = mid + 1;
  }
  else{ // 만족하지 않는다면, 상한액 감소시키기
    end = mid - 1; 
  }
}

console.log(result);
