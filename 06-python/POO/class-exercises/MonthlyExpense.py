class MonthlyExpense:
    def __init__(self,
                internet,
                grocery,
                _power,
                _water,
                __rent,
                ):
        self.internet = internet
        self.grocery = grocery
        self._power = _power
        self._water = _water
        self.__rent = __rent

    def get_water(self):
        return self._water
    def get_power(self):
        return self._power
    def set_water(self, new_water):
        self._water = new_water
    def set_power(self, new_power):
        self._power = new_power