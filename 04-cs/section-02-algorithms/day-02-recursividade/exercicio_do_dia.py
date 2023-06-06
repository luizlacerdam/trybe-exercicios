# 01


def pair_counter(n):
    counter = 0
    for num in range(n + 1):
        if num % 2 == 0 and num != 0:
            counter += 1
    return counter


# def pair_counter(n): while loop
#     counter = 0
#     num = 1
#     while num <= n:
#         if num % 2 == 0:
#             counter += 1
#         num += 1
#     return counter


# 02


def conta_pares(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + conta_pares(n - 1)
    else:
        return conta_pares(n - 1)


# 03


def mdc(a, b):
    if b == 0:
        return a
    return mdc(b, a % b)
