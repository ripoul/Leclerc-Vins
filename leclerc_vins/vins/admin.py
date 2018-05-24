# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

# Register your models here.
from .models import Vin, Repas, CouleurVin, Region

admin.site.register(Vin)
admin.site.register(Repas)
admin.site.register(CouleurVin)
admin.site.register(Region)