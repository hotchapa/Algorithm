// const fs = require("fs");
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split("\n");
// const N = input.shift()
// let arr = []

// for(let i =0; i<N; i++){
//   let [x,y] = [i, input[i].split(" ")]
//   arr.push([x,y])
// }


// function compare(a,b){
//   if(a[1][0] != b[1][0]) {return a[1][0] - b[1][0]}
//   else return a[0] - b[0]
// }

// arr.sort(compare);


// let answer = ""
// for(j=0; j<arr.length; j++){
//   if(j < arr.length-1){
//     answer += arr[j][1] + "\n"
//   }else{
//     answer += arr[j][1]
//   }
  
// }

// console.log(answer)



const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift())
let arr = []

for(let i = 0; i < N; i++){
  let [x,y] = [i, input[i].split(" ")]
  arr.push([x, ...y])
}

function compare(a,b){
  if(Number(a[1]) !== Number(b[1])) {return Number(a[1]) - Number(b[1])}
  else return a[0] - b[0]
}

arr.sort(compare);

let answer = ""
for(let j = 0; j < arr.length; j++){
  if(j < arr.length-1){
    answer += arr[j][1] + " " + arr[j][2] + "\n"
  }else{
    answer += arr[j][1] + " " + arr[j][2]
  }
  
}

console.log(answer)
