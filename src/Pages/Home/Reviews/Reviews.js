import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating'
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://mighty-garden-13181.herokuapp.com/review')
        .then(res =>  res.json())
        .then(data => setReviews(data))
    },[])
    
// handelDelete
const handleDelete = id => {
    const procced = window.confirm('Are you sure you want to remove your review')
    if(procced){
        fetch(`https://mighty-garden-13181.herokuapp.com/review/${id}`, {
        method:'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            alert('Review Removed')
            const remaining = reviews.filter(order => order._id !== id)
            setReviews(remaining)
        }
    })
    }
}
    return (
        <div className="recent-text bg-dark text-white mt-5">
            <h1 className="text-center pb-5 fw-bold text-uppercase">What <span className="text-info"> Our</span> Clients are <span className="text-info">saying</span> ?</h1>
            {reviews.length === 0 ?
                 <Spinner animation="grow" className="d-block mx-auto fs-5 mt-3" />
                :
                <Row xs={1} md={2} className="g-4 container mx-auto">
                {
                    reviews.map(review => <div>
                        <Col>
                        <Card>
                            <Card.Header className="d-flex justify-content-between"> 
                                <div className="w-25">
                                    <img src={review.image} alt="" />
                                </div>
                                <div>      
                                    <Rating ratingValue={review.rating}></Rating>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title><h5 className="fw-bold text-dark">{review.author}</h5></Card.Title>
                                <Card.Text>
                                
                                    <p className="text-muted">{review.content}</p>
                                </Card.Text>

                                <button onClick={() =>handleDelete(review._id)} className="text-info text-decoration-none fw-bold border-0 bg-white">Remove</button>
                            </Card.Body>
                            </Card>
                            
                        </Col>
                    </div>)
                }
                <button 
                    className="load-btn mt-5"
                >Load More</button>
            </Row>}
        </div>
    );
};

export default Reviews;