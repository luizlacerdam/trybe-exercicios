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
    
# 03
def scrambled_words():
    lista = []
    with open('palavras.txt') as file:
        for row in file:
            lista.append(row.strip())
    file.close()
    word_chosen = random.choice(lista)
    scrambled_word = "".join(random.sample(word_chosen, len(word_chosen)))
    anwser = ''
    print(scrambled_word)
    tentativas = 0
    while anwser != word_chosen and tentativas < 3:
        anwser = input('Digite a palavra: ')
        tentativas += 1

# 04
import json
import csv

def calculate_percentage_by_category(book_count_by_category, total_books):
    return [
        [category, num_books / total_books]
        for category, num_books in book_count_by_category.items()
    ]

def write_csv_report(file, header, rows):
    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(rows)


def percent_books():
    categories = {}
    books = []
    with open('books.json') as file:
        books = json.load(file)
   
    for book in books:
        for category in book["categories"]:
           if not categories.get(category):
                categories[category] = 0
        categories[category] += 1
    number_of_books = len(books)
    books_percentage_rows = calculate_percentage_by_category(
        categories, number_of_books
    )
    header = ["categoria", "percentagem"]
    with open("report.csv", "w") as file:
        write_csv_report(file, header, books_percentage_rows)
   
# 05
def fizzbuzz(n):
    return n
