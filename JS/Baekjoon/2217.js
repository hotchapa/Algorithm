
// 1개일때, 
// 5  10
// 7  14  
// 10 20
// 150 300
// 800 800 !!

// 2개일때,

// 5  10
// 7  14  
// 10 20
// 150 300 !!
// 800 1600


// 3개일때,
// 5  15
// 7  21  
// 10 30 !!
// 150 450
// 800 2400


// 내림차순으로 정렬
// 각 로프를 사용했을때의 최대 중량을 구함
// 로프 개수가 늘어나면, 곱해야할 로프의 중량도 다음번째로 넘어간다.




const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = parseInt(input[0]);
let ropes = [];

for(let i=1; i < n+1; i++){
  ropes.push(parseInt(input[i]));
}

ropes.sort((a, b) => b - a);

let max = 0;

for(let i = 0; i < n; i++){
  if(max < ropes[i] * (i+1)) {
    max = ropes[i] * (i+1);
  }
}

console.log(max);
