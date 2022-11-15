import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';

function Product() {

    let { id } = useParams();

    let [ product, setProduct ] = useState(0);

    useEffect(() => {
        fetch(`/api/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data.product))
            .catch(e => console.log(e))
    }, [])

    const handleDeleteChange = (event) => {
        product.deleted = true;
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        alert('Eliminando el producto: \nNombre: ' + product.name + '\nSección: ' + product.section + '\nColección: ' + product.collection + '\nMarca: ' + product.brand + '\nPrecio: ' + product.price + '\nDescuento: ' + product.discount + '\nDescripción: ' + product.description + '\nImagen: ' + product.image);
        fetch(`http://localhost:3000/api/products/delete/${product.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(product),
        })
            .then(response => response.json())
    }

    return (
        <div className="container col-md-12">
                <br />
                <CardGroup>
                    <div className="products">
                        <Card className="container col-md-4" >
                            <div id='img-product'>
                                <Card.Img variant="top" src={"/img/products/" + product.image} /> 
                            </div>
                            <Card.Body>
                                <Card.Title className='text-center'>{product.name}</Card.Title>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>ID: {product.id}</ListGroup.Item>
                                    <ListGroup.Item>Precio: $ {product.price}</ListGroup.Item>
                                    <ListGroup.Item>Descuento: {product.discount} %</ListGroup.Item>
                                    <ListGroup.Item>Descripción: {product.description}</ListGroup.Item>
                                    <ListGroup.Item>Sección: {product.section}</ListGroup.Item>
                                    <ListGroup.Item>Colección: {product.collection}</ListGroup.Item>
                                    <ListGroup.Item>Marca: {product.brand}</ListGroup.Item>
                                    <ListGroup.Item>Eliminado: {product.deleted === true ? 'Sí' : 'No'}</ListGroup.Item>
                                </ListGroup>
                                <br/>
                                <Link to={{
                                    pathname:`/products/edit/${product.id}`,
                                }}><Button variant="primary" className='btn-edit'>Editar producto</Button></Link>
                                <br/>
                                <br/>
                                <form action={`/products/edit/${product.id}?_method=DELETE`} method="POST" class="form-delete" onSubmit={handleSubmit}>
                                    <Button variant="primary" type='submit' onChange={handleDeleteChange}>Eliminar producto</Button>
                                </form>
                            </Card.Body>
                        </Card>
                           
                    </div>
                </CardGroup>
        <br/>
        <br />
        </div>
    )
}
export default Product