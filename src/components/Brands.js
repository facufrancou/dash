import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import '../assets/styles.css'

function Brands() {

  let [listBrands, setListBrands] = useState([]);
  let [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        fetch('/api/brands')
          .then(response => response.json())
          .then(data => setListBrands(data.brands))
          .catch(e => console.log(e))
        fetch('/api/products')
          .then(response => response.json())
          .then(data => setListProducts(data.productsByBrand))
          .catch(e => console.log(e))
    }, [])

    return (
        <div className="container col-md-6">
        <br />
            <h2>Lista de marcas</h2>
            <br />
            <Table striped>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Total de productos</th>
                    </tr>
                </thead>
                <tbody>
                    {listBrands.map((brand, i) => {
                        if(listProducts[brand.brandName]){
                            return(
                                <tr key={i}>
                                    <td>{brand.id}</td>
                                    <td>{brand.brandName}</td>
                                    <td>{listProducts[brand.brandName]}</td>
                                </tr>
                            )
                        } else {
                            return(
                                <tr key={i}>
                                    <td>{brand.id}</td>
                                    <td>{brand.brandName}</td>
                                    <td>0</td>
                                </tr>
                            )
                        }
                    })}
                </tbody>
            </Table>
      </div>
    )
}

export default Brands;