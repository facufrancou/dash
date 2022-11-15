import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";

function Users() {
  const [isLoad, setLoad] = useState(true);
  const [userUrl, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((user) => {
        setUser(user.users);
        setLoad(false);
      });
  }, []);

  if (isLoad) {
    return (
      <div className="container col-md-1">
        <br />
        <br />
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  } else {
    return (
      <div className="container col-md-8">
        <br />
        <h2>Lista de usuarios</h2>
        <br />
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Rol</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {userUrl.map((user, i) => {
              return (
                <tr key={i}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.rol}</td>
                  <td>
                    <Link
                      to={{
                        pathname: `/users/${user.id}`,
                      }}
                    >
                      Ir a Detalle
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Users;
