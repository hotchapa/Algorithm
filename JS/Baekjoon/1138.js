const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.shift()*1;
const numList = input.shift().split(" ").map(x=>+x);

let result = Array(N).fill(0); 

for(let i=0; i<N; i++){
  let count = numList[i]; // 현재 사람이 왼쪽에 보는 사람의 수
  for(let j=0; j<N; j++){
    if(count === 0 && result[j] === 0) { // 왼쪽에 볼 사람이 없고, 아직 아무도 서있지 않은 자리라면
      result[j] = i+1; // 현재 사람을 그 자리에 세움
      break; // 다음 사람으로 넘어감
    } else if(result[j] === 0) { // 아직 아무도 서있지 않은 자리라면
      count -= 1; // 봐야 할 사람 수를 하나 줄임
    }
  }
}

console.log(result.join(" ")); 
