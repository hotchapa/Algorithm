# **오늘의 알고리즘**
### 2024-03-23 (토)
---

문제이름|알고리즘|난이도|링크|
|:---:|:---:|:---:|:---:|
|[최단경로](https://www.acmicpc.net/problem/1753)|<span style="color:red">**Dijkstra**</span>|골드5|[풀이](https://github.com/hotchapa/Algorithm/blob/8de0b88d2da302bd1ef044586a7d7242960923c1/JS/Baekjoon/1753.js)|

## 문제 풀이 과정

다익스트라 알고리즘을 이용해 주어진 시작점으로부터 다른 모든 정점까지의 최단 거리를 구하는 문제였다. 문제의 핵심은 가중치가 있는 방향 그래프에서 시작점으로부터 각 정점까지 가는데 드는 비용의 최솟값을 찾는 것이다. 우선순위 큐를 활용하여 각 정점까지의 현재까지의 최단 거리를 우선순위로 하여 최단 거리를 갖는 정점부터 탐색하는 방식으로 진행한다.

### 1) 입력 처리 및 초기화
- 정점의 수 `V`와 간선의 수 `E`를 입력 받는다.
- 시작 정점의 번호를 입력 받는다.
- 각 정점마다 인접한 정점과의 거리 정보를 저장할 리스트(또는 배열)를 준비한다.
- 모든 정점까지의 거리를 무한대(`INF`)로 초기화한다. 시작 정점까지의 거리는 0으로 설정한다.

### 2) 다익스트라 알고리즘 구현
- 우선순위 큐를 이용하여 시작 정점부터 탐색을 시작한다.
- 현재 정점에서 인접한 모든 정점에 대하여, 현재 정점을 거쳐 인접 정점으로 가는 거리가 기존에 알려진 인접 정점까지의 거리보다 짧은 경우, 인접 정점까지의 거리를 업데이트한다.
- 우선순위 큐에서 다음 정점을 꺼내 반복한다. 이 과정은 큐가 비어 있을 때까지 계속된다.

### 3) 결과 출력
- 시작 정점으로부터 각 정점까지의 최단 거리를 출력한다. 도달할 수 없는 경우 `INF`를 출력한다.

## 풀이 후 느낀점
JS로 힙을 구현하는 것에 아직도 익숙해지지 못했다. 진짜 힙을 구현해서 문제를 풀이하고 싶은데, 시간을 너무 많이 잡아먹어 큰일이다. 결국 이 문제는 힙 구현이 아닌, 배열을 활용한 임시 방편으로 해결했다. 날 잡고 제대로 구현해보자..