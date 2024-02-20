// let arr = new Array(n).fill(new Array(m).fill(0));로 하면 안되는 이유?
// JavaScript에서 new Array(n).fill(new Array(m).fill(0)); 
// 코드를 실행하게 되면, m개의 원소가 0으로 채워진 배열을 n번 복사하여 새 배열을 만드는 것이 아니라, 동일한 배열을 n번 참조하는 것이 됩니다. 
// 즉, 모든 행이 같은 배열을 참조하고 있어서 한 행에서 값을 변경하면 모든 행에 영향을 미치게 됩니다.

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const t = input.shift()*1 
function dfs(arr,n,m,y,x){
  if(y < 0 || y >= n || x < 0 || x >= m){
    return false;
  }
  if(arr[y][x] == 1){
    arr[y][x] = -1;
    dfs(arr,n,m,y+1,x)
    dfs(arr,n,m,y,x+1)
    dfs(arr,n,m,y-1,x)
    dfs(arr,n,m,y,x-1)
    return  true;
  }
  return false;
}

for(let tc = 0; tc<t; tc++){
  const [m,n,k] = input.shift().split(" ").map(x=>+x);
  let arr = Array.from({ length: m }, () => Array(n).fill(0));
  let cnt = 0;
  for(let i = 0; i<k; i++){
  let [y,x] = input.shift().split(" ").map(x=>+x)
  arr[y][x] = 1;
  }

  for(let y=0; y<m; y++){
    for(let x=0; x<n; x++){
      if(dfs(arr, m, n, y, x) == true){
        cnt += 1;
      }
    }
  }
  
  console.log(cnt)
}
