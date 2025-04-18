from django.http import HttpResponse
import requests
from bs4 import BeautifulSoup as bs
import os

def get_price(card_no):
    card_no = card_no.lower()
    page = requests.get(f'https://yuyu-tei.jp/sell/opc/s/search?search_word={card_no}&rare=&type=&kizu=0')
    lowest = 10000000000000
    
    soup = bs(page.content, 'html.parser')
    for i in soup.find_all(id='card-lits'):
        spans = i.find_all('span')
        strongs = i.find_all('strong')
        
        for j in range(len(spans)):
            if spans[j].contents[0].lower() == card_no:
                lowest = min(lowest, int(strongs[j].contents[0].split()[0].replace(',','')))
    return lowest

def get_value(request, deck):
    base_dir = os.path.dirname(__file__)
    filename = os.path.join(base_dir, f'static/{deck}.deck')
    file = open(filename, "r")
    
    whole_deck = file.read()
    total = 0

    for val in whole_deck.split('\n')[:-1]:
        [amt, card] = val.split('x')
        total += int(amt)*(get_price(card)//4)
    
    return HttpResponse(f'Total price of deck: {total}')