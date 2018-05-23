# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
from .models import Vin, CouleurVin, Repas
from django.http import HttpResponse
from django.core import serializers
from .serializers import VinSerializer, RepasSerializer, CouleurVinSerializer
from rest_framework.renderers import JSONRenderer

import json

def index(request):
    instance = CouleurVin.objects.all()
    serializer = CouleurVinSerializer(instance, many=True)
    myjson = JSONRenderer().render(serializer.data)
    data = {'data':json.loads(myjson.decode('utf-8'))}
    return render(request, 'vins/index.html', data)

def repas(request):
    return render(request, 'vins/repas.html', {})

def getVins(request, repas):
    if repas=='-1':
        instance = Vin.objects.all()
    else:
        instance = Vin.objects.filter(Repas=int(repas))
    
    serializer = VinSerializer(instance, many=True)
    myjson = JSONRenderer().render(serializer.data)
    return HttpResponse(json.dumps({'data':json.loads(myjson.decode('utf-8'))}))

def getRepas(request, vin=-1):
    if vin=='-1':
        instance = Repas.objects.all()
    else:
        instance = Repas.objects.filter(vin__id=int(vin))
    serializer = RepasSerializer(instance, many=True)
    myjson = JSONRenderer().render(serializer.data)
    
    return HttpResponse(json.dumps({'data':json.loads(myjson.decode('utf-8'))}))
