from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path("trends/", views.get_trend, name="trends"),
    path("capture/", views.capture_image, name="capture_image" ),
    path("<str:deck>/", views.get_value, name="index"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)