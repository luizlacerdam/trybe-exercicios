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


print(pair_counter(4))
