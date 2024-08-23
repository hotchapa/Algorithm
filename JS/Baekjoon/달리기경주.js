players = ["mumu", "soe", "poe", "kai", "mine"];
callings = ["kai", "kai", "mine", "mine"];

function solution(players,callings){
  playerInfo = {};
  for(let i=0; i<players.length; i++){
    playerInfo[players[i]] = i;
  }

  for(let call of callings){
    let curIndex = playerInfo[call];
    if(curIndex > 0){
      let prevPlayer = players[curIndex-1];
      players[curIndex-1] = call;
      players[curIndex] = prevPlayer;
      playerInfo[call] -= 1;
      playerInfo[prevPlayer] +=1;
    }
  }

  return players
}

console.log(solution(players,callings));