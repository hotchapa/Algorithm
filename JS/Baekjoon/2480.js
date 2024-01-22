const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let diceNum = input.shift().split(" ").map(x => +x);

if(diceNum[0] == diceNum[1] && diceNum[1] == diceNum[2]){
  console.log(10000 + diceNum[0]*1000)  
}else if(diceNum[0] == diceNum[1]){
  console.log(1000 + diceNum[0]*100) 
}else if(diceNum[0] == diceNum[2]){
  console.log(1000 + diceNum[2]*100) 
}else if(diceNum[1] == diceNum[2]){
  console.log(1000 + diceNum[1]*100) 
}
else if(diceNum[0] != diceNum[1] && diceNum[0] != diceNum[2] ){
  const Maxnum = Math.max(diceNum[0],diceNum[1],diceNum[2])
  console.log(Maxnum*100)  
}


