function solution(video_len, pos, op_start, op_end, commands) {
  // 시간 문자열을 초로 변환
  function timeToSeconds(time) {
      const [mm, ss] = time.split(":").map(Number);
      return mm * 60 + ss;
  }

  // 초를 mm:ss 형식으로 변환
  function secondsToTime(seconds) {
      const mm = Math.floor(seconds / 60).toString().padStart(2, '0');
      const ss = (seconds % 60).toString().padStart(2, '0');
      return `${mm}:${ss}`;
  }

  // 입력값을 모두 초로 변환
  let maxTime = timeToSeconds(video_len);
  let currentTime = timeToSeconds(pos);
  const opStartTime = timeToSeconds(op_start);
  const opEndTime = timeToSeconds(op_end);

  for (let command of commands) {
      // 오프닝 구간에 있으면 오프닝 끝으로 이동
      if (currentTime >= opStartTime && currentTime <= opEndTime) {
          currentTime = opEndTime;
      }

      if (command === "next") {
          currentTime += 10;
          if (currentTime > maxTime) {
              currentTime = maxTime;  // 비디오의 길이를 넘지 않도록
          }
      } else if (command === "prev") {
          currentTime -= 10;
          if (currentTime < 0) {
              currentTime = 0;  // 0분 0초를 넘어가지 않도록
          }
      }

      // 오프닝 구간에 있으면 오프닝 끝으로 이동
      if (currentTime >= opStartTime && currentTime <= opEndTime) {
          currentTime = opEndTime;
      }
  }

  // "mm:ss" 형식으로 변환
  return secondsToTime(currentTime);
}
