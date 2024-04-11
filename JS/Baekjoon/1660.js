const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const N = Number(input[0]);

let dp = new Array(N+1).fill(Infinity); 
dp[0] = 0; 

let tetrahedrons = []; // 사면체 수를 저장할 배열
for (let i = 1; ; i++) {
    let tetrahedron = (i * (i + 1) * (i + 2)) / 6;
    if (tetrahedron > N) break; // N을 초과하는 경우 반복 종료
    tetrahedrons.push(tetrahedron);
}

for (let i = 0; i < tetrahedrons.length; i++) {
    for (let j = tetrahedrons[i]; j <= N; j++) {
        dp[j] = Math.min(dp[j], dp[j - tetrahedrons[i]] + 1);
    }
}

console.log(dp[N]); 