const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = input.shift()*1;
const carInfo = input.map((i)=> i.trim());
const visited = Array(N).fill(false);
const map = new Map();

carInfo.slice(0,N).map((car,idx)=>{map.set(car,idx)});

let cur =0;
let count = 0;

carInfo.slice(N).map((car)=>{
  if(map.get(car) > cur){
    let flag = false;
    for(let i=cur; i<map.get(car); i++){
      if(!visited[i]){
        flag = true;
        count += 1; 
        break;
      }
    }
    if (!flag) cur= map.get(car)+ 1;
    }
    visited[map.get(car)] = true;
  });

console.log(count)

// const inCars = [];
// const outCars = [];

// for(i=0;i<N;i++){
//     inCars.push(input.shift());
// }
// for(i=0;i<N;i++){
//   outCars.push(input.shift());
// }

// console.log(inCars);
// console.log(outCars);
// let count = 0;

// for(i=0;i<N;i++){
//   if(inCars[i] === outCars[i]){
//     continue;
//   }
//   if(inCars[i] !== outCars[i]){
//     count += 1;
//     for(j=0; j<N; j++){
//         inCars[j+1] = inCars[j];
//         break;
//       }
//     }
//   }


// console.log(count)