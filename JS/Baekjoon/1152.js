const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const stdin = fs.readFileSync(filePath).toString().trim();
const input = stdin.split(" ")
if(input == ""){
  console.log(0);
}else{
  console.log(input.length)
}

