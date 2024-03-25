# **오늘의 알고리즘**
### 2024-03-25 (월)
---

문제이름|알고리즘|난이도|링크|
|:---:|:---:|:---:|:---:|
|[미세먼지 안녕!](https://www.acmicpc.net/problem/17144)|<span style="color:green">**Simulation**</span>, <span style="color:orange">**Implementation**</span>|골드4|[풀이](https://github.com/hotchapa/Algorithm/blob/5286885f0d8eab755de2f79af86ca92d911a1f74/JS/Baekjoon/17144.js)|

## 문제 풀이 과정

미세먼지가 확산되고 공기청정기를 통해 순환되는 과정을 시뮬레이션하는 문제였다.

### 1) 입력 처리 및 초기화
- 방의 크기, 공기청정기의 작동 시간, 방에 있는 미세먼지의 정보를 입력 받는다.
- 각 위치별로 미세먼지 양을 저장할 배열과 공기청정기의 위치를 찾아 저장한다.

### 2) 미세먼지 확산
- 방 안의 모든 미세먼지에 대해 주변 4방향으로 확산시킨다.
- 확산되는 양은 기존 미세먼지 양의 1/5이며, 확산 후 원래 위치의 미세먼지 양은 감소한다.
- 벽이나 공기청정기가 있는 칸으로는 확산되지 않는다.

### 3) 공기청정기 작동
- 공기청정기의 위쪽은 반시계 방향으로, 아래쪽은 시계 방향으로 공기를 순환시킨다.
- 순환 과정에서 미세먼지는 이동하며, 공기청정기로 들어가는 미세먼지는 정화된다.

### 4) 결과 출력
- T시간 후, 방에 남아있는 미세먼지의 총량을 계산하여 출력한다.

## 풀이 후 느낀점
시뮬레이션 문제의 복잡함과 구현의 어려움을 다시 한 번 느꼈다.
동시에 먼지가 확산한다는 조건을 보고, 깊은 복사를 활용해서 사본 배열을 써야겠다고 결론내리기 까지 많은 시간이 걸렸다. 또 구현 과정에서 어떤 문법을 써야할 지 판단내리기가 어려웠다.맨날 풀이를 다시보고, 또 많은 유형을 접해봐야겠다고 느끼지만.. 오늘 또 느낀다.