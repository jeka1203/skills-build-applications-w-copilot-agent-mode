import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import { Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 rounded">
        <div className="container-fluid">
          <span className="navbar-brand">Octofit Tracker</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/api/activities">Aktivitäten</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/api/leaderboard">Leaderboard</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/api/teams">Teams</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/api/users">Benutzer</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/api/workouts">Workouts</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/users" element={<Users />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/" element={<div>Willkommen zum Octofit Tracker!</div>} />
      </Routes>
    </div>
  );
}

export default App;
