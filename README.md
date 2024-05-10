# **오늘의 알고리즘 풀이**
### 2024-05-10 (금)
---

문제이름|알고리즘|난이도|링크|
|:---:|:---:|:---:|:---:|
|[옥상 정원 꾸미기](https://www.acmicpc.net/problem/6198)|<span style="color:red">**스택**</span>|골드 5|[풀이](https://github.com/hotchapa/Algorithm/blob/a08878598bfe59894d47656c39b27221e3e051f6/JS/Baekjoon/6198.js)|


## 문제 풀이 과정 정리

### 1. 답지 참고 여부 및 고민한 시간
- 봄
- 60분

### 2. 도전한 풀이 방법과 선택 이유
  N의 범위가 8만이나 되기 때문에 단순 탐색으로는 풀 수 없을 것으로 판단했다.그 다음으로 생각한게 억지로 DFS 순회를 해보는 것이었는데, 이 역시 배열 내 각 요소에 대하여 다음 요소들을 순회하면서 비교를 진행하는 구조라, 사실상 각 요소마다 나머지 배열을 순회하는 것과 비슷할 것이고 시간 복잡도도 최악의 경우 𝑂(𝑁2)이 될 수 있어 적절한 선택이 아니었다.
  결국 답지를 찾아봤더니, 단조스택을 활용한 풀이가 많았다. 처음 보는 개념이라 오히려 답지 보길 잘 했다는 생각이 들었다.

### 3. 풀이 방법

  1. 건물의 높이를 첫 번째부터 확인함
  2. 만약 스택의 최상단보다 다음 값이 클 경우 pop 진행
  3. 그렇지 않다면 현재 건물을 push한다
  4. answer에 스택의 길이에서 1을 뺀 값을 더한다.

### 4. 코드 작성 시 신경 쓴 부분

shift는 시간 복잡도 문제로 지양하기로 했었는데, 지금 문제와 같이 단순한 형태의 입력값에는 나쁘지 않은 선택인 것 같다. 입력값 형태에 따라 유동적으로 활용해나가면 좋겠다.

### 5. 어려움을 느꼈던 부분 

**[단조 스택]**

브루트포스로 안되고, DFS로 안되면, 어떻게 해야할까? 고민했는데, 스택을 활용해서 풀 생각 자체를 못했다.그래서 결국 답지를 보았고, Monotonic Stack을 알게 됐는데 이것을 이해하는데도 시간이 좀 걸렸다. 결국 풀이 방법 자체를 고민하고 이해하는 것이 이번 문제 풀이의 어려웠던 부분이었다.

Monotonic Stack 알고리즘은 스택을 오름차순 혹은 내림차순으로 정렬해주는 알고리즘이라고 한다. 배열 자체에는 큰 의미가 없지만 정렬하는 과정에서 얻을 수 있는 정보가 알고리즘 풀이에 유용하게 쓰인다고 한다. 이 문제 같은 경우도 내림 차순으로 건물을 정렬하면, 최상단의 건물을 기준으로 자기 자신을 바라보고 있는 건물의 수를 구할 수 있게 된다. 

주어진 테스트케이스를 단조 스택으로 만들면,
```
[10]
[10,3]
[10,7]
[10,7,4]
[12]
[12,2]
```
이렇게 만들 수 있다.

각 `배열의 길이 -1` 은 최상단의 건물을 기준으로 자기 자신을 바라보고 있는 건물의 수를 뜻하고, 각각의 값은 `0, 1, 1, 2, 0, 1` 로 합 5가 된다. 즉, 단조스택을 이용해서 문제를 풀이할 수 있었던 것인데, 만약 가장 큰 높이의 건물이 갱신되는 횟수를 구하라는 문제였어도 단조스택을 활용해서 풀 수 있었을 것이다. 

즉, 앞으로도 다양하게 활용할 수 있는 알고리즘인 단조스택에 익숙해질 필요가 있겠다.