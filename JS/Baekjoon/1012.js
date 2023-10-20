const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 테스트 케이스 개수
const T = Number(input.shift());

for (let t = 0; t < T; t++) {
    const [M, N, K] = input.shift().split(" ").map((x) => +x);
    let field = Array.from(Array(N), () => new Array(M).fill(false));
    let visited = Array.from(Array(N), () => new Array(M).fill(false));
    for (let i = 0; i < K; i++) {
        const [x, y] = input.shift().split(" ").map((x) => +x);
        field[y][x] = true;
    }

    let count = 0;

    // DFS 함수 정의
    function dfs(x, y) {
        if (y < 0 || y >= N || x < 0 || x >= M || !field[y][x] || visited[y][x]) return;
        
        visited[y][x] = true;

        dfs(x - 1, y); // 왼쪽
        dfs(x + 1, y); // 오른쪽
        dfs(x, y - 1); // 위쪽
        dfs(x, y + 1); // 아래쪽
    }

   for (let i=0;i<N;i++){
       for(let j=0;j<M;j++){
           if(field[i][j]==true && visited[i][j]==false){
               dfs(j,i);
               count++;
           }
       }
   }

    console.log(count);
}
