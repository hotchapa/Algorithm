const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
// .이면 없는 것
// F면 말이 있는 것
// (0,0) 은 하얀색

let flag = 0;
let count = 0;

for(let i=0; i<input.length; i++){
  if(flag == 0){ // 홀수행일때
    let arr = input[i].split("")
    for(let j=0; j<arr.length; j+=2){
      if(arr[j] == "F"){
        count += 1;
      }
    }
    flag = 1;
    continue;
  }
  if(flag == 1){ // 짝수행일때
    let arr = input[i].split("")
    for(let k=1; k<arr.length; k+=2){
      if(arr[k] == "F"){
        count += 1;
      }
    }
    flag = 0;
    continue;
  }
}

console.log(count)