import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";

function Collections() {

    let [listCollections, setListCollections] = useState([]);
    let [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        fetch('/api/collections')
            .then(response => response.json())
            .then(data => setListCollections(data.collections))
            .catch(e => console.log(e))
        fetch('/api/products')
            .then(response => response.json())
            .then(data => setListProducts(data.productsByCollection))
            .catch(e => console.log(e))
    }, [])

    return (
        <div className="container col-md-6">
        <br />
            <h2>Lista de colecciones</h2>
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
                    {listCollections.map((collection, i) => {
                        if(listProducts[collection.collectionName]){
                            return(
                                <tr key={i}>
                                    <td>{collection.id}</td>
                                    <td>{collection.collectionName}</td>
                                    <td>{listProducts[collection.collectionName]}</td>
                                </tr>
                            )
                        } else {
                            return(
                                <tr key={i}>
                                    <td>{collection.id}</td>
                                    <td>{collection.collectionName}</td>
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

export default Collections;