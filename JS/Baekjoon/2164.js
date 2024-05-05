
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);
const cards = [];

for(let i=1; i<=N; i++){
  cards.push(i);
}

while(cards.length > 1){
  cards.shift();
  // let changeCard = cards.shift();
  // cards.push(changeCard);
  cards.push(cards.shift());
}

console.log(cards[0]);



// const n = Number(require('fs').readFileSync('dev/stdin'))

// const solution = (n) => {
// 	//숫자를 2진법으로 변환
// 	const binArr = n.toString(2).split("");
    
//     	//n보다 작은 2^x 값 빼기 
// 	binArr.shift();
    
// 	//남은수 10진법으로 변환
// 	const answer = parseInt(binArr.join(""), 2);
    
//     //answer가 0이면 그 수는 2^x 이므로 n
//     return answer ? answer * 2 : n;
// }

// console.log(solution(n));
