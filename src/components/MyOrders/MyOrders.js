import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';
import Header from '../Shared/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const MyOrders = () => {
    const { user } = useAuth()

    const [bookings, setBookings] = useState([])

    useEffect(() => {
        fetch(`https://adventour-server.onrender.com/mybookings/${user?.email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    const handleDelete = (id) => {
        const confirm = window.confirm('If you Delete your data, it will be removed permanently.')
        if (confirm) {
            fetch(`https://adventour-server.onrender.com/mybookings/${id}`, {
                method: "DELETE"
            })
                .then((res) => res.json())
                .then((data) => {


                    if (data.deletedCount) {
                        alert('Deleted successfully.')
                        window.location.reload()

                    }
                });

        }


    };
    return (
        <div>
            <Header></Header>
            <h1>You Booked for  {bookings.length} tours .</h1>
            <div className='m-5 table-responsive'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tour Name</th>
                            <th>Booked By</th>
                            <th>Phone Number</th>
                            <th>Date</th>
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
                                <td>{dt.phone}</td>
                                <td>{dt.date}</td>
                                <td>{dt._id}</td>
                                <td>{dt.status}</td>

                                <button onClick={() => handleDelete(dt._id)} className="btn bg-warning m-2 "><FontAwesomeIcon icon={faTrash} className='text-dark' /> Delete</button>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>

        </div>
    );
};

export default MyOrders;