const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n").map(Number);
const N = input.shift();
const buildings = input;
let count = 0;
let stack = [];

for (b of buildings) {
    while (stack.length > 0 && stack[stack.length-1] <= b ) {
        stack.pop();
    }
    stack.push(b);
    count += stack.length - 1;
}

console.log(count);