// 도시의 치킨 거리는 모든 집의 치킨 거리의 합이다.

// 집을 기준으로 거리가 형성되므로 만약 집(1)이라면, dfs 를 실행하여
// 최소 거리를 구한 뒤 배열에 따로 저장한다.
// 맵을 다 돌고나면, 저장된 배열의 값을 다 더해서 출력한다.
// 이렇게 풀려고 했는데, 이러면 남길 집의 경우의 수를 고려할 수 없다


// 따라서 집과 치킨집의 위치를 파악하고, 
// 남길 치킨집의 모든 조합을 구한 후, 
// 각 조합에 대해 치킨 거리를 계산하는 방향으로 풀이한다.


const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n');
let [n, m] = input[0].split(' ').map(Number); 
let map = Array.from(Array(n), () => Array(n).fill(0));
let house = []; // 집 위치 저장
let chicken = []; // 치킨집 위치 저장
let result = Infinity; // 결과값을 저장할 변수, 초기값은 무한대

// 맵 정보 입력 받기
for(let i=0; i<n; i++){
    map[i] = input[i + 1].split(' ').map(Number);
    for(let j=0; j<n; j++){
        if(map[i][j] == 1) house.push([i, j]);
        else if(map[i][j] == 2) chicken.push([i, j]);
    }
}

// 거리 계산 함수
function getDist(a, b){
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}

// dfs를 사용하여 치킨집 조합 생성
function dfs(cnt, idx){
    if(cnt == m){
        let sum = 0;
        for(let h of house){
            let min = Infinity;
            for(let c of select){
                let dist = getDist(h, c);
                min = Math.min(min, dist);
            }
            sum += min;
        }
        result = Math.min(result, sum);
        return;
    }
    for(let i=idx; i<chicken.length; i++){
        select.push(chicken[i]);
        dfs(cnt + 1, i + 1);
        select.pop();
    }
}

let select = [];
dfs(0, 0);
console.log(result);
