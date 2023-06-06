# 01


def pair_counter(n):
    counter = 0
    num = 1
    while num <= n:
        if num % 2 == 0:
            counter += 1
        num += 1
    return counter


print(pair_counter(3))
