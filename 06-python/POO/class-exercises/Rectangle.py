class Rectangle:
    def __init__(self, width: int, height: int) -> None:
        self.width = width
        self.height = height
    def calculate_area(self) -> int:
        return self.width * self.height
    def calculate_perimeter(self) -> int:
        return 2 * (self.width + self.height)

rec1 = Rectangle(10, 20)
print(rec1.calculate_area())
print(rec1.calculate_perimeter()) 