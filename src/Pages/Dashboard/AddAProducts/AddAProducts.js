import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddAProducts = () => {
    const { register, handleSubmit, reset } = useForm();
   
    const onSubmit = data => {
        console.log(data);
        
        axios.post('https://mighty-garden-13181.herokuapp.com/products', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Products Added Successfully')
                reset();
            }
            
        })
    
    
    }
    return (
        <div className="handleForm">
        <h2 className="text-center text-info my-5 text-uppercase">add a products</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            
        <input type="text" {...register("name")} placeholder="Car Name"/>
        <input {...register("price")} placeholder="Price"/>
        <input {...register("img")} placeholder="Image URL"/>
        <input className="input-btn" type="submit" value="Place Order"/>
        </form>
    </div>
    );
};

export default AddAProducts;