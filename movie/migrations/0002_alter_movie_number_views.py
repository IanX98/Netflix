# Generated by Django 4.0.4 on 2022-06-01 02:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movie', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='number_views',
            field=models.IntegerField(default=0),
        ),
    ]