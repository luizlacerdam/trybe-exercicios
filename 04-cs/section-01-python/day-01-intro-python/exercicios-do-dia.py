# 01

def maiorDeDois(n1, n2):
    if n1 > n2:
        print(f'{n1} é o número maior')
    else:
        print(f'{n2} é o número maior')

maiorDeDois(3,2)

#02

list = [0,1,2,3,4,5,6,7,8,9]

def mediaAritimetica(arr):
    total = 0
    for n in arr:
        total += n
    return print(total / len(arr))

mediaAritimetica(list)

#03

def desenho(n):
    linhas = 0
    if(n <= 1):
        return 'insira um numero maior que 1'
    else:
        while linhas < n:
            print(n * '*')
            linhas += 1


desenho(5)

#04

nameList = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]

def maiorString(stringList):
    lastName = ''
    for name in stringList:
        if len(name) > len(lastName):
            lastName = name
    return print(lastName)

maiorString(nameList)