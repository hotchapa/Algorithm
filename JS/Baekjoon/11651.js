const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = input.shift() * 1
// for(let i =0; i<N; i++){
//   arr += input[i]
// }

arr = [...new Set(input)]


function compare(a,b){
  if(a.length != b.length){
    return a.length - b.length;
  }
    else{
      if(a<b) return -1;
      else if(a>b) return 1;
      else return 0;
    }
      
    
}
arr.sort(compare)
let answer = ""

for (j of arr){
  answer += j + "\n"
}
console.log(answer)