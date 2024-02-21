// 중복 문자 카운트는 객체를 활용!
// 배열에서는 for.. of 를 사용하고 오브젝트에서는 for.. in을 사용
// for.. of는 인덱싱 순서가 중요하고, for.. in은 순서없이 동작한다.
// for.. in은 눈에 보이지 않는 속성들까지 반복함

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const word = input[0];
let lowWord = word.toLowerCase(); // 대소문자 구별 x
let wordObj = {};

for(let x of lowWord){
  if(wordObj[x]== undefined){
    wordObj[x] = 1;
  }
  else {
    wordObj[x] += 1;
  }
}

let cnt = 0;
let answer = ""

for(let x in wordObj){
  if(cnt < wordObj[x]){
    cnt = wordObj[x]
    answer = x.toUpperCase();

  }
  else if(cnt == wordObj[x]){
    answer = "?";
  }
}

console.log(answer)
