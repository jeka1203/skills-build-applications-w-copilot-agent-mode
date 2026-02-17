import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
      fetch('/api/workouts')
        .then((res) => res.json())
        .then((data) => {
          const items = Array.isArray(data) ? data : data.results || [];
          setWorkouts(items);
          console.log('Fetched workouts:', data);
        });
  }, []);

  return (
    <div>
      <h2>Workouts</h2>
      <ul>
        {workouts.map(workout => (
          <li key={workout.id}>{workout.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Workouts;
