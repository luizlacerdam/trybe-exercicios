class Animal:
    def __init__(self, name):
        self.name = name

    def sound(self)-> None:
        print(f'{self.name} sound')
    
class Mammal(Animal):
    def breastfeed(self) -> None:
        print(f'{self.name} is feeding its young')
    
class RunningMixing:
    def run(self, speed: int) -> None:
        print(f'{self.name} is running at {speed} km/h')

class Dog(Mammal, RunningMixing):
    def bark(self) -> None:
        print(f'{self.name} is barking')

class RunningDog(Dog, RunningMixing):
    pass

dog = RunningDog('Rex')
dog.sound()
dog.breastfeed()
dog.bark()
dog.run(10)