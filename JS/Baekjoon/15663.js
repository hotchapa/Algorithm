const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(x => +x);
let numbers = input.shift().split(" ").map(x => +x).sort((a, b) => a - b); // 주어진 수를 오름차순으로 정렬
let selected = [];
let answer = "";
let visited = Array(n).fill(false); // 방문 여부를 확인하는 배열

function dfs(depth) {
    if (depth === m) {
        answer += selected.join(" ") + "\n";
        return;
    }

    let prev = null; // 이전에 선택한 수를 기억하여 중복을 방지
    for (let i = 0; i < n; i++) {
        if (!visited[i] && numbers[i] !== prev) { // 방문하지 않았고, 이전에 선택한 수와 다를 때
            visited[i] = true; // 방문 처리
            selected.push(numbers[i]);
            prev = numbers[i]; // 이전 수 업데이트
            dfs(depth + 1);
            selected.pop(); // 원소 선택 취소
            visited[i] = false; // 방문 처리 해제
        }
    }
}

dfs(0);
console.log(answer.trim());
