# **오늘의 알고리즘**
### 2024-03-21 (목)
---

문제이름|알고리즘|난이도|링크|
|:---:|:---:|:---:|:---:|
|[친구](https://www.acmicpc.net/problem/1058)|<span style="color:red">**Floyd-Warshall**</span>|실버2|[풀이](https://github.com/hotchapa/Algorithm/blob/ecfad8f10d381e524e9ba707832a4e14df7d4ab3/JS/Baekjoon/1058.js)|

## 문제 풀이 과정

플로이드 워셜 알고리즘을 이용해 각 사람들 간의 2-친구의 최대 수를 구하는 문제였다. 문제의 핵심은 직접 친구거나, 친구의 친구까지 포함하여 가장 많은 2-친구를 가진 사람의 2-친구 수를 찾는 것이다. 이 문제는 모든 사람 쌍 간의 최단 거리(친구 관계의 단계)를 찾아야 하므로 \(N^3\)의 시간 복잡도를 가진 플로이드 워셜 알고리즘으로 해결 가능하다.

### 1) 입력 처리 및 초기화
- 사람의 수 `n`을 입력 받는다.
- `graph` 배열을 이용해 모든 사람 간의 초기 친구 관계를 나타내지 않는 경우 매우 큰 값(1e9)으로 설정한다.
- 각 사람 자신으로 가는 비용은 0으로 설정한다.

### 2) 친구 관계 정보 업데이트
- 직접적인 친구 관계가 있을 경우, 해당 `graph`의 요소를 1로 설정한다.

### 3) 플로이드 워셜 알고리즘 적용
- 모든 사람 쌍에 대하여, 각 사람을 거치는 경우를 고려하여 최소 친구 단계를 계산한다.
- 이 과정에서 각 사람을 거쳐 가는 것이 직접 가는 것보다 친구 관계의 단계가 적을 경우, 해당 단계로 업데이트한다.

### 4) 결과 출력
- 각 사람별로 2-친구의 수를 계산하고, 그 중 최대 값을 찾아 출력한다.

## 풀이 후 느낀점
2-친구를 2 마이너스 친구로 보는 바람에 도대체 무슨 말인지 이해가 안됐었다.
결국 친구의 친구 관계 (2단계) 와 친구인 관계(1단계)를 찾으면 되는 문제였지만 문제 이해에 너무 많은 시간을 썼다.

쉽게 말해서, 이 문제는 친구 관계를 그래프로 표현해서, 각 노드마다 다른 노드까지 도달하는 단계를 구하고, 그 단계가 2이하인 경우를 세어보고, 그 최대값을 구하면 된다는 것이었다.

일반 서적을 읽는 것처럼 문제를 읽을 게 아니라, 알고리즘 문제를 읽는다고 의식하고 읽어 나가야겠다.