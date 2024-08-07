// function solution(bandage, health, attacks) {
//   const [castingTime,hps,addHp] = bandage;
//   const attackTimes = [];
//   let answer = 0;

//   for(let x of attacks){
//       attackTimes.push(x[0]);
//   }
  
//   const lastTime = attacks[attacks.length-1][0];
//   let curTime = 0;
//   let curHP = health;
//   let stackedTime = 0;
//   let i = 0;
  
//   while(curTime <= lastTime){
//       console.log(curTime+"째 턴, 체력",curHP+" 남았습니다.")
      
//       stackedTime ++;
//       if (curTime == attackTimes[i]){
//           console.log("attack!")
//           console.log(i+1+"번째 공격")
//           console.log(attacks[i][1]+"만큼 데미지를 입었다")
//           stackedTime = 0;
//           curHP -= attacks[i][1];
//           console.log("남은체력",curHP)

//           if(curHP <= 0){
//             break;
//           }
//           i++;
//           curTime++;
//           continue;
//       }
    
//       if(stackedTime == castingTime){
//           console.log("연속 보너스!!")
//           curHP += addHp;
//           if(curHP >= health){
//               console.log("체력초과!")
//               curHP = health;    
//         }
//           stackedTime = 0;
//       }

//       curHP += hps;
//       if(curHP >= health){
//           console.log("체력초과!")
//           curHP = health;    
//       }
//       curTime ++;
//   }
  
//   if(curHP <= 0){
//     answer = -1;
//   } else{
//     answer =curHP;
//   }

//   return answer;
// }

// console.log(solution([3, 2, 7],20,[[1, 15], [5, 16], [8, 6]]));


function solution(bandage, health, attacks) {
  const [castingTime, hps, addHp] = bandage;
  let currentHealth = health;
  let consecutiveHealingTime = 0;
  let attackIndex = 0;

  // 공격이 끝날 때까지 모든 초를 처리
  for (let currentTime = 1; attackIndex < attacks.length; currentTime++) {
      // 현재 시간이 다음 공격 시간과 일치하면 공격 처리
      if (currentTime === attacks[attackIndex][0]) {
          currentHealth -= attacks[attackIndex][1];  // 체력 감소

          // 체력이 0 이하라면 즉시 종료
          if (currentHealth <= 0) {
              return -1;
          }

          consecutiveHealingTime = 0;  // 연속 성공 시간 초기화
          attackIndex++;  // 다음 공격으로 이동
      } else {
          // 공격이 없을 경우 치료 수행
          consecutiveHealingTime++;
          currentHealth += hps;  // 초당 회복량 적용

          // 최대 체력 이상으로 회복되지 않도록 제한
          if (currentHealth > health) {
              currentHealth = health;
          }

          // 연속 성공 시간이 시전 시간과 같으면 추가 회복
          if (consecutiveHealingTime === castingTime) {
              currentHealth += addHp;

              // 추가 회복 후 최대 체력 이상으로 회복되지 않도록 제한
              if (currentHealth > health) {
                  currentHealth = health;
              }

              consecutiveHealingTime = 0;  // 연속 성공 시간 초기화
          }
      }
  }

  // 모든 공격 후 남은 체력을 반환
  return currentHealth;
}
