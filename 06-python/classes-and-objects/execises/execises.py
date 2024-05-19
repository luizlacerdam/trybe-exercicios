values = [1, 2, 3, 4, 5]

def add_values(values):
    return sum(values)

animals = ["cachorro", "gato", "elefante", "girafa"]
char = "g"

result = ["gato", "girafa"]

def get_from_the_first_letter(list, char):
    return [list for list in list if list[0] == char]

class Book:
    def __init__(self) -> None:
        self.title = "Python for Dummies"
        self.author = "John Doe"
        self.pages = 320

class Car:
    def __init__(self) -> None:
        self.speed = 100
        self.model = "Uno"
        self.year = 2020
    def speed_up(self):
        self.speed += 10
    def speed_down(self):
        self.speed -= 10
    def __str__(self) -> str:
        return f"Model: {self.model} - Year: {self.year} - Speed: {self.speed}"