import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const [service, setService] = useState({})
    const {bookingId} = useParams();
    useEffect( () => {
        fetch(`https://glacial-fjord-55155.herokuapp.com/services/${bookingId}`)
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
    return (
        <div>
            <div className="container my-5">
                <h1 className="text-center my-5">Your Booking</h1>
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                    <div className="col">
                        <div class="card h-100">
                          <img src={service.img} className="card-img-top" alt="..."/>
                          <div className="card-body">
                              <p><i className="fas fa-star text-warning"></i> 8.0 Superb</p>
                            <h5 className="card-title">{service.title}</h5>
                            <p className="text-danger">{service.price}<small className="text-dark">/Per Person</small></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        </div>
    );
};

export default Booking;