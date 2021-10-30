import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Shared/Header/Header';
import { useForm } from "react-hook-form";
import './Booking.css'
import useAuth from '../Hooks/useAuth';
import axios from 'axios';

const Booking = () => {
    const { user } = useAuth();
    const [item, setItem] = useState({});
    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/offers/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.email = user?.email
        data.status = 'pending'
        axios.post('http://localhost:5000/bookings', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Booking Successful')
                    reset();
                }
            })
    };

    return (
        <div >
            <Header></Header>
            <div className='mt-3'>
                <h1 className='text-warning'>Book for {item.name} Tour</h1>
                <img className='rounded' src={item.picture} alt="" />
            </div>

            <div className='booking-form mt-3'>
                <h2 className='text-warning'>Booking Form</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("firstName", { required: true, maxLength: 20 })} placeholder='Your Name' />
                    <input {...register("mailling")} placeholder='Your Email / Address' />
                    <textarea {...register("message")} placeholder='Additonal Message' />
                    <input  {...register("phone")} placeholder='Phone' />

                    <input type="submit" />
                </form>
            </div>


        </div>
    );
};

export default Booking;