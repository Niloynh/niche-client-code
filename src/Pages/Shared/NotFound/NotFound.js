import React from 'react';
import { useHistory } from 'react-router';
import './NotFound.css';

const NotFound = () => {
    const history = useHistory()

    const handleGoBack = () => {
        history.push('/home')
    }
    return (
        <div>
             <img className="error-img" src="https://i.ibb.co/Prvr15H/404.png" alt="" />

             <button onClick={handleGoBack} className="load-btn back-btn">Go Back</button>
        </div>
    );
};

export default NotFound;