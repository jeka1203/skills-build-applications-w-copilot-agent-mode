import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 rounded">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Octofit Tracker</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Profil</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Teams</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Leaderboard</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Begrüßungskarte */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h1 className="card-title display-5 mb-3">Willkommen bei <span className="text-primary">Octofit Tracker</span>!</h1>
          <p className="card-text">Das React-Frontend läuft erfolgreich. Hier kannst du Aktivitäten loggen, Teams verwalten und deinen Fortschritt verfolgen.</p>
          <a href="#" className="btn btn-primary">Mehr erfahren</a>
        </div>
      </div>

      {/* Beispiel-Tabelle */}
      <h2 className="mb-3">Aktivitätsübersicht</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-primary">
          <tr>
            <th>Datum</th>
            <th>Aktivität</th>
            <th>Dauer (min)</th>
            <th>Aktionen</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2026-02-17</td>
            <td>Laufen</td>
            <td>30</td>
            <td>
              <button className="btn btn-sm btn-outline-primary">Bearbeiten</button>
              <button className="btn btn-sm btn-outline-danger">Löschen</button>
            </td>
          </tr>
          <tr>
            <td>2026-02-16</td>
            <td>Radfahren</td>
            <td>45</td>
            <td>
              <button className="btn btn-sm btn-outline-primary">Bearbeiten</button>
              <button className="btn btn-sm btn-outline-danger">Löschen</button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Beispiel-Formular */}
      <div className="card p-4 mb-4">
        <h3 className="mb-3">Neue Aktivität hinzufügen</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="activityType" className="form-label">Aktivität</label>
            <input type="text" className="form-control" id="activityType" placeholder="z.B. Schwimmen" />
          </div>
          <div className="mb-3">
            <label htmlFor="duration" className="form-label">Dauer (min)</label>
            <input type="number" className="form-control" id="duration" placeholder="z.B. 60" />
          </div>
          <button type="submit" className="btn btn-success">Hinzufügen</button>
        </form>
      </div>

      {/* Beispiel-Link */}
      <a href="#" className="btn btn-link">Zurück zur Übersicht</a>

      {/* Beispiel-Modal (Bootstrap 5) */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Beispiel-Modal</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Dies ist ein Beispiel für ein Bootstrap-Modal.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Schließen</button>
              <button type="button" className="btn btn-primary">Speichern</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
