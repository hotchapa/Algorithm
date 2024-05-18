const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let N = Number(input.shift());
let StackUp = [];
let StackDown = [];
let answer = 0;

input = input.map(v => v.split(' ').map(Number));

// 기둥의 가로축 기준 위치로 정렬
input.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < input.length; i++) {
      	// 오름차순 정렬
        if (StackUp.length) {
            if (StackUp[StackUp.length - 1][1] < input[i][1]) {
                StackUp.push(input[i]);
            }
        } else {
            StackUp.push(input[i]);
        }
		// 내림차순 정렬
        while (StackDown.length) {
            if (StackDown[StackDown.length - 1][1] < input[i][1]) {
                StackDown.pop();
            }else break;
        }
        StackDown.push(input[i]);
    }
    
	// 가장 높은 기둥 기준 왼쪽 부분 넓이 계산
    for (let i = 0; i < StackUp.length - 1; i++) {
        answer += (StackUp[i + 1][0] - StackUp[i][0]) * StackUp[i][1];
    }
	// 가장 높은 기둥 기준 오른쪽 부분 넓이 계산
    for (let i = 0; i < StackDown.length - 1; i++) {
        answer += (StackDown[i + 1][0] - StackDown[i][0]) * StackDown[i + 1][1];
    }
	// 가장 높은 기둥의 넓이만큼 더해줘야함
	answer += StackDown[0][1];
    console.log(answer);