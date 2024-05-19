class Car:
    def identify(self, model: str, brand: str, year: int, color: str) -> None:
        print(
            f"Meu carro é um {model}, da {brand}. "
            f"Ele é do ano {year} e tem a cor {color}."
        )

car1 = Car()

car1.brand = "Toyota"
car1.model = "Corolla"
car1.year = 2019
car1.color = "White"

car1.identify(car1.model, car1.brand, car1.year, car1.color)