// 문제 : 박스 채우기
// 알고리즘 : 그리디
// 풀이
// 큰 큐브는 항상 자기보다 작은 큐브로 채울 수 있다.
// 최대한 큰 큐브부터 박스에 넣고, 다음 크기의 큐브도 넣을 수 있는지 단계적으로 확인한다.
// 4*4*4 큐브가 몇개 들어갈 수 있는지, 2*2*2 큐브가 몇 개 들어갈 수 있는지 등등


const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [len, w, h] = input[0].split(" ").map(x => +x);
let cubes = Array(20).fill(0);



function nearestSquare(x){ // x보다 작거나 같으면서 가장 가까운 2^i를 찾는 함수
  let i = 1;
  while ((2 ** i) <= x){
    i += 1;
  }
  return i-1;
}

let size = 19;
size = nearestSquare(len);
size = Math.min(size, nearestSquare(w));
size = Math.min(size, nearestSquare(h));

let res = 0;
let used = 0;

let n = input[1] * 1;
for(let i=2; i <= n+1; i++){
  let a = Number(input[i].split(" ")[0])
  let b = Number(input[i].split(" ")[1])
  cubes[a] = b;
}

for (let i = size; i >= 0; i--){
  used *= 8; // 채널, 너비, 높이가 2씩 줄었으므로 큐브 개수는 8배 증가
  cur = (2 ** i) // 현재 정육면체의 길이
  let required = parseInt(len / cur) 
    * parseInt(w / cur)
    * parseInt(h / cur)
    -used;

  let usage = Math.min(required, cubes[i]); // 이번 단계에 넣을 수 있는 큐브의 개수
  res += usage;
  used += usage;
}

if(used == len * w * h){ // 박스를 가득 채운 경우
  console.log(res);
} 
else{ // 채우지 못한 경우
  console.log(-1);
}