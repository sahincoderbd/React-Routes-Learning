import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const userDetails=useLoaderData();
    
    const {name,email,website,address}=userDetails;
    const {city,street,suite,zipcode}=address;
    return (
        <div className='text-center font-bold  my-5'>
            
            <h2 className='text-2xl text-green-400'>Name: {name}</h2>
            <br />
            <hr />
            <br />
            <p>Email: {email} </p>
            <p>Website:{website} </p>
            <p>Address:{city}, {street} ,{suite} ,{zipcode} </p>
        </div>
    );
};

export default UserDetails;