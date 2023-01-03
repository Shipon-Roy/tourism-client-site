import React, { useEffect, useState } from 'react';

const AllRegister = () => {
    const [register, setRegister] = useState([])
    useEffect( () => {
        fetch('https://tuorism-server-site.onrender.com/register')
        .then(res => res.json())
        .then(data => setRegister(data))
    }, [])

    const handleDelete = id => {
        const deleted = window.confirm('Are you sure, you wanted deleted')
        if(deleted){
            const url = `https://tuorism-server-site.onrender.com/register/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount){
                    alert('Delete successfull')
                    const deletedata = register.filter(reg => reg._id !== id);
                    setRegister(deletedata);
                }
            })
        }
    }

    return (
        <div>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Date</th>
                </tr>
            </thead>
            {register?.map((reg, index) => (
                <tbody>
                    <tr>
                        <th scope="row">{index}</th>
                        <td>{reg.name}</td>
                        <td>{reg.email}</td>
                        <td>{reg.date}</td>
                        <button onClick={ () => handleDelete(reg._id)} className="btn btn-danger p-2 text-danger"><i className="fas fa-trash-alt"></i></button>
                    </tr>
                </tbody>
            ))}
            </table>
        </div>
    );
};

export default AllRegister;