const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = input.shift() * 1
let arr = []
for(let i =0; i<N; i++){
  let [x,y] = input[i].split(" ").map(x=> +x)
  arr.push([x,y])
}

function compare(a,b){
  if(a[0] != b[0]){
    return a[0] - b[0] 
  }
    else
      return  a[1] - b[1]
    
}

arr.sort(compare)
let answer = ""

for (point of arr){
  answer += point[0] + " " + point[1] + "\n"
}

console.log(answer)