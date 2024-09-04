function solution(cap, n, deliveries, pickups) {
  let answer = 0;  // 총 이동 거리

  let d = 0;  // 배달할 상자 수
  let p = 0;  // 수거할 상자 수

  // 집을 뒤에서부터 탐색
  for (let i = n - 1; i >= 0; i--) {
      let cnt = 0;  // 현재 집에 필요한 왕복 횟수

      // 현재 집의 배달 및 수거 작업을 반영
      d -= deliveries[i];
      p -= pickups[i];

      // 배달이나 수거 작업이 남아 있는 경우
      while (d < 0 || p < 0) {
          // 트럭이 최대 용량만큼 왕복
          d += cap;
          p += cap;
          cnt += 1;
      }

      // 이동 거리 계산 (왕복 거리)
      answer += (i + 1) * 2 * cnt;
  }

  return answer;
}
