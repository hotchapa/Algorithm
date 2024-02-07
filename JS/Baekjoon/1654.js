// K개의 랜선을 상한값으로 잘랐을때
// N개의 선이 될 수 있도록 파라메트릭서치를 이용한다.


const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [k,n] = input[0].split(" ").map(x=>+x);
let numList = []
for(let i = 1; i<=k; i++){
  numList.push(input[i]*1)
}

let start = 1;
let end = numList.reduce((a,b)=> Math.max(a,b));
let result = 0;

while(start <= end){
  let mid = parseInt((start+end) / 2);
  let total = 0;

  for(let x of numList){
    total += parseInt(x/mid)
  }

  if(total >= n){
    result = mid;
    start = mid + 1;
  }
  else{
    end = mid - 1;
  }
}

console.log(result);