from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import MovieSerializer
# Create your views here.

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'List':'/movie-list/',
        'Detail View':'/movie-detail/<str:pk>/',
        'Create':'/movie-create/',
        'Update':'/movie-update/<str:pk>/',
        'Delete':'/movie-delete/<str:pk>/',
    }
    return Response(api_urls)


@api_view(['GET'])
def movieList(request):
    movies = Movie.objects.all()
    serializer = MovieSerializer(movies, many=True)
    return Response(serializer.data)