import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/users/');
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  users.map((user) => {
    return (
      <li key={user.id}>
        <NavLink to={`/users/${user.id}`}>{user.username}</NavLink>
      </li>
    );
  });

  return (
    <>
      <div>
        <Link to={'/users/purchases'} style={{ textDecoration: 'None' }}>
          <p> Purchase History</p>
        </Link>
      </div>
      <div>
        <Link to={'/users/listings'} style={{ textDecoration: 'None' }}>
          <p> Current Listings</p>
        </Link>
      </div>
    </>
  );
}

export default UsersList;
