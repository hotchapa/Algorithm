const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const t = Number(input[0]);
let arr = input[1].split("");

function minMoves(arr) {
  const rCount = arr.filter(ball => ball === 'R').length;
  const bCount = arr.length - rCount;

  let lR = 0, rR = 0, lB = 0, rB = 0;

  while (lR < arr.length && arr[lR] === 'R') lR++;
  while (rR < arr.length && arr[arr.length - 1 - rR] === 'R') rR++;
  while (lB < arr.length && arr[lB] === 'B') lB++;
  while (rB < arr.length && arr[arr.length - 1 - rB] === 'B') rB++;

  const moveR = rCount - Math.max(lR, rR);
  const moveB = bCount - Math.max(lB, rB);

  return Math.min(moveR, moveB);
}

console.log(minMoves(arr));
