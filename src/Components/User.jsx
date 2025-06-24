import React from 'react';
import { Link } from 'react-router';
const User = ({user}) => {
    const {name,phone,email,id}=user;
    return (
        <>
           <tr className=''>
            <td className='  py-2 border '>{name}</td>
            <td className='  py-2 border '>{phone}</td>
            <td className='  py-2 border'>{email}</td>
            <td className='  py-2 border '>
                <Link to={`/user/${id}`}><button className='btn px-3 py-2 bg-amber-700'>View</button></Link>
                </td>
            </tr> 
        </>
    );
};

export default User;