const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const t = input.shift()*1;
// 11의 배수인 초콜릿을 전부 미리 넣어둔 후 펠린드롬 여부를 판단하는 건 비효율적이다 못해 불가능함
// 그때 그때 여부 판단하는 방식으로 ㄱ
// 답이 여러 가지라면 아무거나 출력?



// 2자리일때        짝 
// 11
// 22
// 33
// 44
// 55
// 66
// 77
// 88
// 99

// 3자리일 때     홀
// 110
// 121
// 133
// 144
// 155
// 166
// 177
// 188
// 199
// 210
// 221
// 232
// 243
// 254
// 256
// ...
// 990


// 4자리일때    짝
// 1001
// 1012
// 1023
// 1034
// 1045
// ...
// 9999


// 5자리일때      홀
// 10010
// 10021
// 10032
// ...


// 규칙을.....찾아보자


function soluction(n){
  if(n==1){
    return 0;
  }
  if(n==2){
    return 11;
  }
  if(n==3){
    return 121;
  }
  if(n>=4){
    let answer = '1'
    if(n%2 != 0){ // 홀수면
        for(let i = 0; i< n-2; i++){
          answer += '2';
        }
      answer += '1';
      return answer;
    }
    if(n%2 == 0){ // 짝수면
      for(let i = 0; i < n-2; i++){
        answer += '0';
      }
      answer += '1';
      return answer;
    }
  }
}

for(let tc = 0; tc<t; tc++){
    let num = input.shift()*1;
    console.log(soluction(num));
}
