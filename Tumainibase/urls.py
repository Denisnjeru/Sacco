# -*- coding: utf-8 -*-
from django.urls import path
from . import views

app_name= 'Tumainibase'

urlpatterns=[
    path('',views.index, name='index'),
    path('registration/',views.registration, name='registration'),    
        
        
        
        
            ]
