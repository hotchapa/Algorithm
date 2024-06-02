[E, S, M] = map(int, input().split(" "))
e = 1
s = 1
m = 1
year = 1

while True:
    if (year - E) % 15 == 0 and (year - S) % 28 == 0 and (year - M) % 19 == 0:
        break
    year += 1

print(year)
