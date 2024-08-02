function solution(friends, gifts) {
  // 각 친구가 받은 선물 횟수와 준 선물 횟수를 저장할 객체 초기화
  const receivedCount = {};
  const sentCount = {};

  // 친구 목록을 기반으로 초기화
  friends.forEach(friend => {
      receivedCount[friend] = 0;
      sentCount[friend] = 0;
  });

  // 선물 기록을 순회하여 선물 횟수 카운트
  gifts.forEach(gift => {
      const [from, to] = gift.split(" ");
      sentCount[from]++;
      receivedCount[to]++;
  });

  // 다음 달 예상 선물 수 초기화
  const predictedGifts = {};

  friends.forEach(friend => {
      predictedGifts[friend] = 0;
  });

  // 모든 친구 쌍에 대해 규칙에 따라 선물 예측
  for (let i = 0; i < friends.length; i++) {
      for (let j = i + 1; j < friends.length; j++) {
          const friend1 = friends[i];
          const friend2 = friends[j];

          const giftsFrom1To2 = gifts.filter(gift => gift === `${friend1} ${friend2}`).length;
          const giftsFrom2To1 = gifts.filter(gift => gift === `${friend2} ${friend1}`).length;

          if (giftsFrom1To2 > giftsFrom2To1) {
              predictedGifts[friend1]++;
          } else if (giftsFrom2To1 > giftsFrom1To2) {
              predictedGifts[friend2]++;
          } else {
              const index1 = sentCount[friend1] - receivedCount[friend1];
              const index2 = sentCount[friend2] - receivedCount[friend2];

              if (index1 > index2) {
                  predictedGifts[friend1]++;
              } else if (index2 > index1) {
                  predictedGifts[friend2]++;
              }
          }
      }
  }

  // 가장 많은 선물을 받을 친구의 수 계산
  let maxGifts = 0;
  for (const friend in predictedGifts) {
      if (predictedGifts[friend] > maxGifts) {
          maxGifts = predictedGifts[friend];
      }
  }

  return maxGifts;
}