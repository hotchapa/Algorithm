function solution(users, emoticons) {
  let maxProfit = 0;
  let maxSubScriber = 0;
  const discountOptions = [10,20,30,40];
  
  // 재귀로 조합식 구현
  // 임티가 2개라면,
  // 임티 1가 10 일때 임티 2의 10 20 30 40
  // 임티 1가 20 일때 임티 2의 10 20 30 40
  // 임티 1가 30 일때 임티 2의 10 20 30 40
  // 임티 1가 40 일때 임티 2의 10 20 30 40
  // 4의 제곱 (16)
  
  function solve(index, discounts){
      if(index === emoticons.length){ // 재귀의 끝자락
          let curProfit = 0;
          let curSubScriber = 0;    
          
          users.forEach(([limitDiscount,limitBudget]) => {
              let totalCost = 0;
              for(let i=0; i<emoticons.length; i++){
                  if(discounts[i] >= limitDiscount){
                      totalCost += emoticons[i] * (100-discounts[i])/100
                  }
              }
              
              if(totalCost >= limitBudget){
                  curSubScriber += 1;
              }else{
                  curProfit += totalCost;
              }
          }
          )
          
      // 우선순위 순으로 조건문 생성 : 가장 많은 플러스 서비스 가입
      // -> 가장 많은 판매액
      if(curSubScriber > maxSubScriber ||
        curSubScriber === maxSubScriber && curProfit > maxProfit){
          maxSubScriber = curSubScriber;
          maxProfit = curProfit;
      }
        return;
      }

      discountOptions.forEach(discount => {
          discounts[index] = discount;
          solve(index+1, discounts);
      });
  }
    
  solve(0, Array(emoticons.length).fill(0));
    
  return [maxSubScriber, Math.floor(maxProfit)];
}