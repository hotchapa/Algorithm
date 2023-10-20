const { Console } = require('console');
const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 테스트 케이스 개수
const T = Number(input.shift());
// 값을 담을 스택
const stack = [];
for (i=0; i<T; i++){
  if (input[i] === '0') {
    stack.pop();
  }
  else {
    stack.push(Number(input[i]));
  }
  }
let answer = 0;

for(i=0; i<stack.length; i++){
  answer += stack[i];
}

console.log(answer);