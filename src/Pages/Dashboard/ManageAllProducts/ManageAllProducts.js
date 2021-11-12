import React, { useEffect, useState } from 'react';
import { Spinner, Button, Row, Col, Card } from 'react-bootstrap';

const ManageAllProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://mighty-garden-13181.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
// handelDelete
const handleDelete = id => {
    const procced = window.confirm('Are you sure you want to remove your Order')
    if(procced){
        fetch(`https://mighty-garden-13181.herokuapp.com/products/${id}`, {
        method:'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            alert('Your Products has been Removed')
            const remaining = products.filter(product => product._id !== id)
            setProducts(remaining)
        }
    })
    }
}
    return (
        <div>
            <h2 className="mt-5 text-uppercase text-info text-center">Manage all products</h2>
            {products.length === 0 ?
                 <Spinner animation="grow" className="d-block mx-auto fs-5 mt-3" />
                :
                <Row xs={1} md={2} className="g-4 container mx-auto my-3">
                {
                    products.map(product => <div>
                        <Col>
                        <Card>
                            <Card.Header className="d-flex justify-content-between"> 
                            
                            <Card.Img variant="top" src={product.img} />
                                 
                            </Card.Header>
                            <Card.Body>
                                <Card.Title><h5 className="fw-bold text-dark">{product.name}</h5></Card.Title>
                                <Card.Text>
                                
                                    <p className="text-muted">{product.price}</p>
                                </Card.Text>

                                <button onClick={() =>handleDelete(product._id)} className="text-info text-decoration-none fw-bold border-0 bg-white">Remove</button>
                            </Card.Body>
                            </Card>
                            
                        </Col>
                    </div>)
                }
            </Row>}
        </div>
    );
};

export default ManageAllProducts;