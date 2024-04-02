// function solution(s){
//   var answer = true;
//   let stack = [];
//   let queue = s.split("");
//   while(queue.length){
//       let cur = queue.shift();
//       if(cur == "("){
//           stack.push(cur);
//       }
//       if(cur == ")"){
//           if(stack.length > 0){
//               stack.pop();
//           }else{
//               answer = false;
//               break; // 불필요한 반복을 피하기 위해 즉시 종료
//           }
//       }
//   }
  
//   if(stack.length > 0) answer = false; // 괄호가 남아있으면 false 

//   return answer;
// }


function solution(s){
  let stack = [];

  for (let i = 0; i < s.length; i++) {
      if (s[i] == "(") {
          stack.push(s[i]);
      } else if (s[i] == ")") {
          if (stack.length == 0) {
              return false; // 스택이 비었다면, 올바른 짝이 아님
          }
          stack.pop();
      }
  }

  return stack.length == 0; // 스택이 완전히 비어있어야 올바른 괄호
}
