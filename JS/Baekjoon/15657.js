const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
let numList = input[1].split(" ").map(Number);
numList.sort((a, b) => a - b);

let result = [];
let output = [];

function dfs(depth, start) {
    if (depth === M) {
        result.push(output.join(" "));
        return;
    }
    
    for (let i = start; i < N; i++) {
        output.push(numList[i]);
        dfs(depth + 1, i);  
        output.pop();
    }
}

dfs(0, 0);

console.log(result.join("\n"));
