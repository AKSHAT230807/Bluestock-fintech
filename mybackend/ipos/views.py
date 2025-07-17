from django.shortcuts import render
from .models import IPO

def ipo_list(request):
    ipos = IPO.objects.all()
    return render(request, 'ipos/ipo_list.html', {'ipos': ipos})