import React, { useEffect, useState } from 'react';

const Order = () => {
    const [orders, setOrders] = useState([]);
    useEffect( () => {
        fetch('https://tuorism-server-site.onrender.com/order')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])
    const handleDelete = id => {
        const sure = window.confirm('Are you sure, you want to delete')
        if(sure){
            const url = `https://tuorism-server-site.onrender.com/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
                .then(data => {
                    if(data.deletedCount){
                        alert('Delete successfull')
                        const singledata = orders.filter(order => order._id !== id);
                        setOrders(singledata);
                    }
            })
        }
    }
    return (
        <div className="container my-5">
            <h1 className="text-center">All Order</h1>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Place</th>
                <th scope="col">Date</th>
                </tr>
            </thead>
            {orders?.map((ord, index) => (
                <tbody>
                    <tr>
                        <th scope="row">{index}</th>
                        <td>{ord.name}</td>
                        <td>{ord.email}</td>
                        <td>{ord.place}</td>
                        <td>{ord.date}</td>
                        <button onClick={ () => handleDelete(ord._id)} className="btn btn-danger p-2 text-danger"><i className="fas fa-trash-alt"></i></button>
                    </tr>
                </tbody>
            ))}
            </table>
        </div>
    );
};

export default Order;