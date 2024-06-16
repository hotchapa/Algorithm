const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let numList = input[0].split(" ").map(Number)
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

let [curX,curY] = numList;
console.log(gcd(curX,curY));
console.log(lcm(curX,curY));

