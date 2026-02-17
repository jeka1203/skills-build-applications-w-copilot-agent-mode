import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      const endpoint = '/api/users';
      console.log('Fetching from endpoint:', endpoint);
      fetch(endpoint)
        .then((res) => res.json())
        .then((data) => {
          const items = Array.isArray(data) ? data : data.results || [];
          setUsers(items);
          console.log('Fetched users:', data);
        });
  }, []);

  return (
    <div>
      <h2>Benutzer</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
