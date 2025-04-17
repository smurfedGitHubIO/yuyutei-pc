from django.http import HttpResponse
import requests
from bs4 import BeautifulSoup as bs

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

def get_value(request):
    card = "OP11-012"
    return HttpResponse(f'Price of {card}: {get_price(card)}')