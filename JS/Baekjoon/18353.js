// 이진탐색
// 가장 긴 증가하는 부분수열을 찾는 문제
// 부분수열은 주어진 수열의 일부 항을 원래 순서대로 나열했을 때 얻을 수 있는 수열
// 현재 원소가 가장 크다면 왼쪽에 삽입하고, 아니라면 최대한 왼쪽의 원소와 교체 (바로 왼쪽이 아니라, 5,8,8,8이라면 5랑 교체하라는 뜻)
// lowerBound를 활용

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = input[0] * 1
let arr = input[1].split(" ").map(x=> +x);
arr.reverse();

// 정렬된 순서를 유지하면서 배열에 삽입할 가장 왼쪽 인덱스를 반환
function lowerBound(arr, target, start, end){
  while(start < end){
    let mid = parseInt((start+end)/2)
    if(arr[mid] >= target)
      end = mid; // 최대한 왼쪽으로 이동
    else start = mid + 1;
  }
  return end;
}



let d = [0];
for(x of arr){
  if (d[d.length -1] < x){
    d.push(x);
  }
  else{
    let index = lowerBound(d,x,0,d.length);
    d[index] = x;
  }
}
console.log(d)
console.log(n - (d.length-1))