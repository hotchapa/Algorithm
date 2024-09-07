function solution(book_time) {
  const answer = [];
  const sortedTime = book_time.sort();
  // 스케줄링을 위해서 예약시간이 빠른 순으로 정렬하기
  for(let time of sortedTime){
      const [[startHour,startMinute],[endHour,endMinute]] = time.map(el => el.split(":")); 
  const start = Number(startHour)*60 + Number(startMinute);
  const end = Number(endHour)*60 + Number(endMinute) + 10;
  // 시작과 종료시간을 분으로 변환, 청소시간 감안해서 종료시간에 10분 추가
  console.log(start,end)
  // 2번 케이스 경우 550,620   620,750 으로 제대로 잘 찍힘
      
  const canUse = answer.findIndex (i => i <= start);
  // 예약된 방 중에서 종료시간 기준으로 시작시간보다 작은 경우가 있는 지 탐색 (중복된 방이 있는지 없는지 탐색)
      
  if (canUse === -1){ // 그런 방이 없으면 새로 추가
      answer.push(end)
  }else{
      answer[canUse] = end; // 그런 방이 있으면 그 인덱스에 종료시간을 업뎃, 이어서 그 방을 쓸거니까
  }
  }
  return answer.length; // 결과출력
}

