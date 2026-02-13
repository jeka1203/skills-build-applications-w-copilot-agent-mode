mode: 'agent'
model: GPT-4.1

# Django App Updates

- Alle Django-Projektdateien befinden sich im Verzeichnis `octofit-tracker/backend/octofit_tracker`.

1. Aktualisiere `settings.py` für die MongoDB-Verbindung und CORS.
2. Aktualisiere `models.py`, `serializers.py`, `urls.py`, `views.py`, `tests.py` und `admin.py`, um die Unterstützung für Benutzer, Teams, Aktivitäten, Leaderboard und Workouts Collections zu gewährleisten.
3. Stelle sicher, dass `/` auf die API zeigt und `api_root` in `urls.py` vorhanden ist. (Siehe <attachments> oben für Dateiinhalte. Du musst die Datei möglicherweise nicht erneut suchen oder lesen.)
