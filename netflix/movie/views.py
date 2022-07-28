from .models import Movie
from django.views.generic import TemplateView, ListView, DetailView


# Create your views here.
class Homepage(TemplateView):
    template_name = "index.html"

class Homemovies(ListView):
    template_name = "index.html"
    model = Movie

class Detailsmovie(DetailView):
    template_name = "index.html"
    model = Movie

