// 슬라이딩 윈도우
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

// 인풋 데이터에서 N,d,k,c(접시 수, 초밥 가짓 수, 연속 접시 수, 쿠폰번호), sushies(벨트 위 초밥들)추출
const [N,d,k,c] = input.shift().split(' ').map(x => +x);
const sushies = input.map(x => +x);

// 회전초밥 벨트는 원형이므로 sushies의 첫번째 요소부터 k-1번째 요소까지 추가
for(let i=0; i<k-1; i++){
    sushies.push(sushies[i])    
}

let countTable = Array(d+1).fill(0); // 각 초밥의 개수를 저장할 배열 초기화
let sushiCount = 0; // 먹은 초밥 종류의 개수

// 처음에 k개 만큼의 초밥을 미리 선택한다.
for(let i=0; i<k; i++){
    if(countTable[sushies[i]] === 0) sushiCount++;
    countTable[sushies[i]]++;
}

let maxSushiCount = sushiCount;

// 슬라이딩 윈도우 알고리즘 실행
for(let start=1; start<N; start++){
    if(maxSushiCount <= sushiCount){
        if(countTable[c] === 0) {
            maxSushiCount = sushiCount + 1;
        }
        else {
            maxSushiCount = sushiCount;
        }
    }
    
    countTable[sushies[start-1]]--;
    
    if(countTable[sushies[start-1]] === 0){ 
        sushiCount--;
    }
    
    if(countTable[sushies[start+k-1]] === 0){ 
        sushiCount++;
    }
    
    countTable[sushies[start+k-1]]++;
}

console.log(maxSushiCount);