const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [a,b,c] = input[0].split(" ").map(x=>+x);
let arr = new Array(100).fill(0);
let answer = 0;

for(let i =1; i<=3; i++){
  let [inTime,outTime] = input[i].split(" ").map(x=>+x)
  for(inTime; inTime<outTime; inTime++){
    arr[inTime] += 1;
  }
}

for(let i = 0; i<arr.length; i++){
  if(arr[i] == 1){
    answer += a
  }
  else if(arr[i] == 2){
    answer += b*2
  }
  else if(arr[i] == 3){
    answer += c*3
  }
}

console.log(answer)