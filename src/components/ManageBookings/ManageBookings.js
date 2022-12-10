import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Header from '../Shared/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenAlt } from '@fortawesome/free-solid-svg-icons'

const ManageBookings = () => {

    const [bookings, setBookings] = useState([])
    useEffect(() => {
        fetch('https://adventour-server.onrender.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    const handleDelete = (id) => {
        const confirm = window.confirm('If Delete data, it will be removed permanently.')
        if (confirm) {
            fetch(`https://adventour-server.onrender.com/bookings/${id}`, {
                method: "DELETE"
            })
                .then((res) => res.json())
                .then((data) => {

                    if (data.deletedCount) {
                        alert('Deleted successfully.')

                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining)
                    }
                });
        }
    };

    const handleUpdate = (id) => {
        const url = `https://adventour-server.onrender.com/bookings/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated Successfully')
                    window.location.reload();
                }
            })
    }


    return (
        <div>
            <Header></Header>
            <div className='m-5 table-responsive'>
                <h2 className='mb-4'>Manage All Bookings</h2>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tour Name</th>
                            <th>Booked By</th>
                            <th>Email</th>
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
                                <td>{dt.email}</td>
                                <td>{dt.date}</td>
                                <td>{dt._id}</td>
                                <td>{dt.status}</td>

                                <button onClick={() => handleUpdate(dt._id)} className="btn bg-warning m-2"><FontAwesomeIcon icon={faPenAlt} className='text-dark' /> Update</button>
                                <button onClick={() => handleDelete(dt._id)} className="btn bg-warning m-2"><FontAwesomeIcon icon={faTrash} className='text-dark' /> Delete</button>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>

        </div>
    );
};

export default ManageBookings;