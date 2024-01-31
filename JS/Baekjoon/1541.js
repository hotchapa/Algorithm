// const fs = require("fs");
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split("");
// let numList = ""
// let operator = ""

// for(let i = 0; i<input.length; i++){
//   if( input[i] == "+" || input[i] == "-" ){
//     numList += " "
//     operator += input[i]
//   }
//   else{
//     numList += input[i]
//   }
// }

// numList.split(" ")
// operator.split("")

// let answer = ""
// for(let j = 0; j<numList.length; j++){
    
// }


const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("-");
let numList = [];

for(let i = 0; i < input.length; i++) {
  let temp = input[i].split("+");
  let sum = 0;
  for(let j = 0; j < temp.length; j++) {
    sum += parseInt(temp[j]);
  }
  numList.push(sum);
}

let answer = numList[0];

for(let i = 1; i < numList.length; i++) {
  answer -= numList[i];
}

console.log(answer);
