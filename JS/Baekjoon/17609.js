// 유사 회문 : 한 문자를 삭제하여 회문으로 만들 수 있는 문자열
// 문자열의 앞에서부터 한 문자씩 확인하면서 회문이 성립하는지 확인
// 회문이 성립하지 않는 위치를 찾을 땐,
// 1) 해당 문자를 지웠을 때 유사회문이 될 수 있는지
// 2) 대칭된 위치에 있는 문자를 지웠을 때 유사회문이 될 수 있는지를 확인한다

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = input[0]*1

function palindrom(data){
  return data == data.split("").reverse().join("");
}

for (let tc = 1; tc <= n; tc++){ // 문자열을 하나씩 입력받아 처리
  let data = input[tc];
  if (palindrom(data))
  console.log(0); // 회문인 경우
 else { // 회문이 아닌 경우 유사 회문인지 검사 시작
  let found = false;
  let n = data.length; // 문자열의 길이
  for (let i = 0; i< parseInt(n /2); i++){
    if(data[i] != data[n -i -1]){ // 대칭이 아닌 경우
      // 앞쪽에 있는 해당 원소를 제거해 본 뒤에 회문 검사
      if (palindrom(data.slice(0,i) + data.slice(i + 1, n)))
        found = true;
      // 뒤쪽에 있는 해당 원소를 제거해 본 뒤에 회문 검사
      if (palindrom(data.slice(0,n -i -1) + data.slice(n - i, n)))
        found = true;
      break;
    }
  }
  if (found) console.log(1); // 유사 회문일 경우
  else console.log(2); // 회문도 유사 회문도 아닌 경우
  }
}