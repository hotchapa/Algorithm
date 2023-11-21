const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// N은 끊어진 기타줄 개수, M은 기타줄 브랜드 개수
// 6개 세트로 살 수도 있고, 낱개로 살수도 있음
// 되도록 돈을 적게 쓰려고 함  --> 최소값
// 12 3 은 6개 세트로 샀을때 12원이고, 낱개로 사면 3원이라는 뜻 


// 테스트 케이스 개수
const [N,M] = input.shift().split(" ");
