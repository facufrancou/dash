import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../assets/styles.css';

function EditProduct() {

    let { id } = useParams();

    let [ product, setProduct ] = useState(0)
    let [ listSections, setListSections] = useState([]);
    let [ listCollections, setListCollections] = useState([]);
    let [ listBrands, setListBrands] = useState([]);
    
    useEffect(() => {
        
        fetch(`/api/products/${id}`)
        .then(response => response.json())
        .then(data => setProduct(data.product))
            .catch(e => console.log(e))
        fetch('/api/sections')
                .then(response => response.json())
                .then(data => setListSections(data.sections))
                .catch(e => console.log(e))
                fetch('/api/collections')
                .then(response => response.json())
                .then(data => setListCollections(data.collections))
                .catch(e => console.log(e))
        fetch('/api/brands')
        .then(response => response.json())
        .then(data => setListBrands(data.brands))
        .catch(e => console.log(e))
    }, [])

    let [data, setData] = useState({
        name: product.name,
        section: product.section,
        collection: product.collection,
        brand: product.brand,
        price: product.price,
        discount: product.discount,
        description: product.description,
        image: product.image
    });

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault()
        alert('Nombre: ' + data.name + '\nSección: ' + data.section + '\nColección: ' + data.collection + '\nMarca: ' + data.brand + '\nPrecio: ' + data.price + '\nDescuento: ' + data.discount + '\nDescripción: ' + data.description);
        fetch(`http://localhost:3000/api/products/edit/${product.id}`, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
        
        event.target.reset();
        navigate('/products')
    }

    return (
        <div className='container col-md-6'>
            <br/>

            {/* TÍTULO DE LA VISTA DE CREACIÓN */}
            <h2 className='title-create-edit-form'>Editando el producto: {product.name}</h2>

                {/* FORMULARIO DE CREACIÓN */}
                <Form action={`api/products/edit/${product.id}`} method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>

                    {/* INPUT DEL NOMBRE DEL PRODUCTO */}
                    <Form.Group className="mb-3 group-create-edit-form" controlId="formBasicText">
                        <Form.Label className='label-create-edit-form'>Nombre del producto</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Ej: Teléfono iPhone 13" defaultValue={product.name} onChange={handleInputChange} />
                    </Form.Group>

                    {/* SELECT DEL LA SECCIÓN DEL PRODUCTO */}
                    <Form.Group className="mb-3 group-create-edit-form" controlId="formBasicSelect">
                        <Form.Label className='label-create-edit-form'>Sección del Producto:</Form.Label>
                        <Form.Select name="section" aria-label="Default select example" onChange={handleInputChange}>
                            <option>Elegí una sección:</option>
                            { listSections.map((section, i) => {
                                return <option key={i} value={section.id}>{section.sectionName}</option> 
                            })}
                        </Form.Select>
                    </Form.Group>

                    {/* SELECT DE LA COLECCIÓN DEL PRODUCTO */}
                    <Form.Group className="mb-3 group-create-edit-form" controlId="formBasicSelect">
                        <Form.Label className='label-create-edit-form'>Colección del Producto:</Form.Label>
                        <Form.Select name="collection" aria-label="Default select example" onChange={handleInputChange}>
                            <option>Elegí una colección:</option>
                            { listCollections.map((collection, i) => {
                                return <option key={i} value={collection.id}>{collection.collectionName}</option> 
                            })}
                        </Form.Select>
                    </Form.Group>                    
                    
                    {/* SELECT DE LA MARCA DEL PRODUCTO */}  
                    <Form.Group className="mb-3 group-create-edit-form" controlId="formBasicSelect">
                        <Form.Label className='label-create-edit-form'>Marca del Producto:</Form.Label>
                        <Form.Select name="brand" aria-label="Default select example" onChange={handleInputChange}>
                            <option>Elegí una marca:</option>
                            { listBrands.map((brand, i) => {
                                return <option key={i} value={brand.id}>{brand.brandName}</option> 
                            })}
                        </Form.Select>
                    </Form.Group>

                    {/* INPUT DEL PRECIO DEL PRODUCTO */}
                    <Form.Group className="mb-3 group-create-edit-form" controlId="formBasicText">
                        <Form.Label className='label-create-edit-form'>Precio del producto</Form.Label>
                        <Form.Control type="number" name='price' placeholder="Ej: 12500" defaultValue={product.price} onChange={handleInputChange} />
                    </Form.Group>

                    {/* INPUT DEL DESCUENTO DEL PRODUCTO */}
                    <Form.Group className="mb-3 group-create-edit-form" controlId="formBasicText">
                        <Form.Label className='label-create-edit-form'>Descuento del producto</Form.Label>
                        <Form.Control type="number" name='discount' placeholder="Ej: 10" defaultValue={product.discount} onChange={handleInputChange} />
                    </Form.Group>

                    {/* TEXTAREA DE LA DESCRIPCIÓN DEL PRODUCTO */}
                    <Form.Group className="mb-3 group-create-edit-form" controlId="formBasicText">
                        <Form.Label className='label-create-edit-form'>Descripción del producto</Form.Label>
                        <Form.Control as="textarea" rows={3} name="description" defaultValue={product.description} onChange={handleInputChange} />
                    </Form.Group>

                    {/* INPUT DE LA IMAGEN NUEVA DEL PRODUCTO */}
                    <Form.Group className="mb-3 group-create-edit-form" controlId="formBasicText">
                        <Form.Label className='label-create-edit-form'>Imagen del producto</Form.Label>
                        <div className="div-product-image">
                            <img src={"/img/products/" + product.image} className='productImage-create-edit-form' id="productImage" />
                        </div>
                        <Form.Control type="file" name='image' onChange={handleInputChange} />
                    </Form.Group>

                    {/* BOTONES PARA CREAR UN PRODUCTO */}
                    <Form.Group className="mb-3 group-create-edit-form">
                        <Button type="submit" variant="primary" className='button-create-edit-form'>Editar</Button>
                    </Form.Group>

                </Form>
        </div>
    )
}

export default EditProduct;