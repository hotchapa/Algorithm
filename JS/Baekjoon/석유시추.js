function solution(land) {
  const n = land.length;
  const m = land[0].length;

  const directions = [
      [1, 0], [-1, 0], [0, 1], [0, -1]
  ];

  const sizes = []; // 각 석유 덩어리의 크기를 저장
  const map = Array.from({ length: n }, () => Array(m).fill(-1)); // 각 위치가 속한 클러스터 ID를 저장

  let clusterId = 0; // 현재 클러스터 ID

  function dfs(x, y) {
      let stack = [[x, y]];
      let size = 0;

      while (stack.length > 0) {
          const [cx, cy] = stack.pop();
          if (cx < 0 || cx >= n || cy < 0 || cy >= m || land[cx][cy] === 0 || map[cx][cy] !== -1) {
              continue;
          }

          map[cx][cy] = clusterId; // 해당 위치를 현재 클러스터로 지정
          size++;

          for (const [dx, dy] of directions) {
              stack.push([cx + dx, cy + dy]);
          }
      }

      return size;
  }

  // 각 위치에 대해 DFS를 통해 석유 덩어리를 찾고, 그 크기를 저장
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
          if (land[i][j] === 1 && map[i][j] === -1) {
              const size = dfs(i, j);
              sizes.push(size);
              clusterId++;
          }
      }
  }

  let maxOil = 0;
  // 각 열에 대해 석유량 계산
  for (let col = 0; col < m; col++) {
      let totalOil = 0;
      const seen = new Set();

      for (let row = 0; row < n; row++) {
          const id = map[row][col];
          if (id !== -1 && !seen.has(id)) {
              seen.add(id);
              totalOil += sizes[id];
          }
      }
      maxOil = Math.max(maxOil, totalOil);
  }
  return maxOil;
}

// 입력 초기화: land 배열의 세로 크기 n과 가로 크기 m을 구한다.

// 방향 벡터 설정: 4개의 방향 (상하좌우)을 나타내는 배열 directions를 설정한다.

// 클러스터 크기 및 맵 초기화:
// sizes 배열을 통해 각 클러스터(연결된 석유 덩어리)의 크기를 저장한다.
// map 배열을 통해 각 위치가 어떤 클러스터에 속하는지를 저장한다.

// DFS를 이용한 클러스터 탐색:
// 모든 위치를 순회하면서, 석유가 있는(1인) 위치이면서 아직 방문하지 않은 경우 dfs를 호출하여 해당 클러스터의 크기를 구한다.
// DFS를 통해 탐색한 후 클러스터의 크기를 sizes 배열에 저장하고 클러스터 ID를 증가시킨다.

// 열을 기준으로 최대 석유량 계산:
// 각 열에 대해 그 열을 지나가는 클러스터를 확인하고, 이미 계산된 클러스터는 중복 계산하지 않도록 Set을 사용하여 추적한다.
// 각 열에서 가능한 석유량을 계산하고, 최댓값을 갱신한다.

// 결과 반환: 최대 석유량을 반환한다.