from re import M
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Movie
from django.views.generic import TemplateView, ListView


# Create your views here.
class Homepage(TemplateView):
    template_name = "index.html"

class Homefilmes(ListView):
    template_name = "index.html"
    model = Movie
