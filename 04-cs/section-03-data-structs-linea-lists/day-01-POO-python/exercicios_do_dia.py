# 01


class TV:
    def __init__(self, tamanho):
        self.__canal = 1
        self.__volume = 50
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__volume > 0:
            self.__volume -= 1

    def mudar_canal(self, canal):
        if canal > 0 and canal < 99:
            raise ValueError("Canal inválido")
        self.__canal = canal

    def ligar_desligar(self):
        self.__ligada = not self.__ligada

    @property
    def canal(self):
        return self.__canal

    @property
    def volume(self):
        return self.__volume

    @property
    def tamanho(self):
        return self.__tamanho

    @property
    def ligada(self):
        return self.__ligada


tv = TV(42)

# 02


class estatistica:
    def __init__(self, lista):
        self.__lista = lista

    def media(self):
        return sum(self.__lista) / len(self.__lista)

    def mediana(self):
        lista_ordenada = sorted(self.__lista)
        tamanho = len(self.__lista)
        if tamanho % 2 == 0:
            mediana = (
                lista_ordenada[int(tamanho / 2)] + lista_ordenada[int(tamanho / 2) - 1]
            ) / 2
        else:
            mediana = lista_ordenada[int(tamanho / 2)]
        return mediana

    def moda(self):
        lista_ordenada = sorted(self.__lista)
        tamanho = len(self.__lista)
        if tamanho % 2 == 0:
            moda = (
                lista_ordenada[int(tamanho / 2)] + lista_ordenada[int(tamanho / 2) - 1]
            ) / 2
        else:
            moda = lista_ordenada[int(tamanho / 2)]
        return moda
