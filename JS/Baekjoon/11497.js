const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const T = Number(input[0]);

for(let i = 1; i < T*2; i+=2){
  const N = Number(input[i]);
  const arr = input[i+1].split(" ").map(Number);
  const sortArr = arr.sort((a,b) => a - b);
  const newArr = Array(N).fill(0);
  let index = parseInt(N/2);
  let j = 1;

  for(let k = 1; k<=index; k++){
    newArr[index] = sortArr[N-1];
    newArr[index-k] = sortArr[(N-1)-(j++)];
    newArr[index+k] = sortArr[(N-1)-(j++)];
  } 
  
  answer = -1e9;
  for(let x = 0; x<N-1; x++){
    if(answer < Math.abs(newArr[x] - newArr[x+1])){
      answer = Math.abs(newArr[x] - newArr[x+1]);
    }
  }
  console.log(answer)
}



// const fs = require("fs");
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split("\n");
// const T = Number(input[0]);

// for (let i = 1; i <= T * 2 - 1; i += 2) {
//   const N = Number(input[i]);
//   const arr = input[i+1].split(" ").map(Number).sort((a, b) => a - b);
//   const newArr = Array(N);

//   // 좌우 교차 배치 로직
//   let left = 0, right = N - 1;
//   for (let j = 0; j < N; j++) {
//     newArr[j] = j % 2 === 0 ? arr[left++] : arr[right--];
//   }

//   // 최대 높이 차 계산
//   let maxDifference = 0;
//   for (let j = 0; j < N; j++) {
//     const diff = Math.abs(newArr[j] - newArr[(j + 1) % N]); // 원형 배열 고려
//     maxDifference = Math.max(maxDifference, diff);
//   }

//   console.log(maxDifference);
// }
