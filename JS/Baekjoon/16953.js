// 정수 A를 B로 바꾸려고 한다. 가능한 연산은 다음과 같은 두 가지이다.
// 2를 곱한다.
// 1을 수의 가장 오른쪽에 추가한다. 
// A를 B로 바꾸는데 필요한 연산의 최솟값을 구해보자.


// 적용한 알고리즘 : 그리디
// B의 현재 값이 정해져 있을 때, 취할 수 있는 행동은 정해져있음
// 1) 값이 2로 나누어 떨어지면 ? => 2로 나누는 연산 사용
// 2) 일의 자리수가 1인 경우 => 10으로 나누는 연산만 사용
// 3) 모두 해당 안됨 => 행동 종료

// 이외 다른 경우의 수가 없으므로, 이동경로는 단 하나
// 따라서 그리디 알고리즘에 해당함


const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [a,b] = fs.readFileSync(filePath).toString().split(' ').map(x=>+x)
let flag = false;
let count = 1;


while(a <= b){
  if(a == b){
    flag = true;
    break;
  }
  if ( b % 2 == 0){
    b = parseInt(b / 2); // 2로 나누어 떨어질 때 2로 나눔
  } 
  else if(b % 10 == 1){
    b = parseInt(b / 10); // 1을 없앰
  }
  else{
    break; // 모두 해당 안될 때
  }
  count++;
}

if (flag){
  console.log(count);
} else{
  console.log(-1);
}