import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Header from '../Shared/Header/Header';

const ManageBookings = () => {

    const [bookings, setBookings] = useState([])
    useEffect(() => {
        fetch('https://fathomless-everglades-23928.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    const handleDelete = (id) => {
        const confirm = window.confirm('Do you really wants to delete')
        if (confirm) {
            fetch(`https://fathomless-everglades-23928.herokuapp.com/bookings/${id}`, {
                method: "DELETE"
            })
                .then((res) => res.json())
                .then((data) => {


                    if (data.deletedCount) {
                        alert('deleted successfully')

                    }
                });

        }


    };


    return (
        <div>
            <Header></Header>
            <h2>Manage All Bookings</h2>
            <div className='m-5'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tour Name</th>
                            <th>Booked By</th>
                            <th>Email</th>
                            <th>Booking ID</th>
                            <th>Order Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {bookings?.map((dt, index) => (
                        <tbody>
                            <tr>
                                <td>{index}</td>
                                <td>{dt.tourName}</td>
                                <td>{dt.name}</td>
                                <td>{dt.email}</td>
                                <td>{dt._id}</td>
                                <td>{dt.status}</td>

                                <button onClick={() => handleDelete(dt._id)} className="btn bg-warning p-2">Delete</button>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
        </div>
    );
};

export default ManageBookings;