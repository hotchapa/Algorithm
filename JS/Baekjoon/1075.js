const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n")
// 입력값을 받아옵니다.
// 첫 줄을 N, 두 번재 줄을 F로 선언합니다.
// N은 100보다 크거나 같고, 2,000,000,000보다 작거나 같은 자연수입니다. F는 100보다 작거나 같은 자연수입니다.

const N = input[0];
const F = Number(input[1]);

// N의 가장 뒤 두 자리를 바꿔서 F로 나누어 떨어지게 해야합니다.
// 바꾼 수 중 가장 작은 값을 출력해야 하고, 한 자리 수라면 0을 붙여서 출력합니다.

// 먼저, N의 마지막 두 자리를 00으로 만들어줍니다.
let tempN = Math.floor(N / 100) * 100;

// 이제 00부터 99까지 순서대로 대입하면서 F로 나누어 떨어지는지 확인합니다.
for(let i = 0; i < 100; i++){
  if(tempN % F === 0){
    // 나누어 떨어진다면 그 값을 출력하고 함수를 종료합니다.
    // 한 자리 수라면 앞에 0을 붙여서 출력해야 하므로, i 값이 10보다 작은 경우와 그렇지 않은 경우를 나눠서 처리합니다.
    console.log(i < 10 ? `0${i}` : i);
    return;
  }
  tempN++;
}