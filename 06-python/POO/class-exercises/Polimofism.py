class Product:
    def __init__(self, name: str, price :float) -> None:
        self._name = name
        self._price = price

    def get_price(self):
        pass

    def get_description(self):
        pass

    def print_details(self):
        print(f"{self.get_description()} and costs {self.get_price()}")

class Book(Product):
    def __init__(self, author: str, name: str, price: float) -> None:
        self._author = author
        super().__init__(name, price)

    def get_price(self):
        return self._price
    def get_description(self):
        return f"Book {self._name} by {self._author}"

class DVD(Product):
    def __init__(self, name: str, price: float, direction: str) -> None:
        self._direction = direction
        super().__init__(name, price)

    def get_price(self):
        return self._price

    def get_description(self):
        return f"Movie {self._name} by {self._direction}"
    
book = Book("J.K. Rowling", "Harry Potter", 100)
book.print_details()
dvd = DVD("Harry Potter", 200, "J.K. Rowling")
dvd.print_details()