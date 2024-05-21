const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [N, M] = input.shift().split(" ").map(Number);
let numList = [];

for (let i = 1; i <= N; i++) {
  numList.push(i);
}

let info = input.map((e) => e.split(" ").map(Number));

info.forEach(([i, j]) => {
  let start = i - 1;
  let end = j - 1;
  while (start < end) {
    [numList[start], numList[end]] = [numList[end], numList[start]];
    start++;
    end--;
  }
});

console.log(numList.join(" "));
