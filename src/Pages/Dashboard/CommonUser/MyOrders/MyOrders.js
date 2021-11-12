import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const MyOrders = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('https://mighty-garden-13181.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    // handelDelete
const handleDelete = id => {
    const procced = window.confirm('Are you sure you want to remove your Order')
    if(procced){
        fetch(`https://mighty-garden-13181.herokuapp.com/orders/${id}`, {
        method:'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            alert('Your Order has been Removed')
            const remaining = orders.filter(order => order._id !== id)
            setOrders(remaining)
        }
    })
    }
}
    return (
        <div>
            <h2 className="my-5 text-uppercase text-info text-center">My Order</h2>
            <Container>
            <Row xs={1} md={2} className="g-4 mb-3">
                {
                    orders.map(order => 
                        <Col>
                        <Card className="w-75 h-auto mx-auto">
                    <Card.Img variant="top" src={order.img}  />
                    <Card.Body>
                    <Card.Title><h5 className="text-uppercase my-3">Ordered Car: {order.name}</h5></Card.Title>
                    <Card.Text>
                        <h5 className="text-info">Contact: {order.number}</h5>
                    </Card.Text>
                    <button onClick={() =>handleDelete(order._id)} className="text-info fs-5 text-decoration-none fw-bold border-0 bg-white">Remove</button>
                    </Card.Body>
                </Card>
                </Col>

                    )
                }
            </Row>
            </Container>
        </div>
    );
};

export default MyOrders;