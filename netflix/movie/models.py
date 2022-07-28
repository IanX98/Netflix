from django.db import models
from django.utils import timezone


CATEGORIES = (
    ("DRAMA", "Drama"),
    ("SCI-FI", "Ficção Científica"),
    ("COMEDY", "Comédia"),
    ("OTHERS", "Outros"),
)

class Movie(models.Model):
    title = models.CharField(max_length=100)
    thumb = models.ImageField(upload_to='movie_thumbs')
    description = models.TextField(max_length=1000)
    category = models.CharField(max_length=25, choices=CATEGORIES)
    number_views = models.IntegerField(default=0)
    criation_date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title