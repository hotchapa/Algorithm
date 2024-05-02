const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [N, M] = input[0].trim().split(' ').map(Number);
const words = [];
let temp = 0;

for (let i = 1; i <= N; i++) {
    const word = input[i].trim();
    words.push(word);
    temp += word.length;
}

const diff = M - temp;
const gap = N - 1;
const quotient = Math.floor(diff / gap);
let remain = diff % gap;
let result = words[0];

for (let i = 1; i < N; i++) {
    if (words[i][0] === words[i][0].toLowerCase() && remain !== 0) {
        remain -= 1;
        result += "_" .repeat(quotient + 1) + words[i];
    } else if (words[i][0] === words[i][0].toUpperCase() && (i + remain > gap)) {
        remain -= 1;
        result += "_" .repeat(quotient + 1) + words[i];
    } else {
        result += "_" .repeat(quotient) + words[i];
    }
}

console.log(result);
