import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";

function Sections() {

    let [listSections, setListSections] = useState([]);
    let [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        fetch('/api/sections')
            .then(response => response.json())
            .then(data => setListSections(data.sections))
            .catch(e => console.log(e))
        fetch('/api/products')
            .then(response => response.json())
            .then(data => setListProducts(data.productsBySection))
            .catch(e => console.log(e))
    }, [])

    return (
        <div className="container col-md-6">
        <br />
            <h2>Lista de secciones</h2>
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
                    {listSections.map((section, i) => {
                        if(listProducts[section.sectionName]){
                            return(
                                <tr key={i}>
                                    <td>{section.id}</td>
                                    <td>{section.sectionName}</td>
                                    <td>{listProducts[section.sectionName]}</td>
                                </tr>
                            )
                        } else {
                            return(
                                <tr key={i}>
                                    <td>{section.id}</td>
                                    <td>{section.sectionName}</td>
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

export default Sections;