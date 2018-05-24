# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Region(models.Model):
    Nom = models.CharField(max_length=200)

    def __str__(self):
        return self.Nom

class Repas(models.Model):
    Nom = models.CharField(max_length=200)

    def __str__(self):
        return self.Nom

class CouleurVin(models.Model):
    couleur = models.CharField(max_length=200)
    photo = models.ImageField(upload_to='vins/static/vins/')

    def __str__(self):
        return self.couleur

class Vin(models.Model):
    Nom =  models.CharField(max_length=200)
    Couleur = models.ForeignKey(CouleurVin)
    Repas = models.ManyToManyField(Repas)
    Region = models.ForeignKey(Region)
    
    def __str__(self):
        return "Nom : %s, Couleur : %s"%(self.Nom, self.Couleur)