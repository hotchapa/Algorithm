// const fs = require("fs");
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split("\n");
// const [N,K]= input.shift().split(" ").map(x=> +x);
// let numList = input.shift().split(" ").map(x=> +x);
// numList.sort((a,b)=> a - b)
// console.log(numList[K-1])


// const fs = require("fs");
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split("\n");
// const [N,K]= input.shift().split(" ").map(x=> +x);
// let numList = input.shift().split(" ")
// numList.sort((a,b)=> a - b)
// console.log(numList[K-1])

const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N,K]= input[0].split(" ").map(x=> +x);
let numList = input[1].split(" ").map(x=> +x);
numList.sort((a,b)=> a - b)
console.log(numList[K-1])


// 두 코드를 비교해보면, 배열에 숫자를 저장할 때 데이터 타입에 차이가 있음
// 첫 번째 코드에서는 숫자로 변환하여 저장하고 있지만, 두 번째 코드에서는 문자열 그대로 저장하고 있음

// 이 차이가 시간 복잡도에 영향을 미침
// 그러나 두 번째 코드에서는 문자열로 저장되어 있으므로, sort 함수는 문자열 비교를 수행하게 되고, 이는 숫자 비교보다 더 많은 시간이 소요됨
// 따라서 같은 입력에 대해 두 번째 코드에서는 첫 번째 코드보다 더 많은 시간이 걸리게 됨

// 그래서 첫 번째 풀이가 통과를 했고, 두 번째 풀이는 통과를 못한 것


// 코드에서 shift() 함수와 [0] 인덱스 접근의 차이는 다음과 같음

// shift()는 배열에서 첫 번째 요소를 제거하고 그 요소를 반환하는 메소드임
// 이 메소드를 사용하면 배열의 크기가 줄어들고, 나머지 요소들의 인덱스가 갱신됨
// 따라서 shift()는 배열의 크기에 따라 시간 복잡도가 O(N)이 됨

// 반면에 [0]는 배열의 첫 번째 요소에 직접 접근하는 방식임
// 이 방식은 배열의 크기에 상관없이 항상 동일한 시간이 걸리므로 시간 복잡도가 O(1)임

// 하지만, 현재 주어진 코드처럼 입력 크기가 크지 않은 경우에는 두 방식의 성능 차이는 크게 느껴지지 않을 수 있음
// 따라서, shift()와 `[0] 중에서 선택하는 것은 주로 개발자의 코딩 스타일이나 특정 상황에 따라 결정하게 됨