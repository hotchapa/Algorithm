const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// Input 처리
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.split(" ").map((value) => +value));

// 행과 열 크기
const [N, M] = input.shift();
// 그림 
const picture = input;

// 상하좌우 이동을 위한 dirX,Y 설정
const dirX = [0, -1, 0, 1];
const dirY = [-1, 0, 1, 0];

// 전체 그림의 개수, 가장 큰 그림의 넓이
let numberOfPictures = 0;
let largestSize = 0;

// BFS
const bfs = (n, m) => {
    let currentSize = 1;
    const queue = [[n, m]];
    picture[n][m] = 0;

    // 큐에 값이 남아있는 동안 반복
    while (queue.length) {
        const [currentN, currentM] = queue.shift();

        // 상하좌우 좌표 확인!
        for (let i = 0; i < 4; i++) {
            const newN = currentN + dirX[i];
            const newM = currentM + dirY[i];

            // 새로운 좌표가 범위 안에 있고, 값이 1인 경우 큐에 추가하고 그림 크기 증가
            if (newN >= 0 && newM >= 0 && newN < N && newM < M &&
                picture[newN][newM]
            ) {
                queue.push([newN, newM]);
                picture[newN][newM] = 0;
                currentSize++;
            }
        }
    }

    return currentSize;
};

// 순회하면서 값을 확인후 BFS 실행
for (let n = 0; n < N; n++) {
    for (let m = 0; m < M; m++) {
        if (picture[n][m]) {
            numberOfPictures++;
            const currentSize = bfs(n, m);

            // 가장 큰 그림의 넓이 갱신
              if (currentSize > largestSize) largestSize = currentSize; 
        }
    }
}

// 정답 출력
console.log(numberOfPictures);
console.log(largestSize);
