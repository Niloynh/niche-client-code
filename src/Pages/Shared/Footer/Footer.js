import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import { faTextHeight } from '@fortawesome/free-solid-svg-icons'


import './Footer.css';


const Footer = () => {
    return (
        <div className="footer-distributed">
            <Container>
                
            <footer >
                <div className="footer-left">

                    <h3><img className="w-50" src="https://i.ibb.co/JrJjhwp/footer-logotype-min.webp" alt="" /></h3>

                    <p className="footer-links">
                        <Link to="/home">Home</Link>
                        ·
                        <Link to="/home">Explore</Link>
                        ·
                        <Link to="/home">My-Orders</Link>
                        ·
                        <Link to="/home">Review</Link>
                        ·					
                        <Link to="/home">About</Link>
                    </p>

                    <p className="footer-company-name">AUTLINES &copy; 2021</p>
                </div>

                <div className="footer-center">

                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span>Dinajpur rajarampur</span> Dinajpur, Bangladesh</p>
                    </div>

                    <div>
                        <i className="fa fa-phone"></i>
                        <p>+8801555125696</p>
                    </div>

                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><Link to="/home">contact@autlines.com</Link></p>
                    </div>

                </div>

                <div className="footer-right">

                    <p className="footer-company-about">
                        <span>About the company</span>
                        Ceipisicing elit sed do eiusmod tempor laboe dolore magna aliqa Ut enim ad minim veniam quis nostrud exercitation ullam co laboris nis aliquip comsecd sed ipsum.
                    </p>

                    <div className="footer-icons">

                        <Link to="/home"><FontAwesomeIcon icon={faAddressBook} /></Link>
                        <Link to="/home"><FontAwesomeIcon icon={faPhoneAlt} /></Link>
                        <Link to="/home"><FontAwesomeIcon icon={faPhoneSquare} /></Link>
                        <Link to="/home"><FontAwesomeIcon icon={faTextHeight}/></Link>
                        
                    </div>

                </div>

                </footer>
            </Container>
        </div>
    );
};

export default Footer;