from abc import ABC, abstractmethod

class Employee(ABC):
    def __init__(self, name: str, salary: float) -> None:
        self.name = name
        self.salary = salary
    @abstractmethod
    def calculate_bonus(self) -> float:
        pass

class Developer(Employee):
    def __init__(self, salary: float):
        self.salary = salary
    def calculate_bonus(self) -> float:
        return self.salary * 1.2
    
class Analyst(Employee):
    def __init__(self, salary: float):
        self.salary = salary
    def calculate_bonus(self) -> float:
        return self.salary * 1.3
    
class Manager(Employee):
    def __init__(self, salary: float):
        self.salary = salary
    def calculate_bonus(self) -> float:
        return self.salary * 1.4
    
class Worker(Employee):
    def __init__(self, salary: float):
        self.salary = salary
    def calculate_bonus(self) -> float:
        return self.salary * 1.1
    
def main():
    dev = Developer(1000)
    print(dev.calculate_bonus())
    
    ana = Analyst(1000)
    print(ana.calculate_bonus())


if __name__ == "__main__":
    main()