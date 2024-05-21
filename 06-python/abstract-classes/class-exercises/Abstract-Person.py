from abc import ABC, abstractmethod

class Person(ABC):
    @abstractmethod
    def print_role(self):
        pass

class Seller(Person):

    def print_role(self):
        print("Seller")

class Manager(Person):

    def print_role(self):
        print("Manager")

seller = Seller()
seller.print_role()
manager = Manager()
manager.print_role()
