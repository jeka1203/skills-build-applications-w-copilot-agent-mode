from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from octofit_tracker.models import Team, Activity, Leaderboard, Workout
from django.db import connection

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        User = get_user_model()
        # Lösche alle Daten
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Teams
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')

        # Users (Superhelden)
        users = [
            User.objects.create_user(username='ironman', email='ironman@marvel.com', password='test', team=marvel),
            User.objects.create_user(username='spiderman', email='spiderman@marvel.com', password='test', team=marvel),
            User.objects.create_user(username='batman', email='batman@dc.com', password='test', team=dc),
            User.objects.create_user(username='superman', email='superman@dc.com', password='test', team=dc),
        ]

        # Workouts
        workout1 = Workout.objects.create(name='Pushups', description='Pushups for strength')
        workout2 = Workout.objects.create(name='Running', description='Running for endurance')

        # Activities
        Activity.objects.create(user=users[0], workout=workout1, duration=30, calories=200)
        Activity.objects.create(user=users[1], workout=workout2, duration=45, calories=350)
        Activity.objects.create(user=users[2], workout=workout1, duration=20, calories=150)
        Activity.objects.create(user=users[3], workout=workout2, duration=60, calories=500)

        # Leaderboard
        Leaderboard.objects.create(user=users[0], points=200)
        Leaderboard.objects.create(user=users[1], points=350)
        Leaderboard.objects.create(user=users[2], points=150)
        Leaderboard.objects.create(user=users[3], points=500)


        self.stdout.write(self.style.SUCCESS('Testdaten erfolgreich eingefügt.'))
