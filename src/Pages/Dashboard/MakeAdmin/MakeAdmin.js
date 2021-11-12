import React, { useState } from 'react';
import { Button} from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://mighty-garden-13181.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                
                    console.log(data);
                
            })

        e.preventDefault()
    }
    return (
        <div>
            <h1 className="text-center my-5 text-uppercase text-info">make an admin</h1>
            <form onSubmit={handleAdminSubmit}>
                <input className="form-control w-50 mx-auto" type="email" placeholder="Email"/>
                <Button 
                style={{padding: '10px 22px',}}
                type="submit" 
                className="btn btn-info my-3 text-uppercase text-light fw-bold"
                onBlur={handleOnBlur}
                >
                    Make Admin</Button>
                    
            </form>
        </div>
    );
};

export default MakeAdmin;