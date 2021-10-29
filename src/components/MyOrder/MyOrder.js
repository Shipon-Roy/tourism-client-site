import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Booking from './Booking/Booking';

const MyOrder = () => {
    const [service, setService] = useState({})
    const {bookingId} = useParams();
    useEffect( () => {
        fetch(`https://glacial-fjord-55155.herokuapp.com/services/${bookingId}`)
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
    return (
        <div>
            <h1>{service.title}</h1>
            <h1>This is MyOrder{bookingId}</h1>
        </div>
    );
};

export default MyOrder;<h1>This is MyOrder</h1>