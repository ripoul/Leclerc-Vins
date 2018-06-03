from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^repas', views.repas, name='repas'),
    url(r'^getVins/(?P<repas>[-]{0,1}[0-9]+)$', views.getVins, name='getVins'),
    url(r'^getRepas/(?P<vin>[-]{0,1}[0-9]+)/$', views.getRepas, name='getRepas'),
]