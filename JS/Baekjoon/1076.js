const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
  const colorValues = {
    black: [0, 1],
    brown: [1, 10],
    red: [2, 100],
    orange: [3, 1000],
    yellow: [4, 10000],
    green: [5, 100000],
    blue: [6, 1000000],
    violet: [7, 10000000],
    grey: [8, 100000000],
    white: [9, 1000000000],
  };

  const valuePart = `${colorValues[input[0]][0]}${colorValues[input[1]][0]}`;
  const multiplier = colorValues[input[2]][1];

  return parseInt(valuePart, 10) * multiplier;
}

console.log(solve());
