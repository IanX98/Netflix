from django.urls import path
from .views import Homepage, Homemovies, Detailsmovie

app_name = 'movie'

urlpatterns = [
    path('', Homepage.as_view(), name='homepage'),
    path('filmes/', Homemovies.as_view(), name='homemovies'),
    path('filmes/<int:pk>/', Detailsmovie.as_view(), name='detailsmovie')
]
