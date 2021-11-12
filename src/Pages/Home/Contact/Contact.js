import React from 'react';
import './Contact.css';
import {Col, Row} from 'react-bootstrap';
const Contact = () => {
    return (
    <div>
        <h1 className="text-center service-text my-5 text-uppercase fw-bold">Contact <span className="text-info">Us</span></h1>
        <Row className="row container my-5 mx-auto">
            <Col >
                <div className="contact-text">
                    <p><strong>Office location - </strong>our office consists of three buildings and is located in the heart of the city. You can easily reach us by metro or by land transport.</p>
                </div>
                <div className="contact-text my-5">
                    <p><strong>Monday to Friday : </strong> 9:00 AM to 6:00 PM</p>
                    <p><strong>Saturday : </strong> 9:00 AM to 5:00 PM</p>
                    <p><strong>Sunday:</strong> Closed</p>
                </div> 
                <div className="contact-text my-5">
                    <p><strong>Address : </strong>685 Lane Drive St. California, 33020</p>
                    <p><strong>Phone : </strong> +010 234 7892 34</p>
                    <p><strong>Fax : </strong>+010 435 5798982</p>
                    <p><strong>Email : </strong>Info@medical.com</p>
                </div>
            </Col>
            <Col className="contact-input">
                <input type="text" name="" id="" placeholder="Name" className="form-control"/>
                <input type="Phone or Skype" name="" id="" className="form-control" placeholder="Phone or Skype"/>
                <textarea name="" id="" cols="30" rows="13" className="form-control" placeholder="Message"></textarea>
                <button className="regular-btn">Send message</button>
            </Col>
        </Row>
        </div>
    );
};

export default Contact;