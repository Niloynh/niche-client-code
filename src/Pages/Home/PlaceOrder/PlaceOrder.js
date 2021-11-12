import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './PlaceOrder.css';
import useAuth from '../../../Hooks/useAuth/useAuth'
const PlaceOrder = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user} = useAuth()
    const onSubmit = data => {
        console.log(data);
        
        axios.post('https://mighty-garden-13181.herokuapp.com/orders', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Order Processed successfully')
                reset();
            }
            
        })
    
    
    }
    return (
        <div className="handleForm">
        <h2 className="text-center text-info my-3 text-uppercase">Place Your Order</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h4>User : {user.email}</h4>
        <input type="text" {...register("name")} placeholder="Car Name"/>
        <input type="number" {...register("number")} placeholder="Phone Number"/>
        <input {...register("description")} placeholder="Description"/>
        <input {...register("img")} placeholder="Image URL"/>
        <input className="input-btn" type="submit" value="Place Order"/>
        </form>
    </div>
    );
};

export default PlaceOrder;