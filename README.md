# **오늘의 알고리즘 풀이**
### 2024-04-10 (수)
---

문제이름|알고리즘|난이도|링크|
|:---:|:---:|:---:|:---:|
|[컨베이어 벨트 위의 로봇](https://www.acmicpc.net/problem/20055)|<span style="color:orange">**시뮬레이션**</span>|골드 5|[풀이](https://github.com/hotchapa/Algorithm/blob/5fd7150e907e1ad29ab167e449ae832b1e1bbf77/JS/Baekjoon/20055.js)|

## 문제 풀이 과정

이 문제는 컨베이어 벨트 위를 순환하는 로봇들의 움직임을 시뮬레이션하는 문제이다. 컨베이어 벨트는 로봇을 올리는 위치와 내리는 위치가 있으며, 로봇이 올라가는 순간 해당 위치의 내구도가 감소한다. 로봇은 앞으로 이동할 수 없을 경우 그 자리에 멈춰 있어야 하며, 컨베이어 벨트와 함께 이동한다. 문제의 목표는 내구도가 0인 칸의 수가 K개 이상이 되기까지 필요한 단계의 수를 찾는 것이다.

1) **초기 설정**: 로봇의 위치를 나타내는 배열과 내구도가 0인 칸의 수를 초기화한다.

2) **컨베이어 벨트와 로봇 이동**: 컨베이어 벨트를 한 칸 회전시키고, 이에 따라 로봇의 위치도 업데이트한다. 내리는 위치에 도달한 로봇은 즉시 내려온다.

3) **로봇 이동 처리**: 로봇이 이동할 수 있는지 확인하고, 가능하다면 이동시킨다. 이동이 가능한 조건은 다음 칸이 비어있고, 그 칸의 내구도가 1 이상인 경우다. 이동 후 해당 칸의 내구도는 감소한다.

4) **새로운 로봇 추가**: 올리는 위치에 새로운 로봇을 올릴 수 있다면 추가한다. 이때 해당 위치의 내구도도 감소한다.

5) **종료 조건 검사**: 내구도가 0인 칸의 수가 K개 이상이 되면 시뮬레이션을 종료한다.

6) **단계 수 반환**: 위 조건을 만족할 때까지 필요한 단계의 수를 반환한다.

## 풀이 후 느낀점
이런 게 시뮬레이션이구나 했다. 자꾸 조건을 빼먹어서 값이 안나오거나, 나와도 테케 3번까지는 맞히는데, 4번 부터는 틀리는 경우도 있었다. 로봇의 이동 조건도 역순으로 처리해서 더 많은 경우를 고려하고, 이동 후 다시 한 번 내리는 위치에서 로봇 제거하는 로직을 추가해서 어찌저찌 풀어냈다. 결국 문제가 요구한 조건을 제대로 이해하고 빠짐없이 처리하는 게 관건이라고 느꼈다.