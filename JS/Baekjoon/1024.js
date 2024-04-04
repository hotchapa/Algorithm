// N이 주어졌을 때, L로 나누게 되면 그 몫의 앞뒤 수를 (L-1)/2만큼 더하거나 뺐을 때 연속된 수가 나옴

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const [N, L] = input[0].split(" ").map(Number);

let answer = -1; 
let temp = []; 

for (let length = L; length <= 100; length++) {

  let x = (N - (length * (length - 1) / 2)) / length;
  if (x < 0) break; // x가 음수이면 더 이상 진행하지 않음
  if (Math.floor(x) === x) { // x가 정수일 때만 유효
    for (let i = 0; i < length; i++) {
      temp.push(x + i);
    }
    answer = 0; 
    break; 
  }
}

if (answer === -1) {
  console.log(answer);
} else {
  console.log(temp.join(' '));
}

