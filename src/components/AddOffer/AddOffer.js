import React from 'react';
import Header from '../Shared/Header/Header';
import { useForm } from "react-hook-form";
import './AddOffer.css'
import axios from 'axios';
import Footer from '../Shared/Footer/Footer';

const AddOffer = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://fathomless-everglades-23928.herokuapp.com/offers', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Offer Added Successfully')
                    reset();
                }
            })
    };

    return (
        <div>
            <Header></Header>
            <h2 className='mt-3 text-success'>Add A New Offer</h2>

            <div className='offer-form mt-3 mb-5'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("picture")} placeholder='Place a image link here' />
                    <input {...register("name")} placeholder='Tour Name' />
                    <input {...register("place")} placeholder='Tour Country Name' />
                    <input type="number" {...register("days")} placeholder='Tour days' />
                    <input type="number" {...register("price")} placeholder='Tour price' />
                    <textarea {...register("about")} placeholder='About Tour' />

                    <input type="submit" />
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddOffer;