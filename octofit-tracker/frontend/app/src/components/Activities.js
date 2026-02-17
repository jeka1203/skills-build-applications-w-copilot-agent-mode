import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const endpoint = '/api/activities';
    console.log('Fetching from endpoint:', endpoint);
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        const items = Array.isArray(data) ? data : data.results || [];
        setActivities(items);
        console.log('Fetched activities:', data);
      });
  }, []);

  return (
    <div>
      <h2>Aktivitäten</h2>
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>{activity.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Activities;
