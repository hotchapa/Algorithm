
// 어떤 A가 다른 B랑 2-친구가 되려면
// A,B가 친구거나, A와 B와 친구인 C가 있어야 한다

// 즉, 둘이 친구(A,B)거나, 같이 아는 친구(C)가 있어야한다는 것
// A와 B가 친구면, B와 A도 친구이고, A와 A는 친구가 아니다.

// 2-친구가 도대체 어디서 나온 말인지 감이 안잡히지만, 일단 그래프로 나타내서 풀이해보자.
// 테스트 케이스 3번을 예를 들면,

// 1번 노드는 친구가 1명,
// 2번은 3명, 3번은 4명, 4번은 3명, 5번은 1명이 된다.


const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().split("\n");
const n = input[0]*1
const arr = [];

for(let i=1; i<=n; i++){
  arr.push(input[i].split(""))
}

let graph = Array.from({length : n+1}, ()=> Array(n+1).fill(1e9));


for (let i = 1; i<=n; i++){
  for(let j=1; j<=n; j++){
    if(arr[i-1][j-1] == "Y"){
      graph[i][j] = 1;
    }
  }
}

console.log(graph)

for(let k = 1; k<=n; k++){
  for(let i = 1; i<=n; i++){
    for(let j = 1; j<=n; j++){
      let cost = graph[i][k] + graph[k][j];
      if(graph[i][j] > cost){
        graph[i][j] = cost;
      }
    }
  }
}

console.log(graph)
let maxFriends = 0; 

for (let i = 1; i <= n; i++) {
    let count = 0; 
    for (let j = 1; j <= n; j++) {
        if (i != j && graph[i][j] <= 2) {
            count++; // i와 j가 2-친구이면 카운트를 증가
        }
    }
    maxFriends = Math.max(maxFriends, count); 
}
console.log(maxFriends); 





