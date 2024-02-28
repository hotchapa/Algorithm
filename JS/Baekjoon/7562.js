// 가중치가 없는 그래프의 최단 경로이기 때문에 BFS!
// 나이트가 위치한 곳에서 BFS를 수행한 뒤, 모든 칸까지의 최단 거리를 계산

const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const tc = Number(input.shift());// 테스트 케이스 수


for (let i = 0; i<tc; i++){ 
  let l = Number(input.shift()); // 체스판 크기
  let [curX,curY] = input.shift().split(" ").map(Number); // 현재 나이트의 위치
  let [goalX,goalY] = input.shift().split(" ").map(Number);
  
  // 나이트 방향 설정
  let dx = [-2,-2,-1,-1,1,1,2,2]
  let dy = [-1,1,-2,2,2,-2,-1,1]
  // 방문 처리 배열
  let visited = Array.from({length : l}, ()=> Array(l).fill(0));

  let queue = [];

  queue.unshift([curX,curY]);
  visited[curX][curY] = 1;

    while(queue.length != 0){ // 큐가 바닥날 때 까지
      cur = queue.shift();
      x = cur[0]
      y = cur[1]
      for(let i = 0; i<8; i++){ // 나이트 방향만큼 반복
        let nx = x + dx[i]
        let ny = y + dy[i]
        if(nx < 0 || nx >= l || ny < 0 || ny >= l) continue; // 영역을 벗어나면 무시
        if(visited[nx][ny] == 0){ // 방문 안 했으면
          visited[nx][ny] = visited[x][y]+1; 
          queue.push([nx, ny]);
        }
      }
    }
    console.log(visited[goalX][goalY]-1) // 도착 지점까지의 최소 이동횟수
}
