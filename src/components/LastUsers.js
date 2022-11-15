import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function LastUsers() {

  let [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setListUsers(data.users))
      .catch(e => console.log(e))
  }, [])

  return (
    <div>
        <h2>Último usuario agregado</h2>
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Email</th>
          <th>Rol</th>
        </tr>
      </thead>
      <tbody>
        { listUsers.slice((listUsers.length - 6), (listUsers.length - 1)).reverse().map((user, i) => {
          return (
            <tr key={i}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.rol}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
    </div>
  );
}

export default LastUsers;