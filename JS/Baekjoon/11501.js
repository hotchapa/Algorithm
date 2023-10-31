const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const T = Number(input.shift());

for(let i=0; i<T; i++){
    const N = Number(input.shift());
    const numlist = input.shift().split(" ").map(Number);
    let maxPrice = 0;
    let profit = 0;

    for(let j=N-1; j>=0; j--){
        if(numlist[j] > maxPrice) { // 현재 주식 가격이 지금까지의 최고가보다 높으면 최고가를 갱신
            maxPrice = numlist[j];
        } else { // 현재 주식 가격이 지금까지의 최고가보다 낮으면, 최고가와 현재 가격의 차이를 이익에 더함
            profit += maxPrice - numlist[j];
        }
    }

    console.log(profit); // 각 테스트 케이스별로 이익 출력
}
