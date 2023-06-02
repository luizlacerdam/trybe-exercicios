# 01
lista = [1, 2, 3, 4]


def contains_duplicate(numbers):
    numbers.sort()
    previous_number = "not a number"
    for number in numbers:
        if previous_number == number:
            return True
        previous_number = number

    return False


contains_duplicate(lista)
