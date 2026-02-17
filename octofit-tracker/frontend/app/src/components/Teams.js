import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('/api/teams')
      .then((res) => res.json())
      .then((data) => {
        const items = Array.isArray(data) ? data : data.results || [];
        setTeams(items);
        console.log('Fetched teams:', data);
      });
  }, []);

  return (
    <div>
      <h2>Teams</h2>
      <ul>
        {teams.map(team => (
          <li key={team.id}>{team.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Teams;
