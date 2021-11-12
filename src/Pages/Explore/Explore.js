import React, {useState, useEffect} from 'react';
import { Card, Col, Row, Spinner, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Explore = () => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        fetch('https://mighty-garden-13181.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <div  className="recent-text bg-dark text-white">
                <h1 className="text-center">RECENT <span className="text-info">CARS</span></h1>
                <p className="text-center w-50 mx-auto text-muted p-text">We have shared some pictures of the cars we have brought this year on our website. I hope you will like to see who you are interested in taking from our work.</p>
            </div>

          {products.length  === 0 ?
            <Button variant="primary"  className="d-block mx-auto fs-5 mt-3" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
          :
              <Row xs={1} md={3} className="recent-car g-4 container mx-auto mb-5">
            {
                products.map(product => <div
                key={product._id}
                >
                <Col className="css-card">
                    <Card>
                        <Card.Img variant="top" src={product.img} />
                        <Card.Body>
                        <Card.Title><h5 className="fw-bold ">{product.name}</h5></Card.Title>
                        <Card.Text>
                            <p className="fw-bold text-info">${product.price}</p>
                        </Card.Text>
                        <Link to="/placeOrder"><button className="regular-btn">purchase</button></Link>
                        </Card.Body>
                    </Card>
                    </Col>

                </div>)
            }
        </Row>}
        </div>
    );
};

export default Explore;