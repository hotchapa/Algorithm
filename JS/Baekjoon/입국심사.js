function solution(n, times) {
  var answer = 0;
  let start = 0;
  let end = (Math.max(...times)) * n
  
  while (start <= end){
      let people = 0;
      let mid = parseInt((start+end)/2)
      for(let x of times){
          people += parseInt(mid/x)
      }
      if(people < n){
          start = mid +1
      }
      
      else{
          answer = mid
          end = mid - 1
      }
  }
  return answer;
}


// if 비어있다고 무조건 드가면 안된다.
// [times]에 담긴 원소 길이를 갖는 temp 배열을 생성

// temp 0일땐 심사 가능, 1일땐 심사중 상태로 나타냄
// 1분 지날때마다 times의 시간을 고려해서 temp 배열을 수정한다?
// 시간복잡도가 너무 높지 않을까?
  
// 그리고 이 방법은 비었을때 무조건 심사를 받게하는 로직이므로,
// 최소 시간을 구하는데는 적합하지 않다.

// [심사대]-7 (7, 14, 21, 28)      [심사대]-10 (10, 20)
//             a 0                         b 0
//             c 7                         d 10
//             e 14
//             f 21

// 이게 이분탐색 문제라면, 이분탐색의 mid와 start와 end는 무엇을 기준으로 해야할까?
// 일단 최소 시간을 구해야하는 것이니까, end를 심사하는데 걸리는 최악의 시간으로 둔다.
// times의 최대값에다가 n을 곱하면 최악의 시간이 될 것이다.

// 타겟은 n이 된다. n명이 전부 심사를 받아야하니까.
// 타겟과 비교할 변수는 뭘까? mid일까? 아니다. mid는 최대와 최소시간의 중간값인데 사람의 수와 비교할 수 없다.

// people이라는 변수를 새로 만든다. 그리고 이 값은 mid일때 처리할 수 있는 사람의 수가 될 것이다.
// 그리고 이 people이 n값보다 크거나 같아지면 그때 mid값이 심사하는데 걸리는 최소시간이 될 수 있을것이다.

