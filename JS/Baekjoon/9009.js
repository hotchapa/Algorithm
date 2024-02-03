
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let testCase = input[0]*1;

// 피보나치 수열 만들기
pibo = [];
pibo.push(0,1)
while(pibo[pibo.length -1] < 1e9){
  pibo.push(pibo[pibo.length-1] + pibo[pibo.length-2]);
}

for(let tc =1; tc<=testCase; tc++){
  let n = Number(input[tc]);
  let result = [];
  let i = pibo.length -1 // 가장 큰 피보나치 수열의 인덱스

  while(n > 0){
    if(n >= pibo[i]){
      n -= pibo[i];
      result.push(pibo[i]);
    }
    i--;
  }

  let answer = "";
  for(let i = result.length -1; i >= 0; i--){
  answer += result[i] + " ";
  }
  console.log(answer.trim());
}