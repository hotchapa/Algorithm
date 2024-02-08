// N × N 크기의 2차원 민초마을
// 초기 체력은 M, 진우가 이동할 수 있는 거리
// 상하좌우 1칸씩 이동하며 체력 1씩 줄어듬
// 민트초코우유를 마신다면 체력이 H 만큼 증가
// 체력이 0이 되는 순간 진우는 이동할 수 없음

// N, M, H는 모두 10보다 작거나 같은 자연수
// 진우의 집은 1, 민트초코우유는 2로 주어짐

// 빈 땅은 0
// 진우가 집을 나와서 다시 집으로 돌아올 때 까지 마실 수 있는 민트초코우유의 최대 개수를 출력

// 완탐으로?
// 현재 체력만큼 이동해서
// 주변에 닿을 수 있는 민초우유가 있는지 탐색

// 조건 ++ ) 집으로 못 돌아오는 경우가 생겨서는 안됨
// 조건을 만족하지 않는 경우 되돌아감
// => 백트래킹

// 이동할 때 마다 0 이하로 감소하지 않았는지 체크? 
// 집으로 돌아올 수 있는지 체크



const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n,m,h] = input[0].split(" ").map(x=> +x);
let map = []
const dx = [0,0,-1,1]
const dy = [-1,1,0,0]

for(let i=1; i<n+1; i++){
  map.push(input[i].split(" ").map(x=> +x))
}

let answer = 0;

// 진우집 찾기
const jinwooHome = [];
for(let i =0; i<n; i++){
  for(let j =0; j<n; j++){
    if(map[i][j] == 1){
      jinwooHome.push(i,j)
    }
  }
}
// [6,3]

function dfs(x,y,hp,cnt){
  if(0 == hp){ // 체력이 0이 되면
    return ;
  }



  for(let i =0; i<4; i++){
    let newX = x + dx[i];
    let newY = y + dy[i];

    if(newX < 0 || newY < 0 || newX >= n || newY >= n){ // 범위 벗어나면 다른 방향으로 반복
      continue
    }

    if(newX == jinwooHome[0] && newY == jinwooHome[1]){ // 집으로 돌아오면
      answer = Math.max(answer,cnt)
      ret
    }

    if(map[newX][newY] == 2){ // 민초우유가 있으면 
      map[newX][newY] = 0; // 마시고
      dfs(newX,newY,hp+h,cnt+1) // hp 증가, 마신 횟수 1증가  
    }
    else{
      dfs(newX,newY,hp-1,cnt); // 없으면 체력감소
    }
  }
}

dfs(jinwooHome[0],jinwooHome[1],m,0)
console.log(answer);




