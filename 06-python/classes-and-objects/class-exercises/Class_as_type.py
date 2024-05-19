class Motorcycle:
    def __init__(self, max_speed: int) -> None:
        self.max_speed = max_speed

class Truck:
    def __init__(self, max_speed) -> None:
        self.max_speed = max_speed


def print_max_speed(obj: object) -> None:
    if not  isinstance(obj, Motorcycle):
        raise TypeError("obj must be an instance of Motocycle")
    else:
        print(obj.max_speed)


cg_150 = Motorcycle("120 km/h")
yamaha_R1 = Motorcycle("300 km/h")
ford_C_2042 = Truck("140 km/h")

print_max_speed(cg_150)
print_max_speed(ford_C_2042)