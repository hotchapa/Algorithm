const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const tc = Number(input.shift());// 테스트 케이스 수
for(let i =0; i<tc; i++){
  let n = Number(input.shift());
  let info = [];
  let teamNum = input.shift().split(" ").map(Number);

  for(let j = 1; j<= n; j++){
    info.push([teamNum[j-1],j])
  }

  let obj = {};
  let obj2 = {};

  for(let x of info){
    if(obj[x[0]]) {
      obj[x[0]] += 1;
      obj2[x[0]] += x[1];
    } else {
      obj[x[0]] = 1;
      obj2[x[0]] = x[1];
    }
  }
  console.log
  console.log(obj2)
  
}
