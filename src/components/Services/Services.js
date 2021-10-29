import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="container my-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.map(service => <div key={service._id} className="col">
                        <div class="card h-100">
                          <img src={service.img} className="card-img-top" alt="..."/>
                          <div className="card-body">
                              <p><i className="fas fa-star text-warning"></i> 8.0 Superb</p>
                            <h5 className="card-title">{service.title}</h5>
                            <p className="text-danger">{service.price}<small className="text-dark">/Per Person</small></p>
                            <button className="btn btn-info">Booking Now</button>
                          </div>
                        </div>
                      </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;