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