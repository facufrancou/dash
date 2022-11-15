import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";

import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
import "../assets/styles.css";
import { Form } from "react-bootstrap";

function Products() {
  let [isLoad, setLoad] = useState(true);
  let [listProducts, setListProducts] = useState([]);
  let [products, setProducts] = useState([]);
  let [busqueda, setBusqueda] = useState("");

  const peticionGet = async () => {
    await fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        setListProducts(data.products);
        setProducts(data.products);
        setLoad(false);
      })
      .catch((e) => console.log(e));
  };

  const searchRealTime = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    let resultadosBusqueda = listProducts.filter((elemento) => {
      if (
        elemento.brand
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento.description
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
          elemento.name
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setProducts(resultadosBusqueda);
  };

  useEffect(() => {
    peticionGet();
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
      <div className="container col-md-12">
        <br />
        <br />
        <InputGroup className="container mb-4" onChange={searchRealTime}>
          <InputGroup.Text value={busqueda}>
            Buscar un producto:
          </InputGroup.Text>
          <Form.Control aria-label="First name" />
        </InputGroup>
        <div className="container col-md-2">
          <Link
            to={{
              pathname: `/products/create`,
            }}
            className="link-button-create"
          >
            <Button variant="primary">Crear Producto</Button>
          </Link>
        </div>
        <h2>Lista de productos</h2>
        <br />
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Marca</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Descuento</th>
              <th>Descripción</th>
              <th>En Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => {
              return (
                <tr key={i}>
                  <td>{product.id}</td>
                  <td>{product.brand}</td>
                  <td>{product.name}</td>
                  <td>$ {product.price}</td>
                  <td>{product.discount} %</td>
                  <td>{product.description}</td>
                  <td className="deleted">
                    {product.deleted === true ? "No" : "Sí"}
                  </td>
                  <td>
                    <Link
                      to={{
                        pathname: `/products/${product.id}`,
                      }}
                    >
                      Ver detalle
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
export default Products;
