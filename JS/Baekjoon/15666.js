// 숫자를 정렬하고 중복을 허용
// M개를 뽑는 조합을 찾아야 함
// 백 트래킹으로 M개의 숫자를 선택하는 모든 경우를 탐색
// 비내림차순인지 확인 후 만족하면 결과에 삽입

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number).sort((a, b) => a - b);

const output = [];
const result = new Set();

function dfs(start, depth) {
    if (depth === M) {
        const sequence = output.join(" ");
        result.add(sequence);
        return;
    }
    for (let i = start; i < N; i++) {
        output.push(numbers[i]);
        dfs(i, depth + 1); // 현재 선택한 숫자의 인덱스를 그대로 넘겨줌
        output.pop();
    }
}

dfs(0, 0);
console.log(Array.from(result).join("\n"));
