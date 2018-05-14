# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
from .models import Vin, CouleurVin, Repas
from django.http import HttpResponse
from django.core import serializers
from .serializers import VinSerializer, RepasSerializer
from rest_framework.renderers import JSONRenderer

import json

def index(request):
    return render(request, 'vins/index.html', {})

def getVins(request):
    instance = Vin.objects.all()
    serializer = VinSerializer(instance, many=True)
    myjson = JSONRenderer().render(serializer.data)
    return HttpResponse(json.dumps({'data':json.loads(myjson)}))

def getRepas(request, vin):
    instance = Repas.objects.filter(vin__id=vin)
    serializer = RepasSerializer(instance, many=True)
    myjson = JSONRenderer().render(serializer.data)
    
    return HttpResponse(json.dumps({'data':json.loads(myjson)}))