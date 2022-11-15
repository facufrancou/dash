import React, { useState, useEffect } from "react";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function BasicExample() {
  let [listProducts, setListProducts] = useState([]);
  let [listSections, setListSections] = useState([]);
  let [listCollections, setListCollections] = useState([]);
  let [listBrands, setListBrands] = useState([]);
  let [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => setListProducts(data.total))
      .catch((e) => console.log(e));
    fetch("/api/sections")
      .then((response) => response.json())
      .then((data) => setListSections(data.total))
      .catch((e) => console.log(e));
    fetch("/api/collections")
      .then((response) => response.json())
      .then((data) => setListCollections(data.total))
      .catch((e) => console.log(e));
    fetch("/api/brands")
      .then((response) => response.json())
      .then((data) => setListBrands(data.total))
      .catch((e) => console.log(e));
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setListUsers(data.total))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="container col-md-12">
      <br />

      <CardGroup>
        <Card>
          <Card.Img variant="top" src={image1} />
          <Card.Body>
            <Card.Title>Productos: {listProducts}</Card.Title>
            <Link to='/products'><Button href="/products" variant="primary">Ver detalle</Button></Link>
          </Card.Body>
        </Card>

        <br />
        <br />
        <br />

        <Card>
          <Card.Img variant="top" src={image3} />
          <Card.Body>
            <Card.Title>Secciones: {listSections}</Card.Title>
            <Link to='/sections'><Button href="/sections" variant="primary">Ver detalle</Button></Link>
          </Card.Body>
        </Card>

        <br />
        <br />
        <br />

        <Card>
          <Card.Img variant="top" src={image3} />
          <Card.Body>
            <Card.Title>Colecciones: {listCollections}</Card.Title>
            <Link to='/collections'><Button href="/collections" variant="primary">Ver detalle</Button></Link>
          </Card.Body>
        </Card>

        <br />
        <br />
        <br />

        <Card>
          <Card.Img variant="top" src={image3} />
          <Card.Body>
            <Card.Title>Marcas: {listBrands}</Card.Title>
            <Link to='/brands'><Button href="/brands" variant="primary">Ver detalle</Button></Link>
          </Card.Body>
        </Card>

        <br />
        <br />
        <br />

        <Card>
          <Card.Img variant="top" src={image2} />
          <Card.Body>
            <Card.Title>Usuarios: {listUsers}</Card.Title>
            <Link to='/users'><Button href="/users" variant="primary">Ver detalle</Button></Link>
          </Card.Body>
        </Card>
      </CardGroup>
      <br />
    </div>
  );
}

export default BasicExample;
