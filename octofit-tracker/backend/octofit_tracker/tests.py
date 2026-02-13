from django.test import TestCase
from .models import User, Team, Workout, Activity, Leaderboard

class UserModelTest(TestCase):
    def test_create_user(self):
        team = Team.objects.create(name='Test Team')
        user = User.objects.create(username='testuser', email='test@example.com', team=team)
        self.assertEqual(user.username, 'testuser')
        self.assertEqual(user.team.name, 'Test Team')

class WorkoutModelTest(TestCase):
    def test_create_workout(self):
        workout = Workout.objects.create(name='Pushups', description='Do pushups')
        self.assertEqual(workout.name, 'Pushups')

class ActivityModelTest(TestCase):
    def test_create_activity(self):
        team = Team.objects.create(name='Test Team')
        user = User.objects.create(username='testuser', email='test@example.com', team=team)
        workout = Workout.objects.create(name='Pushups', description='Do pushups')
        activity = Activity.objects.create(user=user, workout=workout, duration=30, calories=100)
        self.assertEqual(activity.duration, 30)
        self.assertEqual(activity.calories, 100)

class LeaderboardModelTest(TestCase):
    def test_create_leaderboard(self):
        team = Team.objects.create(name='Test Team')
        user = User.objects.create(username='testuser', email='test@example.com', team=team)
        leaderboard = Leaderboard.objects.create(user=user, points=50)
        self.assertEqual(leaderboard.points, 50)
