

function dfs(arr,depth,start){
  if(depth == 6){
    let result = [];
    for (let i of selected){
      result.push(arr[i])
    }
    for(let x of result){
      answer += x + " ";
    }
    answer += "\n"
    return;
  }

  for(let i = start; i<arr.length; i++){
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth+1, i+1);
    selected.pop();
    visited[i] = false;
  }
}

const fs =require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for(let i = 0; i<input.length; i++){
  if(input[i] == 0){
    break
  }
  let numList = input[i].split(" ").map(x=>+x);
  let k = numList.shift();
  visited = new Array(k).fill(false);
  selected = [];
  answer = ""
  dfs(numList,0,0)
  console.log(answer)
}


