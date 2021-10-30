import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('https://glacial-fjord-55155.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="container my-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.map(service => <div key={service._id} className="col">
                        <div className="card h-100">
                          <img src={service.img} className="card-img-top" alt="..."/>
                          <div className="card-body">
                              <p><i className="fas fa-star text-warning"></i> 8.0 Superb</p>
                            <h5 className="card-title">{service.title}</h5>
                            <p className="text-danger">{service.price}<small className="text-dark">/Per Person</small></p>
                            <Link to={`/myOrder/${service._id}`} >
                            <button className="btn btn-info ms-3">Pleace Ditails</button>
                            </Link>
                            <Link to="/myOrder">
                                <button  className="btn btn-info ms-5">Booking Now</button>
                            </Link>
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