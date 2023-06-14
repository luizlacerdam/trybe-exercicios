
def software(lista):
    max_count = 0
    streak = 0
    
    for index, value in enumerate(lista):
        if value == 0:
            if streak > max_count:
                max_count = streak
            streak = 0
        elif value == 1:
            streak += 1
            if streak > max_count:
                max_count = streak
        print(value, streak, max_count)
    return max_count


print(software([0, 1, 1, 0, 1, 1, 1, 1, 0]))
