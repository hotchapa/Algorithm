// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().trim().split("\n");
// let answer = ""

// for(i=0; i<input.length; i++){
//   let [R,S] = input[i].split(" ")
//   Number(R)
//   if(S){
//     answer = S.split("").map(x=> x.repeat(R)).join("")
//     console.log(answer)
//   }
// }



const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase = Number(input[0]);

// 한 줄씩 입력받기
for (let i = 1; i <= testCase; i++){
  let [r, s] = input[i].split(" ");
  let result = "";
  // 현재 문자열의 각 문자를 하나씩 확인하며
  for (let j = 0; j <= s.length; j++){
    // r번 반복한 문자열을 뒤에 이어붙이기
    result += s.charAt(j).repeat(r);
  }
  console.log(result);
}



