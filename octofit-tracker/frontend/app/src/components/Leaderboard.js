import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
      const endpoint = '/api/leaderboard';
      console.log('Fetching from endpoint:', endpoint);
      fetch(endpoint)
        .then((res) => res.json())
        .then((data) => {
          const items = Array.isArray(data) ? data : data.results || [];
          setLeaderboard(items);
          console.log('Fetched leaderboard:', data);
        });
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaderboard.map(entry => (
          <li key={entry.id}>{entry.username}: {entry.points} Punkte</li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
