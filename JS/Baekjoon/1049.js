
// N은 끊어진 기타줄 개수, M은 기타줄 브랜드 개수
// 6개 세트로 살 수도 있고, 낱개로 살수도 있음
// 되도록 돈을 적게 쓰려고 함  --> 최소값
// 12 3 은 6개 세트로 샀을때 12원이고, 낱개로 사면 3원이라는 뜻 
// 세트로만 사는 경우
// 낱개로만 사는 경우
// 필요한 만큼만 세트로 사고 나머지를 낱개로 사는 경우
// 위와 같이 3가지 경우로 나눠서 계산해야함



// 그래도 틀렸다길래 반례를 찾아봄
// 몫 * min0 + 나머지 * min1 이 최소인 경우
// (몫+1) * min0이 최소인 경우
// n * min1이 최소인 경우
// 로 나눠서 계산해보니 맞음


// 몫 * min0 (세트 가격의 최소값) + 나머지 * min1 (개별 가격의 최소값)이 최소인 경우 이 경우는 세트를 최대한 많이 사고, 나머지 부분은 개별로 사는 경우 이렇게 하면 세트의 가격이 저렴할 때 최소 비용으로 구매할 수 있음
// (몫+1) * min0 (세트 가격의 최소값)이 최소인 경우 이 경우는 세트를 하나 더 사는 것이 나머지 부분을 개별로 사는 것보다 저렴할 때 발생함. 즉, 세트 하나의 가격이 개별 가격의 합보다 저렴한 경우
// n * min1 (개별 가격의 최소값)이 최소인 경우 이 경우는 모든 물건을 개별로 사는 것이 가장 저렴할 때 발생함. 즉, 세트 가격이 개별 가격의 합보다 비싼 경우.


const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let info = [];
let [n, m] = input.shift().split(" ").map(Number);

for(let j=0; j<m; j++){
  info.push(input[j].split(" ").map(Number))
}

let min0 = 1e9;  // 세트 가격의 최소값
let min1 = 1e9;  // 개별 가격의 최소값

for(let i =0; i<info.length; i++){
  min0 = Math.min(info[i][0], min0);
  min1 = Math.min(info[i][1], min1);
}

let quotient = Math.floor(n / 6);
let remainder = n % 6;

let case1 = quotient * min0 + remainder * min1;
let case2 = (quotient + 1) * min0;
let case3 = n * min1;

// 세 경우 중에서 가장 작은 값을 선택
let cost = Math.min(case1, case2, case3);

console.log(cost);
