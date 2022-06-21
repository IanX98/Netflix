from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiOverview, name="api-overview"),
    path('movie-list/', views.movieList, name="movie-list"),
    path('movie-detail/<int:pk>/', views.movieDetail, name="movie-detail")
]
