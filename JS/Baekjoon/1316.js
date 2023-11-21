const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const stdin = fs.readFileSync(filePath).toString().trim();
const input = stdin.split("\n");
const N = input.shift() * 1;
let answer = N;

for (let i = 0; i < N; i++) {
  const numlist = input[i].split("");
  const check = [];
  for (let j = 0; j < numlist.length; j++) {
    if (check.includes(numlist[j])) {
      answer--;
      break;
    }
    if (numlist[j] !== numlist[j + 1]) {
      check.push(numlist[j]);
    }
  }
}
console.log(answer);
