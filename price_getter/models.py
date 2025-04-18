from django.db import models

# Create your models here.
class Card(models.Model):

    def __init__(self, name, set_number, card_number, price):
        self.name = name
        self.set = set_number
        self.number = card_number
        self.price = price
    
    def __str__(self):
        return self.name