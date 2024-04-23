# **오늘의 알고리즘 풀이**
### 2024-04-23 (화)
---

문제이름|알고리즘|난이도|링크|
|:---:|:---:|:---:|:---:|
|[탑](https://www.acmicpc.net/problem/2493)|<span style="color:red">**스택**</span>|골드 5|[풀이](https://github.com/hotchapa/Algorithm/blob/fb2520f538124dcc69db858ebb819013eef130dc/JS/Baekjoon/2493.js)|


## 문제 풀이 과정 정리

### 1. 답지 참고 여부 및 고민한 시간
- 보지 않음
- 1시간

### 2. 도전한 풀이 방법과 선택 이유
  이중 for문으로 계산을 하려다, 시간초과가 났다. 50만의 제곱이면 이천오백억
  인데, 왜 이런 시도를 했는지 후회된다. 각 탑의 높이를 일일이 비교하며 직접 계산하면 시간 복잡도가 \(O(N^2)\) 이상이 된다. 결국 시간을 줄이기 위해 스택을 사용하기로 했다. 스택을 이용하면 \(O(N)\)에 문제를 해결할 수 있다.

### 3. 풀이 방법

  1. `answer` 배열을 모두 0으로 초기화하여, 각 탑이 신호를 수신하는 탑의 인덱스를 저장한다. 또한, `stack`을 빈 배열로 초기화하여 탑의 인덱스를 저장한다.

  2. \(0\)부터 \(N-1\)까지 반복하면서 각 탑을 처리한다. `stack`이 비어있지 않고, 스택의 맨 위에 있는 탑의 높이가 현재 탑의 높이보다 작은 경우, 스택에서 해당 탑을 제거한다. 이는 더 작은 탑이 더 높은 탑에 의해 가려져 신호를 수신할 수 없기 때문이다.

  3. 반복문 처리 후, 스택에 남아 있는 탑이 있으면 현재 탑의 인덱스를 `answer` 배열에 저장한다. 이는 스택의 탑이 현재 탑으로부터 신호를 수신받는다는 의미다.

  4.  현재 탑의 인덱스를 스택에 추가한다.


### 4. 코드 작성 시 신경 쓴 부분

**[스택의 효율적 사용]**

스택을 이용해 각 탑을 O(1)에, 전체로 치면 O(N)에 처리할 수 있도록 신경 썼다. 

### 5. 어려움을 느꼈던 부분 

**[문제의 이해]**

처음에 탑의 레이저 수신 방식을 어렵게 생각했다. 수신 받은 레이저가 다음 레이저로 이어지는 로직이 필요한 문제인가하며 쓸데없는 고민을 했는데, 그냥 평행으로 레이저를 발사한다는 점에 유의하면 됐다. 