import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
function User() {

    let { id } = useParams();

    let [ user, setUser ] = useState([]);

    useEffect(() => {
        fetch(`/api/users/${id}`)
            .then(response => response.json())
            .then(data => setUser(data.user))
            .catch(e => console.log(e))
    }, [])

    console.log(user);

    return (
        <>
        <br />
        <br />

        <CardGroup>
            
            <div className="products">
        <Card className="container col-md-4">
            <div id='img-product'>
                <Card.Img variant="top" src={"/img/users/" + user.image} />
            </div>
          <Card.Body>
            <Card.Title>ID: {user.id}</Card.Title>
            <Card.Title>Nombre: {user.name} {user.lastName}</Card.Title>
            <Card.Text>Email: {user.email}</Card.Text>
            
          </Card.Body>
        </Card>
        </div>
        </CardGroup>
        </>
    )
}

export default User