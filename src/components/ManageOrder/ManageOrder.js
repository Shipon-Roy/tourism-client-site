import React, { useEffect, useState } from 'react';
import AllRegister from '../AllRegister/AllRegister';

const ManageOrder = () => {
    const [orders, setOrders] = useState([])
    useEffect( () => {
        fetch('https://tuorism-server-site.onrender.com/services')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])

    const handleDelete = (id) => {
        const sure = window.confirm('Are you sure, you want to delete')
        if(sure){
            const url = `https://tuorism-server-site.onrender.com/services/${id}`;
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
        <div>
            <div className="container my-5">
                <h3 className="text-center">All Register</h3>
                <div className="my-5">
                <AllRegister></AllRegister>
                </div>
                <h3 className="my-5 text-center">Manage All Order</h3>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        orders.map(order => <div key={order._id} className="col">
                        <div className="card h-100">
                          <img src={order.img} className="card-img-top" alt="..."/>
                          <div className="card-body">
                              <p><i className="fas fa-star text-warning"></i> 8.0 Superb</p>
                            <h5 className="card-title">{order.title}</h5>
                            <p className="text-danger">{order.price}<small className="text-dark">/Per Person</small></p>
                            
                            <button onClick={ () => handleDelete(order._id)} className="btn btn-danger">DELETE</button>
                          </div>
                        </div>
                      </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageOrder;<h1>This is Manage Order</h1>