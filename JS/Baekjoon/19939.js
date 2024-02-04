// 박 터뜨리기 문제

// 조건
// N개의 공을 K개의 바구니에 빠짐없이 나누어 담는다.
// 각 바구니에는 1개 이상의 공이 들어 있어야 한다.
// 각 바구니에 담긴 공의 개수는 모두 달라야 한다.
// 가장 많이 담긴 바구니와 가장 적게 담긴 바구니의 공의 개수 차이가 최소가 되어야 한다.

// 2 <= N <= 100,000
// 2 <= K <= 1,000

// 만약 입력값이 6, 3 이라면
// 1, 2, 3개씩 바구니 3개에 나눠 담아서
// 가장 많은 바구니와 적은 바구니의 차이가 2가 나오게 할 수 있다.

// 5 3
// 이 경우엔 나눠 담을 수 없다.
// 1,2,1 이것도 안된다 중복되면 안되기 때문.


// 그리디 알고리즘을 활용해보자.
// 첫번째 바구니에 1개를 무조건 넣어본다
// 그다음 1개씩 늘려가며 바구니에 넣어본다
// 이러면 개수가 달라야한다는 조건은 만족한다.

// 최소값으로 만들어야한다는 조건은 어떻게 달성할 수 있을까?
// 만약 공의 개수가 12개, 바구니가 3개라고 치자
// 3,4,5
// 를 넣어야 할 것이다.

// 그럼 무조건 1부터 넣는 로직은 틀렸다.
// 바구니 개수만큼 연속하는 수열을 만들어서 그 합이 공의 개수와 같아질때까지
// 반복하는 로직을 짜야할까?

// 연속하는 값이 아닌, 이런 경우엔 어떡하려고?
// 7,3
// 1,2,4

// 연속하는 수를 넣고, 마지막 수까지 넣었는데, 그 합이 공의 개수에 만족하지 않으면
// 연속하는 수에서 1을 더한 값을 넣는 로직을 짠다면?

// 11, 4
// 1,2,3,5 

// 반례가 있다.
// 19,4 
// 1,2,3,13 <= 이렇게 되면 최소값이 나올 수가 없다.
// 3,4,5,7 <= 이게 답이 되어야 하는데...

// 어떻게 짜야할까?

// N에서 1부터 K까지의 합을 뺀 만큼의 공을 추가로 각 바구니에 분배하면 됨
// 이 때, 분배하는 공의 개수가 K로 나누어 떨어지면, 각 바구니에 동일하게 공을 분배할 수 있음 
// 가장 많이 담긴 바구니와 가장 적게 담긴 바구니의 공의 개수 차이는 K-1이 된다.

// 만약 나누어 떨어지지 않으면, 한 바구니에는 다른 바구니보다 공이 1개 더 많이 들어가므로
// 차이는 K가 된다.

// N이 1부터 K까지의 합 보다 작으면, 나눠 담을 수 없으므로 -1가 된다.


const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, k] = input[0].split(" ").map(x=>+x);
let sum = (k*(k+1))/2;

if (n < sum) {
  console.log(-1);
} else {
  let left = n - sum;
  if (left % k == 0) {
    console.log(k-1);
  } else {
    console.log(k);
  }
}