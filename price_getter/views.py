from django.http import HttpResponse
from django.template import loader
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

    deck_dct = []

    for val in whole_deck.split('\n')[:-1]:
        [amt, card] = val.split('x')
        price = int(amt)*(get_price(card)//4)
        deck_dct.append({'card_name': card, 'card_price': price})
        total += price
    # template_path = "C:/Users/Justin Clyde/Documents/GitHub/yuyutei-pc/price_getter/templates/price_getter/index.html"
    template = loader.get_template("price_getter/index.html")
    context = {'cardslist': deck_dct}
    print(deck_dct)
    return HttpResponse(template.render(context, request))

# Identify trend price changes
def get_trend(request):
    return 0