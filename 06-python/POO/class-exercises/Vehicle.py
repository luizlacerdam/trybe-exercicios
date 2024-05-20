class Vehicle:

    def __init__(self, name: str, capacity: int) -> None:
        self.name = name
        self.capacity = capacity

    def  move(self, distance: int):
        return(f'{self.name} carried {self.capacity} people across {distance} kilometers.')

class Car(Vehicle):
    def move(self, distance: int):
        return(f'Car {super().move(distance)}')
        
class Motorcycle(Vehicle):
    def __init__(self, name: str):
        self.name = name
        self.capacity = 2
        