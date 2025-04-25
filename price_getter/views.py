from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render
import requests
from bs4 import BeautifulSoup as bs
import os
from django.core.files.base import ContentFile
import base64
import uuid
from django.conf import settings
import timm
import torch
from PIL import Image

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
    context = {'cardslist': deck_dct, 'total': total}
    print(deck_dct)
    return HttpResponse(template.render(context, request))

# Identify trend price changes
def get_trend(request):
    return 0

from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def capture_image(request):
    base_dir = os.path.dirname(__file__)  # Fix incorrect usage of "file"
    filename = os.path.join(base_dir, 'static/custom_weights.pt')

    model = timm.create_model(model_name='mobilenetv3_small_100.lamb_in1k',
                              checkpoint_path=filename,
                              pretrained=False)  # Set to False if using custom weights
    model.eval()  # Ensure the model is in evaluation mode

    if request.method == 'POST':
        image_data = request.POST.get('image_data')
        if image_data:
            # Decode base64 image
            format, imgstr = image_data.split(';base64,')
            ext = format.split('/')[-1]
            image_data = base64.b64decode(imgstr)

            # Save decoded image to media folder
            file_name = f"{uuid.uuid4().hex}.{ext}"
            file_path = os.path.join(settings.MEDIA_ROOT, file_name)
            os.makedirs(os.path.dirname(file_path), exist_ok=True)

            with open(file_path, "wb") as f:
                f.write(image_data)

            # Open image and convert to RGB (in case it's not)
            image = Image.open(file_path).convert('RGB')

            # Resize and preprocess image
            data_config = timm.data.resolve_model_data_config(model)
            transform = timm.data.create_transform(**data_config, is_training=False)

            # Resize if not handled in transform
            if hasattr(data_config, 'input_size'):
                image = image.resize(data_config['input_size'][1:], Image.BILINEAR)

            input_tensor = transform(image).unsqueeze(0)

            with torch.no_grad():
                output = model(input_tensor)
                top5_probabilities, top5_class_indices = torch.topk(output.softmax(dim=1) * 100, k=5)

            result = [(int(idx), float(prob)) for idx, prob in zip(top5_class_indices[0], top5_probabilities[0])]
            return HttpResponse(str(result))

    return render(request, 'price_getter/camera.html')
