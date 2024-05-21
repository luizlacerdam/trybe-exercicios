class TV:
    def __init__(self, size) -> None:
        self.__volume = 50
        self.__channel = 1
        self.__size = size
        self.__is_on = False

    def raise_volume(self) -> None:
        if self.__volume < 99:
            self.__volume += 1
    def lower_volume(self) -> None:
        if self.__volume > 0:
            self.__volume -= 1
    def change_channel(self, new_channel) -> None:
        if new_channel >= 99 or new_channel <= 1:
            raise ValueError("Invalid channel")
        else: 
            self.__channel = new_channel
    def toggle_power(self) -> None:
        self.__is_on = not self.__is_on
    