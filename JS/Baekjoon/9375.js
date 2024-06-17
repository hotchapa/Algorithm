const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let testCase = Number(input.shift());
let index = 0;

for (let tc = 0; tc < testCase; tc++) { // 테스트 케이스
  let N = Number(input[index++]); // 옷가지 종류
  let clothes = {}; // 옷 정보를 담을 객체

  for (let i = 0; i < N; i++) {
    let [name, type] = input[index++].split(" ");
    if (clothes[type]) {
      clothes[type]++;
    } else {
      clothes[type] = 1;
    }
  }

  // 경우의 수 계산
  let result = 1;
  for (let type in clothes) {
    result *= (clothes[type] + 1); // 해당 종류의 옷을 선택하지 않는 경우도 포함
  }
  result -= 1; // 모든 옷을 선택하지 않는 경우는 제외

  console.log(result);
}
