const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('').reverse();

let result = 0;
for (let i = 0; i < input.length; i++) {
    let num = parseInt(input[i]);
    if (num > 4) num--;
    result += num * Math.pow(9, i);
}

console.log(result);

// 먼저 입력받은 숫자를 뒤집은 후, 
// 각 자릿수를 순회하면서 5보다 큰 숫자가 나오면 그 수에 -1을 한 후, 
// 그 수를 9의 거듭제곱으로 곱한 값들을 모두 더함
// 이렇게 하면 10진수를 9진수로 변환하는 과정을 정확히 반영함