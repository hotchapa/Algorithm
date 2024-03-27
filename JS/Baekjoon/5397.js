// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(filePath).toString().split("\n");
// const t = Number(input.shift());

// // 비밀번호 길이는 항상 0보다 큼
// // 백 스페이스와 커서 이동은 우리가 쓰는 로직과 동일

// for(let i =0; i<t; i++){
//   let answer = [];
//   let str = input.shift().split("");
//   let pointer = 0;

//   while(str){
//     let curStr = str.shift();
//     if(curStr == ">"){
//       if(answer.length >1){
//         pointer++;
//       }else{
//         continue;
//       }
//     }
//     if(curStr == "<"){
//       if(answer.length >1){
//         pointer--;
//       }else{
//         continue;
//       }
//     }
//     if(curStr == "-"){
//       if(answer.length >=1){
//         answer.splice(pointer,1);
//         pointer--;
//       }else{
//         continue;
//       }
//     }
//     answer.push(curStr);
//     pointer++;
//     }
//     console.log(answer)

// }

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const t = Number(input.shift());

for (let i = 0; i < t; i++) {
  const str = input[i];
  const leftStack = []; // 커서 이전의 문자들을 담을 스택
  const rightStack = []; // 커서 이후의 문자들을 담을 스택

  for (const char of str) {
    switch (char) {
      case '<':
        // 왼쪽 스택에서 오른쪽 스택으로 문자 이동
        if (leftStack.length > 0) {
          rightStack.push(leftStack.pop());
        }
        break;
      case '>':
        // 오른쪽 스택에서 왼쪽 스택으로 문자 이동
        if (rightStack.length > 0) {
          leftStack.push(rightStack.pop());
        }
        break;
      case '-':
        // 왼쪽 스택에서 문자 삭제
        leftStack.pop();
        break;
      default:
        // 그 외 문자는 왼쪽 스택에 추가
        leftStack.push(char);
        break;
    }
  }

  // 최종 문자열 생성: 왼쪽 스택 + 오른쪽 스택의 역순
  const result = leftStack.join('') + rightStack.reverse().join('');
  console.log(result);
}
