
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
// 가로, 세로, 대각선까지 건너갈 수 있음
// 연결되어있는 요소들을 끝까지 찾고, 그 수를 더함
// D F S !
// 테스트 케이스 개수가 제공되지 않음
// 입력값 잘 받아올 것


let index = 0;
while(index < input.length){
  let [w,h] = input[index].split(" ").map(Number);
  // 0 0 이 있었다
  // 이거 잡아내야함

  if( w == 0 || h == 0){
    break;
  }

  index++;

  let arr = [];
  for (let i = 0; i<h; i++){
    arr.push(input[index].split(" ").map(Number));
    index++;
  }

  let count = 0;
  let visited = Array.from({length : h}, ()=> Array(w).fill(false));

  for(let i = 0; i < h; i++){
    for(let j = 0; j < w; j++){
      if(!visited[i][j] || arr[i][j] == 1){
        if(dfs(i,j,h,w,visited,arr)){
          count++;
        }
      }
    }
  }

  console.log(count)


}


function dfs(x,y,h,w,visited,arr){
  if(x<0 || x >= h || y<0 || y >= w){
    return;
  }
  if(visited[x][y] || arr[x][y] == 0){
    return
  }
  visited[x][y] = true;
  dfs(x-1,y,h,w,visited,arr);
  dfs(x+1,y,h,w,visited,arr);
  dfs(x,y-1,h,w,visited,arr);
  dfs(x,y+1,h,w,visited,arr);
  dfs(x+1,y+1,h,w,visited,arr);
  dfs(x+1,y-1,h,w,visited,arr);
  dfs(x-1,y-1,h,w,visited,arr);
  dfs(x-1,y+1,h,w,visited,arr);
  return true;
}



// let h, w, arr, visited;

// function dfs(x, y) {
//     if (x < 0 || x >= h || y < 0 || y >= w) {
//         return;
//     }
//     if (visited[x][y] || arr[x][y] == 0) {
//         return;
//     }
//     visited[x][y] = true;
//     dfs(x-1, y);
//     dfs(x+1, y);
//     dfs(x, y-1);
//     dfs(x, y+1);
//     dfs(x-1, y-1);
//     dfs(x-1, y+1);
//     dfs(x+1, y-1);
//     dfs(x+1, y+1);
// }

// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(filePath).toString().split("\n");

// let index = 0;
// while(index < input.length) {
//     [w, h] = input[index].split(" ").map(Number);
//     if (w == 0 || h == 0) {
//         break;
//     }

//     index++;

//     arr = [];
//     for (let i = 0; i < h; i++) {
//         arr.push(input[index].split(" ").map(Number));
//         index++;
//     }

//     visited = Array.from({length: h}, () => Array(w).fill(false));
//     let count = 0;

//     for(let i = 0; i < h; i++) {
//         for(let j = 0; j < w; j++) {
//             if(arr[i][j] == 1 && !visited[i][j]) {
//                 dfs(i, j);
//                 count++;
//             }
//         }
//     }

//     console.log(count);
// }
