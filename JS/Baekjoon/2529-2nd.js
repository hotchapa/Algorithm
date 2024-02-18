const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const k = input[0]*1;
let signs = input[1].split(" ");
let visited = new Array(10).fill(false);
let maxNum = ""
let minNum = ""
let result = []

function dfs(depth){
  if(depth == k+1){
    let check = true;
    for(let i = 0; i<k; i++){
      if(signs[i] == "<"){
        if(result[i] > result[i+1]){
          check = false;
        }
      }
      if(signs[i] == ">"){
        if(result[i] < result[i+1]){
          check = false;
        }
      }
    }
      if(check){
        maxNum = ""
        for(let x of result){
          maxNum += x + "";
        }
        if(minNum == ""){
          minNum = maxNum
        }
      }
      return
    }
    for(let i = 0; i<10; i++){
      if(visited[i]) continue
      visited[i] = true;
      result.push(i);
      dfs(depth+1)
      visited[i] = false;
      result.pop();
    }
}

dfs(0)
console.log(maxNum + "\n" + minNum)