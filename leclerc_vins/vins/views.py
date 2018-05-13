# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
from .models import Vin, CouleurVin, Repas
from django.http import HttpResponse
#from django.core import serializers
from .serializers import VinSerializer
from rest_framework.renderers import JSONRenderer

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def getVins(request):
    instance = Vin.objects.all()
    serializer = VinSerializer(instance, many=True)
    return HttpResponse(JSONRenderer().render(serializer.data))

def getRepas(request):
    data = serializers.serialize("json", Repas.objects.all())
    return HttpResponse(data)