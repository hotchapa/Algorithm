const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n');
const [N, kimInput, limInput] = input[0].split(" ").map(Number);

function solve(N, kim, lim) {
    let roundNum = 0; // 라운드 번호를 0으로 초기화
    while (kim !== lim) {
        roundNum++; // 다음 라운드 번호
        kim = Math.floor((kim + 1) / 2); // 김 선수의 다음 라운드 번호
        lim = Math.floor((lim + 1) / 2); // 임 선수의 다음 라운드 번호
    }
    return roundNum; // 만나는 라운드 반환
}

console.log(solve(N, kimInput, limInput));
