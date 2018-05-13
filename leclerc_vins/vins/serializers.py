# -*- coding: utf-8 -*-
from rest_framework import serializers
from .models import Vin, CouleurVin, Repas

class RepasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Repas
        fields = '__all__'

class CouleurVinSerializer(serializers.ModelSerializer):
    class Meta:
        model = CouleurVin
        fields = '__all__'

class VinSerializer(serializers.ModelSerializer):
    Repas = RepasSerializer(many=True, read_only=True)
    Couleur = CouleurVinSerializer(read_only=True)

    class Meta:
        model = Vin
        fields = ('Nom', 'Repas', 'Couleur')