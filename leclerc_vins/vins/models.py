# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Repas(models.Model):
    Nom = models.CharField(max_length=200)

    def __str__(self):
        return self.Nom

class CouleurVin(models.Model):
    couleur = models.CharField(max_length=200)

    def __str__(self):
        return self.couleur

class Vin(models.Model):
    Nom =  models.CharField(max_length=200)
    Couleur = models.ForeignKey(CouleurVin)
    Repas = models.ManyToManyField(Repas)
    """photo = models.ImageField(upload_to='chat/static/pp/', default='chat/static/pp/pp.jpeg')"""
    
    def __str__(self):
        return "Nom : %s, Couleur : %s"%(self.Nom, self.Couleur)