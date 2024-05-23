from abc import ABC, abstractmethod

class Customer:
    def __init__(self, name: str, phone: str) -> None:
        self.name = name
        self.phone = phone

class Address:
    def __init__(self, street: str, city: str, state: str, number: int) -> None:
        self.street = street
        self.city = city
        self.state = state
        self.number = number

class Deliverable(ABC):
    @abstractmethod
    def delivery(self, customer: Customer, address: Address) -> None:
        pass

class Mail(Deliverable):
    def delivery(self, customer: Customer, address: Address) -> None:
        print(f"Mail sent to {customer.name} at {address.number} {address.street}, {address.city}, {address.state}")
    
class ShipCompany(Deliverable):
    def delivery(self, customer: Customer, address: Address) -> None:
        print(f"Package sent to {customer.name} at {address.number} {address.street}, {address.city}, {address.state}")

def main():
    cust = Customer("John Doe", "123-456-7890")
    addr = Address("1234 Elm St", "Springfield", "IL", 62701)
    
    mail = Mail()
    mail.delivery(cust, addr)
    
    ship = ShipCompany()
    ship.delivery(cust, addr)

if __name__ == "__main__":
    main()