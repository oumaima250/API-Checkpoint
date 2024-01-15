import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../src/App.css';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="user-list-container">
      <h1 className="user-list-title">List of Users</h1>
      <ul className="user-list">
        {listOfUsers.map(user => (
          <li key={user.id} className="user-list-item">{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;