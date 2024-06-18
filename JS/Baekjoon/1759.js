const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [L,C] = input[0].split(" ").map(Number);
const vowels = ["a","e","i","o","u"];
const arr = input[1].split(" ").sort();

let result = [];

function solve(depth, vowel, consonant, word, idx){
  if (depth == L) {
    if (vowel >= 1 && consonant >= 2) {
      result.push(word.join(""));
    }
    return;
  }

  for (let i = idx; i < C; i++) {
    word.push(arr[i]);
    if (vowels.includes(arr[i])) {
      solve(depth + 1, vowel + 1, consonant, word, i + 1);
    } else {
      solve(depth + 1, vowel, consonant + 1, word, i + 1);
    }
    word.pop();
  }
}

solve(0, 0, 0, [], 0);

console.log(result.join("\n"));
