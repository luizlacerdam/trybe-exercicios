from collections import Counter
class Statistic:
    def __init__(self, data: list) -> None:
        self.__data = data
    def average(self) -> float:
        return sum(self.__data) / len(self.__data)
    def median(self) -> float:
        data = sorted(self.__data)
        n = len(data)
        if n % 2 == 0:
            return (data[n//2] + data[n//2 - 1]) / 2
        else:
            return data[n//2]
    def mode(self) -> float:
        number, _ = Counter(self.numbers).most_common()[0]
        return number