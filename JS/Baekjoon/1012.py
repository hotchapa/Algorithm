def dfs(y, x):
    if y < 0 or y >= m or x < 0 or x >= n:
        return False
    if arr[y][x] == 1:
        arr[y][x] = -1
        dfs(y + 1, x)
        dfs(y, x + 1)
        dfs(y - 1, x)
        dfs(y, x - 1)
        return True
    return False


t = int(input())
for _ in range(t):
    n, m, k = map(int, input().split())
    arr = [[0] * n for _ in range(m)]
    cnt = 0
    for _ in range(k):
        x, y = map(int, input().split())
        arr[y][x] = 1

    for y in range(m):
        for x in range(n):
            if dfs(y, x) == True:
                cnt += 1

    print(cnt)
