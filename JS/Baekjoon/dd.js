
// let n= 6;
// let build_frame = [[0,0,0,1],[2,0,0,1],[4,0,0,1],[0,1,1,1],[1,1,1,1],[2,1,1,1],[3,1,1,1],[2,0,0,0],[1,1,1,0],[2,2,0,1]]
// answer = [[]];
// let arr = Array.from({length:n}, ()=> Array(n).fill(-5));

// for(let i = 0; i < build_frame.length; i++){  
//   let [x,y,a,b] = build_frame[i]
//   if(b == 1){
//     if(a == 1 && arr[n-y][x] == 1 || arr[n-y-1][x-1] == 0 ){
//       arr[n-y-1][x] = a;
//       answer.push([x,y,a])
//     }
//       arr[n-y-1][x] = a;
//       answer.push([x,y,a])
//   }
//   if(b == 0){
//     if(a == 1 && arr[n-y][x] == 1 || arr[n-y-1][x-1] == 0 ){
//       arr[n-y-1][x] = -5;
//   }
//   else{
//     continue;
//   }
// }
// }

// answer.sort((a,b) =>a[0]-b[0]);
// console.log(answer)

// // 0은 기둥 1은 보


function solution(n, build_frame) {
  let answer = [];

  function canInstall(x, y, a) {
      // 기둥 설치 조건 검사
      if (a === 0) {
          if (y === 0 || answer.some(frame => frame[0] === x && frame[1] === y - 1 && frame[2] === 0) || 
              answer.some(frame => (frame[0] === x - 1 && frame[1] === y && frame[2] === 1) || (frame[0] === x && frame[1] === y && frame[2] === 1))) {
              return true;
          }
      } else if (a === 1) { // 보 설치 조건 검사
          if (answer.some(frame => frame[0] === x && frame[1] === y - 1 && frame[2] === 0) || 
              answer.some(frame => frame[0] === x + 1 && frame[1] === y - 1 && frame[2] === 0) || 
              (answer.some(frame => frame[0] === x - 1 && frame[1] === y && frame[2] === 1) && 
               answer.some(frame => frame[0] === x + 1 && frame[1] === y && frame[2] === 1))) {
              return true;
          }
      }
      return false;
  }

  function canDelete() {
      // 삭제 후에도 모든 구조물이 유효한지 확인
      for (let [x, y, a] of answer) {
          // 일시적으로 구조물을 삭제
          let temp = answer.filter(frame => !(frame[0] === x && frame[1] === y && frame[2] === a));
          if (!temp.every(frame => canInstall(frame[0], frame[1], frame[2]))) {
              return false; // 삭제 불가능한 경우
          }
      }
      return true; // 삭제 가능한 경우
  }

  for (let [x, y, a, b] of build_frame) {
      if (b === 1) { // 설치
          if (canInstall(x, y, a)) {
              answer.push([x, y, a]);
          }
      } else if (b === 0) { // 삭제
          let index = answer.findIndex(frame => frame[0] === x && frame[1] === y && frame[2] === a);
          if (index !== -1) { // 구조물이 존재하는 경우
              let removed = answer.splice(index, 1)[0];
              if (!canDelete()) { // 삭제 후 유효하지 않은 경우 다시 추가
                  answer.push(removed);
              }
          }
      }
  }

  return answer.sort((a, b) => a[0] === b[0] ? (a[1] === b[1] ? a[2] - b[2] : a[1] - b[1]) : a[0] - b[0]);
}
