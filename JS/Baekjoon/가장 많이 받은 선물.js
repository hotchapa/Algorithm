function solution(friends, gifts) {
  const receiveCount = {};
  const sentCount = {};
  
  friends.forEach(friend => {
      sentCount[friend] = 0;
      receiveCount[friend] = 0;
  })
  
  gifts.forEach(gift =>{
      const [from,to] = gift.split(" ");
      sentCount[from] ++;
      receiveCount[to] ++;
  })
  
  const presentInfo = {};
  
  for(x of friends) {
      presentInfo[x] = 0;   
  }
  
  for(let i =0; i<friends.length; i++){
      for(let j =i+1; j<friends.length; j++){
          // 친구간의 선물 기록 체크를 위한 배열 순회
          const Aman = friends[i]; 
          const Bman = friends[j];
          const AtoB = gifts.filter(gift => gift === `${friends[i]} ${friends[j]}`).length;
          const BtoA = gifts.filter(gift => gift === `${friends[j]} ${friends[i]}`).length;
          
          if(AtoB > BtoA){
              presentInfo[Aman] ++;
          }else if(AtoB < BtoA){
              presentInfo[Bman] ++;
          }else{ // 두 사람이 선물을 주고받은 기록이 하나도 없거나 주고받은 수가 같다면 선물지수를 비교한다
              const AmanCount = sentCount[Aman] - receiveCount[Aman];
              const BmanCount = sentCount[Bman] - receiveCount[Bman];
              
              if(AmanCount > BmanCount){
                presentInfo[Aman] ++;
              } else if (AmanCount < BmanCount){
                presentInfo[Bman] ++;
              }
          }
      }
  }
  
  let maxCount = 0;
  for (const x in presentInfo){
      if(presentInfo[x] > maxCount){
          maxCount = presentInfo[x];
      }
  }
  
  return maxCount;
}