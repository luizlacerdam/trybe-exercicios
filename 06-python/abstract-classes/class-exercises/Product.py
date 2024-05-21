from abc import ABC, abstractmethod

class Product(ABC):
    def __init__(self, price: float) -> None:
        self.price = price

    @abstractmethod
    def print_price(self) -> None:
        raise NotImplementedError
    
class Book(Product):

    def print_price(self) -> None:
        print(f"Book price: {self.price}")

book = Book(20)
book.print_price()