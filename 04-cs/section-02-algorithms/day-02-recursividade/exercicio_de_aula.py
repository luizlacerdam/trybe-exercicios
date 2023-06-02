# 01


def factorial_sum_recursive(n):
    if n == 0:
        return 0
    else:
        print(n)
        return n + factorial_sum_recursive(n - 1)


factorial_sum_recursive(2)
