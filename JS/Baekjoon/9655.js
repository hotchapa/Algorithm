const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);

// let dp = Array(N).fill("")

// // 1개 또는 3개

// // 돌이 1개뿐일때
// dp[0] = "SK"

// //돌이 2개일때
// dp[1] = "CY"

// // 돌이 3개일때
// dp[2] = "SK"

// // 돌이 4개일때
// dp[3] = "CY"

// // 돌이 5개일때
// dp[4] = "SK"

// //돌이 6개일때
// dp[5] = "CY"

if(N%2 == 0){
  console.log("CY")
}else{
  console.log("SK")
}