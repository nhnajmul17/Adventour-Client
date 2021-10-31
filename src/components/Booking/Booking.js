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
        fetch(`https://fathomless-everglades-23928.herokuapp.com/offers/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.email = user?.email
        data.status = 'pending'
        axios.post('https://fathomless-everglades-23928.herokuapp.com/bookings', data)
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
            <div className='m-3'>
                <h1 className='text-warning'>Book for {item?.name} Tour</h1>
                <img className='rounded' src={item.picture} alt="" />
                <p className='m-5'>{item.about}</p>
                <h3 className='text-info'>For {item.days} days tour you need only ${item.price}</h3>
                <h5>So Don't hesitate book now.</h5>
            </div>

            <div className='booking-form mt-3'>
                <h2 className='text-warning'>Booking Form</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input {...register("name", { required: true, maxLength: 20 })} required defaultValue={user?.displayName} placeholder='Your Name' />
                    <input {...register("mailling")} required defaultValue={user?.email} placeholder='Your Email / Address' />
                    <input {...register("tourName")} required placeholder='Tour place Name' />
                    <textarea {...register("message")} placeholder='Additonal Message' />
                    <input  {...register("phone")} required placeholder='Phone Number' />

                    <input type="submit" />
                </form>
            </div>


        </div>
    );
};

export default Booking;