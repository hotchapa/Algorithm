# **오늘의 알고리즘 풀이**
### 2024-04-17 (수)
---

문제이름|알고리즘|난이도|링크|
|:---:|:---:|:---:|:---:|
|[농장 관리](https://www.acmicpc.net/problem/1245)|<span style="color:orange">**DFS**</span>|골드 5|[풀이](https://github.com/hotchapa/Algorithm/blob/bdc2f34218141f58ec05e16cc6ae55ce6806dae2/JS/Baekjoon/1245.js)|


## 문제 풀이 과정 정리

### 1. 답지 참고 여부 및 고민한 시간
- 보지 않음
- 2시간

### 2. 도전한 풀이 방법과 선택 이유

인접한 격자의 집합을 찾고, 봉우리가 아닌지 여부를 판단하는 문제이므로, 그래프 이론에 해당하는 `DFS`나 `BFS`를 생각했는데, 개인적으론 BFS보다 DFS로 풀이하는 게 익숙하여 `DFS`로 풀었다.

거기다 N과 M의 값이
`N(1 < N ≤ 100), M(1 < M ≤ 70)`
이므로, 상당히 자비롭다. 그래서 DFS로 풀이해도 시간초과가 날 것 같진 않다고 생각해 DFS로 풀이했다.

### 3. 풀이 방법

  1. DFS로 풀이하기 위해, 방향 설정을 위한 `dx,dy` 배열을 만들고, 중복 탐색을 막기 위해 `visited` 배열도 초기화한다.

  2. dfs 함수는, 호출되자마자 방문여부를 갱신하고, 우선 `isPeak`을 `ture`로 둔다. 

  3. for문을 통해 8방향 탐색을 시작하는데, 탐색 범위가 벗어나지 않는 선에서 진행하고, `arr[ny][nx]`가 `arr[y][x]`보다 크면 봉우리가 아니므로 `isPeak`을 `false` 처리한다.

  4. 만약 `arr[ny][nx]`와 `arr[y][x]`이 같다면, 같은 집합에 속하는 지 판별해야 하기 때문에, 재귀호출한다.

  이를 통해 같은 높이인 봉우리를 탐색하고, 그때마다 8방향 중 `하나라도 높이가 높은 곳이 있으면 바로 false 처리`가 가능하게끔 구현한다. 만약, 이어져 있으면서 `같은 높이인 봉우리를 다 탐색하고도 주변에 더 높은 값이 없으면, 최종적으로 ture를 반환`하게 된다.

  5. 이중 for문으로, 방문하지 않은 영역만 dfs를 호출한다.

### 4. 코드 작성 시 신경 쓴 부분

**[y][x]**

N,M은 각각 행과 열을 의미하는데, x,y는 x좌표 y좌표를 의미하니까 arr[x][y]가 아니라, arr[y][x]로 접근해야한다. 2차원 배열 문제를 풀 때, 자꾸 이 부분을 망각하는 경우가 있어서 이번엔 신경쓰면서 풀이했다.

### 5. 어려움을 느꼈던 부분 

<img width="50%" src="./JS/Baekjoon/01.png"/>

**방향 설정**

인접한 격자라길래, 처음에 4방향만 고려했었다. 그래서 자꾸 답이 틀리게 나와서 진이 빠졌는데.. 문제를 다시보니까

`(여기서 "인접하다"의 정의는 X좌표 차이와 Y좌표 차이 모두 1 이하일 경우로 정의)`

라는 설명이 있었다. 결국 문제를 다시 읽고 그림까지 그려가며 내린 결론은, 8방향까지 고려해야한다는 것이었다. 이후 dx,dy를 수정하여 문제를 제대로 풀 수 있었다.

