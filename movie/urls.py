from django.urls import path
from .views import Homepage, Homemovies, Detailsmovie

urlpatterns = [
    path('', Homepage.as_view()),
    path('filmes/', Homemovies.as_view()),
    path('filmes/<int:pk>/', Detailsmovie.as_view())
]
