const fs =require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [n,k] = input[0].split(" ").map(Number)
let contry = [];
for(let i = 1; i<n+1; i++){
  contry.push(input[i].split(" ").map(Number))
}
contry.sort((a,b)=> {
  if (a[1] !== b[1]) return b[1] - a[1];
  if (a[2] !== b[2]) return b[2] - a[2];
  return b[3] - a[3];
});

let rank = 1; // 현재 등수
let same_rank_count = 0; // 동점 국가 수

for(let i = 0; i<n; i++){
  // 이전 국가와 메달 수가 같지 않은 경우, 등수를 현재까지 순회한 국가의 수로 결정
  if (i > 0 && 
    (
      contry[i][1] !== contry[i-1][1] || 
      contry[i][2] !== contry[i-1][2] || 
      contry[i][3] !== contry[i-1][3]
    )) 
    {
    rank += same_rank_count;
    same_rank_count = 0;
  }
  
  // 찾고자 하는 국가를 찾은 경우, 현재 등수를 출력
  if(contry[i][0] == k){
    console.log(rank);
    break;
  }
  
  same_rank_count++;
}
