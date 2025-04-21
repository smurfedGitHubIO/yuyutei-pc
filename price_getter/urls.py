from django.urls import path

from . import views

urlpatterns = [
    path("<str:deck>/", views.get_value, name="index"),
    path("trends/", views.get_trend, "index")
]