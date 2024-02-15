function solution(picks, minerals) {
  // 곡괭이 객체를 생성해서 picks에 있는 종류당 개수만큼 해당 곡괭이를 배열에 담는다.
  // 곡괭이는 5번 사용하면 종류와 관게없이 부숴진다.
  // 곡괭이 종류와 광물 종류에 따라 축적되는 피로도가 다르다.
  // 곡괭이가 다 부숴지든가, 광물을 다 캘때까지 작업을 반복한다.
  // 단, 최소한의 피로도로 광물을 캐내야한다.
  // 같은 등급의 곡괭이로 캐는 게 베스트 (5배씩 차이남)

  // 곡괭이 개수와 곡괭이 종류별 소모 피로도 정리
let  picksCount = { 'diamond' : picks[0], 'iron' : picks[1], 'stone' : picks[2]}
const fatigue = {
                    'diamond' : {'diamond' : 1, 'iron' : 1, 'stone' : 1}, 
                    'iron' : {'diamond' : 5, 'iron' : 1, 'stone' : 1}, 
                    'stone' : {'diamond' : 25, 'iron' : 5, 'stone' : 1} 
                    };

let answer = 0;
let totalPickCount = picks.reduce((a,b) => a+b);

  // 작업 반복
  // 곡괭이별로 피로도 계산 후 최적의 곡괭이를 찾아내고, 다쓰고나면 목록에서 없애고 반복하기
while (minerals.length > 0 && totalPickCount> 0) {
let curMineral = minerals[0];
let curPick = null
let minFatigue = 1e9; 

      for (let x in picksCount){
          if(picksCount[x] > 0){
              let temp = 0;
              for (let i = 0; i<5; i++){
                  if(minerals[i]){
                      temp += fatigue[x][minerals[i]]
                  }
              }
              if (temp < minFatigue){
                  minFatigue = temp;
                  curPick = x;
              }
          }
      }
      
      if (curPick == null) {
          break;
      }
      
      answer += minFatigue;
      picksCount[curPick] --;
      totalPickCount --;
      minerals.splice(0,5)
  }
  
  return answer;
}