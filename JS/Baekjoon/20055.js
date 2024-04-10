const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const [N, K] = input[0].split(" ").map(Number);

// 컨베이어 벨트는 순환함. 모든 칸은 매번 한 칸씩 뒤로 이동함
// 그런데 로봇이 올라가는 순간 내구도가 1씩 줄어듬
// 로봇은 무조건 올리는 자리에서 (1이 있던 자리) 올릴 수 있음
// 그리고 내리는 자리에선 사라지게 됨

// 그리고 로봇 역시 최초에 올라간 칸에 머무는 게 아니라, 한 칸씩 뒤로 이동함
// 단, 이동할 칸에 로봇이 있거나, 내구도가 0이면 이동할 수 없음
// 내구도 0인 칸이 K개 이상이 될때까지 위 로직을 반복하면 됨


const belt = input[1].split(" ").map(Number);
function ConveyorBelt(N, K, belt) {
  let robots = new Array(2 * N).fill(false); 
  let step = 0;
  let zeroBelt = 0; // 내구도가 0인 칸의 개수

  while (true) {
      step++;

      // 컨베이어 벨트와 로봇 이동
      belt.unshift(belt.pop());
      robots.unshift(robots.pop());
      robots[N - 1] = false; // 내리는 위치에서 로봇 제거

      // 로봇 이동
      for (let i = N - 2; i >= 0; i--) { // N-2는 로봇이 이동할 수 있는 최대 위치, 역순으로 이동해야 올바르게 이동이 가능하기에 --로 구현
          if (robots[i] && !robots[i + 1] && belt[i + 1] > 0) {
              robots[i] = false;
              robots[i + 1] = true;
              belt[i + 1]--;
              if (belt[i + 1] === 0) {
                zeroBelt++;
              }
          }
      }
      robots[N - 1] = false; // 이동 후 다시 한 번 내리는 위치에서 로봇 제거

      // 새로운 로봇 추가
      if (belt[0] > 0) {
          robots[0] = true;
          belt[0]--;
          if (belt[0] === 0) {
            zeroBelt++;
          }
      }

      // 내구도 0인 칸의 개수 확인
      if (zeroBelt >= K) {
          break;
      }
  }

  return step;
}

console.log(ConveyorBelt(N, K, belt));