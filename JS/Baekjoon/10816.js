// 문제 풀이 방법: 카운팅 정렬 사용
// 1. 카운팅 배열을 생성하고 입력받은 숫자 카드의 개수를 셈
// 2. 입력받은 숫자의 개수를 카운팅 배열에서 찾아 출력

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
const nCards = input[1].split(" ").map(Number);
const m = parseInt(input[2]);
const mCards = input[3].split(" ").map(Number);

const countArr = new Array(20000001).fill(0);
const min = 10000000; // 음수 인덱스를 처리하기

// 카운팅 배열에 숫자 카드의 개수를 셈
for (let i = 0; i < n; i++) {
  countArr[nCards[i] + min]++;
}

let answer = "";

// mCards에 대한 카운팅 배열에서 개수를 찾아추가
for (let i = 0; i < m; i++) {
  answer += countArr[mCards[i] + min] + " ";
}

console.log(answer);
