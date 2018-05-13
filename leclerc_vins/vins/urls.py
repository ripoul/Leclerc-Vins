from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^getVins', views.getVins, name='getVins'),
    url(r'^getRepas', views.getRepas, name='getRepas'),
]