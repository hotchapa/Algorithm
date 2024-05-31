const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const directions = [
  [-1, 0], [0, -1], [1, 0], [0, 1]
];

const N = Number(input[0]);
const K = Number(input[1]);
const orgBoard = [];
const initialBoard = Array.from({ length: N }, () => Array(N).fill(0));
const currentBoard = Array.from({ length: N }, () => Array(N).fill(0));
const bullets = [];

for (let i = 2; i < 2 + N; i++) {
  orgBoard.push(input[i].split(' ').map(Number));
}

input[2 + N].split(' ').forEach(num => bullets.push(Number(num)));

let maxScore = 0;


function copyBoards() {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      currentBoard[i][j] = orgBoard[i][j];

      if (orgBoard[i][j] >= 10) {
        initialBoard[i][j] = 0;
      } else {
        initialBoard[i][j] = orgBoard[i][j];
      }
    }
  }
}

function play(order) {
  copyBoards();
  let score = 0;

  for (let bullet = 0; bullet < K; bullet++) {
    score += bang(bullets[bullet], order[bullet]);
  }

  return score;
}

function bang(bulletPower, row) {
  let score = 0;

  for (let col = 0; col < N; col++) {
    if (currentBoard[row][col] === 0) {
      continue;
    }

    if (currentBoard[row][col] >= 10) {
      score += currentBoard[row][col];
      currentBoard[row][col] = 0;
      break;
    }

    currentBoard[row][col] -= bulletPower;
    if (currentBoard[row][col] > 0) {
      break;
    }

    const initialPower = initialBoard[row][col];
    score += initialPower;

    initialBoard[row][col] = 0;
    currentBoard[row][col] = 0;

    makeTarget(row, col, Math.floor(initialPower / 4));
    break;
  }

  return score;
}

function makeTarget(row, col, initialPower) {
  if (initialPower === 0) {
    return;
  }

  for (const [dx, dy] of directions) {
    const ni = row + dx;
    const nj = col + dy;

    if (ni < 0 || nj < 0 || ni >= N || nj >= N || currentBoard[ni][nj] > 0) {
      continue;
    }

    initialBoard[ni][nj] = initialPower;
    currentBoard[ni][nj] = initialPower;
  }
}
function permWithRepetition(count, order) {
  if (count === K) {
    maxScore = Math.max(maxScore, play(order));
    return;
  }
  console.log(order)
  for (let row = 0; row < N; row++) {
    order[count] = row;
    permWithRepetition(count + 1, order);
  }
}

permWithRepetition(0, new Array(K).fill(0));

console.log(maxScore);
