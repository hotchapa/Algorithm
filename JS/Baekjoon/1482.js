const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const G = Number(input[0]);

// // // g 킬로그램은 성원이의 현재 몸무게의 제곱, 원래 몸무게의 제곱을 뺀 것
// // // 가능한 현재 성원이의 몸무게를 오름차순으로 정렬, 없을 땐 -1
// // // 원하는 건 현재 몸무게 경우의 수를 전부 출력..

// // // 16일 경우, 기억하고 있는 몸무게가 1?
// // // 64일 경우, 기억하고 있는 몸무게가 7?
// // // n**2 - m**2 = G
// // // g는 10만보다 작거나 같은 수

// // // 조건이 너무 무식함
// // // while로 해결할 방법이 있지 않을까

// // // function solve(g){
// // //   answer = [];
// // //   for(let n = 0; n<10000; n++){
// // //     for(let m = 0; m<10000; m++){
// // //       if(n>m){
// // //         if((n**2)-(m**2) == g){
// // //           answer.push(n);
// // //         }
// // //       }
// // //     }
// // //   }

// // //   if(answer.length == 0){
// // //     return [-1];
// // //   }else{
// // //     return answer;
// // //   }
// // // }


function solve(G) {
  const answers = [];
  let m = 1;

  while (m * m - (m-1) * (m-1) <= G) {
    let n = m + 1;
    while (true) {
      const diff = n * n - m * m;
      if (diff === G) {
        answers.push(n);
      }
      if (diff > G) {
        break;
      }
      n++;
    }
    m++;
  }

  return answers.length > 0 ? answers : [-1];
}


const results = solve(G);
console.log(results.join('\n'));  
