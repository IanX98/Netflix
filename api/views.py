from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import MovieSerializer
from movie import models
# Create your views here.

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'List':'/movie-list/',
        'Detail View':'/movie-detail/<str:pk>/',
    }
    return Response(api_urls)


@api_view(['GET'])
def movieList(request):
    movies = models.Movie.objects.all()
    serializer = MovieSerializer(movies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def movieDetail(request, pk):
    movies = models.Movie.objects.get(id=pk)
    serializer = MovieSerializer(movies, many=False)
    return Response(serializer.data)