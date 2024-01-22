const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for(i=1; i<10; i++){
  console.log(input-0,"*",i,"=",input*i);
}
