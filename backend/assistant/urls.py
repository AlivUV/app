from django.urls import include, path
from . import views

urlpatterns = [
    path('gemini/', views.geminiImage, name='asisstantGemini')
]