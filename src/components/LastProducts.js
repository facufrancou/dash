import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function LastProducts() {

  let [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => setListProducts(data.products))
      .catch(e => console.log(e))
  }, [])

  return (
    <div>
        <h2>Últimos productos agregados</h2>
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Precio</th>
          <th>Descuento</th>
          <th>Sección</th>
          <th>Colección</th>
          <th>Marca</th>
        </tr>
      </thead>
      <tbody>
        { listProducts.slice((listProducts.length - 6), (listProducts.length - 1)).reverse().map((product, i) => {
          return (
            <tr key={i}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>$ {product.price}</td>
              <td>{product.discount} %</td>
              <td>{product.section[0]}</td>
              <td>{product.collection[0]}</td>
              <td>{product.brand[0]}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
    </div>
  );
}

export default LastProducts;