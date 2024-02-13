// 중복없이 M의 길이를 만족하는 수열을 출력
// 백트래킹 알고리즘
// 방문 처리, 재귀 호출

function dfs(depth,arr,start){
  if (depth == m){
    let result = [];
    for(let i of selected) result.push(arr[i])
    for(let x of result) answer += x + " ";
    answer += "\n"
    return;
  }

  for(let i = start; i < arr.length; i++){
    if (visited[i])
      continue;
      selected.push(i); //현재 원소 선택
      visited[i] = true; // 방문 처리
      dfs(depth+1, arr,i+1) // 다음 인덱스 넣어 재귀호출
      selected.pop(); // 원소 선택 취소
      visited[i] = false; // 방문 처리 취소
  }
}


const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n,m] = input.shift().split(" ").map(x=> +x); // 1부터 N까지 자연수 중에서 중복없이 M개를 고른 조합
let arr = []; // 계산하고자 하는 원소가 담긴 배열
for(let i = 1; i<n+1; i++){
  arr.push(i) 
}
let visited = new Array(n).fill(0); // 방문여부
let selected = []; // 현재 조합에 포함된 원소
let answer = "";


dfs(0,arr,0)
console.log(answer)
