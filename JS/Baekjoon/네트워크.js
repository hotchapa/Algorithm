function solution(n, computers) {
  let visited = Array(n).fill(false);  
  let networkCount = 0;

  function dfs(i) {
      visited[i] = true;  // 현재 컴퓨터를 방문 처리
      for (let j = 0; j < n; j++) {
          if (computers[i][j] === 1 && !visited[j]) {  // 연결되어 있고 아직 방문하지 않았다면
              dfs(j);  // 연결된 컴퓨터로 DFS 재귀 호출
          }
      }
  }

  for (let i = 0; i < n; i++) {
      if (!visited[i]) {  // 아직 방문하지 않은 컴퓨터가 있으면
          dfs(i);  // 그 컴퓨터로 DFS 시작
          networkCount++;  // 네트워크 개수 증가
      }
  }

  return networkCount;  
}

