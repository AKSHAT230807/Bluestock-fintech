from django.urls import path
from . import views

urlpatterns = [
    path('', views.ipo_list, name='ipo_list'),
]