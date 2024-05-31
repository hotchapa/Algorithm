const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

// 입력 받은 숫자들을 정렬
let numbers = input.sort((a, b) => a - b);

let result = [];
let i = 1;

// 1부터 30까지 숫자를 확인
while (i <= 30) {
    // 현재 숫자 i가 numbers 배열에 없다면 결과 배열에 추가
    if (!numbers.includes(i)) {
        result.push(i);
    }
    i++;
}

console.log(result.join("\n"));
