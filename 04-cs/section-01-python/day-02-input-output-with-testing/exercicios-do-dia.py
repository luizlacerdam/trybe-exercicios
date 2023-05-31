# 01

def vertical_escada_invertida(nome):
    for letra in nome:
        print(nome)
        nome = nome[:-1]


# 02
import random
def scrambled_words():
    lista = ['cuscuz', 'sushi', 'pizza', 'hamburguer', 'churrasco']
    word_chosen = random.choice(lista)
    scrambled_word = "".join(random.sample(word_chosen, len(word_chosen)))
    anwser = ''
    print(scrambled_word)
    tentativas = 0
    while anwser != word_chosen and tentativas < 3:
        anwser = input('Digite a palavra: ')
        tentativas += 1
    
scrambled_words()