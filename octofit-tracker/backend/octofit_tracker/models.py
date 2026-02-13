
from django.db import models
from django.contrib.auth.models import AbstractUser
from bson import ObjectId
from djongo import models as djongo_models



class Team(models.Model):
    id = djongo_models.ObjectIdField(primary_key=True, default=ObjectId, editable=False)
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class User(AbstractUser):
    id = djongo_models.ObjectIdField(primary_key=True, default=ObjectId, editable=False)
    email = models.EmailField(unique=True)
    team = djongo_models.ForeignKey('Team', on_delete=models.DO_NOTHING, null=True, blank=True)


class Workout(models.Model):
    id = djongo_models.ObjectIdField(primary_key=True, default=ObjectId, editable=False)
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name


class Activity(models.Model):
    id = djongo_models.ObjectIdField(primary_key=True, default=ObjectId, editable=False)
    user = djongo_models.ForeignKey('User', on_delete=models.DO_NOTHING)
    workout = djongo_models.ForeignKey('Workout', on_delete=models.DO_NOTHING)
    duration = models.PositiveIntegerField(help_text='Duration in minutes')
    calories = models.PositiveIntegerField()
    timestamp = models.DateTimeField(auto_now_add=True)


class Leaderboard(models.Model):
    id = djongo_models.ObjectIdField(primary_key=True, default=ObjectId, editable=False)
    user = djongo_models.OneToOneField('User', on_delete=models.DO_NOTHING)
    points = models.PositiveIntegerField(default=0)
