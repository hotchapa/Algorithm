const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());
let numList = input.slice().map((e)=>e.split(" ").map(Number));

function gcd(x,y){
  while(y != 0){
    let r = x%y;
    x=y;
    y=r;
  }
  return x
}

function lcm(x,y){
  return x*y/gcd(x,y);
}

for(let x of numList){
  let [curX,curY] = x
  console.log(lcm(curX,curY));
}
