# -*- coding: utf-8 -*-
from rest_framework import serializers
from .models import Vin, CouleurVin, Repas, Region

class RegionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Region
        fields = '__all__'

class RepasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Repas
        fields = '__all__'

class CouleurVinSerializer(serializers.ModelSerializer):
    class Meta:
        model = CouleurVin
        fields = '__all__'

class VinSerializer(serializers.ModelSerializer):
    Couleur = CouleurVinSerializer(read_only=True)
    Region = RegionSerializer(read_only=True)

    class Meta:
        model = Vin
        fields = ('id', 'Nom', 'Couleur', 'Region', 'Fruit', 'Personalite')