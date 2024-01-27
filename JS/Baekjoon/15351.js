const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = input.shift()*1;
const words = input;
let score = 0;

for(let i = 0; i<N; i++){
  score = 0;
  for (let j of words[i]){
    if(j == " "){
      continue;
    }
    else{
      score += (j.charCodeAt() - 64); // ASCII 코드 값으로 변환 후, A가 1이 되도록 조정
    }
  }
  
  if(score == 100){
    console.log("PERFECT LIFE");
  }
  else{
    console.log(score);
  }
}
