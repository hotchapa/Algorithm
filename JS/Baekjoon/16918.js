// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().trim().split("\n");
// const [R,C,N] = input.shift().split(" ").map(x=> +x);
// console.log(R,C,N)
// const map = input
// let temp = Array.from(Array(R), () => new Array(C).fill(0));
// for(i=0; i<R; i++){
//   for(j=0; j<C; j++){
//     if(map[i][j] == "O"){
//       temp[i][j] =1;
//     }
//     }
//   }


// let dx = [1, -1, 0, 0];
// let dy = [0, 0, 1, -1];

// function boom(ci,cj){
//   for(i=0; i<4; i++){
//     if(ci+dx[i]>0 || cj+dy[i]>0 || ci+dx[i] >= R || cj+dy[i]>= C){
//     temp[ci][cj] = 0;
//     temp[ci+dx[i]][cj+dy[i]] = 0;}
//     else{
//       break;
//     }
//   }
// }

// function solution(){
//   for(time=0; time<N; time++){
//     for(i=0; i<R; i++){
//       for(j=0; j<C; j++){
//         if(temp[i][j] === N+1){
//           boom(i,j);
//           continue;
//         }else{
//           temp[i][j] += 1;
//         }
//       }
//     }
//   }
//   console.log(temp);
// }


// solution();

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [R,C,N] = input.shift().split(" ").map(x=> +x);

const map = Array.from({length: R}, () => Array(C).fill(null));
const bombtime = Array.from({length: R}, () => Array(C).fill(0));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let time = 1;

for(let i=0; i<R; i++){
  for(let j=0; j<C; j++){
    map[i][j] = input[i][j];
    if(input[i][j] == "O"){
      bombtime[i][j] = 3;
    }
  }
}

while(time <= N){
  if(time % 2 === 0){
    for(let i=0; i<R; i++){
      for(let j=0; j<C; j++){
        if(map[i][j] === "."){
          map[i][j] = "O";
          bombtime[i][j] = time+3;
        }
      }
    }
  }else{
    for(let i=0; i<R; i++){
      for(let j=0; j<C; j++){
        if(bombtime[i][j] === time){
          map[i][j] = ".";
          for(let k=0; k<4; k++){
            let nx = i + dx[k];
            let ny = j + dy[k];
            if(nx < 0 || ny < 0 || nx >= R || ny >= C) continue;
            if(map[nx][ny] === "O" && bombtime[nx][ny] !== time){
              map[nx][ny] = ".";
              bombtime[nx][ny] = 0;
            }
          }
        }
      }
    }
  }
  time += 1;
}

let answer = "";
for(let i=0; i<R; i++){
  answer += map[i].join("");
  answer += "\n";
}

console.log(answer);
