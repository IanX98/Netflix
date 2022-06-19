from .models import Movie
from django.views.generic import TemplateView, ListView


# Create your views here.
class Homepage(TemplateView):
    template_name = "index.html"

class Homefilmes(ListView):
    template_name = "index.html"
    model = Movie
