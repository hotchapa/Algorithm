// // X가 3으로 나누어 떨어지면, 3으로 나눈다.
// // X가 2로 나누어 떨어지면, 2로 나눈다.
// // 1을 뺀다.
// // 정수 N이 주어졌을 때, 위와 같은 연산 세 개를 적절히 사용해서 1을 만들려고 한다.

// // DP를 이용해 풀이!
// // 점화식을 세워보자

// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const stdin = fs.readFileSync(filePath).toString().trim();
// const input = stdin.split("\n");
// const n = input[0];
// let x = 0;
// let dpTable = Array(n).fill(1);

// function dp(n){
//   let start = n
//   while(n != 1){
//     if(n%3==0){ 
//       n = parseInt(n/3);
//       x++;
//     }
//     if(n%2==0){ 
//       n = parseInt(n/2);
//       x++;
//     }
//     else{
//       n--;
//       x++;
//     }
//     dpTable[start]= x;
//   }
// }



// dp(n)
// console.log(dpTable[n])

// 이러면 시간초과가 난다
// dpTable을 제대로 활용하고 있지 않기 때문

// 3가지 연산 중에 더 최소값인 부분이 최소 연산횟수에 해당함
// dp[1]일때 초기값부터 상향식 풀이를 해내면 시간초과에서 벗어날 수 있다!

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const stdin = fs.readFileSync(filePath).toString().trim();
const n = parseInt(stdin.split("\n")[0]);
let dpTable = new Array(n + 1).fill(Infinity);

dpTable[1] = 0; // 1을 만드는데 필요한 최소 연산 횟수는 0

for (let i = 2; i <= n; i++) {
    dpTable[i] = dpTable[i - 1] + 1; // 1을 빼는 연산
    if (i % 2 === 0) dpTable[i] = Math.min(dpTable[i], dpTable[i / 2] + 1); // 2로 나누는 연산
    if (i % 3 === 0) dpTable[i] = Math.min(dpTable[i], dpTable[i / 3] + 1); // 3으로 나누는 연산
}

console.log(dpTable[n]);



