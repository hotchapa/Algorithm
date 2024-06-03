const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
let result = ""

function solve(){
  for(let i = 0; i<(input.length)-1; i++){
    if(input[i+1] == input[i]+1){
      result = "ascending";
    }
    else{
      result = "";
      break;
    }
  }
  if(result == "ascending"){
    return;
  }


  for(let i = 0; i<(input.length)-1; i++){
    if(input[i] == input[i+1]+1){
      result = "descending";
    }
    else{
      result = "";
      break;
    }
  }

  if(result == "descending"){
    return;
  }else{
    result = "mixed"
  }
}

solve();
console.log(result)



