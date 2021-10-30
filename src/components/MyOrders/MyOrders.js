import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';
import Header from '../Shared/Header/Header';

const MyOrders = () => {
    const { user } = useAuth()

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`https://fathomless-everglades-23928.herokuapp.com/myOrders/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleDelete = (id) => {
        fetch(`https://fathomless-everglades-23928.herokuapp.com/myorders/${id}`, {
            method: "DELETE"
        })
            .then((res) => res.json())
            .then((data) => {

                window.confirm('Do you really wants to delete')
                if (data.deletedCount) {
                    alert('deleted successfully')

                }
            });

    };
    return (
        <div>
            <Header></Header>
            <h1>Your Ordered for  {orders.length} tours .</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tour Name</th>
                        <th>Ordered By</th>
                        <th>Phone Number</th>
                        <th>Ordered ID</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {orders?.map((dt, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{dt.tourName}</td>
                            <td>{dt.name}</td>
                            <td>{dt.phone}</td>
                            <td>{dt._id}</td>
                            <button onClick={() => handleDelete(dt._id)} className="btn bg-danger p-2">Delete</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default MyOrders;