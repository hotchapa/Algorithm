const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim();
const n = parseInt(input);

let dp = new Array(10).fill(1);

for (let i = 0; i < n - 1; i++) {
  for (let j = 1; j < 10; j++) {
    dp[j] = (dp[j] + dp[j - 1]) % 10007;
  }
}

const result = dp.reduce((acc, val) => (acc + val) % 10007, 0);
console.log(result);
