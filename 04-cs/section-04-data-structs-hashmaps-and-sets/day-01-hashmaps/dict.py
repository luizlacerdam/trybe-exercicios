# ex 5
{x: 2 * x for x in range(3, 21)}


# {'h': 1, 'e': 1, 'l': 2, 'o': 1}
# aabbaaccbb
# {'a': 4, 'b': 4, 'c': 2}
def string_counter(string):
    counts = dict.fromkeys(string, 0)
    for char in string:
        counts.update({char: counts[char] + 1})
    return counts
