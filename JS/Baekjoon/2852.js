// 각 팀의 점수 변화를 추적하며, 특정 시점에서 누가 이기고 있는지를 판단
// split 유의
// padStart 활용이 관건

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = input[0];
let times = input.slice(1).map(x => x.split(' '));

let score = [0, 0];
let time = [0, 0];
let last = [0, 0];

for(let i=0; i<n; i++){
    let t = times[i][1].split(':').map(x => +x);
    let team = times[i][0]==1 ? 0 : 1;
    if(score[0] != score[1]){
        let lead = score[0]>score[1] ? 0 : 1;
        time[lead] += (t[0] - last[0])*60 + (t[1] - last[1]);
    }
    last = t;
    score[team]++;
}

if(score[0] != score[1]){
    let lead = score[0]>score[1] ? 0 : 1;
    time[lead] += (48 - last[0])*60 + (0 - last[1]);
}

console.log(time.map(v => String(Math.floor(v/60)).padStart(2, '0')+':'+String(v%60).padStart(2, '0')).join('\n'));
