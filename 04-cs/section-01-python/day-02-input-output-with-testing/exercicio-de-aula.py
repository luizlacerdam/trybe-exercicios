
# 01
def name_letters(): 
    name = input('Digite seu nome: ')

    for letra in name:
        print(letra)

# 02
def numbers_sum():
    numbers = []
    soma = 0
    while len(numbers) < 1:
        numbers = input('Digite os numeros separados por um espaço: ').split()
    for number in numbers:
        if not number.isdigit(): 
            print(f'Erro ao somar valores, {number} é um valor inválido')
        else:
            soma += int(number)
    print(soma)

# 03

def aprovado():
    line_list = []
    with open("arquivo.txt", "r") as file:
        for line in file:
            line_tupla = line.split()
            if int(line_tupla[1]) < 6:
                line_list.append(line_tupla)

    file.close()
    print(line_list)
aprovado()