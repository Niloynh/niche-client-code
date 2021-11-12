import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const UserReview = () => {
    const { register, handleSubmit, reset } = useForm();
   
    const onSubmit = data => {
        console.log(data);
        
        axios.post('https://mighty-garden-13181.herokuapp.com/review', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Thanks for giving us review')
                reset();
            }
            
        })
    
    
    }
    return (
        <div className="handleForm">
        <h2 className="text-center text-info my-5 text-uppercase">Please give us Your feedback</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="my-5">
           
        <input className="form-control w-50 mx-auto fw-bold" {...register("image")} placeholder="Image URL"/>

        <input className="form-control w-50 mx-auto" type="text" {...register("author")} placeholder="Author Name"/>
        
        <textarea cols="30" rows="10" className="f fst-italic form-control w-50 mx-auto my-3" {...register("content")} placeholder="Review Content"/>
        
        <input className="form-control w-50 mx-auto" type="number" {...register("rating")} placeholder="Rating"/>

        <input className="input-btn w-50 mx-auto" type="submit" value="Review Now"/>
        </form>
    </div>
    );
};

export default UserReview;